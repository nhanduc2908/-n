"use client";

import { useState } from "react";

export default function Home() {
  const [activeMenu, setActiveMenu] = useState("Sinh Viên");

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

  const students = [
    { stt: 1, maSV: "SV001", hoTen: "Nguyễn Minh Tuấn", ngaySinh: "2004-03-12", gioiTinh: "Nam", lop: "CNTT2024", email: "minhtuan@edu.vn", sdt: "0901234567", diaChi: "Hà Nội" },
    { stt: 2, maSV: "SV002", hoTen: "Trần Thị Hương", ngaySinh: "2004-05-20", gioiTinh: "Nữ", lop: "CNTT2024", email: "huongtr@edu.vn", sdt: "0902345678", diaChi: "TP.HCM" },
    { stt: 3, maSV: "SV003", hoTen: "Lê Đình Phong", ngaySinh: "2003-08-15", gioiTinh: "Nam", lop: "CNTT2023", email: "phongle@edu.vn", sdt: "0903456789", diaChi: "Đà Nẵng" },
    { stt: 4, maSV: "SV004", hoTen: "Phạm Thị Mai", ngaySinh: "2004-01-25", gioiTinh: "Nữ", lop: "CNTT2024", email: "maipham@edu.vn", sdt: "0904567890", diaChi: "Hải Phòng" },
    { stt: 5, maSV: "SV005", hoTen: "Hoàng Đức Long", ngaySinh: "2003-11-08", gioiTinh: "Nam", lop: "CNTT2023", email: "longho@edu.vn", sdt: "0905678901", diaChi: "Huế" },
  ];

  const classes = [
    { stt: 1, maLop: "CNTT2024", tenLop: "Công Nghệ Thông Tin 2024", siSo: 35, giangVien: "TS. Nguyễn Văn A", nam: 2024 },
    { stt: 2, maLop: "CNTT2023", tenLop: "Công Nghệ Thông Tin 2023", siSo: 40, giangVien: "TS. Trần Thị B", nam: 2023 },
    { stt: 3, maLop: "KT2024", tenLop: "Kế Toán 2024", siSo: 30, giangVien: "TS. Lê Văn C", nam: 2024 },
    { stt: 4, maLop: "QTKD2024", tenLop: "Quản Trị Kinh Doanh 2024", siSo: 28, giangVien: "TS. Phạm Thị D", nam: 2024 },
    { stt: 5, maLop: "TCNH2024", tenLop: "Tài Chính Ngân Hàng 2024", siSo: 32, giangVien: "TS. Hoàng Văn E", nam: 2024 },
  ];

  const subjects = [
    { stt: 1, maMH: "INT1004", tenMH: "Lập Trình Cơ Bản", soTin: 3, giangVien: "TS. Nguyễn Văn A", soTiet: 45 },
    { stt: 2, maMH: "INT1005", tenMH: "Cấu Trúc Dữ Liệu", soTin: 4, giangVien: "TS. Trần Thị B", soTiet: 60 },
    { stt: 3, maMH: "INT1006", tenMH: "Cơ Sở Dữ Liệu", soTin: 3, giangVien: "TS. Lê Văn C", soTiet: 45 },
    { stt: 4, maMH: "INT1007", tenMH: "Mạng Máy Tính", soTin: 3, giangVien: "TS. Phạm Thị D", soTiet: 45 },
    { stt: 5, maMH: "INT1008", tenMH: "Lập Trình Web", soTin: 4, giangVien: "TS. Hoàng Văn E", soTiet: 60 },
  ];

  const teachers = [
    { stt: 1, maGV: "GV001", hoTen: "Nguyễn Văn A", email: "nguyenvana@edu.vn", sdt: "0911234567", mon: "Lập Trình Cơ Bản" },
    { stt: 2, maGV: "GV002", hoTen: "Trần Thị B", email: "tranthib@edu.vn", sdt: "0912345678", mon: "Cấu Trúc Dữ Liệu" },
    { stt: 3, maGV: "GV003", hoTen: "Lê Văn C", email: "levanc@edu.vn", sdt: "0913456789", mon: "Cơ Sở Dữ Liệu" },
    { stt: 4, maGV: "GV004", hoTen: "Phạm Thị D", email: "phamthid@edu.vn", sdt: "0914567890", mon: "Mạng Máy Tính" },
    { stt: 5, maGV: "GV005", hoTen: "Hoàng Văn E", email: "hoangvane@edu.vn", sdt: "0915678901", mon: "Lập Trình Web" },
  ];

  const schedules = [
    { stt: 1, monHoc: "Lập Trình Cơ Bản", lop: "CNTT2024", thu: "Thứ 2", tiet: "1-3", phong: "A101", giangVien: "TS. Nguyễn Văn A" },
    { stt: 2, monHoc: "Cấu Trúc Dữ Liệu", lop: "CNTT2024", thu: "Thứ 3", tiet: "4-6", phong: "A102", giangVien: "TS. Trần Thị B" },
    { stt: 3, monHoc: "Cơ Sở Dữ Liệu", lop: "CNTT2023", thu: "Thứ 4", tiet: "1-3", phong: "A103", giangVien: "TS. Lê Văn C" },
    { stt: 4, monHoc: "Mạng Máy Tính", lop: "CNTT2023", thu: "Thứ 5", tiet: "4-6", phong: "A104", giangVien: "TS. Phạm Thị D" },
    { stt: 5, monHoc: "Lập Trình Web", lop: "CNTT2024", thu: "Thứ 6", tiet: "7-9", phong: "A105", giangVien: "TS. Hoàng Văn E" },
  ];

  const tuition = [
    { stt: 1, maSV: "SV001", hoTen: "Nguyễn Minh Tuấn", lop: "CNTT2024", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-15" },
    { stt: 2, maSV: "SV002", hoTen: "Trần Thị Hương", lop: "CNTT2024", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-16" },
    { stt: 3, maSV: "SV003", hoTen: "Lê Đình Phong", lop: "CNTT2023", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Chưa đóng", ngayDong: "-" },
    { stt: 4, maSV: "SV004", hoTen: "Phạm Thị Mai", lop: "CNTT2024", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-14" },
    { stt: 5, maSV: "SV005", hoTen: "Hoàng Đức Long", lop: "CNTT2023", hocky: "Học Kỳ 1 2024-2025", soTien: 15000000, trangThai: "Đã đóng", ngayDong: "2024-08-17" },
  ];

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
                { label: "Giảng Viên", value: "56", change: "+3%" },
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
              <button className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors">
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
                        <button className="text-cyan-400 hover:text-cyan-300 mr-2 text-sm">Sửa</button>
                        <button className="text-red-400 hover:text-red-300 text-sm">Xóa</button>
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
              <button className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors">
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
                        <button className="text-cyan-400 hover:text-cyan-300 mr-2 text-sm">Sửa</button>
                        <button className="text-red-400 hover:text-red-300 text-sm">Xóa</button>
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
              <button className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors">
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
                        <button className="text-cyan-400 hover:text-cyan-300 mr-2 text-sm">Sửa</button>
                        <button className="text-red-400 hover:text-red-300 text-sm">Xóa</button>
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
              <button className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors">
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
                      <td className="px-4 py-3 text-sm">{t.mon}</td>
                      <td className="px-4 py-3 text-sm text-cyan-400">{t.email}</td>
                      <td className="px-4 py-3 text-sm">{t.sdt}</td>
                      <td className="px-4 py-3">
                        <button className="text-cyan-400 hover:text-cyan-300 mr-2 text-sm">Sửa</button>
                        <button className="text-red-400 hover:text-red-300 text-sm">Xóa</button>
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
              <button className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors">
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
                  {schedules.map((s, i) => (
                    <tr key={i} className="hover:bg-neutral-700/30">
                      <td className="px-4 py-3 text-sm">{s.stt}</td>
                      <td className="px-4 py-3 text-sm font-medium">{s.monHoc}</td>
                      <td className="px-4 py-3 text-sm">{s.lop}</td>
                      <td className="px-4 py-3 text-sm">{s.thu}</td>
                      <td className="px-4 py-3 text-sm">{s.tiet}</td>
                      <td className="px-4 py-3 text-sm">{s.phong}</td>
                      <td className="px-4 py-3 text-sm">{s.giangVien}</td>
                      <td className="px-4 py-3">
                        <button className="text-cyan-400 hover:text-cyan-300 mr-2 text-sm">Sửa</button>
                        <button className="text-red-400 hover:text-red-300 text-sm">Xóa</button>
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
              <button className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors">
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
                        <button className="text-cyan-400 hover:text-cyan-300 mr-2 text-sm">Xem</button>
                        <button className="text-red-400 hover:text-red-300 text-sm">Xóa</button>
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
          <div className="bg-neutral-800 rounded-2xl border border-neutral-700 p-8">
            <h2 className="text-xl font-semibold mb-4">Điểm Danh</h2>
            <p className="text-neutral-400 mb-4">Chọn lớp để điểm danh:</p>
            <div className="space-y-3">
              {classes.map((c, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-neutral-700 rounded-lg">
                  <div>
                    <p className="font-medium">{c.tenLop}</p>
                    <p className="text-sm text-neutral-400">Giảng viên: {c.giangVien}</p>
                  </div>
                  <button className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors">
                    Điểm Danh
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case "Điểm Số":
        return (
          <div className="bg-neutral-800 rounded-2xl border border-neutral-700 p-8">
            <h2 className="text-xl font-semibold mb-4">Quản Lý Điểm</h2>
            <p className="text-neutral-400 mb-4">Chọn lớp và môn học để nhập điểm:</p>
            <div className="space-y-3">
              {subjects.map((s, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-neutral-700 rounded-lg">
                  <div>
                    <p className="font-medium">{s.tenMH}</p>
                    <p className="text-sm text-neutral-400">Giảng viên: {s.giangVien}</p>
                  </div>
                  <button className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors">
                    Nhập Điểm
                  </button>
                </div>
              ))}
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
    </div>
  );
}