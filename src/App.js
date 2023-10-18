import './App.css';
import Home from './component/Home';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div style={{margin:'64px'}}></div>
     <Home/>
    </div>
  );
}

export default App;
