import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import HeaderHome from './companents/HeaderHome/HeaderHome';

function App() {
  return (
    <div className="App">
      <HeaderHome></HeaderHome>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
