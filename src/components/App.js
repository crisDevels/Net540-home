import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AboutUs from '../pages/AboutUs.js';
import Forget from '../pages/Forget';
import Validation from '../pages/Validation';
import NewVacant from '../pages/newVacant';
import FeedVacant from '../pages/feedVacant';
import FeedVacantDetails from '../pages/feedVacantDetails';
import TermsConditions from '../pages/termsAndConditions';
import { NewRegistry } from '../pages/newRegistry';
import NotFound from '../pages/error404'
import MyPublications from '../pages/myPublications'
import FeedPublicationsDetails from '../pages/feedPublicationsDetails'
import { LandingHome } from '../pages/LandingHome.js';
import CandidatesPage from '../pages/candidatesPages.js';
import { NewInicio } from '../pages/inicioPage.js';
import { ProfileExpert } from '../pages/ProfileFreelancer.js';
import { FeedProfesional } from '../pages/feedFreelancer.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingHome} />
        <Route exact path="/somos-joobbi" component={AboutUs}/>
        <Route exact path="/registro-joobbi" component={NewRegistry}/>
        <Route exact path="/inicio-joobbi" component={NewInicio}/>
        <Route exact path="/recuperar-contraseña" component={Forget}/>
        <Route exact path="/validacion-contraseña" component={Validation}/>
        <Route exact path="/registro-freelancer" component={ProfileExpert}/>
        <Route exact path="/freelancers" component={FeedProfesional}/>
        <Route exact path="/publicar-trabajo" component={NewVacant}/>
        <Route exact path="/works" component={FeedVacant}/>
        <Route exact path="/works/:workId" component={FeedVacantDetails}/>
        <Route exact path="/my-publications" component={MyPublications}/>
        <Route exact path="/my-publications/:workId/edit" component={FeedPublicationsDetails}/>
        <Route exact path="/my-candidates/:workId/candidates" component={CandidatesPage}/>
        <Route exact path="/condiciones-de-uso" component={TermsConditions}/>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  ) 
}

export default App;