<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index()
    {
        $employees = Employee::with('department')->paginate(10);

        return view('employees.index', compact('employees'));
    }

    public function create()
    {
        return view('employees.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'position' => ['required', 'string', 'max:255'],
        ]);

        Employee::create($validated);

        return redirect()
            ->route('employees.index')
            ->with('success', 'Thêm nhân viên thành công!');
    }
}
