"use client";

import { useState } from "react";

export default function Home() {
  const [activeMenu, setActiveMenu] = useState("Sinh Viên");

  // Modal/Dialog states
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [showTeacherModal, setShowTeacherModal] = useState(false);
  const [showClassModal, setShowClassModal] = useState(false);
  const [showSubjectModal, setShowSubjectModal] = useState(false);
  const [showGradeModal, setShowGradeModal] = useState(false);
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);

  // State for filtering and sorting grades
  const [gradeFilter, setGradeFilter] = useState("Tất cả");
  const [gradeSort, setGradeSort] = useState("diemTB-desc");

  // Edit mode states
  const [editingStudent, setEditingStudent] = useState<any>(null);
  const [editingTeacher, setEditingTeacher] = useState<any>(null);
  const [editingClass, setEditingClass] = useState<any>(null);
  const [editingSubject, setEditingSubject] = useState<any>(null);
  const [editingGrade, setEditingGrade] = useState<any>(null);
  const [editingAttendance, setEditingAttendance] = useState<any>(null);
  const [editingSchedule, setEditingSchedule] = useState<any>(null);
  const [editingTuition, setEditingTuition] = useState<any>(null);

  // Form data states
  const [studentForm, setStudentForm] = useState({
    maSV: "", hoTen: "", ngaySinh: "", gioiTinh: "Nam", lop: "", email: "", sdt: "", diaChi: ""
  });
  const [teacherForm, setTeacherForm] = useState({
    maGV: "", hoTen: "", hocVi: "TS", chuyenNganh: "", mon: "", email: "", sdt: ""
  });
  const [classForm, setClassForm] = useState({
    maLop: "", tenLop: "", siSo: 0, giangVien: "", nam: new Date().getFullYear()
  });
  const [subjectForm, setSubjectForm] = useState({
    maMH: "", tenMH: "", soTin: 3, giangVien: "", soTiet: 45
  });
  const [gradeForm, setGradeForm] = useState({
    maSV: "", monHoc: "", diemCC: 0, diemGK: 0, diemCK: 0
  });
  const [attendanceForm, setAttendanceForm] = useState({
    maSV: "", lop: "", soTietNghi: 0, tongTiet: 30, thang: `${new Date().getMonth() + 1}/${new Date().getFullYear()}`
  });

  const menuItems = [
    { icon: "🏠", label: "Dashboard", href: "#" },
    { icon: "🎓", label: "Sinh Viên", href: "#" },
    { icon: "📚", label: "Lớp Học", href: "#" },
    { icon: "📖", label: "Môn Học", href: "#" },
    { icon: "👨‍🏫", label: "Giảng Viên", href: "#" },
    { icon: "📝", label: "Điểm Danh", href: "#" },
    { icon: "📊", label: "Điểm Số", href: "#" },
    { icon: "📅", label: "Lịch Học", href: "#" },
    { icon: "🎒", label: "Chương Trình", href: "#" },
    { icon: "📜", label: "Bằng Cấp", href: "#" },
    { icon: "💰", label: "Học Phí", href: "#" },
    { icon: "📄", label: "Hồ Sơ", href: "#" },
    { icon: "⚙️", label: "Cài Đặt", href: "#" },
    { icon: "❓", label: "Trợ Giúp", href: "#" },
  ];

  const schedules = [
    { stt: 1, monHoc: "Lập Trình Cơ Bản", lop: "CNTT2024", thu: "Thứ 2", tiet: "1-3", phong: "A101", giangVien: "TS. Nguyễn Văn An" },
    { stt: 2, monHoc: "Cấu Trúc Dữ Liệu", lop: "CNTT2024", thu: "Thứ 3", tiet: "4-6", phong: "A102", giangVien: "TS. Trần Thị Linh" },
    { stt: 3, monHoc: "Cơ Sở Dữ Liệu", lop: "CNTT2023", thu: "Thứ 4", tiet: "1-3", phong: "A103", giangVien: "TS. Lê Văn Minh" },
    { stt: 4, monHoc: "Mạng Máy Tính", lop: "CNTT2023", thu: "Thứ 5", tiet: "4-6", phong: "A104", giangVien: "TS. Phạm Thị Hoa" },
    { stt: 5, monHoc: "Lập Trình Web", lop: "CNTT2024", thu: "Thứ 6", tiet: "7-9", phong: "A105", giangVien: "TS. Hoàng Văn Đức" },
    { stt: 6, monHoc: "Công Nghệ Phần Mềm", lop: "CNTT2024", thu: "Thứ 7", tiet: "1-3", phong: "A106", giangVien: "TS. Vũ Thị Mai" },
    { stt: 7, monHoc: "Hệ Điều Hành", lop: "CNTT2023", thu: "Thứ 2", tiet: "4-6", phong: "A107", giangVien: "TS. Đặng Văn Tùng" },
    { stt: 8, monHoc: "An Toàn Thông Tin", lop: "CNTT2024", thu: "Thứ 3", tiet: "7-9", phong: "A108", giangVien: "TS. Bùi Thị Lan" },
    { stt: 9, monHoc: "Trí Tuệ Nhân Tạo", lop: "CNTT2023", thu: "Thứ 4", tiet: "7-9", phong: "A109", giangVien: "PGS.TS. Ngô Văn Hải" },
    { stt: 10, monHoc: "Big Data", lop: "CNTT2024", thu: "Thứ 5", tiet: "1-3", phong: "A110", giangVien: "TS. Trịnh Thị Thu" },
    { stt: 11, monHoc: "Kế Toán Tài Chính", lop: "KT2024", thu: "Thứ 2", tiet: "1-3", phong: "B101", giangVien: "TS. Lý Văn Khoa" },
    { stt: 12, monHoc: "Kế Toán Quản Trị", lop: "KT2024", thu: "Thứ 3", tiet: "4-6", phong: "B102", giangVien: "TS. Đỗ Thị Hạnh" },
    { stt: 13, monHoc: "Thuế Và Luật Thuế", lop: "KT2024", thu: "Thứ 4", tiet: "1-3", phong: "B103", giangVien: "TS. Phí Văn Long" },
    { stt: 14, monHoc: "Kiểm Toán", lop: "KT2024", thu: "Thứ 5", tiet: "4-6", phong: "B104", giangVien: "TS. Nguyễn Thị Trang" },
    { stt: 15, monHoc: "Tài Chính Doanh Nghiệp", lop: "KT2024", thu: "Thứ 6", tiet: "1-3", phong: "B105", giangVien: "TS. Trần Văn Toàn" },
  ];

  const scheduleData = [
    { stt: 1, monHoc: "Lập Trình Cơ Bản", lop: "CNTT2024", thu: "Thứ 2", tiet: "1-3", phong: "A101", giangVien: "TS. Nguyễn Văn An" },
    { stt: 2, monHoc: "Cấu Trúc Dữ Liệu", lop: "CNTT2024", thu: "Thứ 3", tiet: "4-6", phong: "A102", giangVien: "TS. Trần Thị Linh" },
    { stt: 3, monHoc: "Cơ Sở Dữ Liệu", lop: "CNTT2023", thu: "Thứ 4", tiet: "1-3", phong: "A103", giangVien: "TS. Lê Văn Minh" },
    { stt: 4, monHoc: "Mạng Máy Tính", lop: "CNTT2023", thu: "Thứ 5", tiet: "4-6", phong: "A104", giangVien: "TS. Phạm Thị Hoa" },
    { stt: 5, monHoc: "Lập Trình Web", lop: "CNTT2024", thu: "Thứ 6", tiet: "7-9", phong: "A105", giangVien: "TS. Hoàng Văn Đức" },
    { stt: 6, monHoc: "Công Nghệ Phần Mềm", lop: "CNTT2024", thu: "Thứ 7", tiet: "1-3", phong: "A106", giangVien: "TS. Vũ Thị Mai" },
    { stt: 7, monHoc: "Hệ Điều Hành", lop: "CNTT2023", thu: "Thứ 2", tiet: "4-6", phong: "A107", giangVien: "TS. Đặng Văn Tùng" },
    { stt: 8, monHoc: "An Toàn Thông Tin", lop: "CNTT2024", thu: "Thứ 3", tiet: "7-9", phong: "A108", giangVien: "TS. Bùi Thị Lan" },
    { stt: 9, monHoc: "Trí Tuệ Nhân Tạo", lop: "CNTT2023", thu: "Thứ 4", tiet: "7-9", phong: "A109", giangVien: "PGS.TS. Ngô Văn Hải" },
    { stt: 10, monHoc: "Big Data", lop: "CNTT2024", thu: "Thứ 5", tiet: "1-3", phong: "A110", giangVien: "TS. Trịnh Thị Thu" },
    { stt: 11, monHoc: "Kế Toán Tài Chính", lop: "KT2024", thu: "Thứ 2", tiet: "1-3", phong: "B101", giangVien: "TS. Lý Văn Khoa" },
    { stt: 12, monHoc: "Kế Toán Quản Trị", lop: "KT2024", thu: "Thứ 3", tiet: "4-6", phong: "B102", giangVien: "TS. Đỗ Thị Hạnh" },
    { stt: 13, monHoc: "Thuế Và Luật Thuế", lop: "KT2024", thu: "Thứ 4", tiet: "1-3", phong: "B103", giangVien: "TS. Phí Văn Long" },
    { stt: 14, monHoc: "Kiểm Toán", lop: "KT2024", thu: "Thứ 5", tiet: "4-6", phong: "B104", giangVien: "TS. Nguyễn Thị Trang" },
    { stt: 15, monHoc: "Tài Chính Doanh Nghiệp", lop: "KT2024", thu: "Thứ 6", tiet: "1-3", phong: "B105", giangVien: "TS. Trần Văn Toàn" },
  ];

  const [scheduleList, setScheduleList] = useState(scheduleData);
  const [scheduleForm, setScheduleForm] = useState({
    monHoc: "", lop: "", thu: "Thứ 2", tiet: "", phong: "", giangVien: ""
  });

