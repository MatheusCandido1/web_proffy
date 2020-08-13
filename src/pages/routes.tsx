import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import Landing from './Landing';
import TeacherList from './TeacherList';
import TeacherForm from './TeacherForm';

function Routes(){
    return (
        <BrowserRouter>
            <Route path="/login" component={Login} />
            <Route path="/" exact component={Landing} />  
            <Route path="/study" component={TeacherList} />  
            <Route path="/give-classes" component={TeacherForm} />  
        </BrowserRouter>
    );
}

export default Routes;