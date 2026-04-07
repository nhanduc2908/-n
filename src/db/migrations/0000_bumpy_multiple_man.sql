CREATE TABLE `attendance` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`ma_sv` text NOT NULL,
	`ho_ten` text NOT NULL,
	`lop` text NOT NULL,
	`so_tiet_nghi` integer,
	`tong_tiet` integer,
	`ti_le` text,
	`thang` text,
	`created_at` integer
);
--> statement-breakpoint
CREATE TABLE `classes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`ma_lop` text NOT NULL,
	`ten_lop` text NOT NULL,
	`si_so` integer,
	`giang_vien` text,
	`nam` integer,
	`created_at` integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX `classes_ma_lop_unique` ON `classes` (`ma_lop`);--> statement-breakpoint
CREATE TABLE `grades` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`ma_sv` text NOT NULL,
	`ho_ten` text NOT NULL,
	`lop` text NOT NULL,
	`mon_hoc` text NOT NULL,
	`diem_cc` real,
	`diem_gk` real,
	`diem_ck` real,
	`diem_tb` real,
	`ket_qua` text,
	`created_at` integer
);
--> statement-breakpoint
CREATE TABLE `schedules` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`mon_hoc` text NOT NULL,
	`lop` text NOT NULL,
	`thu` text,
	`tiet` text,
	`phong` text,
	`giang_vien` text,
	`created_at` integer
);
--> statement-breakpoint
CREATE TABLE `students` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`ma_sv` text NOT NULL,
	`ho_ten` text NOT NULL,
	`ngay_sinh` text,
	`gioi_tinh` text,
	`lop` text,
	`email` text,
	`sdt` text,
	`dia_chi` text,
	`created_at` integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX `students_ma_sv_unique` ON `students` (`ma_sv`);--> statement-breakpoint
CREATE TABLE `subjects` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`ma_mh` text NOT NULL,
	`ten_mh` text NOT NULL,
	`so_tin` integer,
	`giang_vien` text,
	`so_tiet` integer,
	`created_at` integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX `subjects_ma_mh_unique` ON `subjects` (`ma_mh`);--> statement-breakpoint
CREATE TABLE `teachers` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`ma_gv` text NOT NULL,
	`ho_ten` text NOT NULL,
	`hoc_vi` text,
	`chuyen_nganh` text,
	`mon` text,
	`email` text,
	`sdt` text,
	`created_at` integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX `teachers_ma_gv_unique` ON `teachers` (`ma_gv`);--> statement-breakpoint
CREATE TABLE `tuition` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`ma_sv` text NOT NULL,
	`ho_ten` text NOT NULL,
	`lop` text NOT NULL,
	`hocky` text,
	`so_tin` integer,
	`don_gia` real,
	`so_tien` real,
	`trang_thai` text,
	`ngay_dong` text,
	`created_at` integer
);
