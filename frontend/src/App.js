//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Switch, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import ContactoPage from "./pages/ContactoPage";
import PersonalPage from "./pages/PersonalPage";
import RecetasPage from "./pages/RecetasPage";
import TipsPage from "./pages/TipsHome";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/contacto" exact component={ContactoPage}/>
          <Route path="/personal" exact component={PersonalPage}/>
          <Route path="/recetas" exact component={RecetasPage} />
          <Route path="/tips" exact component={TipsPage} />
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
