import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import NoMatch from "./components/NoMatch";
import Todo from "./components/Todo";
import HooksDemo from "./components/HooksDemo";

import Design from "./components/ServicesComponents/Design";
import Development from "./components/ServicesComponents/Development";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainContent} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/services" component={Services} />
          <Route path="/todo" component={Todo} />
          <Route path="/hooks" component={HooksDemo} />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        <Switch>
          <Route path="/services/design" component={Design} />
          <Route path="/services/development" component={Development} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
