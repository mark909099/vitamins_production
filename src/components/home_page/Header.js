import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Top from './../Top';
import Bottom1 from './../Bottom1';
import {
    Typography,
    Grid,
    Hidden,
     } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding:'1rem',
    },
    header: {
        paddingTop:'2rem',
        [theme.breakpoints.up('xs')]: {
        fontSize:'5.5rem',
        },
        [theme.breakpoints.up('sm')]: {
        fontSize:'7rem',
        },
        [theme.breakpoints.up('md')]: {
        fontSize:'6rem',
        },
        [theme.breakpoints.up('lg')]: {
        fontSize:'8rem',
        },
    },
    sub_header: {
        [theme.breakpoints.up('md')]: {
        fontSize:'2rem',
        },
        [theme.breakpoints.up('lg')]: {
        fontSize:'2.6rem',
        },
    }
}));

export default function HomePage() {
    const classes = useStyles();
    return (
<div className={classes.root}>

<Grid
  container
  direction="column"
  justify="center"
  alignItems="center"
>

<Grid item> <Typography className={classes.header} variant='h1'>Vitamins</Typography> </Grid>
<Hidden smDown>
<Grid item> <Typography className={classes.sub_header} variant='h3'>Essential micronutrients for proper functioning</Typography> </Grid>
</Hidden>
</Grid>
</div>

    )
}