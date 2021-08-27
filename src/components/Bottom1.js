import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
     Grid,
     Button,
     } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    grid_item: {
        textAlign:'center',
        backgroundColor: '#6c757d',
        paddingTop:'1rem',
        paddingBottom:'0.5rem',
    },
    text: {
        fontWeight:'700',
        fontFamily:'David',
        fontSize:'1rem'
    }
}));

export default function Bottom1() {
    const classes = useStyles();
    return (
<div>

<Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>


<Grid className={classes.grid_item} item xs={12} md={4}> <Button className={classes.text} href="/about">About</Button> </Grid>
<Grid className={classes.grid_item} item xs={12} md={4}> <Button className={classes.text} href="/contact">Contact</Button> </Grid>
<Grid className={classes.grid_item} item xs={12} md={4}> <Button className={classes.text} href="/terms_of_use">Terms of use</Button> </Grid>


</Grid>

</div>
    )
};