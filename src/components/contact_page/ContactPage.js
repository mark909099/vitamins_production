import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Top from './../Top';
import Bottom1 from './../Bottom1';
import {
    Typography,
     } from '@material-ui/core';

export default function ContactPage() {
    return (
<div>
<Top />
<div style={{height:'100vh', padding:'2rem', paddingTop:'5rem'}}>
<Typography variant="h3">Have some questions?</Typography>
<Typography variant="body1" style={{paddingTop:'0.7rem'}}>Send an email: vitamininfo5421@gmail.com</Typography>
</div>

<div>
<Bottom1 />
</div>

</div>
    )
}
