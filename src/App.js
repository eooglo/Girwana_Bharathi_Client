import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Scolers from './pages/Scolers';
import News from './pages/Notifcation';
import Director from './pages/Director';
import Search from './pages/Search';
import Document from './pages/Document';
import Donate from './pages/Donate';
import SignUp from './pages/Sign-up';
import Login from './pages/Login';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <Header />

      <Switch>
          <Route exact path="/" >
              <Home />
          </Route>
          <Route path="/about-us">
              <About />
          </Route>
          <Route path="/infrastructure">
              <Scolers />
          </Route>
          <Route path="/news">
              <News />
          </Route>
          <Route path="/director">
              <Director />
          </Route>
          <Route path="/search">
              <Search />
          </Route>
          <Route path="/document">
              <Document />
          </Route>
          <Route path="/donate">
              <Donate />
          </Route>
          <Route path="/sign-up">
              <SignUp />
          </Route>
          <Route path="/login">
              <Login />
          </Route>
          <Route path="/contact">
              <Contact />
          </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
