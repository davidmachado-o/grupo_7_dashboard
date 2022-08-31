import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import UserList from "./components/UserList";
import Home from "./components/Home";
import Products from "./components/Products";
import Categories from "./components/Categories";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import LastProductCreated from "./components/LastProductCreated";

function App() {
  return (
    <BrowserRouter>
      <LoginButton />
      <LogoutButton />
      <Nav />
      <>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/users" exact element={<UserList />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/categories" exact element={<Categories />} />
          <Route path="/lastproduct" exact element={<LastProductCreated />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
