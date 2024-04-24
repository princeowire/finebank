import './App.css';
import Nav from './component/navbar';
import Mobilenav from './component/mobilenav';
import Overview from './pages/overview';
import Welcome from './pages/welcome';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Mobilenav/>
        <Overview />
        <Welcome />
    </div>
  );
}

export default App;
