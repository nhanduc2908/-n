import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const students = sqliteTable("students", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  maSV: text("ma_sv").notNull().unique(),
  hoTen: text("ho_ten").notNull(),
  ngaySinh: text("ngay_sinh"),
  gioiTinh: text("gioi_tinh"),
  lop: text("lop"),
  email: text("email"),
  sdt: text("sdt"),
  diaChi: text("dia_chi"),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

export const teachers = sqliteTable("teachers", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  maGV: text("ma_gv").notNull().unique(),
  hoTen: text("ho_ten").notNull(),
  hocVi: text("hoc_vi"),
  chuyenNganh: text("chuyen_nganh"),
  mon: text("mon"),
  email: text("email"),
  sdt: text("sdt"),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

export const classes = sqliteTable("classes", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  maLop: text("ma_lop").notNull().unique(),
  tenLop: text("ten_lop").notNull(),
  siSo: integer("si_so"),
  giangVien: text("giang_vien"),
  nam: integer("nam"),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

export const subjects = sqliteTable("subjects", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  maMH: text("ma_mh").notNull().unique(),
  tenMH: text("ten_mh").notNull(),
  soTin: integer("so_tin"),
  giangVien: text("giang_vien"),
  soTiet: integer("so_tiet"),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

export const schedules = sqliteTable("schedules", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  monHoc: text("mon_hoc").notNull(),
  lop: text("lop").notNull(),
  thu: text("thu"),
  tiet: text("tiet"),
  phong: text("phong"),
  giangVien: text("giang_vien"),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

export const grades = sqliteTable("grades", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  maSV: text("ma_sv").notNull(),
  hoTen: text("ho_ten").notNull(),
  lop: text("lop").notNull(),
  monHoc: text("mon_hoc").notNull(),
  diemCC: real("diem_cc"),
  diemGK: real("diem_gk"),
  diemCK: real("diem_ck"),
  diemTB: real("diem_tb"),
  ketQua: text("ket_qua"),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

export const attendance = sqliteTable("attendance", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  maSV: text("ma_sv").notNull(),
  hoTen: text("ho_ten").notNull(),
  lop: text("lop").notNull(),
  soTietNghi: integer("so_tiet_nghi"),
  tongTiet: integer("tong_tiet"),
  tiLe: text("ti_le"),
  thang: text("thang"),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

export const tuition = sqliteTable("tuition", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  maSV: text("ma_sv").notNull(),
  hoTen: text("ho_ten").notNull(),
  lop: text("lop").notNull(),
  hocky: text("hocky"),
  soTin: integer("so_tin"),
  donGia: real("don_gia"),
  soTien: real("so_tien"),
  trangThai: text("trang_thai"),
  ngayDong: text("ngay_dong"),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});