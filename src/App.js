import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './Pages/Login/SingIn';
import Gender from './Pages/Gender/Gender';
import Feminine from "./Pages/Feminine/Feminine";
import Male from "./Pages/Male/Male";
import Other from "./Pages/Otro/Other";
import Comments from "./Pages/Comments/Comments";
import Delineados from "./Pages/Delineados/Delineados";
import Pestañina from "./Pages/Pestañina/Pestañina";
import Sombras from "./Pages/Sombras/Sombras";
import Preparar from "./Pages/PrepararF/Preparar";
import Productos from "./Pages/Productos/Productos";
import Noche from "./Pages/Noche/Noche";
import Dia from "./Pages/Dia/Dia";
import Trucos from "./Pages/Trucos/Trucos";
import SobreMi from "./Pages/SobreMi/SobreMi";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SignIn}/>
        <Route path="/gender" component={Gender}/>
        <Route path="/feminine" component={Feminine}/>
        <Route path="/male" component={Male}/>
        <Route path="/other" component={Other}/>
        <Route path="/comments" component={Comments}/>
        <Route path="/delineados" component={Delineados}/>
        <Route path="/pestañina" component={Pestañina}/>
        <Route path="/sombras" component={Sombras}/>
        <Route path="/preparar" component={Preparar}/>
        <Route path="/productos" component={Productos}/>
        <Route path="/noche" component={Noche}/>
        <Route path="/dia" component={Dia}/>
        <Route path="/trucos" component={Trucos}/>
        <Route path="/sobreMi" component={SobreMi}/>
      </Switch>
    </Router>
  );
}

export default App;