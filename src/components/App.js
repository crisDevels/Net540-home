import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/home.js';
import AboutUs from '../pages/AboutUs.js';
import Forget from '../pages/Forget';
import Validation from '../pages/Validation';
import ProfesionForm from '../components/FormularioRegistro/ProfesionForm'
import NewVacant from '../pages/newVacant';
import FeedVacant from '../pages/feedVacant';
import FeedVacantDetails from '../pages/feedVacantDetails';
import TermsConditions from '../pages/termsAndConditions';
import NewRegistry from '../pages/newRegistry';
import NotFound from '../pages/error404'
import MyPublications from '../pages/myPublications'
import FeedPublicationsDetails from '../pages/feedPublicationsDetails'


function App() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/aboutUs" component={AboutUs}/>
            <Route exact path="/registro-net" component={NewRegistry}/>
            <Route exact path="/recuperar-contraseña" component={Forget}/>
            <Route exact path="/validacion-contraseña" component={Validation}/>
            <Route exact path="/registro-skills" component={ProfesionForm}/>
            <Route exact path="/publicar-trabajo" component={NewVacant}/>
            <Route exact path="/works" component={FeedVacant}/>
            <Route exact path="/works/:workId" component={FeedVacantDetails}/>
            <Route exact path="/my-publications" component={MyPublications}/>
            <Route exact path="/my-publications/:workId/edit" component={FeedPublicationsDetails}/>
            <Route exact path="/condiciones-de-uso" component={TermsConditions}/>
            <Route component={NotFound} />
        </Switch>
        </BrowserRouter>
    ) 
}

export default App;