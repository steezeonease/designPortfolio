import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { IntroductionBlurb } from "./components/IntroductionBlurb/IntroductionBlurb";

function App() {
  return (
    <div className={styles.app}>
      <NavigationBar />
      <IntroductionBlurb />
    </div>
  );
}

export default App;
