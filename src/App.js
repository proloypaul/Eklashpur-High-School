
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Classes from './Components/Classes/Classes';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFind from './Components/NotFind/NotFind';
import Register from './Components/Register/Register';
import Searvices from './Components/Services/Searvices';
import AuthPorvider from './Context/AuthPorvider';
import PrivateRouter from './PrivateRouter/PrivateRouter';

function App() {
  return (
    <div>
      <AuthPorvider>
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
            <PrivateRouter path="/classes">
              <Classes></Classes>
            </PrivateRouter>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFind></NotFind>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthPorvider>

    </div>
  );
}

export default App;
