import React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Register from '../Container/register';

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

const Main: React.FC = () => {
  const styles = useStyle();
  return (
    <Box className={styles.background}>
      <Box className={styles.root}>
        <Register />
      </Box>
    </Box>
  );
};

export default Main;
