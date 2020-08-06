import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/home.js';
import AboutUs from '../pages/AboutUs.js';
import Forget from '../pages/Forget';
import Validation from '../pages/Validation';
import SkillsForm from '../components/FormularioRegistro/skillsForm'


function App() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/aboutUs" component={AboutUs}/>
            <Route exact path="/recuperar-contraseña" component={Forget}/>
            <Route exact path="/validacion-contraseña" component={Validation}/>
            <Route exact path="/skills" component={SkillsForm}/>
        </Switch>
        </BrowserRouter>
    )
}

export default App;