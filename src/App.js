import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { UiProvider } from './context/UiContext';

const App = () => {
  return (
    <UiProvider>
      <div className="App">
        <Header />
        <Body />
      </div>
    </UiProvider>
  );
}

export default App;
