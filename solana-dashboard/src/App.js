
import './App.css';
import Topbar from './Components/Topbar/Topbar';
import Upcomings from './Components/Upcomings/Upcomings';
import TopMoves from './Components/TopMoves/TopMoves';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Upcomings />
      <TopMoves />
    </div>
  );
}

export default App;
