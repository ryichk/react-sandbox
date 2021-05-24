import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import About from './pages/About';
import TSSandBox from './pages/TypeScriptSandBox';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const Index: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/ts-sandbox' component={TSSandBox} />
          <Route path='/contact' component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
