import React from "react";
import { Button } from "@material-ui/core";

interface AppButtonProps {
  title: string;
  color?: "inherit" | "primary" | "secondary" | "default";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const AppButton: React.FC<AppButtonProps> = ({
  title,
  color = "primary",
  onClick
}) => {
  return (
    <div className='button'>
      <Button
        variant='contained'
        color={color}
        className='button__style'
        onClick={onClick}
      >
        {title}
      </Button>
    </div>
  );
};

export default AppButton;