const [tuitionData, setTuitionData] = useState([
    { stt: 1, maSV: "SV001", hoTen: "Nguyễn Minh Tuấn", lop: "CNTT2024", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-15" },
    { stt: 2, maSV: "SV002", hoTen: "Trần Thị Hương", lop: "CNTT2024", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-16" },
    { stt: 3, maSV: "SV003", hoTen: "Phạm Thị Mai", lop: "CNTT2024", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-14" },
    { stt: 4, maSV: "SV004", hoTen: "Lê Văn Hùng", lop: "CNTT2024", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-17" },
    { stt: 5, maSV: "SV005", hoTen: "Vũ Thị Lan", lop: "CNTT2024", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-18" },
    { stt: 6, maSV: "SV006", hoTen: "Đặng Văn Minh", lop: "CNTT2024", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-19" },
    { stt: 7, maSV: "SV007", hoTen: "Bùi Thị Hồng", lop: "CNTT2024", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-20" },
    { stt: 8, maSV: "SV008", hoTen: "Ngô Quốc Trung", lop: "CNTT2024", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-21" },
    { stt: 9, maSV: "SV009", hoTen: "Trịnh Thị Thu", lop: "CNTT2024", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-22" },
    { stt: 10, maSV: "SV010", hoTen: "Lý Hải Bảo", lop: "CNTT2024", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-23" },
    { stt: 11, maSV: "SV011", hoTen: "Đỗ Thị Ngọc", lop: "CNTT2024", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-24" },
    { stt: 12, maSV: "SV012", hoTen: "Phí Văn Đức", lop: "CNTT2024", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-25" },
    { stt: 13, maSV: "SV013", hoTen: "Nguyễn Thị Yến", lop: "CNTT2024", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Chưa đóng", ngayDong: "-" },
    { stt: 14, maSV: "SV014", hoTen: "Võ Minh Quân", lop: "CNTT2024", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-26" },
    { stt: 15, maSV: "SV015", hoTen: "Trần Văn Khôi", lop: "CNTT2024", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-27" },
    { stt: 16, maSV: "SV016", hoTen: "Lê Đình Phong", lop: "CNTT2023", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-15" },
    { stt: 17, maSV: "SV017", hoTen: "Hoàng Đức Long", lop: "CNTT2023", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-16" },
    { stt: 18, maSV: "SV018", hoTen: "Lê Thị Hà", lop: "CNTT2023", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-17" },
    { stt: 19, maSV: "SV019", hoTen: "Phạm Văn Hiếu", lop: "CNTT2023", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Chưa đóng", ngayDong: "-" },
    { stt: 20, maSV: "SV020", hoTen: "Hoàng Thị Diễm", lop: "CNTT2023", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-18" },
    { stt: 21, maSV: "SV021", hoTen: "Nguyễn Văn Hùng", lop: "CNTT2023", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-19" },
    { stt: 22, maSV: "SV022", hoTen: "Trần Thị Phương", lop: "CNTT2023", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-20" },
    { stt: 23, maSV: "SV023", hoTen: "Lê Văn Toàn", lop: "CNTT2023", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-21" },
    { stt: 24, maSV: "SV024", hoTen: "Phạm Thị Chi", lop: "CNTT2023", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-22" },
    { stt: 25, maSV: "SV025", hoTen: "Vũ Văn Dũng", lop: "CNTT2023", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-23" },
    { stt: 26, maSV: "SV026", hoTen: "Bùi Thị Giao", lop: "CNTT2023", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-24" },
    { stt: 27, maSV: "SV027", hoTen: "Đặng Văn Lâm", lop: "CNTT2023", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-25" },
    { stt: 28, maSV: "SV028", hoTen: "Ngô Thị Hạnh", lop: "CNTT2023", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-26" },
    { stt: 29, maSV: "SV029", hoTen: "Trịnh Văn Tuấn", lop: "CNTT2023", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Chưa đóng", ngayDong: "-" },
    { stt: 30, maSV: "SV030", hoTen: "Lý Thị Hường", lop: "CNTT2023", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-27" },
    { stt: 31, maSV: "SV031", hoTen: "Đỗ Văn Khoa", lop: "KT2024", hocky: "Học Kỳ 1 2024-2025", soTien: 14000000, trangThai: "Đã đóng", ngayDong: "2024-08-15" },
    { stt: 32, maSV: "SV032", hoTen: "Phí Thị Liên", lop: "KT2024", hocky: "Học Kỳ 1 2024-2025", soTien: 14000000, trangThai: "Đã đóng", ngayDong: "2024-08-16" },
    { stt: 33, maSV: "SV033", hoTen: "Nguyễn Văn Thành", lop: "KT2024", hocky: "Học Kỳ 1 2024-2025", soTien: 14000000, trangThai: "Đã đóng", ngayDong: "2024-08-17" },
    { stt: 34, maSV: "SV034", hoTen: "Trần Thị Ngọc", lop: "KT2024", hocky: "Học Kỳ 1 2024-2025", soTien: 14000000, trangThai: "Đã đóng", ngayDong: "2024-08-18" },
    { stt: 35, maSV: "SV035", hoTen: "Lê Văn Bảo", lop: "KT2024", hocky: "Học Kỳ 1 2024-2025", soTien: 14000000, trangThai: "Chưa đóng", ngayDong: "-" },
    { stt: 36, maSV: "SV036", hoTen: "Phạm Thị Oanh", lop: "KT2024", hocky: "Học Kỳ 1 2024-2025", soTien: 14000000, trangThai: "Đã đóng", ngayDong: "2024-08-19" },
    { stt: 37, maSV: "SV037", hoTen: "Hoàng Văn Đạt", lop: "KT2024", hocky: "Học Kỳ 1 2024-2025", soTien: 14000000, trangThai: "Đã đóng", ngayDong: "2024-08-20" },
    { stt: 38, maSV: "SV038", hoTen: "Vũ Thị Thảo", lop: "KT2024", hocky: "Học Kỳ 1 2024-2025", soTien: 14000000, trangThai: "Đã đóng", ngayDong: "2024-08-21" },
    { stt: 39, maSV: "SV039", hoTen: "Đặng Văn Sơn", lop: "KT2024", hocky: "Học Kỳ 1 2024-2025", soTien: 14000000, trangThai: "Đã đóng", ngayDong: "2024-08-22" },
    { stt: 40, maSV: "SV040", hoTen: "Bùi Thị Huyền", lop: "KT2024", hocky: "Học Kỳ 1 2024-2025", soTien: 14000000, trangThai: "Đã đóng", ngayDong: "2024-08-23" },
    { stt: 41, maSV: "SV041", hoTen: "Ngô Văn Phong", lop: "QTKD2024", hocky: "Học Kỳ 1 2024-2025", soTien: 14500000, trangThai: "Đã đóng", ngayDong: "2024-08-15" },
    { stt: 42, maSV: "SV042", hoTen: "Trịnh Thị Yến", lop: "QTKD2024", hocky: "Học Kỳ 1 2024-2025", soTien: 14500000, trangThai: "Đã đóng", ngayDong: "2024-08-16" },
    { stt: 43, maSV: "SV043", hoTen: "Lý Hải Nam", lop: "QTKD2024", hocky: "Học Kỳ 1 2024-2025", soTien: 14500000, trangThai: "Đã đóng", ngayDong: "2024-08-17" },
    { stt: 44, maSV: "SV044", hoTen: "Đỗ Thị Hương", lop: "QTKD2024", hocky: "Học Kỳ 1 2024-2025", soTien: 14500000, trangThai: "Đã đóng", ngayDong: "2024-08-18" },
    { stt: 45, maSV: "SV045", hoTen: "Phí Văn Minh", lop: "QTKD2024", hocky: "Học Kỳ 1 2024-2025", soTien: 14500000, trangThai: "Đã đóng", ngayDong: "2024-08-19" },
    { stt: 46, maSV: "SV046", hoTen: "Nguyễn Thị Trang", lop: "QTKD2024", hocky: "Học Kỳ 1 2024-2025", soTien: 14500000, trangThai: "Chưa đóng", ngayDong: "-" },
    { stt: 47, maSV: "SV047", hoTen: "Trần Văn Đức", lop: "QTKD2024", hocky: "Học Kỳ 1 2024-2025", soTien: 14500000, trangThai: "Đã đóng", ngayDong: "2024-08-20" },
    { stt: 48, maSV: "SV048", hoTen: "Lê Thị Thủy", lop: "QTKD2024", hocky: "Học Kỳ 1 2024-2025", soTien: 14500000, trangThai: "Đã đóng", ngayDong: "2024-08-21" },
    { stt: 49, maSV: "SV049", hoTen: "Phạm Văn Tùng", lop: "QTKD2024", hocky: "Học Kỳ 1 2024-2025", soTien: 14500000, trangThai: "Đã đóng", ngayDong: "2024-08-22" },
    { stt: 50, maSV: "SV050", hoTen: "Hoàng Thị Ngọc", lop: "QTKD2024", hocky: "Học Kỳ 1 2024-2025", soTien: 14500000, trangThai: "Đã đóng", ngayDong: "2024-08-23" },
    { stt: 51, maSV: "SV051", hoTen: "Vũ Văn Cường", lop: "TCNH2024", hocky: "Học Kỳ 1 2024-2025", soTien: 15500000, trangThai: "Đã đóng", ngayDong: "2024-08-15" },
    { stt: 52, maSV: "SV052", hoTen: "Bùi Thị Nga", lop: "TCNH2024", hocky: "Học Kỳ 1 2024-2025", soTien: 15500000, trangThai: "Đã đóng", ngayDong: "2024-08-16" },
    { stt: 53, maSV: "SV053", hoTen: "Đặng Văn Hải", lop: "TCNH2024", hocky: "Học Kỳ 1 2024-2025", soTien: 15500000, trangThai: "Đã đóng", ngayDong: "2024-08-17" },
    { stt: 54, maSV: "SV054", hoTen: "Ngô Thị Thu", lop: "TCNH2024", hocky: "Học Kỳ 1 2024-2025", soTien: 15500000, trangThai: "Đã đóng", ngayDong: "2024-08-18" },
    { stt: 55, maSV: "SV055", hoTen: "Trịnh Văn Hòa", lop: "TCNH2024", hocky: "Học Kỳ 1 2024-2025", soTien: 15500000, trangThai: "Chưa đóng", ngayDong: "-" },
    { stt: 56, maSV: "SV056", hoTen: "Lý Thị Hoa", lop: "TCNH2024", hocky: "Học Kỳ 1 2024-2025", soTien: 15500000, trangThai: "Đã đóng", ngayDong: "2024-08-19" },
    { stt: 57, maSV: "SV057", hoTen: "Đỗ Văn Hùng", lop: "TCNH2024", hocky: "Học Kỳ 1 2024-2025", soTien: 15500000, trangThai: "Đã đóng", ngayDong: "2024-08-20" },
    { stt: 58, maSV: "SV058", hoTen: "Phí Thị Mai", lop: "TCNH2024", hocky: "Học Kỳ 1 2024-2025", soTien: 15500000, trangThai: "Đã đóng", ngayDong: "2024-08-21" },
    { stt: 59, maSV: "SV059", hoTen: "Nguyễn Văn Tiến", lop: "TCNH2024", hocky: "Học Kỳ 1 2024-2025", soTien: 15500000, trangThai: "Đã đóng", ngayDong: "2024-08-22" },
    { stt: 60, maSV: "SV060", hoTen: "Trần Thị Hạnh", lop: "TCNH2024", hocky: "Học Kỳ 1 2024-2025", soTien: 15500000, trangThai: "Đã đóng", ngayDong: "2024-08-23" },
  ]);

  const [tuition, setTuition] = useState(tuitionData);

  // State for dynamic data
  const [students, setStudents] = useState([
    // CNTT2024 - 15 sinh viên
    { stt: 1, maSV: "SV001", hoTen: "Nguyễn Minh Tuấn", ngaySinh: "2004-03-12", gioiTinh: "Nam", lop: "CNTT2024", email: "minhtuan@edu.vn", sdt: "0901234567", diaChi: "Hà Nội" },
    { stt: 2, maSV: "SV002", hoTen: "Trần Thị Hương", ngaySinh: "2004-05-20", gioiTinh: "Nữ", lop: "CNTT2024", email: "huongtr@edu.vn", sdt: "0902345678", diaChi: "TP.HCM" },
    { stt: 3, maSV: "SV003", hoTen: "Phạm Thị Mai", ngaySinh: "2004-01-25", gioiTinh: "Nữ", lop: "CNTT2024", email: "maipham@edu.vn", sdt: "0903456789", diaChi: "Hải Phòng" },
    { stt: 4, maSV: "SV004", hoTen: "Lê Văn Hùng", ngaySinh: "2004-07-18", gioiTinh: "Nam", lop: "CNTT2024", email: "hungle@edu.vn", sdt: "0904567890", diaChi: "Đà Nẵng" },
    { stt: 5, maSV: "SV005", hoTen: "Vũ Thị Lan", ngaySinh: "2004-09-08", gioiTinh: "Nữ", lop: "CNTT2024", email: "lanvu@edu.vn", sdt: "0905678901", diaChi: "Cần Thơ" },
    { stt: 6, maSV: "SV006", hoTen: "Đặng Văn Minh", ngaySinh: "2004-04-22", gioiTinh: "Nam", lop: "CNTT2024", email: "minhdang@edu.vn", sdt: "0906789012", diaChi: "Hà Nam" },
    { stt: 7, maSV: "SV007", hoTen: "Bùi Thị Hồng", ngaySinh: "2004-11-30", gioiTinh: "Nữ", lop: "CNTT2024", email: "hongbui@edu.vn", sdt: "0907890123", diaChi: "Nam Định" },
    { stt: 8, maSV: "SV008", hoTen: "Ngô Quốc Trung", ngaySinh: "2004-02-14", gioiTinh: "Nam", lop: "CNTT2024", email: "trungngo@edu.vn", sdt: "0908901234", diaChi: "Thái Bình" },
    { stt: 9, maSV: "SV009", hoTen: "Trịnh Thị Thu", ngaySinh: "2004-06-05", gioiTinh: "Nữ", lop: "CNTT2024", email: "thutrinh@edu.vn", sdt: "0909012345", diaChi: "Ninh Bình" },
    { stt: 10, maSV: "SV010", hoTen: "Lý Hải Bảo", ngaySinh: "2004-08-19", gioiTinh: "Nam", lop: "CNTT2024", email: "baoly@edu.vn", sdt: "0910123456", diaChi: "Thanh Hóa" },
    { stt: 11, maSV: "SV011", hoTen: "Đỗ Thị Ngọc", ngaySinh: "2004-12-01", gioiTinh: "Nữ", lop: "CNTT2024", email: "ngocdo@edu.vn", sdt: "0911234567", diaChi: "Nghệ An" },
    { stt: 12, maSV: "SV012", hoTen: "Phí Văn Đức", ngaySinh: "2004-03-28", gioiTinh: "Nam", lop: "CNTT2024", email: "ducphi@edu.vn", sdt: "0912345678", diaChi: "Hà Tĩnh" },
    { stt: 13, maSV: "SV013", hoTen: "Nguyễn Thị Yến", ngaySinh: "2004-10-15", gioiTinh: "Nữ", lop: "CNTT2024", email: "yenn@edu.vn", sdt: "0913456789", diaChi: "Quảng Bình" },
    { stt: 14, maSV: "SV014", hoTen: "Võ Minh Quân", ngaySinh: "2004-05-09", gioiTinh: "Nam", lop: "CNTT2024", email: "quanvo@edu.vn", sdt: "0914567890", diaChi: "Quảng Trị" },
    { stt: 15, maSV: "SV015", hoTen: "Trần Văn Khôi", ngaySinh: "2004-07-25", gioiTinh: "Nam", lop: "CNTT2024", email: "khoitran@edu.vn", sdt: "0915678901", diaChi: "Huế" },

    // CNTT2023 - 15 sinh viên
    { stt: 16, maSV: "SV016", hoTen: "Lê Đình Phong", ngaySinh: "2003-08-15", gioiTinh: "Nam", lop: "CNTT2023", email: "phongle@edu.vn", sdt: "0916789012", diaChi: "Đà Nẵng" },
    { stt: 17, maSV: "SV017", hoTen: "Hoàng Đức Long", ngaySinh: "2003-11-08", gioiTinh: "Nam", lop: "CNTT2023", email: "longho@edu.vn", sdt: "0917890123", diaChi: "Huế" },
    { stt: 18, maSV: "SV018", hoTen: "Lê Thị Hà", ngaySinh: "2003-09-12", gioiTinh: "Nữ", lop: "CNTT2023", email: "hale@edu.vn", sdt: "0918901234", diaChi: "Quảng Nam" },
    { stt: 19, maSV: "SV019", hoTen: "Phạm Văn Hiếu", ngaySinh: "2003-01-05", gioiTinh: "Nam", lop: "CNTT2023", email: "hieupham@edu.vn", sdt: "0919012345", diaChi: "Quảng Ngãi" },
    { stt: 20, maSV: "SV020", hoTen: "Hoàng Thị Diễm", ngaySinh: "2003-07-25", gioiTinh: "Nữ", lop: "CNTT2023", email: "diemho@edu.vn", sdt: "0920123456", diaChi: "Bình Định" },
    { stt: 21, maSV: "SV021", hoTen: "Nguyễn Văn Hùng", ngaySinh: "2003-11-19", gioiTinh: "Nam", lop: "CNTT2023", email: "hungnguyen@edu.vn", sdt: "0921234567", diaChi: "Phú Yên" },
    { stt: 22, maSV: "SV022", hoTen: "Trần Thị Phương", ngaySinh: "2003-05-08", gioiTinh: "Nữ", lop: "CNTT2023", email: "phuongtran@edu.vn", sdt: "0922345678", diaChi: "Khánh Hòa" },
    { stt: 23, maSV: "SV023", hoTen: "Lê Văn Toàn", ngaySinh: "2003-02-28", gioiTinh: "Nam", lop: "CNTT2023", email: "toanle@edu.vn", sdt: "0923456789", diaChi: "Ninh Thuận" },
    { stt: 24, maSV: "SV024", hoTen: "Phạm Thị Chi", ngaySinh: "2003-08-14", gioiTinh: "Nữ", lop: "CNTT2023", email: "chipham@edu.vn", sdt: "0924567890", diaChi: "Bình Thuận" },
    { stt: 25, maSV: "SV025", hoTen: "Vũ Văn Dũng", ngaySinh: "2003-04-05", gioiTinh: "Nam", lop: "CNTT2023", email: "dungvu@edu.vn", sdt: "0925678901", diaChi: "TP.HCM" },
    { stt: 26, maSV: "SV026", hoTen: "Bùi Thị Giao", ngaySinh: "2003-12-20", gioiTinh: "Nữ", lop: "CNTT2023", email: "giaobui@edu.vn", sdt: "0926789012", diaChi: "Tây Ninh" },
    { stt: 27, maSV: "SV027", hoTen: "Đặng Văn Lâm", ngaySinh: "2003-07-11", gioiTinh: "Nam", lop: "CNTT2023", email: "lamdang@edu.vn", sdt: "0927890123", diaChi: "Bình Dương" },
    { stt: 28, maSV: "SV028", hoTen: "Ngô Thị Hạnh", ngaySinh: "2003-10-26", gioiTinh: "Nữ", lop: "CNTT2023", email: "hanhngo@edu.vn", sdt: "0928901234", diaChi: "Đồng Nai" },
    { stt: 29, maSV: "SV029", hoTen: "Trịnh Văn Tuấn", ngaySinh: "2003-03-17", gioiTinh: "Nam", lop: "CNTT2023", email: "tuantrinh@edu.vn", sdt: "0929012345", diaChi: "Bà Rịa - Vũng Tàu" },
    { stt: 30, maSV: "SV030", hoTen: "Lý Thị Hường", ngaySinh: "2003-06-02", gioiTinh: "Nữ", lop: "CNTT2023", email: "huongly@edu.vn", sdt: "0930123456", diaChi: "Long An" },

    // KT2024 - 10 sinh viên
    { stt: 31, maSV: "SV031", hoTen: "Đỗ Văn Khoa", ngaySinh: "2004-09-08", gioiTinh: "Nam", lop: "KT2024", email: "khoado@edu.vn", sdt: "0931234567", diaChi: "Tiền Giang" },
    { stt: 32, maSV: "SV032", hoTen: "Phí Thị Liên", ngaySinh: "2004-01-13", gioiTinh: "Nữ", lop: "KT2024", email: "lienphi@edu.vn", sdt: "0932345678", diaChi: "Bến Tre" },
    { stt: 33, maSV: "SV033", hoTen: "Nguyễn Văn Thành", ngaySinh: "2004-05-24", gioiTinh: "Nam", lop: "KT2024", email: "thanhnguyen@edu.vn", sdt: "0933456789", diaChi: "Trà Vinh" },
    { stt: 34, maSV: "SV034", hoTen: "Trần Thị Ngọc", ngaySinh: "2004-11-30", gioiTinh: "Nữ", lop: "KT2024", email: "ngoc.tran@edu.vn", sdt: "0934567890", diaChi: "Vĩnh Long" },
    { stt: 35, maSV: "SV035", hoTen: "Lê Văn Bảo", ngaySinh: "2004-08-18", gioiTinh: "Nam", lop: "KT2024", email: "baole@edu.vn", sdt: "0935678901", diaChi: "Đồng Tháp" },
    { stt: 36, maSV: "SV036", hoTen: "Phạm Thị Oanh", ngaySinh: "2004-04-07", gioiTinh: "Nữ", lop: "KT2024", email: "oanhpham@edu.vn", sdt: "0936789012", diaChi: "An Giang" },
    { stt: 37, maSV: "SV037", hoTen: "Hoàng Văn Đạt", ngaySinh: "2004-12-01", gioiTinh: "Nam", lop: "KT2024", email: "dathoang@edu.vn", sdt: "0937890123", diaChi: "Kiên Giang" },
    { stt: 38, maSV: "SV038", hoTen: "Vũ Thị Thảo", ngaySinh: "2004-07-15", gioiTinh: "Nữ", lop: "KT2024", email: "thaovu@edu.vn", sdt: "0938901234", diaChi: "Hậu Giang" },
    { stt: 39, maSV: "SV039", hoTen: "Đặng Văn Sơn", ngaySinh: "2004-03-22", gioiTinh: "Nam", lop: "KT2024", email: "sondang@edu.vn", sdt: "0939012345", diaChi: "Sóc Trăng" },
    { stt: 40, maSV: "SV040", hoTen: "Bùi Thị Huyền", ngaySinh: "2004-09-29", gioiTinh: "Nữ", lop: "KT2024", email: "huyenbui@edu.vn", sdt: "0940123456", diaChi: "Bạc Liêu" },

    // QTKD2024 - 10 sinh viên
    { stt: 41, maSV: "SV041", hoTen: "Ngô Văn Phong", ngaySinh: "2004-06-11", gioiTinh: "Nam", lop: "QTKD2024", email: "phongngo@edu.vn", sdt: "0941234567", diaChi: "Cà Mau" },
    { stt: 42, maSV: "SV042", hoTen: "Trịnh Thị Yến", ngaySinh: "2004-02-03", gioiTinh: "Nữ", lop: "QTKD2024", email: "yen.trinh@edu.vn", sdt: "0942345678", diaChi: "Hà Nội" },
    { stt: 43, maSV: "SV043", hoTen: "Lý Hải Nam", ngaySinh: "2004-10-25", gioiTinh: "Nam", lop: "QTKD2024", email: "namly@edu.vn", sdt: "0943456789", diaChi: "TP.HCM" },
    { stt: 44, maSV: "SV044", hoTen: "Đỗ Thị Hương", ngaySinh: "2004-05-16", gioiTinh: "Nữ", lop: "QTKD2024", email: "huong.do@edu.vn", sdt: "0944567890", diaChi: "Đà Nẵng" },
    { stt: 45, maSV: "SV045", hoTen: "Phí Văn Minh", ngaySinh: "2004-01-09", gioiTinh: "Nam", lop: "QTKD2024", email: "minhphi@edu.vn", sdt: "0945678901", diaChi: "Hải Phòng" },
    { stt: 46, maSV: "SV046", hoTen: "Nguyễn Thị Trang", ngaySinh: "2004-08-21", gioiTinh: "Nữ", lop: "QTKD2024", email: "trangnguyen@edu.vn", sdt: "0946789012", diaChi: "Huế" },
    { stt: 47, maSV: "SV047", hoTen: "Trần Văn Đức", ngaySinh: "2004-04-18", gioiTinh: "Nam", lop: "QTKD2024", email: "ductrant@edu.vn", sdt: "0947890123", diaChi: "Hà Nam" },
    { stt: 48, maSV: "SV048", hoTen: "Lê Thị Thủy", ngaySinh: "2004-12-12", gioiTinh: "Nữ", lop: "QTKD2024", email: "thuyle@edu.vn", sdt: "0948901234", diaChi: "Nam Định" },
    { stt: 49, maSV: "SV049", hoTen: "Phạm Văn Tùng", ngaySinh: "2004-07-05", gioiTinh: "Nam", lop: "QTKD2024", email: "tungpham@edu.vn", sdt: "0949012345", diaChi: "Thái Bình" },
    { stt: 50, maSV: "SV050", hoTen: "Hoàng Thị Ngọc", ngaySinh: "2004-03-28", gioiTinh: "Nữ", lop: "QTKD2024", email: "ngoc.hoang@edu.vn", sdt: "0950123456", diaChi: "Ninh Bình" },

    // TCNH2024 - 10 sinh viên
    { stt: 51, maSV: "SV051", hoTen: "Vũ Văn Cường", ngaySinh: "2004-11-15", gioiTinh: "Nam", lop: "TCNH2024", email: "cuongvu@edu.vn", sdt: "0951234567", diaChi: "Thanh Hóa" },
    { stt: 52, maSV: "SV052", hoTen: "Bùi Thị Nga", ngaySinh: "2004-06-20", gioiTinh: "Nữ", lop: "TCNH2024", email: "ngabui@edu.vn", sdt: "0952345678", diaChi: "Nghệ An" },
    { stt: 53, maSV: "SV053", hoTen: "Đặng Văn Hải", ngaySinh: "2004-08-09", gioiTinh: "Nam", lop: "TCNH2024", email: "hai.dang@edu.vn", sdt: "0953456789", diaChi: "Hà Tĩnh" },
    { stt: 54, maSV: "SV054", hoTen: "Ngô Thị Thu", ngaySinh: "2004-01-24", gioiTinh: "Nữ", lop: "TCNH2024", email: "thu.ngo@edu.vn", sdt: "0954567890", diaChi: "Quảng Bình" },
    { stt: 55, maSV: "SV055", hoTen: "Trịnh Văn Hòa", ngaySinh: "2004-04-02", gioiTinh: "Nam", lop: "TCNH2024", email: "hoa.trinh@edu.vn", sdt: "0955678901", diaChi: "Quảng Trị" },
    { stt: 56, maSV: "SV056", hoTen: "Lý Thị Hoa", ngaySinh: "2004-07-19", gioiTinh: "Nữ", lop: "TCNH2024", email: "hoa.ly@edu.vn", sdt: "0956789012", diaChi: "Quảng Nam" },
    { stt: 57, maSV: "SV057", hoTen: "Đỗ Văn Hùng", ngaySinh: "2004-10-17", gioiTinh: "Nam", lop: "TCNH2024", email: "hung.do@edu.vn", sdt: "0957890123", diaChi: "Quảng Ngãi" },
    { stt: 58, maSV: "SV058", hoTen: "Phí Thị Mai", ngaySinh: "2004-03-05", gioiTinh: "Nữ", lop: "TCNH2024", email: "mai.phi@edu.vn", sdt: "0958901234", diaChi: "Bình Định" },
    { stt: 59, maSV: "SV059", hoTen: "Nguyễn Văn Tiến", ngaySinh: "2004-09-12", gioiTinh: "Nam", lop: "TCNH2024", email: "tien.nguyen@edu.vn", sdt: "0959012345", diaChi: "Phú Yên" },
    { stt: 60, maSV: "SV060", hoTen: "Trần Thị Hạnh", ngaySinh: "2004-12-08", gioiTinh: "Nữ", lop: "TCNH2024", email: "hanh.tran@edu.vn", sdt: "0960123456", diaChi: "Khánh Hòa" },
  ]);

  const [teachers, setTeachers] = useState([
    // Giảng viên CNTT
    { stt: 1, maGV: "GV001", hoTen: "Nguyễn Văn An", email: "an.nguyen@edu.vn", sdt: "0911234567", mon: "Lập Trình Cơ Bản", hocVi: "TS", chuyenNganh: "Công nghệ phần mềm" },
    { stt: 2, maGV: "GV002", hoTen: "Trần Thị Linh", email: "linh.tran@edu.vn", sdt: "0912345678", mon: "Cấu Trúc Dữ Liệu", hocVi: "TS", chuyenNganh: "Khoa học máy tính" },
    { stt: 3, maGV: "GV003", hoTen: "Lê Văn Minh", email: "minh.le@edu.vn", sdt: "0913456789", mon: "Cơ Sở Dữ Liệu", hocVi: "TS", chuyenNganh: "Hệ thống thông tin" },
    { stt: 4, maGV: "GV004", hoTen: "Phạm Thị Hoa", email: "hoa.pham@edu.vn", sdt: "0914567890", mon: "Mạng Máy Tính", hocVi: "TS", chuyenNganh: "Mạng và truyền thông" },
    { stt: 5, maGV: "GV005", hoTen: "Hoàng Văn Đức", email: "duc.hoang@edu.vn", sdt: "0915678901", mon: "Lập Trình Web", hocVi: "TS", chuyenNganh: "Công nghệ web" },
    { stt: 6, maGV: "GV006", hoTen: "Vũ Thị Mai", email: "mai.vu@edu.vn", sdt: "0916789012", mon: "Công Nghệ Phần Mềm", hocVi: "TS", chuyenNganh: "Kỹ thuật phần mềm" },
    { stt: 7, maGV: "GV007", hoTen: "Đặng Văn Tùng", email: "tung.dang@edu.vn", sdt: "0917890123", mon: "Hệ Điều Hành", hocVi: "TS", chuyenNganh: "Hệ thống" },
    { stt: 8, maGV: "GV008", hoTen: "Bùi Thị Lan", email: "lan.bui@edu.vn", sdt: "0918901234", mon: "An Toàn Thông Tin", hocVi: "TS", chuyenNganh: "An ninh mạng" },
    { stt: 9, maGV: "GV009", hoTen: "Ngô Văn Hải", email: "hai.ngo@edu.vn", sdt: "0919012345", mon: "Trí Tuệ Nhân Tạo", hocVi: "PGS.TS", chuyenNganh: "AI & Machine Learning" },
    { stt: 10, maGV: "GV010", hoTen: "Trịnh Thị Thu", email: "thu.trinh@edu.vn", sdt: "0920123456", mon: "Big Data", hocVi: "TS", chuyenNganh: "Khoa học dữ liệu" },

    // Giảng viên Kế Toán
    { stt: 11, maGV: "GV011", hoTen: "Lý Văn Khoa", email: "khoa.ly@edu.vn", sdt: "0921234567", mon: "Kế Toán Tài Chính", hocVi: "TS", chuyenNganh: "Kế toán doanh nghiệp" },
    { stt: 12, maGV: "GV012", hoTen: "Đỗ Thị Hạnh", email: "hanh.do@edu.vn", sdt: "0922345678", mon: "Kế Toán Quản Trị", hocVi: "TS", chuyenNganh: "Quản trị tài chính" },
    { stt: 13, maGV: "GV013", hoTen: "Phí Văn Long", email: "long.phi@edu.vn", sdt: "0923456789", mon: "Thuế Và Luật Thuế", hocVi: "TS", chuyenNganh: "Luật kinh tế" },
    { stt: 14, maGV: "GV014", hoTen: "Nguyễn Thị Trang", email: "trang.nguyen@edu.vn", sdt: "0924567890", mon: "Kiểm Toán", hocVi: "TS", chuyenNganh: "Kiểm toán độc lập" },
    { stt: 15, maGV: "GV015", hoTen: "Trần Văn Toàn", email: "toan.tran@edu.vn", sdt: "0925678901", mon: "Tài Chính Doanh Nghiệp", hocVi: "TS", chuyenNganh: "Tài chính doanh nghiệp" },

    // Giảng viên Quản Trị Kinh Doanh
    { stt: 16, maGV: "GV016", hoTen: "Lê Thị Linh", email: "linh.le@edu.vn", sdt: "0926789012", mon: "Quản Lý Nhân Sự", hocVi: "TS", chuyenNganh: "Tổ chức và nhân sự" },
    { stt: 17, maGV: "GV017", hoTen: "Phạm Văn Hùng", email: "hung.pham@edu.vn", sdt: "0927890123", mon: "Marketing", hocVi: "TS", chuyenNganh: "Marketing và bán hàng" },
    { stt: 18, maGV: "GV018", hoTen: "Hoàng Thị Mai", email: "mai.hoang@edu.vn", sdt: "0928901234", mon: "Chiến Lược Kinh Doanh", hocVi: "PGS.TS", chuyenNganh: "Chiến lược doanh nghiệp" },
    { stt: 19, maGV: "GV019", hoTen: "Vũ Văn Đức", email: "duc.vu@edu.vn", sdt: "0929012345", mon: "Quản Lý Dự Án", hocVi: "TS", chuyenNganh: "Quản lý dự án" },
    { stt: 20, maGV: "GV020", hoTen: "Đặng Thị Hoa", email: "hoa.dang@edu.vn", sdt: "0930123456", mon: "Kinh Tế Vi Mô", hocVi: "TS", chuyenNganh: "Kinh tế học" },

    // Giảng viên Tài Chính Ngân Hàng
    { stt: 21, maGV: "GV021", hoTen: "Bùi Văn Sơn", email: "son.bui@edu.vn", sdt: "0931234567", mon: "Ngân Hàng Thương Mại", hocVi: "TS", chuyenNganh: "Ngân hàng" },
    { stt: 22, maGV: "GV022", hoTen: "Ngô Thị Thu", email: "thu.ngo@edu.vn", sdt: "0932345678", mon: "Tài Chính Quốc Tế", hocVi: "TS", chuyenNganh: "Tài chính quốc tế" },
    { stt: 23, maGV: "GV023", hoTen: "Trịnh Văn Tùng", email: "tung.trinh@edu.vn", sdt: "0933456789", mon: "Đầu Tư Chứng Khoán", hocVi: "TS", chuyenNganh: "Chứng khoán" },
    { stt: 24, maGV: "GV024", hoTen: "Lý Thị Nga", email: "nga.ly@edu.vn", sdt: "0934567890", mon: "Bảo Hiểm", hocVi: "TS", chuyenNganh: "Bảo hiểm và rủi ro" },
    { stt: 25, maGV: "GV025", hoTen: "Đỗ Văn Minh", email: "minh.do@edu.vn", sdt: "0935678901", mon: "Ngân Hàng Trung Ương", hocVi: "PGS.TS", chuyenNganh: "Chính sách tiền tệ" },
  ]);

  const [classes, setClasses] = useState([
    { stt: 1, maLop: "CNTT2024", tenLop: "Công Nghệ Thông Tin 2024", siSo: 35, giangVien: "TS. Nguyễn Văn An", nam: 2024 },
    { stt: 2, maLop: "CNTT2023", tenLop: "Công Nghệ Thông Tin 2023", siSo: 40, giangVien: "TS. Trần Thị Linh", nam: 2023 },
    { stt: 3, maLop: "KT2024", tenLop: "Kế Toán 2024", siSo: 30, giangVien: "TS. Lý Văn Khoa", nam: 2024 },
    { stt: 4, maLop: "QTKD2024", tenLop: "Quản Trị Kinh Doanh 2024", siSo: 28, giangVien: "TS. Lê Thị Linh", nam: 2024 },
    { stt: 5, maLop: "TCNH2024", tenLop: "Tài Chính Ngân Hàng 2024", siSo: 32, giangVien: "TS. Bùi Văn Sơn", nam: 2024 },
  ]);

  const [subjects, setSubjects] = useState([
    { stt: 1, maMH: "INT1004", tenMH: "Lập Trình Cơ Bản", soTin: 3, giangVien: "TS. Nguyễn Văn An", soTiet: 45 },
    { stt: 2, maMH: "INT1005", tenMH: "Cấu Trúc Dữ Liệu", soTin: 4, giangVien: "TS. Trần Thị Linh", soTiet: 60 },
    { stt: 3, maMH: "INT1006", tenMH: "Cơ Sở Dữ Liệu", soTin: 3, giangVien: "TS. Lê Văn Minh", soTiet: 45 },
    { stt: 4, maMH: "INT1007", tenMH: "Mạng Máy Tính", soTin: 3, giangVien: "TS. Phạm Thị Hoa", soTiet: 45 },
    { stt: 5, maMH: "INT1008", tenMH: "Lập Trình Web", soTin: 4, giangVien: "TS. Hoàng Văn Đức", soTiet: 60 },
    { stt: 6, maMH: "INT1009", tenMH: "Công Nghệ Phần Mềm", soTin: 3, giangVien: "TS. Vũ Thị Mai", soTiet: 45 },
    { stt: 7, maMH: "INT1010", tenMH: "Hệ Điều Hành", soTin: 3, giangVien: "TS. Đặng Văn Tùng", soTiet: 45 },
    { stt: 8, maMH: "INT1011", tenMH: "An Toàn Thông Tin", soTin: 3, giangVien: "TS. Bùi Thị Lan", soTiet: 45 },
    { stt: 9, maMH: "INT1012", tenMH: "Trí Tuệ Nhân Tạo", soTin: 4, giangVien: "PGS.TS. Ngô Văn Hải", soTiet: 60 },
    { stt: 10, maMH: "INT1013", tenMH: "Big Data", soTin: 3, giangVien: "TS. Trịnh Thị Thu", soTiet: 45 },
  ]);

  const [grades, setGrades] = useState([
    // CNTT2024 - Lập Trình Cơ Bản
    { stt: 1, maSV: "SV001", hoTen: "Nguyễn Minh Tuấn", lop: "CNTT2024", monHoc: "Lập Trình Cơ Bản", diemCC: 9.0, diemGK: 8.5, diemCK: 9.0, diemTB: 8.8, ketQua: "Xuất sắc" },
    { stt: 2, maSV: "SV002", hoTen: "Trần Thị Hương", lop: "CNTT2024", monHoc: "Lập Trình Cơ Bản", diemCC: 8.5, diemGK: 7.8, diemCK: 8.2, diemTB: 8.0, ketQua: "Giỏi" },
    { stt: 3, maSV: "SV003", hoTen: "Phạm Thị Mai", lop: "CNTT2024", monHoc: "Lập Trình Cơ Bản", diemCC: 9.5, diemGK: 8.0, diemCK: 8.5, diemTB: 8.4, ketQua: "Giỏi" },
    { stt: 4, maSV: "SV004", hoTen: "Lê Văn Hùng", lop: "CNTT2024", monHoc: "Lập Trình Cơ Bản", diemCC: 7.0, diemGK: 6.5, diemCK: 7.0, diemTB: 6.8, ketQua: "Khá" },
    { stt: 5, maSV: "SV005", hoTen: "Vũ Thị Lan", lop: "CNTT2024", monHoc: "Lập Trình Cơ Bản", diemCC: 9.0, diemGK: 8.2, diemCK: 8.8, diemTB: 8.6, ketQua: "Giỏi" },

    // CNTT2024 - Cấu Trúc Dữ Liệu
    { stt: 6, maSV: "SV001", hoTen: "Nguyễn Minh Tuấn", lop: "CNTT2024", monHoc: "Cấu Trúc Dữ Liệu", diemCC: 8.5, diemGK: 7.5, diemCK: 8.0, diemTB: 7.9, ketQua: "Khá" },
    { stt: 7, maSV: "SV002", hoTen: "Trần Thị Hương", lop: "CNTT2024", monHoc: "Cấu Trúc Dữ Liệu", diemCC: 9.5, diemGK: 8.8, diemCK: 9.2, diemTB: 9.2, ketQua: "Xuất sắc" },
    { stt: 8, maSV: "SV003", hoTen: "Phạm Thị Mai", lop: "CNTT2024", monHoc: "Cấu Trúc Dữ Liệu", diemCC: 8.0, diemGK: 7.2, diemCK: 7.8, diemTB: 7.6, ketQua: "Khá" },
    { stt: 9, maSV: "SV004", hoTen: "Lê Văn Hùng", lop: "CNTT2024", monHoc: "Cấu Trúc Dữ Liệu", diemCC: 9.0, diemGK: 8.0, diemCK: 8.5, diemTB: 8.4, ketQua: "Giỏi" },
    { stt: 10, maSV: "SV005", hoTen: "Vũ Thị Lan", lop: "CNTT2024", monHoc: "Cấu Trúc Dữ Liệu", diemCC: 7.5, diemGK: 7.0, diemCK: 6.5, diemTB: 6.9, ketQua: "Khá" },

    // CNTT2023 - Cơ Sở Dữ Liệu
    { stt: 11, maSV: "SV016", hoTen: "Lê Đình Phong", lop: "CNTT2023", monHoc: "Cơ Sở Dữ Liệu", diemCC: 9.0, diemGK: 8.5, diemCK: 9.0, diemTB: 8.9, ketQua: "Xuất sắc" },
    { stt: 12, maSV: "SV017", hoTen: "Hoàng Đức Long", lop: "CNTT2023", monHoc: "Cơ Sở Dữ Liệu", diemCC: 8.5, diemGK: 7.8, diemCK: 8.2, diemTB: 8.1, ketQua: "Giỏi" },
    { stt: 13, maSV: "SV018", hoTen: "Lê Thị Hà", lop: "CNTT2023", monHoc: "Cơ Sở Dữ Liệu", diemCC: 7.0, diemGK: 6.5, diemCK: 7.0, diemTB: 6.9, ketQua: "Khá" },
    { stt: 14, maSV: "SV019", hoTen: "Phạm Văn Hiếu", lop: "CNTT2023", monHoc: "Cơ Sở Dữ Liệu", diemCC: 9.0, diemGK: 8.2, diemCK: 8.5, diemTB: 8.5, ketQua: "Giỏi" },
    { stt: 15, maSV: "SV020", hoTen: "Hoàng Thị Diễm", lop: "CNTT2023", monHoc: "Cơ Sở Dữ Liệu", diemCC: 8.0, diemGK: 7.5, diemCK: 7.8, diemTB: 7.8, ketQua: "Khá" },

    // KT2024 - Kế Toán Tài Chính
    { stt: 16, maSV: "SV031", hoTen: "Đỗ Văn Khoa", lop: "KT2024", monHoc: "Kế Toán Tài Chính", diemCC: 8.5, diemGK: 7.8, diemCK: 8.5, diemTB: 8.3, ketQua: "Giỏi" },
    { stt: 17, maSV: "SV032", hoTen: "Phí Thị Liên", lop: "KT2024", monHoc: "Kế Toán Tài Chính", diemCC: 9.0, diemGK: 8.2, diemCK: 8.8, diemTB: 8.6, ketQua: "Giỏi" },
    { stt: 18, maSV: "SV033", hoTen: "Nguyễn Văn Thành", lop: "KT2024", monHoc: "Kế Toán Tài Chính", diemCC: 7.5, diemGK: 6.8, diemCK: 7.2, diemTB: 7.1, ketQua: "Khá" },
    { stt: 19, maSV: "SV034", hoTen: "Trần Thị Ngọc", lop: "KT2024", monHoc: "Kế Toán Tài Chính", diemCC: 9.5, diemGK: 8.5, diemCK: 9.0, diemTB: 8.9, ketQua: "Xuất sắc" },
    { stt: 20, maSV: "SV035", hoTen: "Lê Văn Bảo", lop: "KT2024", monHoc: "Kế Toán Tài Chính", diemCC: 8.0, diemGK: 7.0, diemCK: 7.5, diemTB: 7.4, ketQua: "Khá" },

    // QTKD2024 - Marketing
    { stt: 21, maSV: "SV041", hoTen: "Ngô Văn Phong", lop: "QTKD2024", monHoc: "Marketing", diemCC: 9.0, diemGK: 8.0, diemCK: 8.5, diemTB: 8.4, ketQua: "Giỏi" },
    { stt: 22, maSV: "SV042", hoTen: "Trịnh Thị Yến", lop: "QTKD2024", monHoc: "Marketing", diemCC: 8.5, diemGK: 7.5, diemCK: 8.0, diemTB: 7.9, ketQua: "Khá" },
    { stt: 23, maSV: "SV043", hoTen: "Lý Hải Nam", lop: "QTKD2024", monHoc: "Marketing", diemCC: 9.5, diemGK: 8.8, diemCK: 9.2, diemTB: 9.1, ketQua: "Xuất sắc" },
    { stt: 24, maSV: "SV044", hoTen: "Đỗ Thị Hương", lop: "QTKD2024", monHoc: "Marketing", diemCC: 7.0, diemGK: 6.5, diemCK: 7.0, diemTB: 6.9, ketQua: "Khá" },
    { stt: 25, maSV: "SV045", hoTen: "Phí Văn Minh", lop: "QTKD2024", monHoc: "Marketing", diemCC: 8.5, diemGK: 7.8, diemCK: 8.2, diemTB: 8.1, ketQua: "Giỏi" },

    // TCNH2024 - Ngân Hàng Thương Mại
    { stt: 26, maSV: "SV051", hoTen: "Vũ Văn Cường", lop: "TCNH2024", monHoc: "Ngân Hàng Thương Mại", diemCC: 8.0, diemGK: 7.5, diemCK: 8.0, diemTB: 7.9, ketQua: "Khá" },
    { stt: 27, maSV: "SV052", hoTen: "Bùi Thị Nga", lop: "TCNH2024", monHoc: "Ngân Hàng Thương Mại", diemCC: 9.0, diemGK: 8.2, diemCK: 8.5, diemTB: 8.5, ketQua: "Giỏi" },
    { stt: 28, maSV: "SV053", hoTen: "Đặng Văn Hải", lop: "TCNH2024", monHoc: "Ngân Hàng Thương Mại", diemCC: 9.5, diemGK: 8.5, diemCK: 9.0, diemTB: 8.9, ketQua: "Xuất sắc" },
    { stt: 29, maSV: "SV054", hoTen: "Ngô Thị Thu", lop: "TCNH2024", monHoc: "Ngân Hàng Thương Mại", diemCC: 8.0, diemGK: 7.0, diemCK: 7.5, diemTB: 7.4, ketQua: "Khá" },
    { stt: 30, maSV: "SV055", hoTen: "Trịnh Văn Hòa", lop: "TCNH2024", monHoc: "Ngân Hàng Thương Mại", diemCC: 7.5, diemGK: 6.8, diemCK: 7.2, diemTB: 7.1, ketQua: "Khá" },
  ]);

  const [attendance, setAttendance] = useState([
    // CNTT2024 - Tháng 9
    { stt: 1, maSV: "SV001", hoTen: "Nguyễn Minh Tuấn", lop: "CNTT2024", soTietNghi: 2, tongTiet: 30, tiLe: "93%", thang: "9/2024" },
    { stt: 2, maSV: "SV002", hoTen: "Trần Thị Hương", lop: "CNTT2024", soTietNghi: 1, tongTiet: 30, tiLe: "97%", thang: "9/2024" },
    { stt: 3, maSV: "SV003", hoTen: "Phạm Thị Mai", lop: "CNTT2024", soTietNghi: 0, tongTiet: 30, tiLe: "100%", thang: "9/2024" },
    { stt: 4, maSV: "SV004", hoTen: "Lê Văn Hùng", lop: "CNTT2024", soTietNghi: 4, tongTiet: 30, tiLe: "87%", thang: "9/2024" },
    { stt: 5, maSV: "SV005", hoTen: "Vũ Thị Lan", lop: "CNTT2024", soTietNghi: 1, tongTiet: 30, tiLe: "97%", thang: "9/2024" },
    { stt: 6, maSV: "SV006", hoTen: "Đặng Văn Minh", lop: "CNTT2024", soTietNghi: 2, tongTiet: 30, tiLe: "93%", thang: "9/2024" },
    { stt: 7, maSV: "SV007", hoTen: "Bùi Thị Hồng", lop: "CNTT2024", soTietNghi: 0, tongTiet: 30, tiLe: "100%", thang: "9/2024" },
    { stt: 8, maSV: "SV008", hoTen: "Ngô Quốc Trung", lop: "CNTT2024", soTietNghi: 3, tongTiet: 30, tiLe: "90%", thang: "9/2024" },
    { stt: 9, maSV: "SV009", hoTen: "Trịnh Thị Thu", lop: "CNTT2024", soTietNghi: 1, tongTiet: 30, tiLe: "97%", thang: "9/2024" },
    { stt: 10, maSV: "SV010", hoTen: "Lý Hải Bảo", lop: "CNTT2024", soTietNghi: 2, tongTiet: 30, tiLe: "93%", thang: "9/2024" },

    // CNTT2023 - Tháng 9
    { stt: 11, maSV: "SV016", hoTen: "Lê Đình Phong", lop: "CNTT2023", soTietNghi: 1, tongTiet: 30, tiLe: "97%", thang: "9/2024" },
    { stt: 12, maSV: "SV017", hoTen: "Hoàng Đức Long", lop: "CNTT2023", soTietNghi: 0, tongTiet: 30, tiLe: "100%", thang: "9/2024" },
    { stt: 13, maSV: "SV018", hoTen: "Lê Thị Hà", lop: "CNTT2023", soTietNghi: 2, tongTiet: 30, tiLe: "93%", thang: "9/2024" },
    { stt: 14, maSV: "SV019", hoTen: "Phạm Văn Hiếu", lop: "CNTT2023", soTietNghi: 4, tongTiet: 30, tiLe: "87%", thang: "9/2024" },
    { stt: 15, maSV: "SV020", hoTen: "Hoàng Thị Diễm", lop: "CNTT2023", soTietNghi: 1, tongTiet: 30, tiLe: "97%", thang: "9/2024" },

    // KT2024 - Tháng 9
    { stt: 16, maSV: "SV031", hoTen: "Đỗ Văn Khoa", lop: "KT2024", soTietNghi: 0, tongTiet: 25, tiLe: "100%", thang: "9/2024" },
    { stt: 17, maSV: "SV032", hoTen: "Phí Thị Liên", lop: "KT2024", soTietNghi: 1, tongTiet: 25, tiLe: "96%", thang: "9/2024" },
    { stt: 18, maSV: "SV033", hoTen: "Nguyễn Văn Thành", lop: "KT2024", soTietNghi: 2, tongTiet: 25, tiLe: "92%", thang: "9/2024" },
    { stt: 19, maSV: "SV034", hoTen: "Trần Thị Ngọc", lop: "KT2024", soTietNghi: 0, tongTiet: 25, tiLe: "100%", thang: "9/2024" },
    { stt: 20, maSV: "SV035", hoTen: "Lê Văn Bảo", lop: "KT2024", soTietNghi: 3, tongTiet: 25, tiLe: "88%", thang: "9/2024" },

    // QTKD2024 - Tháng 9
    { stt: 21, maSV: "SV041", hoTen: "Ngô Văn Phong", lop: "QTKD2024", soTietNghi: 1, tongTiet: 28, tiLe: "96%", thang: "9/2024" },
    { stt: 22, maSV: "SV042", hoTen: "Trịnh Thị Yến", lop: "QTKD2024", soTietNghi: 0, tongTiet: 28, tiLe: "100%", thang: "9/2024" },
    { stt: 23, maSV: "SV043", hoTen: "Lý Hải Nam", lop: "QTKD2024", soTietNghi: 2, tongTiet: 28, tiLe: "93%", thang: "9/2024" },
    { stt: 24, maSV: "SV044", hoTen: "Đỗ Thị Hương", lop: "QTKD2024", soTietNghi: 1, tongTiet: 28, tiLe: "96%", thang: "9/2024" },
    { stt: 25, maSV: "SV045", hoTen: "Phí Văn Minh", lop: "QTKD2024", soTietNghi: 0, tongTiet: 28, tiLe: "100%", thang: "9/2024" },

    // TCNH2024 - Tháng 9
    { stt: 26, maSV: "SV051", hoTen: "Vũ Văn Cường", lop: "TCNH2024", soTietNghi: 2, tongTiet: 32, tiLe: "94%", thang: "9/2024" },
    { stt: 27, maSV: "SV052", hoTen: "Bùi Thị Nga", lop: "TCNH2024", soTietNghi: 0, tongTiet: 32, tiLe: "100%", thang: "9/2024" },
    { stt: 28, maSV: "SV053", hoTen: "Đặng Văn Hải", lop: "TCNH2024", soTietNghi: 1, tongTiet: 32, tiLe: "97%", thang: "9/2024" },
    { stt: 29, maSV: "SV054", hoTen: "Ngô Thị Thu", lop: "TCNH2024", soTietNghi: 3, tongTiet: 32, tiLe: "91%", thang: "9/2024" },
    { stt: 30, maSV: "SV055", hoTen: "Trịnh Văn Hòa", lop: "TCNH2024", soTietNghi: 0, tongTiet: 32, tiLe: "100%", thang: "9/2024" },
  ]);

  // CRUD Functions
  const handleAddStudent = () => {
    setEditingStudent(null);
    setStudentForm({
      maSV: `SV${String(students.length + 1).padStart(3, '0')}`,
      hoTen: "", ngaySinh: "", gioiTinh: "Nam", lop: "", email: "", sdt: "", diaChi: ""
    });
    setShowStudentModal(true);
  };

  const handleEditStudent = (student: any) => {
    setEditingStudent(student);
    setStudentForm({
      maSV: student.maSV,
      hoTen: student.hoTen,
      ngaySinh: student.ngaySinh,
      gioiTinh: student.gioiTinh,
      lop: student.lop,
      email: student.email,
      sdt: student.sdt,
      diaChi: student.diaChi
    });
    setShowStudentModal(true);
  };

  const handleSaveStudent = () => {
    if (editingStudent) {
      // Update existing student
      setStudents(students.map(s => s.maSV === editingStudent.maSV ? { ...s, ...studentForm } : s));
    } else {
      // Add new student
      const newStudent = {
        stt: students.length + 1,
        ...studentForm
      };
      setStudents([...students, newStudent]);
    }
    setShowStudentModal(false);
  };

  const handleDeleteStudent = (maSV: any) => {
    if (window.confirm("Bạn có chắc muốn xóa sinh viên này?")) {
      setStudents(students.filter(s => s.maSV !== maSV));
    }
  };

  const handleAddTeacher = () => {
    setEditingTeacher(null);
    setTeacherForm({
      maGV: `GV${String(teachers.length + 1).padStart(3, '0')}`,
      hoTen: "", hocVi: "TS", chuyenNganh: "", mon: "", email: "", sdt: ""
    });
    setShowTeacherModal(true);
  };

  const handleEditTeacher = (teacher: any) => {
    setEditingTeacher(teacher);
    setTeacherForm({
      maGV: teacher.maGV,
      hoTen: teacher.hoTen,
      hocVi: teacher.hocVi,
      chuyenNganh: teacher.chuyenNganh,
      mon: teacher.mon,
      email: teacher.email,
      sdt: teacher.sdt
    });
    setShowTeacherModal(true);
  };

  const handleSaveTeacher = () => {
    if (editingTeacher) {
      setTeachers(teachers.map(t => t.maGV === editingTeacher.maGV ? { ...t, ...teacherForm } : t));
    } else {
      const newTeacher = {
        stt: teachers.length + 1,
        ...teacherForm
      };
      setTeachers([...teachers, newTeacher]);
    }
    setShowTeacherModal(false);
  };

  const handleDeleteTeacher = (maGV: any) => {
    if (window.confirm("Bạn có chắc muốn xóa giảng viên này?")) {
      setTeachers(teachers.filter(t => t.maGV !== maGV));
    }
  };

  const handleAddClass = () => {
    setEditingClass(null);
    setClassForm({
      maLop: `LOP${String(classes.length + 1).padStart(3, '0')}`,
      tenLop: "", siSo: 0, giangVien: "", nam: new Date().getFullYear()
    });
    setShowClassModal(true);
  };

  const handleEditClass = (cls: any) => {
    setEditingClass(cls);
    setClassForm({
      maLop: cls.maLop,
      tenLop: cls.tenLop,
      siSo: cls.siSo,
      giangVien: cls.giangVien,
      nam: cls.nam
    });
    setShowClassModal(true);
  };

  const handleSaveClass = () => {
    if (editingClass) {
      setClasses(classes.map(c => c.maLop === editingClass.maLop ? { ...c, ...classForm } : c));
    } else {
      const newClass = {
        stt: classes.length + 1,
        ...classForm
      };
      setClasses([...classes, newClass]);
    }
    setShowClassModal(false);
  };

  const handleDeleteClass = (maLop: any) => {
    if (window.confirm("Bạn có chắc muốn xóa lớp học này?")) {
      setClasses(classes.filter(c => c.maLop !== maLop));
    }
  };

  const handleAddSubject = () => {
    setEditingSubject(null);
    setSubjectForm({
      maMH: `MH${String(subjects.length + 1).padStart(4, '0')}`,
      tenMH: "", soTin: 3, giangVien: "", soTiet: 45
    });
    setShowSubjectModal(true);
  };

  const handleEditSubject = (subj: any) => {
    setEditingSubject(subj);
    setSubjectForm({
      maMH: subj.maMH,
      tenMH: subj.tenMH,
      soTin: subj.soTin,
      giangVien: subj.giangVien,
      soTiet: subj.soTiet
    });
    setShowSubjectModal(true);
  };

  const handleSaveSubject = () => {
    if (editingSubject) {
      setSubjects(subjects.map(s => s.maMH === editingSubject.maMH ? { ...s, ...subjectForm } : s));
    } else {
      const newSubject = {
        stt: subjects.length + 1,
        ...subjectForm
      };
      setSubjects([...subjects, newSubject]);
    }
    setShowSubjectModal(false);
  };

  const handleDeleteSubject = (maMH: any) => {
    if (window.confirm("Bạn có chắc muốn xóa môn học này?")) {
      setSubjects(subjects.filter(s => s.maMH !== maMH));
    }
  };

  const handleAddGrade = () => {
    setGradeForm({
      maSV: "", monHoc: "", diemCC: 0, diemGK: 0, diemCK: 0
    });
    setShowGradeModal(true);
  };

  const handleSaveGrade = () => {
    const diemTB = gradeForm.diemCC * 0.1 + gradeForm.diemGK * 0.3 + gradeForm.diemCK * 0.6;
    let ketQua = "Trung bình";
    if (diemTB >= 9) ketQua = "Xuất sắc";
    else if (diemTB >= 8) ketQua = "Giỏi";
    else if (diemTB >= 6.5) ketQua = "Khá";

    const student = students.find(s => s.maSV === gradeForm.maSV);
    if (!student) return;

    if (editingGrade) {
      const updatedGrade = {
        ...editingGrade,
        diemCC: gradeForm.diemCC,
        diemGK: gradeForm.diemGK,
        diemCK: gradeForm.diemCK,
        diemTB: Number(diemTB.toFixed(1)),
        ketQua
      };
      setGrades(grades.map(g => g.stt === editingGrade.stt ? updatedGrade : g));
    } else {
      const newGrade = {
        stt: grades.length + 1,
        maSV: gradeForm.maSV,
        hoTen: student.hoTen,
        lop: student.lop,
        monHoc: gradeForm.monHoc,
        diemCC: gradeForm.diemCC,
        diemGK: gradeForm.diemGK,
        diemCK: gradeForm.diemCK,
        diemTB: Number(diemTB.toFixed(1)),
        ketQua
      };
      setGrades([...grades, newGrade]);
    }
    setShowGradeModal(false);
  };

  const handleEditGrade = (grade: any) => {
    setEditingGrade(grade);
    setGradeForm({
      maSV: grade.maSV,
      monHoc: grade.monHoc,
      diemCC: grade.diemCC,
      diemGK: grade.diemGK,
      diemCK: grade.diemCK
    });
    setShowGradeModal(true);
  };

  const handleDeleteGrade = (stt: any) => {
    if (window.confirm("Bạn có chắc muốn xóa điểm này?")) {
      setGrades(grades.filter(g => g.stt !== stt));
    }
  };

  const handleAddAttendance = () => {
    setAttendanceForm({
      maSV: "", lop: "", soTietNghi: 0, tongTiet: 30, thang: `${new Date().getMonth() + 1}/${new Date().getFullYear()}`
    });
    setShowAttendanceModal(true);
  };

  const handleSaveAttendance = () => {
    const tiLe = (((attendanceForm.tongTiet - attendanceForm.soTietNghi) / attendanceForm.tongTiet) * 100).toFixed(0) + "%";

    const student = students.find(s => s.maSV === attendanceForm.maSV);
    if (!student) return;

    if (editingAttendance) {
      const updatedAttendance = {
        ...editingAttendance,
        soTietNghi: attendanceForm.soTietNghi,
        tongTiet: attendanceForm.tongTiet,
        tiLe,
        thang: attendanceForm.thang
      };
      setAttendance(attendance.map(a => a.stt === editingAttendance.stt ? updatedAttendance : a));
    } else {
      const newAttendance = {
        stt: attendance.length + 1,
        maSV: attendanceForm.maSV,
        hoTen: student.hoTen,
        lop: student.lop,
        soTietNghi: attendanceForm.soTietNghi,
        tongTiet: attendanceForm.tongTiet,
        tiLe,
        thang: attendanceForm.thang
      };
      setAttendance([...attendance, newAttendance]);
    }
    setShowAttendanceModal(false);
  };

  const handleEditAttendance = (att: any) => {
    setEditingAttendance(att);
    setAttendanceForm({
      maSV: att.maSV,
      lop: att.lop,
      soTietNghi: att.soTietNghi,
      tongTiet: att.tongTiet,
      thang: att.thang
    });
    setShowAttendanceModal(true);
  };

  const handleDeleteAttendance = (stt: any) => {
    if (window.confirm("Bạn có chắc muốn xóa bản ghi này?")) {
      setAttendance(attendance.filter(a => a.stt !== stt));
    }
  };

  // Schedule handlers
  const handleAddSchedule = () => {
    setEditingSchedule(null);
    setScheduleForm({
      monHoc: "", lop: "", thu: "Thứ 2", tiet: "", phong: "", giangVien: ""
    });
    setShowScheduleModal(true);
  };

  const handleSaveSchedule = () => {
    if (editingSchedule) {
      setScheduleList(scheduleList.map(s => s.stt === editingSchedule.stt ? { ...s, ...scheduleForm } : s));
    } else {
      const newSchedule = {
        stt: scheduleList.length + 1,
        ...scheduleForm
      };
      setScheduleList([...scheduleList, newSchedule]);
    }
    setShowScheduleModal(false);
  };

  const handleEditSchedule = (schedule: any) => {
    setEditingSchedule(schedule);
    setScheduleForm({
      monHoc: schedule.monHoc,
      lop: schedule.lop,
      thu: schedule.thu,
      tiet: schedule.tiet,
      phong: schedule.phong,
      giangVien: schedule.giangVien
    });
    setShowScheduleModal(true);
  };

  const handleDeleteSchedule = (stt: any) => {
    if (window.confirm("Bạn có chắc muốn xóa lịch học này?")) {
      setScheduleList(scheduleList.filter(s => s.stt !== stt));
    }
  };

  // Tuition handlers
  const [showTuitionModal, setShowTuitionModal] = useState(false);
  const [tuitionForm, setTuitionForm] = useState({
    maSV: "", hocky: "Học Kỳ 1 2024-2025", soTien: 0, trangThai: "Chưa đóng", ngayDong: "-"
  });

  const handleAddTuition = () => {
    setEditingTuition(null);
    setTuitionForm({
      maSV: "", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Chưa đóng", ngayDong: "-"
    });
    setShowTuitionModal(true);
  };

  const handleSaveTuition = () => {
    const student = students.find(s => s.maSV === tuitionForm.maSV);
    if (!student) return;

    if (editingTuition) {
      const updatedTuition = {
        ...editingTuition,
        maSV: tuitionForm.maSV,
        hocky: tuitionForm.hocky,
        soTien: tuitionForm.soTien,
        trangThai: tuitionForm.trangThai,
        ngayDong: tuitionForm.trangThai === "Đã đóng" ? new Date().toISOString().split('T')[0] : "-"
      };
      setTuition(tuition.map(t => t.stt === editingTuition.stt ? updatedTuition : t));
    } else {
      const newTuition = {
        stt: tuition.length + 1,
        maSV: tuitionForm.maSV,
        hoTen: student.hoTen,
        lop: student.lop,
        hocky: tuitionForm.hocky,
        soTien: tuitionForm.soTien,
        trangThai: tuitionForm.trangThai,
        ngayDong: tuitionForm.trangThai === "Đã đóng" ? new Date().toISOString().split('T')[0] : "-"
      };
      setTuition([...tuition, newTuition]);
    }
    setShowTuitionModal(false);
  };

  const handleEditTuition = (t: any) => {
    setEditingTuition(t);
    setTuitionForm({
      maSV: t.maSV,
      hocky: t.hocky,
      soTien: t.soTien,
      trangThai: t.trangThai,
      ngayDong: t.ngayDong
    });
    setShowTuitionModal(true);
  };

  const handleDeleteTuition = (stt: any) => {
    if (window.confirm("Bạn có chắc muốn xóa học phí này?")) {
      setTuition(tuition.filter(t => t.stt !== stt));
    }
  };

  const [showScheduleModal, setShowScheduleModal] = useState(false);

  const renderContent = () => {
    switch (activeMenu) {
      case "Dashboard":
        return (
          <>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {[
                { label: "Tổng Sinh Viên", value: "60", change: "+5%" },
                { label: "Lớp Học", value: "45", change: "+2%" },
                { label: "Môn Học", value: "128", change: "+8%" },
                { label: "Giảng Viên", value: "25", change: "+4%" },
              ].map((stat, i) => (
                <div key={i} className="bg-neutral-800 p-6 rounded-2xl border border-neutral-700">
                  <p className="text-neutral-400 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                  <p className="text-green-400 text-sm mt-2">{stat.change} tháng trước</p>
                </div>
              ))}
            </div>
            <div className="bg-neutral-800 rounded-2xl border border-neutral-700 p-8">
              <h2 className="text-xl font-semibold mb-4">Hoạt Động Gần Đây</h2>
              <div className="space-y-3">
                {[
                  { action: "Thêm sinh viên mới", user: "Admin", time: "2 phút trước" },
                  { action: "Cập nhật điểm", user: "GV001", time: "15 phút trước" },
                  { action: "Điểm danh lớp CNTT2024", user: "GV002", time: "1 giờ trước" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-neutral-700">
                    <div>
                      <p className="font-medium">{item.action}</p>
                      <p className="text-sm text-neutral-400">{item.user}</p>
                    </div>
                    <p className="text-neutral-500 text-sm">{item.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        );

      case "Sinh Viên":
        return (
          <div className="bg-neutral-800 rounded-2xl border border-neutral-700 overflow-hidden">
            <div className="p-6 border-b border-neutral-700 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Danh Sách Sinh Viên</h2>
              <button onClick={handleAddStudent} className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors">
                + Thêm Sinh Viên
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-700/50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">STT</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Mã SV</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Họ Tên</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Lớp</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Ngày Sinh</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Giới Tính</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Email</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">SĐT</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Thao Tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-700">
                  {students.map((s, i) => (
                    <tr key={i} className="hover:bg-neutral-700/30">
                      <td className="px-4 py-3 text-sm">{s.stt}</td>
                      <td className="px-4 py-3 text-sm font-medium">{s.maSV}</td>
                      <td className="px-4 py-3 text-sm">{s.hoTen}</td>
                      <td className="px-4 py-3 text-sm">{s.lop}</td>
                      <td className="px-4 py-3 text-sm">{s.ngaySinh}</td>
                      <td className="px-4 py-3 text-sm">{s.gioiTinh}</td>
                      <td className="px-4 py-3 text-sm text-cyan-400">{s.email}</td>
                      <td className="px-4 py-3 text-sm">{s.sdt}</td>
                      <td className="px-4 py-3">
                        <button onClick={() => handleEditStudent(s)} className="text-cyan-400 hover:text-cyan-300 mr-2 text-sm">Sửa</button>
                        <button onClick={() => handleDeleteStudent(s.maSV)} className="text-red-400 hover:text-red-300 text-sm">Xóa</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "Lớp Học":
        return (
          <div className="bg-neutral-800 rounded-2xl border border-neutral-700 overflow-hidden">
            <div className="p-6 border-b border-neutral-700 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Danh Sách Lớp Học</h2>
              <button onClick={handleAddClass} className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors">
                + Thêm Lớp Học
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-700/50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">STT</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Mã Lớp</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Tên Lớp</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Sĩ Số</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Giảng Viên</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Năm</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Thao Tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-700">
                  {classes.map((c, i) => (
                    <tr key={i} className="hover:bg-neutral-700/30">
                      <td className="px-4 py-3 text-sm">{c.stt}</td>
                      <td className="px-4 py-3 text-sm font-medium">{c.maLop}</td>
                      <td className="px-4 py-3 text-sm">{c.tenLop}</td>
                      <td className="px-4 py-3 text-sm">{c.siSo}</td>
                      <td className="px-4 py-3 text-sm">{c.giangVien}</td>
                      <td className="px-4 py-3 text-sm">{c.nam}</td>
                      <td className="px-4 py-3">
                        <button onClick={() => handleEditClass(c)} className="text-cyan-400 hover:text-cyan-300 mr-2 text-sm">Sửa</button>
                        <button onClick={() => handleDeleteClass(c.maLop)} className="text-red-400 hover:text-red-300 text-sm">Xóa</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "Môn Học":
        return (
          <div className="bg-neutral-800 rounded-2xl border border-neutral-700 overflow-hidden">
            <div className="p-6 border-b border-neutral-700 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Danh Sách Môn Học</h2>
              <button onClick={handleAddSubject} className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors">
                + Thêm Môn Học
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-700/50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">STT</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Mã Môn</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Tên Môn Học</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Số Tín</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Giảng Viên</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Số Tiết</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Thao Tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-700">
                  {subjects.map((s, i) => (
                    <tr key={i} className="hover:bg-neutral-700/30">
                      <td className="px-4 py-3 text-sm">{s.stt}</td>
                      <td className="px-4 py-3 text-sm font-medium">{s.maMH}</td>
                      <td className="px-4 py-3 text-sm">{s.tenMH}</td>
                      <td className="px-4 py-3 text-sm">{s.soTin}</td>
                      <td className="px-4 py-3 text-sm">{s.giangVien}</td>
                      <td className="px-4 py-3 text-sm">{s.soTiet}</td>
                      <td className="px-4 py-3">
                        <button onClick={() => handleEditSubject(s)} className="text-cyan-400 hover:text-cyan-300 mr-2 text-sm">Sửa</button>
                        <button onClick={() => handleDeleteSubject(s.maMH)} className="text-red-400 hover:text-red-300 text-sm">Xóa</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "Giảng Viên":
        return (
          <div className="bg-neutral-800 rounded-2xl border border-neutral-700 overflow-hidden">
            <div className="p-6 border-b border-neutral-700 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Danh Sách Giảng Viên</h2>
              <button onClick={handleAddTeacher} className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors">
                + Thêm Giảng Viên
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-700/50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">STT</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Mã GV</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Họ Tên</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Học Vị</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Chuyên Ngành</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Môn Giảng Dạy</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Email</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">SĐT</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Thao Tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-700">
                  {teachers.map((t, i) => (
                    <tr key={i} className="hover:bg-neutral-700/30">
                      <td className="px-4 py-3 text-sm">{t.stt}</td>
                      <td className="px-4 py-3 text-sm font-medium">{t.maGV}</td>
                      <td className="px-4 py-3 text-sm">{t.hoTen}</td>
                      <td className="px-4 py-3 text-sm">{t.hocVi}</td>
                      <td className="px-4 py-3 text-sm">{t.chuyenNganh}</td>
                      <td className="px-4 py-3 text-sm">{t.mon}</td>
                      <td className="px-4 py-3 text-sm text-cyan-400">{t.email}</td>
                      <td className="px-4 py-3 text-sm">{t.sdt}</td>
                      <td className="px-4 py-3">
                        <button onClick={() => handleEditTeacher(t)} className="text-cyan-400 hover:text-cyan-300 mr-2 text-sm">Sửa</button>
                        <button onClick={() => handleDeleteTeacher(t.maGV)} className="text-red-400 hover:text-red-300 text-sm">Xóa</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "Lịch Học":
        return (
          <div className="bg-neutral-800 rounded-2xl border border-neutral-700 overflow-hidden">
            <div className="p-6 border-b border-neutral-700 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Lịch Học</h2>
              <button onClick={handleAddSchedule} className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors">
                + Thêm Lịch Học
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-700/50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">STT</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Môn Học</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Lớp</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Thứ</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Tiết</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Phòng</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Giảng Viên</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Thao Tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-700">
                  {scheduleList.map((s, i) => (
                    <tr key={i} className="hover:bg-neutral-700/30">
                      <td className="px-4 py-3 text-sm">{s.stt}</td>
                      <td className="px-4 py-3 text-sm font-medium">{s.monHoc}</td>
                      <td className="px-4 py-3 text-sm">{s.lop}</td>
                      <td className="px-4 py-3 text-sm">{s.thu}</td>
                      <td className="px-4 py-3 text-sm">{s.tiet}</td>
                      <td className="px-4 py-3 text-sm">{s.phong}</td>
                      <td className="px-4 py-3 text-sm">{s.giangVien}</td>
                      <td className="px-4 py-3">
                        <button onClick={() => handleEditSchedule(s)} className="text-cyan-400 hover:text-cyan-300 mr-2 text-sm">Sửa</button>
                        <button onClick={() => handleDeleteSchedule(s.stt)} className="text-red-400 hover:text-red-300 text-sm">Xóa</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "Học Phí":
        return (
          <div className="bg-neutral-800 rounded-2xl border border-neutral-700 overflow-hidden">
            <div className="p-6 border-b border-neutral-700 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Quản Lý Học Phí</h2>
              <button onClick={handleAddTuition} className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors">
                + Tạo Học Phí
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-700/50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">STT</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Mã SV</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Họ Tên</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Lớp</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Học Kỳ</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Số Tiền</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Trạng Thái</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Ngày Đóng</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Thao Tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-700">
                  {tuition.map((t, i) => (
                    <tr key={i} className="hover:bg-neutral-700/30">
                      <td className="px-4 py-3 text-sm">{t.stt}</td>
                      <td className="px-4 py-3 text-sm font-medium">{t.maSV}</td>
                      <td className="px-4 py-3 text-sm">{t.hoTen}</td>
                      <td className="px-4 py-3 text-sm">{t.lop}</td>
                      <td className="px-4 py-3 text-sm">{t.hocky}</td>
                      <td className="px-4 py-3 text-sm">{t.soTien.toLocaleString()} đ</td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`px-2 py-1 rounded text-xs ${t.trangThai === "Đã đóng" ? "bg-green-600" : "bg-red-600"}`}>
                          {t.trangThai}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">{t.ngayDong}</td>
                      <td className="px-4 py-3">
                        <button onClick={() => handleEditTuition(t)} className="text-cyan-400 hover:text-cyan-300 mr-2 text-sm">Sửa</button>
                        <button onClick={() => handleDeleteTuition(t.stt)} className="text-red-400 hover:text-red-300 text-sm">Xóa</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "Điểm Danh":
        return (
          <div className="bg-neutral-800 rounded-2xl border border-neutral-700 overflow-hidden">
            <div className="p-6 border-b border-neutral-700 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Điểm Danh Sinh Viên</h2>
              <button onClick={handleAddAttendance} className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors">
                + Điểm Danh Hôm Nay
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-700/50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">STT</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Mã SV</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Họ Tên</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Lớp</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Số Tiết Nghỉ</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Tổng Tiết</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Tỷ Lệ</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Tháng</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Trạng Thái</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Thao Tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-700">
                  {attendance.map((a, i) => (
                    <tr key={i} className="hover:bg-neutral-700/30">
                      <td className="px-4 py-3 text-sm">{a.stt}</td>
                      <td className="px-4 py-3 text-sm font-medium">{a.maSV}</td>
                      <td className="px-4 py-3 text-sm">{a.hoTen}</td>
                      <td className="px-4 py-3 text-sm">{a.lop}</td>
                      <td className="px-4 py-3 text-sm">{a.soTietNghi}</td>
                      <td className="px-4 py-3 text-sm">{a.tongTiet}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`px-2 py-1 rounded text-xs ${
                          parseFloat(a.tiLe) >= 95 ? "bg-green-600" :
                          parseFloat(a.tiLe) >= 90 ? "bg-yellow-600" : "bg-red-600"
                        }`}>
                          {a.tiLe}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">{a.thang}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded text-xs ${
                          parseFloat(a.tiLe) >= 95 ? "text-green-400" :
                          parseFloat(a.tiLe) >= 90 ? "text-yellow-400" : "text-red-400"
                        }`}>
                          {parseFloat(a.tiLe) >= 95 ? "Tốt" :
                           parseFloat(a.tiLe) >= 90 ? "Khá" : "Kém"}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <button onClick={() => handleEditAttendance(a)} className="text-cyan-400 hover:text-cyan-300 mr-2 text-sm">Sửa</button>
                        <button onClick={() => handleDeleteAttendance(a.stt)} className="text-red-400 hover:text-red-300 text-sm">Xóa</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "Điểm Số":
        const filteredGrades = grades
          .filter(g => gradeFilter === "Tất cả" || g.monHoc === gradeFilter)
          .sort((a, b) => {
            if (gradeSort === "diemTB-desc") return b.diemTB - a.diemTB;
            if (gradeSort === "diemTB-asc") return a.diemTB - b.diemTB;
            if (gradeSort === "ten-asc") return a.hoTen.localeCompare(b.hoTen);
            if (gradeSort === "ten-desc") return b.hoTen.localeCompare(a.hoTen);
            return 0;
          });

        const uniqueSubjects = [...new Set(grades.map(g => g.monHoc))];

        return (
          <div className="bg-neutral-800 rounded-2xl border border-neutral-700 overflow-hidden">
            <div className="p-6 border-b border-neutral-700">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Quản Lý Điểm Số</h2>
                <button
                  onClick={handleAddGrade}
                  className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors"
                >
                  + Nhập Điểm
                </button>
              </div>

              {/* Filter and Sort Controls */}
              <div className="flex gap-4 items-center">
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium">Lọc theo môn:</label>
                  <select
                    value={gradeFilter}
                    onChange={(e) => setGradeFilter(e.target.value)}
                    className="px-3 py-1 bg-neutral-700 rounded border border-neutral-600 text-sm focus:border-cyan-500 outline-none"
                  >
                    <option value="Tất cả">Tất cả</option>
                    {uniqueSubjects.map(subject => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium">Sắp xếp:</label>
                  <select
                    value={gradeSort}
                    onChange={(e) => setGradeSort(e.target.value)}
                    className="px-3 py-1 bg-neutral-700 rounded border border-neutral-600 text-sm focus:border-cyan-500 outline-none"
                  >
                    <option value="diemTB-desc">Điểm TB cao → thấp</option>
                    <option value="diemTB-asc">Điểm TB thấp → cao</option>
                    <option value="ten-asc">Tên A → Z</option>
                    <option value="ten-desc">Tên Z → A</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-700/50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">STT</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Mã SV</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Họ Tên</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Lớp</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Môn Học</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Điểm CC</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Điểm GK</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Điểm CK</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Điểm TB</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Kết Quả</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-300">Thao Tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-700">
                  {filteredGrades.map((g, i) => (
                    <tr key={i} className="hover:bg-neutral-700/30">
                      <td className="px-4 py-3 text-sm">{i + 1}</td>
                      <td className="px-4 py-3 text-sm font-medium">{g.maSV}</td>
                      <td className="px-4 py-3 text-sm">{g.hoTen}</td>
                      <td className="px-4 py-3 text-sm">{g.lop}</td>
                      <td className="px-4 py-3 text-sm">{g.monHoc}</td>
                      <td className="px-4 py-3 text-sm">{g.diemCC}</td>
                      <td className="px-4 py-3 text-sm">{g.diemGK}</td>
                      <td className="px-4 py-3 text-sm">{g.diemCK}</td>
                      <td className="px-4 py-3 text-sm font-medium">{g.diemTB}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`px-2 py-1 rounded text-xs ${
                          g.ketQua === "Xuất sắc" ? "bg-green-600" :
                          g.ketQua === "Giỏi" ? "bg-blue-600" :
                          g.ketQua === "Khá" ? "bg-yellow-600" : "bg-gray-600"
                        }`}>
                          {g.ketQua}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <button onClick={() => handleEditGrade(g)} className="text-cyan-400 hover:text-cyan-300 mr-2 text-sm">Sửa</button>
                        <button onClick={() => handleDeleteGrade(g.stt)} className="text-red-400 hover:text-red-300 text-sm">Xóa</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "Chương Trình":
        return (
          <div className="bg-neutral-800 rounded-2xl border border-neutral-700 p-8">
            <h2 className="text-xl font-semibold mb-4">Chương Trình Đào Tạo</h2>
            <p className="text-neutral-400 mb-4">Danh sách môn học theo từng học kỳ:</p>
            <div className="space-y-4">
              {["Học Kỳ 1", "Học Kỳ 2", "Học Kỳ 3", "Học Kỳ 4", "Học Kỳ 5", "Học Kỳ 6", "Học Kỳ 7", "Học Kỳ 8"].map((hk, i) => (
                <div key={i} className="p-4 bg-neutral-700 rounded-lg">
                  <p className="font-medium">{hk}</p>
                  <p className="text-sm text-neutral-400 mt-1">
                    {subjects.slice(i % 5).map(s => s.tenMH).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case "Bằng Cấp":
        return (
          <div className="bg-neutral-800 rounded-2xl border border-neutral-700 p-8">
            <h2 className="text-xl font-semibold mb-4">Quản Lý Bằng Cấp</h2>
            <div className="space-y-3">
              {[
                { tenBang: "Cử Nhân Công Nghệ Thông Tin", ma: "CQH2024", nam: 2024, soLuong: 120 },
                { tenBang: "Cử Nhân Kế Toán", ma: "CQH2023", nam: 2023, soLuong: 85 },
                { tenBang: "Cử Nhân Quản Trị Kinh Doanh", ma: "CQH2023", nam: 2023, soLuong: 90 },
                { tenBang: "Cử Nhân Tài Chính Ngân Hàng", ma: "CQH2022", nam: 2022, soLuong: 75 },
              ].map((b, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-neutral-700 rounded-lg">
                  <div>
                    <p className="font-medium">{b.tenBang}</p>
                    <p className="text-sm text-neutral-400">Mã: {b.ma} - Năm: {b.nam}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">{b.soLuong}</p>
                    <p className="text-xs text-neutral-400">sinh viên</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "Hồ Sơ":
        return (
          <div className="bg-neutral-800 rounded-2xl border border-neutral-700 p-8">
            <h2 className="text-xl font-semibold mb-4">Hồ Sơ Sinh Viên</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-neutral-700 rounded-xl">
                <p className="text-lg font-semibold mb-4">Tìm Kiếm Hồ Sơ</p>
                <input
                  type="text"
                  placeholder="Nhập mã sinh viên..."
                  className="w-full px-4 py-3 bg-neutral-600 rounded-lg border border-neutral-500 focus:border-cyan-500 outline-none"
                />
              </div>
              <div className="p-6 bg-neutral-700 rounded-xl">
                <p className="text-lg font-semibold mb-4">Thống Kê Hồ Sơ</p>
                <div className="space-y-2">
                  <p>Tổng hồ sơ: <span className="font-bold">60</span></p>
                  <p>Đã hoàn thành: <span className="font-bold text-green-400">55</span></p>
                  <p>Chưa hoàn thành: <span className="font-bold text-red-400">5</span></p>
                </div>
              </div>
            </div>
          </div>
        );

      case "Cài Đặt":
        return (
          <div className="bg-neutral-800 rounded-2xl border border-neutral-700 p-8">
            <h2 className="text-xl font-semibold mb-4">Cài Đặt Hệ Thống</h2>
            <div className="space-y-6">
              <div className="p-4 bg-neutral-700 rounded-lg">
                <p className="font-medium mb-2">Thông Tin Trường</p>
                <input
                  type="text"
                  defaultValue="Trường Đại Học Công Nghệ"
                  className="w-full px-4 py-3 bg-neutral-600 rounded-lg border border-neutral-500 focus:border-cyan-500 outline-none"
                />
              </div>
              <div className="p-4 bg-neutral-700 rounded-lg">
                <p className="font-medium mb-2">Năm Học Hiện Tại</p>
                <input
                  type="text"
                  defaultValue="2024-2025"
                  className="w-full px-4 py-3 bg-neutral-600 rounded-lg border border-neutral-500 focus:border-cyan-500 outline-none"
                />
              </div>
              <div className="p-4 bg-neutral-700 rounded-lg">
                <p className="font-medium mb-2">Học Phí Một Tín Chỉ (VNĐ)</p>
                <input
                  type="text"
                  defaultValue="500000"
                  className="w-full px-4 py-3 bg-neutral-600 rounded-lg border border-neutral-500 focus:border-cyan-500 outline-none"
                />
              </div>
              <button className="px-6 py-3 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors">
                Lưu Cài Đặt
              </button>
            </div>
          </div>
        );

      case "Trợ Giúp":
        return (
          <div className="bg-neutral-800 rounded-2xl border border-neutral-700 p-8">
            <h2 className="text-xl font-semibold mb-4">Trợ Giúp</h2>
            <div className="space-y-4">
              {[
                { q: "Làm sao để thêm sinh viên mới?", a: "Vào mục Sinh Viên, click nút '+ Thêm Sinh Viên'" },
                { q: "Làm sao để nhập điểm?", a: "Vào mục Điểm Số, chọn lớp và môn học, click 'Nhập Điểm'" },
                { q: "Làm sao để in bằng tốt nghiệp?", a: "Vào mục Bằng Cấp, chọn khóa và in danh sách" },
                { q: "Liên hệ hỗ trợ?", a: "Gọi đường dây nóng: 1900-xxx hoặc email: support@edu.vn" },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-neutral-700 rounded-lg">
                  <p className="font-medium">{item.q}</p>
                  <p className="text-neutral-400 mt-2">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const getPageTitle = () => {
    switch (activeMenu) {
      case "Dashboard": return "Dashboard";
      case "Sinh Viên": return "Quản Lý Sinh Viên";
      case "Lớp Học": return "Quản Lý Lớp Học";
      case "Môn Học": return "Quản Lý Môn Học";
      case "Giảng Viên": return "Quản Lý Giảng Viên";
      case "Điểm Danh": return "Điểm Danh";
      case "Điểm Số": return "Quản Lý Điểm Số";
      case "Lịch Học": return "Lịch Học";
      case "Chương Trình": return "Chương Trình Đào Tạo";
      case "Bằng Cấp": return "Qu���n L�� Bằng Cấp";
      case "Học Phí": return "Quản Lý Học Phí";
      case "Hồ Sơ": return "Quản Lý Hồ Sơ";
      case "Cài Đặt": return "Cài Đặt";
      case "Trợ Giúp": return "Trợ Giúp";
      default: return "LMS";
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex">
      <aside className="w-64 bg-neutral-800 border-r border-neutral-700 fixed h-full">
        <div className="p-6 border-b border-neutral-700">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            LMS
          </div>
        </div>
        <nav className="p-4 space-y-1">
          {menuItems.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveMenu(item.label)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                activeMenu === item.label
                  ? "bg-cyan-600 text-white"
                  : "hover:bg-neutral-700 text-neutral-300 hover:text-white"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="ml-64 flex-1">
        <header className="bg-neutral-800/50 border-b border-neutral-700 px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">{getPageTitle()}</h1>
          <div className="flex items-center gap-4">
            <span className="text-neutral-400">admin@edu.vn</span>
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
          </div>
        </header>

        <div className="p-8">
          {renderContent()}
        </div>
      </main>

      {/* Student Modal */}
      {showStudentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-neutral-800 p-6 rounded-2xl w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">
              {editingStudent ? "Sửa Sinh Viên" : "Thêm Sinh Viên"}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Mã SV</label>
                <input
                  type="text"
                  value={studentForm.maSV}
                  onChange={(e) => setStudentForm({...studentForm, maSV: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                  disabled={editingStudent}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Họ Tên</label>
                <input
                  type="text"
                  value={studentForm.hoTen}
                  onChange={(e) => setStudentForm({...studentForm, hoTen: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Ngày Sinh</label>
                <input
                  type="date"
                  value={studentForm.ngaySinh}
                  onChange={(e) => setStudentForm({...studentForm, ngaySinh: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Giới Tính</label>
                <select
                  value={studentForm.gioiTinh}
                  onChange={(e) => setStudentForm({...studentForm, gioiTinh: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                >
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Lớp</label>
                <select
                  value={studentForm.lop}
                  onChange={(e) => setStudentForm({...studentForm, lop: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                >
                  <option value="CNTT2024">CNTT2024</option>
                  <option value="CNTT2023">CNTT2023</option>
                  <option value="KT2024">KT2024</option>
                  <option value="QTKD2024">QTKD2024</option>
                  <option value="TCNH2024">TCNH2024</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={studentForm.email}
                  onChange={(e) => setStudentForm({...studentForm, email: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Số Điện Thoại</label>
                <input
                  type="text"
                  value={studentForm.sdt}
                  onChange={(e) => setStudentForm({...studentForm, sdt: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Địa Chỉ</label>
                <input
                  type="text"
                  value={studentForm.diaChi}
                  onChange={(e) => setStudentForm({...studentForm, diaChi: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSaveStudent}
                className="flex-1 px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors"
              >
                Lưu
              </button>
              <button
                onClick={() => setShowStudentModal(false)}
                className="px-4 py-2 bg-neutral-600 rounded-lg hover:bg-neutral-500 transition-colors"
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Teacher Modal */}
      {showTeacherModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-neutral-800 p-6 rounded-2xl w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">
              {editingTeacher ? "Sửa Giảng Viên" : "Thêm Giảng Viên"}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Mã GV</label>
                <input
                  type="text"
                  value={teacherForm.maGV}
                  onChange={(e) => setTeacherForm({...teacherForm, maGV: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                  disabled={editingTeacher}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Họ Tên</label>
                <input
                  type="text"
                  value={teacherForm.hoTen}
                  onChange={(e) => setTeacherForm({...teacherForm, hoTen: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Học Vị</label>
                <select
                  value={teacherForm.hocVi}
                  onChange={(e) => setTeacherForm({...teacherForm, hocVi: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                >
                  <option value="TS">TS</option>
                  <option value="PGS.TS">PGS.TS</option>
                  <option value="GS.TS">GS.TS</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Chuyên Ngành</label>
                <input
                  type="text"
                  value={teacherForm.chuyenNganh}
                  onChange={(e) => setTeacherForm({...teacherForm, chuyenNganh: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Môn Giảng Dạy</label>
                <input
                  type="text"
                  value={teacherForm.mon}
                  onChange={(e) => setTeacherForm({...teacherForm, mon: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={teacherForm.email}
                  onChange={(e) => setTeacherForm({...teacherForm, email: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Số Điện Thoại</label>
                <input
                  type="text"
                  value={teacherForm.sdt}
                  onChange={(e) => setTeacherForm({...teacherForm, sdt: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSaveTeacher}
                className="flex-1 px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors"
              >
                Lưu
              </button>
              <button
                onClick={() => setShowTeacherModal(false)}
                className="px-4 py-2 bg-neutral-600 rounded-lg hover:bg-neutral-500 transition-colors"
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Class Modal */}
      {showClassModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-neutral-800 p-6 rounded-2xl w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">
              {editingClass ? "Sửa Lớp Học" : "Thêm Lớp Học"}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Mã Lớp</label>
                <input
                  type="text"
                  value={classForm.maLop}
                  onChange={(e) => setClassForm({...classForm, maLop: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                  disabled={editingClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Tên Lớp</label>
                <input
                  type="text"
                  value={classForm.tenLop}
                  onChange={(e) => setClassForm({...classForm, tenLop: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Sĩ Số</label>
                <input
                  type="number"
                  value={classForm.siSo}
                  onChange={(e) => setClassForm({...classForm, siSo: parseInt(e.target.value)})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Giảng Viên</label>
                <select
                  value={classForm.giangVien}
                  onChange={(e) => setClassForm({...classForm, giangVien: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                >
                  {teachers.map(t => (
                    <option key={t.maGV} value={t.hoTen}>{t.hoTen}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Năm</label>
                <input
                  type="number"
                  value={classForm.nam}
                  onChange={(e) => setClassForm({...classForm, nam: parseInt(e.target.value)})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSaveClass}
                className="flex-1 px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors"
              >
                Lưu
              </button>
              <button
                onClick={() => setShowClassModal(false)}
                className="px-4 py-2 bg-neutral-600 rounded-lg hover:bg-neutral-500 transition-colors"
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Subject Modal */}
      {showSubjectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-neutral-800 p-6 rounded-2xl w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">
              {editingSubject ? "Sửa Môn Học" : "Thêm Môn Học"}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Mã Môn</label>
                <input
                  type="text"
                  value={subjectForm.maMH}
                  onChange={(e) => setSubjectForm({...subjectForm, maMH: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                  disabled={editingSubject}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Tên Môn Học</label>
                <input
                  type="text"
                  value={subjectForm.tenMH}
                  onChange={(e) => setSubjectForm({...subjectForm, tenMH: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Số Tín Chỉ</label>
                <input
                  type="number"
                  value={subjectForm.soTin}
                  onChange={(e) => setSubjectForm({...subjectForm, soTin: parseInt(e.target.value)})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Giảng Viên</label>
                <select
                  value={subjectForm.giangVien}
                  onChange={(e) => setSubjectForm({...subjectForm, giangVien: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                >
                  {teachers.map(t => (
                    <option key={t.maGV} value={t.hoTen}>{t.hoTen}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Số Tiết</label>
                <input
                  type="number"
                  value={subjectForm.soTiet}
                  onChange={(e) => setSubjectForm({...subjectForm, soTiet: parseInt(e.target.value)})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSaveSubject}
                className="flex-1 px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors"
              >
                Lưu
              </button>
              <button
                onClick={() => setShowSubjectModal(false)}
                className="px-4 py-2 bg-neutral-600 rounded-lg hover:bg-neutral-500 transition-colors"
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Grade Modal */}
      {showGradeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-neutral-800 p-6 rounded-2xl w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Nhập Điểm</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Mã Sinh Viên</label>
                <input
                  type="text"
                  value={gradeForm.maSV}
                  onChange={(e) => setGradeForm({...gradeForm, maSV: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Môn Học</label>
                <select
                  value={gradeForm.monHoc}
                  onChange={(e) => setGradeForm({...gradeForm, monHoc: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                >
                  {subjects.map(s => (
                    <option key={s.maMH} value={s.tenMH}>{s.tenMH}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Điểm Giữa Kỳ</label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="10"
                  value={gradeForm.diemGK}
                  onChange={(e) => setGradeForm({...gradeForm, diemGK: parseFloat(e.target.value)})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Điểm Cuối Kỳ</label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="10"
                  value={gradeForm.diemCK}
                  onChange={(e) => setGradeForm({...gradeForm, diemCK: parseFloat(e.target.value)})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSaveGrade}
                className="flex-1 px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors"
              >
                Lưu Điểm
              </button>
              <button
                onClick={() => setShowGradeModal(false)}
                className="px-4 py-2 bg-neutral-600 rounded-lg hover:bg-neutral-500 transition-colors"
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Attendance Modal */}
      {showAttendanceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-neutral-800 p-6 rounded-2xl w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Điểm Danh</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Mã Sinh Viên</label>
                <input
                  type="text"
                  value={attendanceForm.maSV}
                  onChange={(e) => setAttendanceForm({...attendanceForm, maSV: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Lớp</label>
                <select
                  value={attendanceForm.lop}
                  onChange={(e) => setAttendanceForm({...attendanceForm, lop: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                >
                  <option value="CNTT2024">CNTT2024</option>
                  <option value="CNTT2023">CNTT2023</option>
                  <option value="KT2024">KT2024</option>
                  <option value="QTKD2024">QTKD2024</option>
                  <option value="TCNH2024">TCNH2024</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Số Tiết Nghỉ</label>
                <input
                  type="number"
                  min="0"
                  value={attendanceForm.soTietNghi}
                  onChange={(e) => setAttendanceForm({...attendanceForm, soTietNghi: parseInt(e.target.value)})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Tổng Số Tiết</label>
                <input
                  type="number"
                  min="1"
                  value={attendanceForm.tongTiet}
                  onChange={(e) => setAttendanceForm({...attendanceForm, tongTiet: parseInt(e.target.value)})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Tháng</label>
                <input
                  type="text"
                  value={attendanceForm.thang}
                  onChange={(e) => setAttendanceForm({...attendanceForm, thang: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                  placeholder="VD: 9/2024"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSaveAttendance}
                className="flex-1 px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors"
              >
                Lưu Điểm Danh
              </button>
              <button
                onClick={() => setShowAttendanceModal(false)}
                className="px-4 py-2 bg-neutral-600 rounded-lg hover:bg-neutral-500 transition-colors"
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Modal */}
      {showScheduleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-neutral-800 p-6 rounded-2xl w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">
              {editingSchedule ? "Sửa Lịch Học" : "Thêm Lịch Học"}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Môn Học</label>
                <select
                  value={scheduleForm.monHoc}
                  onChange={(e) => setScheduleForm({...scheduleForm, monHoc: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                >
                  <option value="">Chọn môn học</option>
                  {subjects.map(s => (
                    <option key={s.maMH} value={s.tenMH}>{s.tenMH}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Lớp</label>
                <select
                  value={scheduleForm.lop}
                  onChange={(e) => setScheduleForm({...scheduleForm, lop: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                >
                  <option value="">Chọn lớp</option>
                  {classes.map(c => (
                    <option key={c.maLop} value={c.maLop}>{c.maLop}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Thứ</label>
                <select
                  value={scheduleForm.thu}
                  onChange={(e) => setScheduleForm({...scheduleForm, thu: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                >
                  <option value="Thứ 2">Thứ 2</option>
                  <option value="Thứ 3">Thứ 3</option>
                  <option value="Thứ 4">Thứ 4</option>
                  <option value="Thứ 5">Thứ 5</option>
                  <option value="Thứ 6">Thứ 6</option>
                  <option value="Thứ 7">Thứ 7</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Tiết</label>
                <input
                  type="text"
                  value={scheduleForm.tiet}
                  onChange={(e) => setScheduleForm({...scheduleForm, tiet: e.target.value})}
                  placeholder="VD: 1-3"
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phòng</label>
                <input
                  type="text"
                  value={scheduleForm.phong}
                  onChange={(e) => setScheduleForm({...scheduleForm, phong: e.target.value})}
                  placeholder="VD: A101"
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Giảng Viên</label>
                <select
                  value={scheduleForm.giangVien}
                  onChange={(e) => setScheduleForm({...scheduleForm, giangVien: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                >
                  <option value="">Chọn giảng viên</option>
                  {teachers.map(t => (
                    <option key={t.maGV} value={t.hoTen}>{t.hoTen}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSaveSchedule}
                className="flex-1 px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors"
              >
                Lưu
              </button>
              <button
                onClick={() => setShowScheduleModal(false)}
                className="px-4 py-2 bg-neutral-600 rounded-lg hover:bg-neutral-500 transition-colors"
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tuition Modal */}
      {showTuitionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-neutral-800 p-6 rounded-2xl w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">
              {editingTuition ? "Sửa Học Phí" : "Tạo Học Phí"}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Mã Sinh Viên</label>
                <select
                  value={tuitionForm.maSV}
                  onChange={(e) => setTuitionForm({...tuitionForm, maSV: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                >
                  <option value="">Chọn sinh viên</option>
                  {students.map(s => (
                    <option key={s.maSV} value={s.maSV}>{s.maSV} - {s.hoTen}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Học Kỳ</label>
                <select
                  value={tuitionForm.hocky}
                  onChange={(e) => setTuitionForm({...tuitionForm, hocky: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                >
                  <option value="Học Kỳ 1 2024-2025">Học Kỳ 1 2024-2025</option>
                  <option value="Học Kỳ 2 2024-2025">Học Kỳ 2 2024-2025</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Số Tiền (VNĐ)</label>
                <input
                  type="number"
                  value={tuitionForm.soTien}
                  onChange={(e) => setTuitionForm({...tuitionForm, soTien: parseInt(e.target.value)})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Trạng Thái</label>
                <select
                  value={tuitionForm.trangThai}
                  onChange={(e) => setTuitionForm({...tuitionForm, trangThai: e.target.value})}
                  className="w-full px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 focus:border-cyan-500 outline-none"
                >
                  <option value="Chưa đóng">Chưa đóng</option>
                  <option value="Đã đóng">Đã đóng</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSaveTuition}
                className="flex-1 px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors"
              >
                Lưu
              </button>
              <button
                onClick={() => setShowTuitionModal(false)}
                className="px-4 py-2 bg-neutral-600 rounded-lg hover:bg-neutral-500 transition-colors"
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}