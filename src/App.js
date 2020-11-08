import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { HashRouter } from "react-router-dom";

const App = () => {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Header />
        <Body />
      </div>
    </HashRouter>
  );
}

export default App;
