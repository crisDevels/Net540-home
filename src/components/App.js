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


function App() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/aboutUs" component={AboutUs}/>
            <Route exact path="/recuperar-contraseña" component={Forget}/>
            <Route exact path="/validacion-contraseña" component={Validation}/>
            <Route exact path="/registro-skills" component={ProfesionForm}/>
            <Route exact path="/publicar-trabajo" component={NewVacant}/>
            <Route exact path="/home" component={FeedVacant}/>
            <Route exact path="/home/:workID" component={FeedVacantDetails}/>
            <Route exact path="/condiciones-de-uso" component={TermsConditions}/>
        </Switch>
        </BrowserRouter>
    ) 
}

export default App;