import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Links from "./Components/Links";
import People from "./Components/People";
import Books from "./Components/Books";
import Art from "./Components/Art";
import Drugs from "./Components/Drugs";
import Politics from "./Components/Politics";
import Culture from "./Components/Culture";
import Language from "./Components/Language";
import Sprituality from "./Components/Sprituality";
import HaveIdeaContactUs from "./Components/HaveIdeaContactUs";
import AboutUs from "./Components/AboutUs";
import Technology from "./Components/Technology";
import RadiantLogo from "./Components/Assets/RADIANT.jpeg";
import TerenceMckenna from "./Components/Assets/Terence Mckenna.jpg";
import axios from "axios";
import Communication from "./Components/Communication";
import Coding from "./Components/Coding";
import Cryptocurrency from "./Components/Cryptocurrency";
// import Archeology from "./Components/Archeology";
// import Astrology from "./Components/Astrology";
// import Philosophy from "./Components/Philosophy";
// import History from "./Components/History";
// import Coding from "./Components/Coding";
// import Geometry from "./Components/Geometry";
// import Psychology from "./Components/Psychology";
// import Gastronomy from "./Components/Gastronomy";
// import Engineering from "./Components/Engineering";
// import Management from "./Components/Management";

function App() {
  const [yourName, setYourName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const submitHandler1 = (event) => {
    event.preventDefault();
    console.log("", yourName, "", email, "", message);
    setYourName("");
    setEmail("");
    setMessage("");
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler2 = (event) => {
    event.preventDefault();
    console.log("", username, "", password);

    axios
      .post("http://localhost:4000/login", { username, password,
      })

      .then((data) => {
        // Checking procedure of logging in
        console.log(data.data);
      });

    setUsername("");
    setPassword("");
  };

  const [search, setSearch] = useState("");
  const submitHandler3 = (event) => {
    event.preventDefault();
    console.log("", search);

    setSearch("");
  };

  return (
    <Router>
      <Header
        RadiantLogo={RadiantLogo}
        username={username}
        password={password}
        submitHandler2={submitHandler2}
        setUsername={setUsername}
        setPassword={setPassword}
        search={search}
        setSearch={setSearch}
        submitHandler3={submitHandler3}
      />
      <Links />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/people">
          <People TerenceMckenna={TerenceMckenna} />
        </Route>
        <Route path="/books">
          <Books />
        </Route>
        <Route path="/art">
          <Art />
        </Route>
        <Route path="/drugs">
          <Drugs />
        </Route>
        <Route path="/politics">
          <Politics />
        </Route>
        <Route path="/culture">
          <Culture />
        </Route>
        <Route path="/language">
          <Language />
        </Route>
        <Route path="/sprituality">
          <Sprituality />
        </Route>
        <Route path="/technology">
          <Technology />
        </Route>
        <Route path="/Communication">
          <Communication />
        </Route>
        <Route path="/AboutUs">
          <AboutUs />
        </Route>
        <Route path="/Coding">
          <Coding />
        </Route>
        <Route path="/Cryptocurrency">
          <Cryptocurrency />
        </Route>
        <Route path="/" exact>
          <div className="body"></div>
          <HaveIdeaContactUs
            yourName={yourName}
            email={email}
            message={message}
            submitHandler1={submitHandler1}
            setYourName={setYourName}
            setEmail={setEmail}
            setMessage={setMessage}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
