import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import ApplicationList from './components/application_list';
import NewApplication from './components/new_application';


export default(
    <Route path="/" component={App}>
        <IndexRoute  component={ApplicationList}/>
        <Route path="application/new"  component={NewApplication}/>
    </Route>
)
