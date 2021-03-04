import React from "react";
import { Container, Typography, Card, CardContent } from "@material-ui/core";

const AuthPage = () => {
  return (
    <div className='container'>
      <Container maxWidth='md'>
        <Card className='card'>
          <CardContent className='card__content'>
            <div className='card__header'>
              <Typography variant='h4' align='center'>
                Login
              </Typography>
              <Typography variant='h4' align='center'>
                Register
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default AuthPage;
