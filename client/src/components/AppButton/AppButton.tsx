import React from "react";
import { Button } from "@material-ui/core";

interface AppButtonProps {
  title: string;
  color?: "inherit" | "primary" | "secondary" | "default";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  other?: React.ReactNode;
}

const AppButton: React.FC<AppButtonProps> = ({
  title,
  color = "primary",
  onClick,
  ...other
}) => {
  return (
    <div className='button'>
      <Button
        variant='contained'
        color={color}
        className='button__style'
        onClick={onClick}
        {...other}
      >
        {title}
      </Button>
    </div>
  );
};

export default AppButton;
