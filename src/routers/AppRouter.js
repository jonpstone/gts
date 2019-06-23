import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFound from '../components/singlePages/NotFound'
import { Header, Footer } from '../components/layouts'
import {
  Home, About, Auditing, Contact, ForcesCovenant, Public, TeamBuilding
} from '../components/singlePages'
import {
  ActivityFirstAid,
  AnaphylaxisManagement,
  BespokeFirstAid,
  BlsAed,
  CprBlsAed,
  CatastrophicBleedManagement,
  EmergencyFirstAid,
  EmergencyPaediatricFirstAid,
  FireSafety,
  FirstAidAtWorkRequal,
  FirstAidAtWork,
  FoodSafety,
  HealthAndSafety,
  HealthAndSafetyFirstAid,
  JuniorFirstAid,
  ManualHandling,
  MentalHealthFirstAid,
  OxygenTherapy,
  PaediatricFirstAid,
  SafeGuarding,
} from '../components/compliance'
import {
  LockdownConsultancy,
  SecurityAudit,
  SICM,
} from '../components/orgSec'

export default props =>
  <BrowserRouter>
    <Header/>
    <Switch>
    
      {/* Single Pages */}
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
      <Route path="/auditing" component={Auditing} />
      <Route path="/contact" component={Contact} />
      <Route path="/forces-covenant" component={ForcesCovenant} />
      <Route path="/public-courses" component={Public} />
      <Route path="/team-building" component={TeamBuilding} />

      {/* Compliance */}
      <Route path="/compliance/activity-first-aid" component={ActivityFirstAid} />
      <Route path="/compliance/anaphylaxis-management" component={AnaphylaxisManagement} />
      <Route path="/compliance/bespoke-first-aid" component={BespokeFirstAid} />
      <Route path="/compliance/bls-aed" component={BlsAed} />
      <Route path="/compliance/cpr-bls-aed" component={CprBlsAed} />
      <Route path="/compliance/catastrophic-bleed-management" component={CatastrophicBleedManagement} />
      <Route path="/compliance/emergency-first-aid" component={EmergencyFirstAid} />
      <Route path="/compliance/fire-safety" component={FireSafety} />
      <Route path="/compliance/first-aid-at-work-requal" component={FirstAidAtWorkRequal} />
      <Route path="/compliance/first-aid-at-work" component={FirstAidAtWork} />
      <Route path="/compliance/food-safety" component={FoodSafety} />
      <Route path="/compliance/health-and-safety" component={HealthAndSafety} />
      <Route path="/compliance/health-and-safety-first-aid" component={HealthAndSafetyFirstAid} />
      <Route path="/compliance/junior-first-aid" component={JuniorFirstAid} />
      <Route path="/compliance/manual-handling" component={ManualHandling} />
      <Route path="/compliance/mental-health-first-aid" component={MentalHealthFirstAid} />
      <Route path="/compliance/oxygen-therapy" component={OxygenTherapy} />
      <Route path="/compliance/paediatric-first-aid" component={PaediatricFirstAid} />
      <Route path="/compliance/emergency-paediatric-first-aid" component={EmergencyPaediatricFirstAid} />
      <Route path="/compliance/safe-guarding" component={SafeGuarding} />

      {/* Organisation Security */}
      <Route path="/organisation-security/lockdown-consultancy" component={LockdownConsultancy} />
      <Route path="/organisation-security/security-audit" component={SecurityAudit} />
      <Route path="/organisation-security/safe-guarding" component={SICM} />

      {/* 404 Not Found */}
      <Route component={NotFound} />
    </Switch>
    <Footer/>
  </BrowserRouter>
