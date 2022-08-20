
import './App.css';
import Topbar from './Components/Topbar/Topbar';
import Upcomings from './Components/Upcomings/Upcomings';
import TopMoves from './Components/TopMoves/TopMoves';
import TopCollections from './Components/TopCollections/TopCollections';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Upcomings />
      <TopMoves />
      <TopCollections />
    </div>
  );
}

export default App;
