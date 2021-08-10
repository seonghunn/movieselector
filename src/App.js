import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  )
}//exact 써야 /about일때 두개가 렌더되지 않음
//class component 랑 function 차이
//package.json에서 homepage, deploy, predeploy 설정으로 홈페이지 만듬
export default App;
