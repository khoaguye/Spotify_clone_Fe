import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home'
import Pages from './Pages/Pages';
function App() {
  return (
    <div className="App overflow-y-auto">
        <BrowserRouter>
          <Pages/>
        </BrowserRouter>
    </div>
  );
}

export default App;
