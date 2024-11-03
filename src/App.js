import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "./context/ThemeProvider";
import ContentComponent from "./components/ContentComponent";

function App() {
  return (
    <ThemeProvider>
      <ContentComponent></ContentComponent>
    </ThemeProvider>
  );
}

export default App;

//Here ContentComponent is children
