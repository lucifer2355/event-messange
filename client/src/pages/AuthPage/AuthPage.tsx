import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Tab,
  Paper,
  Tabs
} from "@material-ui/core";

const AuthPage: React.FC = () => {
  const [value, setValue] = useState<number>(1);

  const handleChange: any = (e: React.FormEvent, value: number) => {
    e.preventDefault();
    setValue(value);
  };

  return (
    <div className='container'>
      <Container maxWidth='md'>
        <Card className='card'>
          <CardContent className='card__content'>
            <Paper square>
              <Tabs
                value={value}
                indicatorColor='primary'
                textColor='primary'
                onChange={handleChange}
                aria-label='disabled tabs example'
              >
                <Tab label='Login' />
                <Tab label='Register' />
              </Tabs>
            </Paper>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default AuthPage;
