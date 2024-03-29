import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/projects.js" component={Projects} />
      <Route path="/contact.js" component={Contact} />
    </BrowserRouter>
  );
};

export default App;
