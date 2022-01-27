import './App.css';
import './Header.js'
import Header from './Header.js';
import Home from './Home';

function App() {
  return (
    //BEM naming convention used
    <div className="app">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;