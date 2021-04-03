import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

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
  const [username, setUsername] = useState("");
  const usernameRef = useRef();
  const time = useTimer();

  const handleOnSubmit = event => {
    event.preventDefault();
    setUsername(usernameRef.current.value);
    usernameRef.current.value = "";
  };

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
        <br />
        <br />
        Name{" "}
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Enter your name"
          autoComplete="off"
          onChange={event => setUsername(event.target.value)}
        />
        <br />
        {username}
      </div>
    </div>
  );
};

export default App;