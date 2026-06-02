import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth/authOptions";
import AdminLayoutComponent from "@/components/layout/AdminLayout/AdminLayout";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  return <AdminLayoutComponent session={session}>{children}</AdminLayoutComponent>;
}
