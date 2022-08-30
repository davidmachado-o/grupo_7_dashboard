import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import UserList from "./components/UserList";
import Home from "./components/Home";
import Products from "./components/Products";
import Categories from "./components/Categories";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  
  return (
    <BrowserRouter>
      {!isAuthenticated && <LoginButton />}
      <LogoutButton />
      {isAuthenticated && <Sidebar />}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/users" exact element={<UserList />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/categories" exact element={<Categories />} />
        <Route path="/profile" exact element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
