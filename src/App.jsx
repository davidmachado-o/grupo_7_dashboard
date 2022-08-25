import { BrowserRouter as Router} from "react-router-dom";
import UserList from "./components/UserList";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <Sidebar />
      <UserList />
    </Router>
  );
}

export default App;
