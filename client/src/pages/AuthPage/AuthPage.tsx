import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Tab,
  Paper,
  Tabs,
  Box
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
    <div className='auth__form'>
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

        <TabPanel value={value} index={0}>
          Login
        </TabPanel>
        <TabPanel value={value} index={1}>
          Register
        </TabPanel>
      </Paper>
    </div>
  );
};

export default AuthPage;
