import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../context/CurrentUserContext";
import Avatar from "./Avatar";

const NavBar = () => {
  // Step 3: Use useContext to Consume the Context!
  // access that value in a child component
  // use the use context hook and  call it with the context object

  // Display different icons whether a user is logged in or not
  const currentUser = useCurrentUser();
  const addPostIcon = (
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/post/create"
      key="signup"
    >
      <i className="fas fa-plus-square"></i> Add post
    </NavLink>
  );

  const loggedInIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/feed"
      >
        <i className="fas fa-stream"></i> Feed
      </NavLink>

      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/liked"
      >
        <i className="fas fa-heart"></i> Liked
      </NavLink>

      <NavLink className={styles.NavLink} to="/" onClick={() => {}}>
        <i className="fas fa-sign-out-alt"></i> Sign out
      </NavLink>

      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
      </NavLink>
    </>
  );
  // below is the variable for the icon a logged out user can see
  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
        key="signin"
      >
        <i className="fas fa-sign-in-alt"></i> Sign in
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signup"
        key="signup"
      >
        <i className="fas fa-user-plus"></i> Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar expand="md" fixed="top" className={styles.NavBar}>
      <Container>
        <NavLink to="/" key="home">
          <Navbar.Brand>
            <img src={logo} height="45px" alt="logo" />
          </Navbar.Brand>
        </NavLink>
        {/* This is a conditional rendering with the logical AND (&&) operator. It checks if currentUser is truthy, and if so, it renders the addPostIcon component. If currentUser is falsy, nothing is rendered. */}
        {currentUser && addPostIcon}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left ">
            {/* 4) Link component is just like our  good old friend the anchor tag,  
          but it’s used with react router to  link to a different Route instead */}
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
              key="home"
            >
              <i className="fas fa-home"></i> Home
            </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
