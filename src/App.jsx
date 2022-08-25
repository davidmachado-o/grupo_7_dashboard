import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import UserList from "./components/UserList";
import Home from "./components/Home";
import Products from "./components/Products";
import Categories from "./components/Categories";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/users" exact element={<UserList />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/categories" exact element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
