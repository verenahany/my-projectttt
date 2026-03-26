import { LayoutDashboard, Users, Settings, MessageCircle, Bell, Search, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import Logo from './Logo'

const NAV_ITEMS = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'search', label: 'Search', icon: Search },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const isCollapsed = collapsed

  return (
    <aside className={`sidebar ${isCollapsed ? 'sidebar--collapsed' : ''}`}>
      <div className="sidebar__header">
        {!isCollapsed && <Logo />}
        <button
          className="sidebar__toggle"
          onClick={() => setCollapsed((c) => !c)}
          aria-label="Toggle sidebar"
        >
          {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </div>

      <nav className="sidebar__nav">
        {NAV_ITEMS.map((item, idx) => {
          const Icon = item.icon
          const active = idx === 0
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`sidebar__item ${active ? 'sidebar__item--active' : ''}`}
              title={isCollapsed ? item.label : undefined}
            >
              <Icon size={18} />
              {!isCollapsed && <span>{item.label}</span>}
            </a>
          )
        })}
      </nav>

      {<div className="sidebar__footer">
        <span>{isCollapsed ? 'v1' : 'Version 1.0'}</span>
      </div>}
    </aside>
  )
}
