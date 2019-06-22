import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header, Footer } from '../components/layouts'
import {
  Home, About, Auditing, Contact, ForcesCovenant, OrgSec, Public, TeamBuilding
} from '../components/singlePages'
import ComplianceRouter from './ComplianceRouter'

export default props =>
  <BrowserRouter>
    <Header/>
    {ComplianceRouter}
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
      <Route path="/auditing" component={Auditing} />
      <Route path="/contact" component={Contact} />
      <Route path="/forces-covenant" component={ForcesCovenant} />
      <Route path="/organisation-security" component={OrgSec} />
      <Route path="/public-courses" component={Public} />
      <Route path="/team-building" component={TeamBuilding} />
    </Switch>
    <Footer/>
  </BrowserRouter>
