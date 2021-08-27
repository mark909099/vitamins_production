import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Top from './../Top';
import Bottom1 from './../Bottom1';
import {
    Typography,
    List,
    ListItem
     } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding:'1rem',
    },
    header: {
        paddingTop:'3.5rem',
        paddingBottom:'1rem',
        [theme.breakpoints.up('xs')]: {
            fontSize:'3rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'5rem',
        },
    },
    sub_header: {
        paddingBottom:'1rem',
        [theme.breakpoints.up('xs')]: {
            fontSize:'1.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'2.5rem',
        },
    },
   paragraph: {
       paddingBottom:'2rem',
       [theme.breakpoints.up('xs')]: {
       fontSize:'1.25rem',
       },
       [theme.breakpoints.up('md')]: {
       fontSize:'1.5rem',    
       },
   },
}));

export default function TermsOfUse() {
    const classes = useStyles();
    return (

<div>
<Top />
<div className={classes.root}>
<Typography className={classes.header}
 variant='h1'
 >
Terms and conditions
</Typography>

<Typography className={classes.paragraph}
variant='body1'
>
Please read these terms and conditions carefully before using our service.
</Typography>


<Typography className={classes.sub_header}
variant='h4'
>
Definitions
</Typography>

<Typography className={classes.paragraph}
variant='body1'
>
For the purposes of these Terms and Conditions:
<ul>
    <li>
    Country refers to: Israel
    </li>
    <li>
    Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to the adress of this website.
    </li>
    <li>
    Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.
    </li>
    <li>
    Service refers to the Website.
    </li>
    <li>
    Terms and Conditions (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the Terms and Conditions Generator.
    </li>
    <li>
    Third-party Social Media Service means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.
    </li>
    <li>
    You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
    </li>
</ul>
{' '}
</Typography>

<Typography className={classes.sub_header}
variant='h4'
>
Acknowledgment
</Typography>

<Typography className={classes.paragraph}
variant='body1'
>
These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
<br/>
Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
<br/>
By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
</Typography>

<Typography className={classes.sub_header}
variant='h4'
>
Links to Other Websites
</Typography>

<Typography className={classes.paragraph}
variant='body1'
>
Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company. <br/>

The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
</Typography>

<Typography className={classes.sub_header}
variant='h4'
>
"AS IS" and "AS AVAILABLE" Disclaimer
</Typography>

<Typography className={classes.paragraph}
variant='body1'
>
The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.
<br/>
Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service.
<br/>
Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.
<br />
The vitamin calculator feature is for informational purposes only.
<br />
The Content is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
</Typography>

<Typography className={classes.sub_header}
variant='h4'
>
Governing Law
</Typography>

<Typography className={classes.paragraph}
variant='body1'
>
The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
</Typography>

<Typography className={classes.sub_header}
variant='h4'
>
Changes to These Terms and Conditions
</Typography>

<Typography className={classes.paragraph}
variant='body1'
>
We reserve the right, at Our sole discretion, to modify or replace these Terms at any time without prior notice. What constitutes a material change will be determined at Our sole discretion.
<br/>
By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
</Typography>
</div>

<div>
<Bottom1 />
</div>

</div>
    )
};