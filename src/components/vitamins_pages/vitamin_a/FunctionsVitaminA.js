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
    Helps form and maintain healthy teeth, bones, soft tissue, mucous membranes, and skin.
    </li>
    <li>
    Has a role in healthy pregnancy and breastfeeding.
    </li>
    <li>
    Needed for the immune system work properly.
    </li>
    <li>
    Helps vision in dim light.
    </li>
</ul>
</Typography>


</div>
    )
}