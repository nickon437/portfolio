import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { UiProvider } from './context/UiContext';
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <UiProvider>
      <Router>
        <div className="App">
          <Header />
          <Body />
        </div>
      </Router>
    </UiProvider>
  );
}

export default App;
