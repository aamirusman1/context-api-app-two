import ThemeContext from "./ThemeContext";
import { React, useState } from "react";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

//We have created a custom provider with some custom logic that we can use instead of using
//ThemeContext.Provider directly (for e.g. in our App.js)
