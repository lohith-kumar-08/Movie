import "./App.css";
import Fetch from "./components/Fetch";
import Search from "./components/Search";
import Movielist from "./components/Movielist";
function App() {
  return <div className="container">
      <Fetch></Fetch>
      {console.log("hello world")}
  <Search></Search>
  <Movielist></Movielist>
  </div>;
}

export default App;
