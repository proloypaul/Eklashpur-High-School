
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Classes from './Components/Classes/Classes';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFind from './Components/NotFind/NotFind';
import Searvices from './Components/Services/Searvices';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/searvices">
            <Searvices></Searvices>
          </Route>
          <Route path="/classes">
            <Classes></Classes>
          </Route>
          <Route path="*">
            <NotFind></NotFind>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
