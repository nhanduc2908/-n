"use client";

import { useState } from "react";

export default function Home() {
  const menuItems = [
    { icon: "🏠", label: "Dashboard", href: "#" },
    { icon: "🎓", label: "Sinh Viên", href: "#" },
    { icon: "📚", label: "Lớp Học", href: "#" },
    { icon: "📖", label: "Môn Học", href: "#" },
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

  const [students] = useState([
    { stt: 1, maSV: "SV001", hoTen: "Nguyễn Văn A", ngaySinh: "2004-05-15", gioiTinh: "Nam", email: "sv001@edu.vn", sdt: "0901234567", diaChi: "Hà Nội" },
    { stt: 2, maSV: "SV002", hoTen: "Trần Thị B", ngaySinh: "2004-08-20", gioiTinh: "Nữ", email: "sv002@edu.vn", sdt: "0902345678", diaChi: "TP.HCM" },
    { stt: 3, maSV: "SV003", hoTen: "Lê Văn C", ngaySinh: "2003-12-10", gioiTinh: "Nam", email: "sv003@edu.vn", sdt: "0903456789", diaChi: "Đà Nẵng" },
    { stt: 4, maSV: "SV004", hoTen: "Phạm Thị D", ngaySinh: "2004-03-25", gioiTinh: "Nữ", email: "sv004@edu.vn", sdt: "0904567890", diaChi: "Hải Phòng" },
    { stt: 5, maSV: "SV005", hoTen: "Hoàng Văn E", ngaySinh: "2003-11-08", gioiTinh: "Nam", email: "sv005@edu.vn", sdt: "0905678901", diaChi: "Huế" },
  ]);

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
            <a
              key={i}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-neutral-700 transition-colors text-neutral-300 hover:text-white"
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>

      <main className="ml-64 flex-1">
        <header className="bg-neutral-800/50 border-b border-neutral-700 px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Quản Lý Sinh Viên</h1>
          <div className="flex items-center gap-4">
            <span className="text-neutral-400">admin@edu.vn</span>
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
          </div>
        </header>

        <div className="p-8">
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Tổng Sinh Viên", value: "1,234", change: "+5%" },
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
                    <th className="px-6 py-3 text-left text-sm font-medium text-neutral-300">STT</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-neutral-300">Mã SV</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-neutral-300">Họ Tên</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-neutral-300">Ngày Sinh</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-neutral-300">Giới Tính</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-neutral-300">Email</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-neutral-300">SĐT</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-neutral-300">Địa Chỉ</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-neutral-300">Thao Tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-700">
                  {students.map((student, i) => (
                    <tr key={i} className="hover:bg-neutral-700/30 transition-colors">
                      <td className="px-6 py-4 text-sm">{student.stt}</td>
                      <td className="px-6 py-4 text-sm">{student.maSV}</td>
                      <td className="px-6 py-4 text-sm font-medium">{student.hoTen}</td>
                      <td className="px-6 py-4 text-sm">{student.ngaySinh}</td>
                      <td className="px-6 py-4 text-sm">{student.gioiTinh}</td>
                      <td className="px-6 py-4 text-sm text-cyan-400">{student.email}</td>
                      <td className="px-6 py-4 text-sm">{student.sdt}</td>
                      <td className="px-6 py-4 text-sm">{student.diaChi}</td>
                      <td className="px-6 py-4">
                        <button className="text-cyan-400 hover:text-cyan-300 mr-3">Sửa</button>
                        <button className="text-red-400 hover:text-red-300">Xóa</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}