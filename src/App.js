import React from "react";
import "./App.css";
import Button from "./lib/Button";
import { ThemeProvider, LightTheme, DarkTheme } from "./lib/styles";

function App() {
  const [theme, setTheme] = React.useState(true);

  return (
    <ThemeProvider theme={theme ? LightTheme : DarkTheme}>
      <Button onClick={() => setTheme(!theme)}>
        Toggle Theme
      </Button>



    </ThemeProvider>
  );
}

export default App;