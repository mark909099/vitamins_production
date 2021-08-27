import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer1 from './Drawer1';
import green from '@material-ui/core/colors/green';
import {
    CardMedia,
    AppBar,
    Toolbar,
    IconButton,
    Grid,
    Button,
     } from '@material-ui/core';

const greenColor = green[700];

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
        height:'4.5rem',
        },
        [theme.breakpoints.up('sm')]: {
        height:'6.5rem',
        },
        [theme.breakpoints.up('md')]: {
        height:'9.5rem',
        },
    },
    container1: {
        backgroundImage:'url(/top1.jpg)',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        opacity:0.9
    },
    media: {
        [theme.breakpoints.up('xs')]: {
        height:'5.5rem',
        width:'5.5rem',   
        },
        [theme.breakpoints.up('sm')]: {
        height:'8rem',
        width:'8rem',   
        },
        [theme.breakpoints.up('md')]: {
        height:'11rem',
        width:'11rem',   
        },
    },
    btn: {
        [theme.breakpoints.up('xs')]: {
        height:'6rem',
        width:'6rem',   
        },
        [theme.breakpoints.up('sm')]: {
        height:'8rem',
        width:'8rem',   
        },
        [theme.breakpoints.up('md')]: {
        height:'11rem',
        width:'11rem',   
        },
    },
    center_grid: {
        textAlign: 'center',
    },
    btn_c: {
        [theme.breakpoints.up('xs')]: {
            fontSize:'1rem',
            },
            [theme.breakpoints.up('md')]: {
            fontSize:'1.5rem',
            },
    },
}));

export default function Top() {
    const classes = useStyles();
    return (
<div className={classes.root}>

<AppBar className={classes.container1}
position='absolute'
>
<Toolbar>
<Grid
  container
  direction="row"
  justify="flex-start"
  alignItems="center"
>

<Grid item xs={4}>
<IconButton className={classes.btn} href="/">
<CardMedia
className={classes.media}
image="/images/logo.png"
>
</CardMedia>
</IconButton>
</Grid>

<Grid item xs={4} className={classes.center_grid}> <Drawer1 /> </Grid>

<Grid item xs={4} className={classes.center_grid}></Grid>

</Grid>
</Toolbar>
</AppBar>



</div>
    )
};