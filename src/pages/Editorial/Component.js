import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Meta from 'components/Meta';

import useStyles from './styles';
import { Card } from '@material-ui/core';

function Page1() {
  const classes = useStyles();

  return (
    <>
      <Meta
        title="Page 1"
        description="Page 1"
      />
      <Container maxWidth='md'>
      <br/>
      <Card className={classes.root} >
        <CardMedia
          className={classes.media}
          image="/src/components/images/avenger.jpg"
          title='avenger'
        />
        </Card>
      </Container>
    </>
  );
}

export default Page1;
