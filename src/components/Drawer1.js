import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {
    List,
    ListItem,
    Button,
    Drawer,
     } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    btn: {
        paddingBottom:'1rem',
    },
    list_vitamins: {
        [theme.breakpoints.up('xs')]: {
        fontSize:'1.5rem',
        color:'white',
        border:'3px solid',
        borderColor:'#f1faee',
        },
        [theme.breakpoints.up('md')]: {
        fontSize:'2.2rem',
        color:'white',
        border:'3px solid',
        borderColor:'#f1faee',
        },
    },
}));


export default function Drawer1() {
    const classes = useStyles();


const [state, setState] = useState(false);
    
const toggleDrawer = (open) => () => {
    setState(open)
};

    return (
        <div className={classes.list}>
        <Button className={classes.list_vitamins} onClick={toggleDrawer(true)}>List of vitamins</Button>
        <Drawer
        anchor={'top'}
        open={state}
        onClose={toggleDrawer(false)}
        classes={{
            paper: classes.drawerPaper,
          }}
        >
        <List>
        <ListItem><Button className={classes.btn} fullWidth='true' onClick={toggleDrawer(false)}><ArrowUpwardIcon/></Button></ListItem>
        <ListItem><Button className={classes.btn} fullWidth='true' href="/">Homepage</Button></ListItem>
        <ListItem><Button className={classes.btn} fullWidth='true' href="/vitamin_a">Vitamin A</Button></ListItem>
        <ListItem><Button className={classes.btn} fullWidth='true' href="/vitamin_c">Vitamin C</Button></ListItem>
        <ListItem><Button className={classes.btn} fullWidth='true' href="/vitamin_d">Vitamin D</Button></ListItem>
        <ListItem><Button className={classes.btn} fullWidth='true' href="/vitamin_e">Vitamin E</Button></ListItem>
        <ListItem><Button className={classes.btn} fullWidth='true' href="/vitamin_k">Vitamin K</Button></ListItem>
        <ListItem><Button className={classes.btn} fullWidth='true' href="/vitamin_b1">Vitamin B1</Button></ListItem>
        <ListItem><Button className={classes.btn} fullWidth='true' href="/vitamin_b2">Vitamin B2</Button></ListItem>
        <ListItem><Button className={classes.btn} fullWidth='true' href="/vitamin_b3">Vitamin B3</Button></ListItem>
        <ListItem><Button className={classes.btn} fullWidth='true' href="/vitamin_b5">Vitamin B5</Button></ListItem>
        <ListItem><Button className={classes.btn} fullWidth='true' href="/vitamin_b6">Vitamin B6</Button></ListItem>
        <ListItem><Button className={classes.btn} fullWidth='true' href="/vitamin_b7">Vitamin B7</Button></ListItem>
        <ListItem><Button className={classes.btn} fullWidth='true' href="/vitamin_b9">Vitamin B9</Button></ListItem>
        <ListItem><Button className={classes.btn} fullWidth='true' href="/vitamin_b12">Vitamin B12</Button></ListItem>
        <ListItem></ListItem>
        </List>
        </Drawer>
        
        
        
        
        
        </div>
    )
}