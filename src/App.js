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
        
      </Switch>
    </Router>
  );
}

export default App;