import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
// Step 1: Create a Context
// create a context  object in the parent component
export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    try {
      const { data } = await axios.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (err) {
      console.log(console.error);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    // Step 2: Provide the Context Value -
    // wrap the children  in the context object provider,
    // we have to pass in the data you'd like the  children
    // components to access in the value prop
    // These two Context Object Providers will allow both the currentUser
    // value  and the function to update it, to be available to
    // every child component in our application.
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            {/* 2) Switch holds all the routes and renders  the first one that matches the current url */}
            <Switch>
              {/* 3) Route renders a given component  when its path matches the current URL */}
              <Route exact path="/" render={() => <h1>Home</h1>} />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route render={() => <h1>Page not found!</h1>} />
            </Switch>
          </Container>
        </div>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
