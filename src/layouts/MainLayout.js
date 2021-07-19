import React from 'react';

import Header from '../components/Header';
import Question from '../components/Question';

const MainLayout = (props) => (
    <div className='container-sm'>
        <Header />
        <Question drugs={props.drugs}/>
    </div>
)

export default MainLayout;