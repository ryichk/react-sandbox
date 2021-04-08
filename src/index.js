import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const useTimer = () => {
  const [date, setDate] = useState(new Date());
  let interval = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return date.toLocaleTimeString();
}

const App = () => {
  const [counter, setCounter] = useState(0);
  const time = useTimer();

  useEffect(() => {
    console.log("component mounted");

    const scrollHandler = () => {
      console.log("page scrolled");
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const unmount = () => {
    ReactDOM.render(<p>Hello</p>, document.getElementById("root"));
  };

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
      <div>useEffect Date: {time}</div>
      <br />
      <button onClick={unmount}>Unmount Component</button>
      {" "}
      <p>Open console and Scroll this page</p>{" "}
      <p>
        {" "}
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum{" "}
      </p>{" "}
      <div>
        <p>Counter value is: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);