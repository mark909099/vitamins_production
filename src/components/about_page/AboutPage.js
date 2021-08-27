import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Top from './../Top';
import Bottom1 from './../Bottom1';
import {
    Typography,
     } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding:'1rem',
        height:'100vh'
    },
    header: {
        paddingTop:'3.2rem',
        paddingBottom:'1rem',
        [theme.breakpoints.up('xs')]: {
        fontSize:'3rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'5rem',
        },
    },
   paragraph: {
       paddingBottom:'10rem',
       [theme.breakpoints.up('xs')]: {
       fontSize:'1.25rem',
       },
       [theme.breakpoints.up('md')]: {
       fontSize:'1.5rem',    
       },
   },
}));

export default function Aboutpg() {
    const classes = useStyles();
    return (
<div>
<Top />
<div className={classes.root}>
<Typography className={classes.header}
 variant='h1'
 >
About this website
</Typography>

<Typography className={classes.paragraph}
variant='body1'
>
This website contains information about vitamins and their essential role in the human body. <br/>
The functionality and the sources of the vitamins are shown in the <i>List of vitamins</i>. <br/>
</Typography>

<Typography
variant='body2'
>
This website is developed by Mark Lapin. ®2021 All rights reserved.
</Typography>
</div>

<div>
<Bottom1 />
</div>

</div>
    )
};