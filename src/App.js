import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { UiProvider } from './context/UiContext';
import { BrowserRouter, HashRouter } from "react-router-dom";

const App = () => {
  return (
    <UiProvider>
      <HashRouter basename="/">
        <BrowserRouter>
          <div className="App">
            <Header />
            <Body />
          </div>
        </BrowserRouter>
      </HashRouter>
    </UiProvider>
  );
}

export default App;
