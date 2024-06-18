"use client";

import { useLayoutEffect, useState, useEffect } from "react";
import HumeLogo from "./logos/Hume";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import Github from "./logos/GitHub";
// import pkg from '@/package.json';
// import { ModeToggle } from "./mode-toggle";
// import HistoryContainer from "./history-container";


export const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDark = () => {
    // const el = document.documentElement;
    // el.classList.toggle("dark");
    document.body.classList.toggle("dark")
    setIsDarkMode((prev) => !prev);

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("darkTheme", "true")
    } else {
      localStorage.setItem("darkTheme", "false")
    }
  };

  // isDarkMode == true ? toggleDark() : null;

  function activateDark() {
    // const el = document.documentElement;
    // el.classList.toggle("dark");
    document.body.classList.add("dark")
  }

  useEffect(() => {
    // console.log(localStorage.getItem("darkTheme") == 'true')
    localStorage.getItem("darkTheme") == 'true' ? activateDark() : null
  }, []);

  return (
    <div
      className={
        "max-w-7xl mx-auto flex justify-between items-center w-full sm:px-4 px-2 px-4 py-2 flex items-center h-14 border-b border-border"
      }
    >
      <meta name="theme-color" content="#825fff" />
      <div className="flex">
        {/* <HumeLogo className={"h-5 w-auto"} /> */}
        <h1
          className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight gradient"
          // style={{ fontWeight: 600, lineHeight: 1.2 }}
        >
          KUFBREEZY
        </h1>
      </div>
      <div className={"ml-auto flex items-center gap-1"}>
        {/* <Button
          onClick={() => {
            window.open(
              // pkg.homepage,
              "_blank",
              "noopener noreferrer"
            );
          }}
          variant={"ghost"}
          className={"ml-auto flex items-center gap-1.5"}
        >
          <span>
            <Github className={"size-4"} />
          </span>
          <span>Star on GitHub</span>
        </Button> */}
        {/* <HistoryContainer location="header" /> */}
        {/* <ModeToggle /> */}
        <Button
          onClick={toggleDark}
          variant={"ghost"}
          className={"ml-auto flex items-center gap-1.5"}
        >
          <span>
            {isDarkMode ? (
              <Sun className={"size-4"} />
            ) : (
              <Moon className={"size-4"} />
            )}
          </span>
          <span>{isDarkMode ? "Light" : "Dark"} Mode</span>
        </Button>
      </div>
    </div>
  );
};
