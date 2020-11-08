import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { UiProvider } from './context/UiContext';
import { HashRouter } from "react-router-dom";

const App = () => {
  return (
    <UiProvider>
      <HashRouter basename="/">
        <div className="App">
          <Header />
          <Body />
        </div>
      </HashRouter>
    </UiProvider>
  );
}

export default App;
