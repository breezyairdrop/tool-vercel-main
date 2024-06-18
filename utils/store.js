"use client"
import React from "react";



// import { useColorScheme } from 'nativewind';

export const StoreContext = React.createContext(null);


export default ({ children }) => {

  const [checkTheme, setCheckTheme] = React.useState('light');


  React.useEffect(() => {
    let whatTheme = localStorage.getItem("theme") || "";  
    setCheckTheme(whatTheme)
    console.log(whatTheme)
  // checkTheme == 'dark' ? activateDark() : activateLight()
  
  }, []);

// const {colorScheme, toggleColorScheme} = useColorScheme();


  const UserThemeContextType = ["system", "light", "dark"];

  // initial state will bw  last stored data
  const currentThemeMode = {
    system: true,
    mode: 'dark'
  }

  // console.log(localStorage.getItem("theme") || "")

  // console.log("here")

  // colorScheme != 

  // const userSelectedTheme = userThemeMode == undefined? UserThemeContextType[0] : UserThemeContextType[userThemeMode];
  // const [systemMode, setSystemMode] = React.useState(true);
  const [themeMode, setThemeMode] = React.useState(currentThemeMode);
  const [authKey, setAuthKey] = React.useState(null);

  const store = {
    // checkSystemMode: [systemMode, setSystemMode],
    getThemeMode: [themeMode, setThemeMode],
    getAuthKey: [authKey, setAuthKey],
  };
  // console.log(localStorage.getItem("theme") || "")

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

