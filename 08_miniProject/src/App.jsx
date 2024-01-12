import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  return (
    <UserContextProvider>
      <h2>Our mini project for context api</h2>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
