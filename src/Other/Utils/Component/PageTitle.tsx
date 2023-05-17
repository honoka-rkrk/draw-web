import React, { useMemo } from 'react';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      color: 'rgba(0, 0, 0, 0.6)',
    },
  }),
);

type Props = {
  text: string;
};

const PageTitle: React.FC<Props> = ({ text }) => {
  const classes = useStyles();

  return useMemo(
    () => <h2 className={classes.title}>{text}</h2>,
    [text, classes.title],
  );
};

export default PageTitle;
