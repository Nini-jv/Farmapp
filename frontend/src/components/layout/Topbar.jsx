import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Sun, Moon, LogOut, RefreshCw, Wifi, WifiOff, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { useSync } from '../../context/SyncContext';

export const Topbar = ({ onOpenSidebar }) => {
  const { user, logout, isAdmin } = useAuth();
  const { theme, toggleTheme, isDark } = useTheme();
  const { isOnline, isSyncing, pendingCount, conflictsCount, syncNow } = useSync();

  return (
    <header className="h-16 sticky top-0 z-30 bg-[#EDEAD2]/95 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-300 dark:border-slate-800 flex items-center justify-between px-4 sm:px-6 lg:px-8 transition-colors">
      {/* Left side: Hamburger button + role badge */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onOpenSidebar}
          className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-[#E2DEC2] transition-colors"
        >
          <Menu className="w-5 h-5 text-brand-700" />
        </button>

        <div className="hidden sm:flex items-center gap-2">
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-brand-100 text-brand-900 border border-brand-300">
            {isAdmin ? 'Admin Console' : 'Manager Portal'}
          </span>
        </div>
      </div>

      {/* Right side: Sync Status, Theme Toggle, Profile */}
      <div className="flex items-center gap-3">
        {/* Offline / Online Sync Indicator Badge */}
        <div className="flex items-center gap-2">
          {isOnline ? (
            <div className="flex items-center gap-2 bg-brand-100 text-brand-900 border border-brand-300 px-2.5 py-1 rounded-full text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
              <span className="hidden md:inline">Online</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 bg-rose-100 text-rose-800 border border-rose-300 px-2.5 py-1 rounded-full text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-rose-600" />
              <span>Offline ({pendingCount} pending)</span>
            </div>
          )}

          {/* Pending Changes / Sync Now Button in Green Palette */}
          <button
            onClick={() => syncNow(false)}
            disabled={isSyncing || !isOnline}
            title="Synchronize local changes with central database"
            className="flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full bg-brand-600 hover:bg-brand-700 text-white shadow-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">{isSyncing ? 'Syncing...' : 'Sync Now'}</span>
          </button>

          {/* Conflict Alert Link if any */}
          {conflictsCount > 0 && (
            <Link
              to="/admin/sync-conflicts"
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold rounded-full bg-amber-100 text-amber-900 border border-amber-300 animate-bounce"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
              <span>{conflictsCount} Conflict{conflictsCount > 1 ? 's' : ''}</span>
            </Link>
          )}
        </div>

        {/* User Pill */}
        <div className="flex items-center gap-3 pl-2 border-l border-slate-300">
          <div className="flex flex-col items-end">
            <span className="text-xs font-bold text-slate-900">
              {user?.full_name || user?.username || 'Admin'}
            </span>
            <span className="text-[10px] font-semibold text-brand-700">
              {user?.email || 'Platform Admin'}
            </span>
          </div>

          <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-800 border border-brand-300 flex items-center justify-center font-bold text-xs">
            {user?.full_name ? user.full_name.charAt(0).toUpperCase() : (user?.username ? user.username.charAt(0).toUpperCase() : 'A')}
          </div>
        </div>
      </div>
    </header>
  );
};
