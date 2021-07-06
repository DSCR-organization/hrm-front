import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { createBrowserHistory } from 'history';
import Routes from "./Routes";

const history = createBrowserHistory();

function App() {
  return (
    <>
      <Router history={history}>
          <Routes /> 
      </Router>
    </>
  );
}

export default App;
