import React, { useState } from "react";
import {
  Container,
  Typography,
  Tab,
  Paper,
  Tabs,
  Box,
  TextField
} from "@material-ui/core";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({
  children,
  index,
  value,
  ...other
}) => {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`auth-form-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const AuthPage: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <div className='auth__container'>
      <Container maxWidth='md'>
        <Paper square>
          <Tabs
            value={value}
            indicatorColor='primary'
            textColor='primary'
            onChange={handleChange}
            variant='fullWidth'
            aria-label='auth form tabs'
          >
            <Tab label='Login' />
            <Tab label='Register' />
          </Tabs>

          <form className='auth__form' noValidate autoComplete='off'>
            <TabPanel value={value} index={0}>
              <div className='auth__form__login'>
                <TextField
                  id='email'
                  label='Email'
                  variant='outlined'
                  type='email'
                />
                <TextField
                  id='password'
                  label='Password'
                  variant='outlined'
                  type='password'
                />
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Register
            </TabPanel>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default AuthPage;
