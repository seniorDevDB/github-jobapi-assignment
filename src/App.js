import React from "react";
import { Route } from 'react-router-dom';
import {ThemeProvider} from "styled-components";
import  {useDarkMode} from "./components/useDarkMode"
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes"
import "./App.css";
import TopMenuBar from './components/TopMenuBar';
import Job from './views/Job';
import JobDetail from './views/JobDetail';

const App= () => {

  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;


  if(!mountedComponent) return <div/>

  return (
    <ThemeProvider theme={themeMode}>
        <GlobalStyles/>
        <div className="App">
          <TopMenuBar theme={theme} toggleTheme={themeToggler} />
          <Route exact path="/" component={Job}></Route>
          <Route exact path="/detail/:id" component={JobDetail}></Route>
        </div>
    </ThemeProvider>
    
  );
};

export default App;
