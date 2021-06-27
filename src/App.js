import { BrowserRouter as Router} from "react-router-dom";
import "./App.css";
import { createBrowserHistory } from 'history';
import MainLayout from "./layout/main_layout/MainLayout";

const history = createBrowserHistory();

function App() {
  return (
    <>
    <Router history={history}>
        <MainLayout/>
      </Router>
    </>
  );
}

export default App;
