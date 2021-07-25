import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

export default function Router() {
  return (
    
    <BrowserRouter>
      <Switch>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Contact">
            <Contact/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
