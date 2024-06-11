import { Button } from "@material-tailwind/react";
import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  title: string;
  onClick?: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  type = "button",
  className = "",
  onClick,
  title,
}) => {
  return (
    <Button type={type} className={className} onClick={onClick}>
      {title}
    </Button>
  );
};

export default ButtonComponent;
