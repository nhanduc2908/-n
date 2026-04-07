export default function Home() {
  const menuItems = [
    { icon: "🏠", label: "Dashboard", href: "#" },
    { icon: "📊", label: "Analytics", href: "#" },
    { icon: "💰", label: "Finance", href: "#" },
    { icon: "👥", label: "Users", href: "#" },
    { icon: "📦", label: "Products", href: "#" },
    { icon: "🛒", label: "Orders", href: "#" },
    { icon: "📁", label: "Files", href: "#" },
    { icon: "📅", label: "Calendar", href: "#" },
    { icon: "💬", label: "Messages", href: "#" },
    { icon: "🔔", label: "Notifications", href: "#" },
    { icon: "⚙️", label: "Settings", href: "#" },
    { icon: "🛠️", label: "Tools", href: "#" },
    { icon: "❓", label: "Help", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex">
      <aside className="w-64 bg-neutral-800 border-r border-neutral-700 fixed h-full">
        <div className="p-6 border-b border-neutral-700">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Brand
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
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-neutral-400">admin@example.com</span>
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
          </div>
        </header>

        <div className="p-8">
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Total Revenue", value: "$124,500", change: "+12%" },
              { label: "Users", value: "8,234", change: "+8%" },
              { label: "Orders", value: "1,456", change: "+23%" },
              { label: "Growth", value: "34%", change: "+5%" },
            ].map((stat, i) => (
              <div key={i} className="bg-neutral-800 p-6 rounded-2xl border border-neutral-700">
                <p className="text-neutral-400 text-sm">{stat.label}</p>
                <p className="text-3xl font-bold mt-2">{stat.value}</p>
                <p className="text-green-400 text-sm mt-2">{stat.change} vs last month</p>
              </div>
            ))}
          </div>

          <div className="bg-neutral-800 rounded-2xl border border-neutral-700 p-8">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <p className="text-neutral-400">No recent activity to display.</p>
          </div>
        </div>
      </main>
    </div>
  );
}