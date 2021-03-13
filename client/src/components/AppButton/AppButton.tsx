import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface AppButtonProps {
  title: string;
  onClick: () => void;
  color?: "inherit" | "primary" | "secondary" | "default";
  other?: React.ReactNode;
}

const useStyles = makeStyles({
  buttonStyle: { width: "100%", fontSize: "1.5rem", marginTop: "1rem" }
});

const AppButton: React.FC<AppButtonProps> = ({
  title,
  color = "primary",
  onClick,
  ...other
}) => {
  const classes = useStyles();

  return (
    <div className='button'>
      <Button
        variant='contained'
        color={color}
        className={classes.buttonStyle}
        onClick={onClick}
        {...other}
      >
        {title}
      </Button>
    </div>
  );
};

export default AppButton;
