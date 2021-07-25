import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
