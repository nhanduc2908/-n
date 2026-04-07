# Bài thực hành Laravel (Model, Migration, Controller, Blade, CRUD)

## Bài 1: Tạo Model Employee
```bash
php artisan make:model Employee
```

File: `app/Models/Employee.php`

## Bài 2: Model + Migration Department
```bash
php artisan make:model Department -m
php artisan migrate
```

Migration mẫu:
```php
Schema::create('departments', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->text('description')->nullable();
    $table->timestamps();
});
```

## Bài 3: Model + Controller
```bash
php artisan make:model Employee -c
```

## Bài 4: Tạo View
Tạo `resources/views/employees/index.blade.php`.

## Bài 5-6: Hiển thị dữ liệu + kiểm tra rỗng
Dùng `Employee::all()` và `@forelse`.

## Bài 7: Layout
Tạo `resources/views/layouts/master.blade.php` và dùng `@extends`.

## Bài 8: Component
```bash
php artisan make:component Alert
```

## Bài 9: CRUD hoàn chỉnh
```bash
php artisan make:model Employee -cr
```
Route:
```php
Route::resource('employees', EmployeeController::class);
```

## Bài 10: Quan hệ Model
- `Employee belongsTo Department`
- `Department hasMany Employee`

## Bài 11: Pagination
```php
$employees = Employee::paginate(10);
```

## Bài 12: Dashboard
Thống kê `count()` và danh sách mới `latest()->take(5)`.

## Bài 13: ORM vs SQL
- ORM: `Employee::where('position', 'Dev')->get();`
- SQL: `SELECT * FROM employees WHERE position = 'Dev';`

## Bài 14: Thiết kế hệ thống
- Model: Student, Class, Subject
- Quan hệ: `Student belongsTo Class`, `Student belongsToMany Subject`

## Luồng chạy
`Route -> Controller -> Model -> Database -> View (Blade)`
