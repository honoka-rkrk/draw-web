import React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import { Button, Container, Grid, TextField } from '@mui/material';
import PageTitle from '../../../Other/Utils/Component/PageTitle';

const useStyle = makeStyles(() =>
  createStyles({
    background: {
      width: '100%',
      height: '100vh',
    },
    root: {
      display: 'grid',
      gridTemplateRows: '5% 50% 45%',
      gridTemplateColumns: '10.8% 78.4% 10.8%',
      height: 'calc(100vh - 70px)'
    }
  })
);

type RegisterProps = {
    doRegister:() => Promise<void>;
    email: string,
    password: string,
    passwordConfirmation: string,
    setEmail:React.Dispatch<React.SetStateAction<string>>;
    setPassword:React.Dispatch<React.SetStateAction<string>>;
    setPasswordConfirmation:React.Dispatch<React.SetStateAction<string>>;
}

const Register: React.FC<RegisterProps> = (props:RegisterProps) => {
const {doRegister = () => undefined, email ='', password = '', passwordConfirmation = '', setEmail = () => undefined,setPassword = () => undefined,setPasswordConfirmation = () => undefined,} = props;
  const styles = useStyle();
  return (
    <Container maxWidth="sm" sx={{ pt: 1, pb: 5 }}>
      <PageTitle text="Sign up" />
      <Grid container rowSpacing={2} sx={{ pb: 3 }}>
        <Grid item xs={6}>
          <TextField
            required
            id="email"
            label="Email"
            placeholder="sato@breakedge.jp"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Grid>
      </Grid>
      <Grid container rowSpacing={2} sx={{ pb: 3 }}>
        <Grid item xs={6}>
          <TextField
            required
            id="password"
            label="Password"
            placeholder="******"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Grid>
      </Grid>
      <Grid container rowSpacing={2} sx={{ pb: 3 }}>
        <Grid item xs={6}>
          <TextField
            required
            id="passwordConfirmation"
            label="passwordConfirmation"
            placeholder="******"
            type="password"
            value={passwordConfirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
          />
        </Grid>
      </Grid>
      <Button
        size="large"
        color="primary"
        variant="contained"
        onClick={() => doRegister()}
      >
        Sign up
      </Button>
    </Container>
  );
};

export default Register;
