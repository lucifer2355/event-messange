import React, { useState } from "react";
import {
  Container,
  Typography,
  Tab,
  Paper,
  Tabs,
  Box,
  TextField,
  Grid,
  Button
} from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";

const validator = Yup.object().shape({
  email: Yup.string()
    .email()
    .label("Email")
    .required(),
  password: Yup.string()
    .min(4, "Too Short")
    .max(15, "Too long!")
    .label("Password")
    .required()
});

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
      <Container maxWidth='sm'>
        <Paper square>
          <Tabs
            value={value}
            indicatorColor='primary'
            textColor='primary'
            onChange={handleChange}
            variant='fullWidth'
            aria-label='auth form tabs'
          >
            <Tab label={<span className='tab__label'>Login</span>} />
            <Tab label={<span className='tab__label'>Register</span>} />
          </Tabs>

          {/* <form className='form' noValidate autoComplete='off'> */}
          <TabPanel value={value} index={0}>
            <Grid container spacing={1} justify='center'>
              <Grid item xs={8} sm={8} md={8} className='auth__grid'>
                {/* <div className='form__textfield-div'>
                  <TextField
                    id='email'
                    label='Email'
                    variant='outlined'
                    type='email'
                    InputProps={{ style: { fontSize: "1.5rem" } }}
                    InputLabelProps={{ style: { fontSize: "1.5rem" } }}
                    className='form__textfield'
                  />
                </div>

                <div className='form__textfield-div'>
                  <TextField
                    id='password'
                    label='Password'
                    variant='outlined'
                    type='password'
                    InputProps={{ style: { fontSize: "1.5rem" } }}
                    InputLabelProps={{ style: { fontSize: "1.5rem" } }}
                    className='form__textfield'
                  />
                </div>

                <div className='form__textfield-div'>
                  <Button
                    variant='contained'
                    color='primary'
                    style={{
                      width: "100%",
                      fontSize: "1.5rem",
                      marginTop: "1rem"
                    }}
                  >
                    Login
                  </Button>
                </div> */}
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Register
          </TabPanel>
          {/* </form> */}
        </Paper>
      </Container>
    </div>
  );
};

export default AuthPage;
