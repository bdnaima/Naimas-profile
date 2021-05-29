import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';



const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Route exact path='/' component={ Home }/>
        <Route path='/about.js' component={ About }/>
        <Route path='/project.js' component={ Projects }/>
        <Route path='/contact.js' component={ Contact }/>
      </div>
    </BrowserRouter>
  );
}

export default App;