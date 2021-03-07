import React from "react";
import { Button } from "@material-ui/core";

interface AppButtonProps {
  title: string;
  color: "inherit" | "primary" | "secondary" | "default";
}

const AppButton: React.FC<AppButtonProps> = ({ title, color }) => {
  return (
    <div className='button'>
      <Button variant='contained' color={color} className='button__style'>
        {title}
      </Button>
    </div>
  );
};

export default AppButton;
