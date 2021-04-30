// packages
import { Switch, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
// components
import Nav from "./components/Nav";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { loginUser, registerUser, removeToken, verifyUser } from "./services/auth";
import MainContainer from "./components/MainContainer";
import './App.css'

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('authToken')
    removeToken()
    history.push('/')
  }

  return (
    <div>
      <Nav
        currentUser={currentUser}
        handleLogout={handleLogout} />
      <hr />

      <Switch>
        <Route path="/login">
          <SignIn handleLogin={handleLogin} />
        </Route>

        <Route path="/register">
          <SignUp handleRegister={handleRegister} />
        </Route>

        <Route path="/">
          <MainContainer
            currentUser={currentUser}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
