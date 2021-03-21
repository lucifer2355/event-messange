import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";

import AppButton from "../../components/AppButton/AppButton";

const HomePage: React.FC = () => {
  return (
    <div className='appbar'>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h3' className='appbar__title'>
            Welcome Dhruvil
          </Typography>
          <AppButton
            title='LOGOUT'
            color='secondary'
            onClick={() => console.log("logout handler")}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HomePage;
