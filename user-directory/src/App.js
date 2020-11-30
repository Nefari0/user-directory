import logo from './logo.svg';
import './App.css';
// import ChildComponent from './Components/ChildComponent'
import PeopleList from './Components/PeopleList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <PeopleList/>
        </div>
      </header>
    </div>
  );
}

export default App;
