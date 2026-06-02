"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Form, Input, message, Alert } from "antd";
import { Eye, EyeOff, Activity } from "lucide-react";
import { BaseButton } from "@/components/ui/Button";

interface LoginFormValues {
  username: string;
  password: string;
}

export default function LoginContent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form] = Form.useForm<LoginFormValues>();
  const router = useRouter();

  const handleSubmit = async (values: LoginFormValues) => {
    setLoading(true);
    setError(null);
    try {
      const result = await signIn("credentials", {
        username: values.username,
        password: values.password,
        redirect: false,
      });

      if (result?.error) {
        setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
      } else {
        message.success("เข้าสู่ระบบสำเร็จ");
        router.push("/dashboard");
        router.refresh();
      }
    } catch {
      setError("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950">
      <div className="w-full max-w-sm mx-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 rounded-2xl mb-4">
              <Activity className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-slate-800">Peeking</h1>
            <p className="text-slate-500 text-sm mt-1">ระบบติดตาม API Linkage 2</p>
          </div>

          {error && (
            <Alert
              type="error"
              message={error}
              className="mb-4 rounded-lg!"
              showIcon
            />
          )}

          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            size="large"
            requiredMark={false}
          >
            <Form.Item
              name="username"
              label="ชื่อผู้ใช้"
              rules={[{ required: true, message: "กรุณากรอกชื่อผู้ใช้" }]}
            >
              <Input
                placeholder="กรอกชื่อผู้ใช้"
                autoComplete="username"
                className="rounded-lg!"
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="รหัสผ่าน"
              rules={[{ required: true, message: "กรุณากรอกรหัสผ่าน" }]}
              className="mb-6"
            >
              <Input.Password
                placeholder="กรอกรหัสผ่าน"
                autoComplete="current-password"
                className="rounded-lg!"
                iconRender={(visible) =>
                  visible ? <Eye size={16} /> : <EyeOff size={16} />
                }
              />
            </Form.Item>

            <Form.Item className="mb-0">
              <BaseButton
                htmlType="submit"
                loading={loading}
                text="เข้าสู่ระบบ"
                className="w-full! h-11!"
              />
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
