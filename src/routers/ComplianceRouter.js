import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {
  ActivityFirstAid,
  AnaphylaxisManagement,
  BespokeFirstAid,
  BlsAed,
  EmergencyFirstAid,
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
  SafeGuarding
} from '../components/compliance'

export default props =>
  <BrowserRouter>
      <Switch>
        <Route path="/activity-first-aid" component={ActivityFirstAid} />
        <Route path="/anaphylaxis-management" component={AnaphylaxisManagement} />
        <Route path="/bespoke-first-aid" component={BespokeFirstAid} />
        <Route path="/bls-aed" component={BlsAed} />
        <Route path="emergency-first-aid" component={EmergencyFirstAid} />
        <Route path="fire-safety" component={FireSafety} />
        <Route path="first-aid-at-work-requal" component={FirstAidAtWorkRequal} />
        <Route path="first-aid-at-work" component={FirstAidAtWork} />
        <Route path="food-safety" component={FoodSafety} />
        <Route path="health-and-safety" component={HealthAndSafety} />
        <Route path="health-and-safety-first-aid" component={HealthAndSafetyFirstAid} />
        <Route path="junior-first-aid" component={JuniorFirstAid} />
        <Route path="manual-handling" component={ManualHandling} />
        <Route path="mental-health-first-aid" component={MentalHealthFirstAid} />
        <Route path="oxygen-therapy" component={OxygenTherapy} />
        <Route path="paediatric-first-aid" component={PaediatricFirstAid} />
        <Route path="safe-guarding" component={SafeGuarding} />
      </Switch>
  </BrowserRouter>