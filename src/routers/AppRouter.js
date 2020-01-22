import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { NotFound, Home, About, Contact, ForcesCovenant, TeamBuilding, SiteMap } from '../components/singlePages'
import { Footer } from '../components/layouts'
import PolicyRouter from './PolicyRouter'
import ComplianceRouter from './ComplianceRouter'
import OrgSecRouter from './OrgSecRouter'

export default props =>
  <BrowserRouter>
    <Switch>
    
      {/* Single Pages */}
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/forces-covenant" component={ForcesCovenant} />
      <Route path="/team-building" component={TeamBuilding} />

      {/* Other Routers */}
      <Route path="/compliance" component={ComplianceRouter} />
      <Route path="/organisation-security" component={OrgSecRouter} />
      <Route path="/policy" component={PolicyRouter} />
      <Route path="/site-map" component={SiteMap} />

      {/* 404 Not Found */}
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </BrowserRouter>