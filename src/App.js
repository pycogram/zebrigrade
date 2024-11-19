import './App.css';
import Page from './page';
import logo1A from "./logo/logo.jpg";
import Navbar from "./nav";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from "./footer";
import './index.css';

const copyPasteBtn = {
  copyBtn: require("./logo/copy-btn.png")
}
const socioLogo = {
  pf: require("./soc-logo/pumpfun.png"),
  dexs: require("./soc-logo/dexs.png"),
  dext: require("./soc-logo/dext.png"),
  ray: require("./soc-logo/ray.png"),
  tg: require("./soc-logo/tg.png"),
  tw: require("./soc-logo/twitter.png")
}
const allImg = {
  logo1B: require("./logo/logo-transparent.png"),
  z01: require("./img/z01.png"), z02: require("./img/z02.jpg"),
  z03: require("./img/z03.png"), z04: require("./img/z04.jpg"),
  z05: require("./img/z05.png"), z06: require("./img/z06.jpg")
}

function App() {
    return (
      <Router>
        <div className="App">
            <Navbar logo1={allImg.logo1B} />
            <div className="AllPage">
              <Switch>
                <Route exact path="*">
                   < Page allImg={allImg} copyBtn={copyPasteBtn} socialLink={socioLogo}/>
                </Route>
              </Switch>
            </div>
            <Footer />
      </div>
      </Router>
    );
}

export default App;
