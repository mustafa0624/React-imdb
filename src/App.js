import logo from './logo.svg';
import './App.css';
import {SearchBox} from "./components/SearchBox"
import {CardList} from "./components/CardList"

function App() {
  return (
    <div className="App">
      <SearchBox/>
      <CardList/>
    </div>
  );
}

export default App;
