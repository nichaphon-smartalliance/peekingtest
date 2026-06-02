"use client";

import type { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { LogOut, Activity } from "lucide-react";
import { Button } from "antd";

interface AdminLayoutProps {
  children: React.ReactNode;
  session: Session;
}

export default function AdminLayout({ children, session }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 h-14 flex items-center px-6 gap-3 sticky top-0 z-10">
        <Activity className="w-5 h-5 text-blue-600" />
        <span className="text-lg font-semibold text-slate-800">Peeking</span>
        <div className="ml-auto flex items-center gap-3">
          <span className="text-sm text-slate-500">{session.user?.name}</span>
          <Button
            type="text"
            icon={<LogOut size={16} />}
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="text-slate-500 hover:text-red-500!"
          >
            ออกจากระบบ
          </Button>
        </div>
      </header>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
