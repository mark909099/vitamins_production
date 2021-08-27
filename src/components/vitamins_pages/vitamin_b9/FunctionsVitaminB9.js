import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
     } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    paragraph: {
        [theme.breakpoints.up('xs')]: {
        fontSize:'1.25rem',
        },
        [theme.breakpoints.up('md')]: {
        fontSize:'1.5rem',    
        },
    },
}));

export default function VitaminFunctions() {
    const classes = useStyles();
    return (
<div>
<Typography className={classes.paragraph} paragraph='true' variant='body1'>
<ul>
    <li>
    help the body convert carbohydrates into glucose, which is used to produce energy.
    </li>
    <li>
    Crucial for proper brain function.
    </li>
    <li>
    Aids the production of DNA and RNA, the body's genetic material.
    </li>
    <li>
    Very important when cells and tissues are growing rapidly, such as in infancy, adolescence, and pregnancy.
    </li>
    <li>
    works closely with vitamin B12 to help make red blood cells and help iron work properly in the body.
    </li>
</ul>
</Typography>


</div>
    )
}