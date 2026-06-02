"use client";

import { Button } from "antd";
import type { ButtonProps } from "antd";

interface BaseButtonProps extends ButtonProps {
  text?: string | React.ReactNode;
}

export default function BaseButton({
  color,
  type = "primary",
  htmlType = "button",
  variant,
  onClick,
  disabled = false,
  loading,
  text,
  icon,
  className = "",
  ...props
}: BaseButtonProps) {
  return (
    <Button
      color={color}
      htmlType={htmlType}
      type={type}
      variant={variant}
      className={`h-10! rounded-lg! text-sm! ${className}`.trim()}
      onClick={onClick}
      disabled={disabled}
      loading={loading}
      icon={icon}
      {...props}
    >
      {text}
    </Button>
  );
}
