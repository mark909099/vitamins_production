import React from 'react';
import Top from './../Top';
import Bottom1 from './../Bottom1';
import Header from './Header';
import QuestionsAccordion from './QuestionsAccordion';

export default function HomePage() {
    
    return (
<div>
<div style={{height:'100vh'}}>
<Top />
<Header />
<QuestionsAccordion />
</div>
<Bottom1 />
</div>

    )
}