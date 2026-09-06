import React from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import {
  LayoutDashboard,
  CalendarCheck,
  Users,
  CalendarDays,
  Building2,
  FileSpreadsheet,
  History,
  Database,
  Settings,
  Sparkles,
  ChevronRight,
  SunMedium,
  LogOut,
  UserCheck,
  Smartphone,
  AlertTriangle,
  Sprout
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const Sidebar = ({ isOpen, onClose }) => {
  const { user, isAdmin, logout } = useAuth();
  const location = useLocation();

  const navSections = [
    {
      title: 'Workforce',
      items: [
        { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
        { name: 'Employees & Users', path: '/admin/users', icon: Users },
      ],
    },
    {
      title: 'Analytics & Management',
      items: [
        { name: 'Sync Conflicts', path: '/admin/sync-conflicts', icon: AlertTriangle },
        { name: 'Audit Logs', path: '/admin/audit-logs', icon: History },
      ],
    },
  ];

  if (isAdmin) {
    navSections.push({
      title: 'Administration',
      items: [
        { name: 'Registered Devices', path: '/admin/devices', icon: Smartphone },
        { name: 'System Settings', path: '/admin/settings', icon: Settings },
      ],
    });
  }

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-40 w-64 bg-[#F6F4E8] dark:bg-slate-900 border-r border-slate-300 dark:border-slate-800 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="h-16 flex items-center gap-3 px-6 border-b border-slate-300 dark:border-slate-800">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-md shadow-brand-600/20">
              <Sprout className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-sm font-black text-slate-900 tracking-tight leading-none">
                Farm<span className="text-brand-600">App</span>
              </h1>
              <span className="text-[11px] font-bold text-slate-500">
                Operations Suite
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation items */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-6">
          {navSections.map((section, idx) => (
            <div key={idx} className="space-y-1">
              <div className="px-3 text-[11px] font-black uppercase tracking-wider text-slate-500 mb-2">
                {section.title}
              </div>
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => {
                      if (window.innerWidth < 1024) onClose();
                    }}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-bold transition-all duration-150 group ${
                      isActive
                        ? 'bg-brand-100 text-brand-900 border border-brand-300'
                        : 'text-slate-700 hover:bg-[#EDEAD2] hover:text-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        className={`w-4 h-4 transition-colors ${
                          isActive
                            ? 'text-brand-700'
                            : 'text-brand-600 group-hover:text-brand-700'
                        }`}
                      />
                      <span>{item.name}</span>
                    </div>
                    {isActive && (
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                    )}
                  </NavLink>
                );
              })}
            </div>
          ))}
        </div>

        {/* User Card in Sidebar Footer */}
        <div className="p-4 border-t border-slate-300 bg-[#EDEAD2]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-9 h-9 rounded-full bg-brand-100 text-brand-800 border border-brand-300 flex items-center justify-center font-bold text-xs shrink-0">
                {user?.full_name ? user.full_name.charAt(0).toUpperCase() : (user?.username ? user.username.charAt(0).toUpperCase() : 'A')}
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-bold text-slate-900 truncate">
                  {user?.full_name || user?.username || 'Admin'}
                </div>
                <div className="text-[10px] font-bold text-brand-700 uppercase tracking-wider">
                  {user?.role || 'Administrator'}
                </div>
              </div>
            </div>
            <button
              onClick={logout}
              title="Logout"
              className="p-1.5 rounded-lg text-slate-500 hover:text-rose-700 hover:bg-rose-50 transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
