import { useEffect, useRef, useState } from "react";

const useClickOutsideToggle = () => {
  // The expanded prop is specific to React Bootstrap's Navbar component, and its name cannot be changed. It is a property designed to control the expanded/collapsed state of the Navbar.
  const [expanded, setExpanded] = useState(false);
  // Instantiate (create an instance of ref object) a ref variable that  will hold a reference to the burger icon.
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // 1) If ref.current !== null, it means that Navbar.Toggle component has been changed (user has clicked on it) and this also set expanded to true.
      // 2) Then we check if the user has clicked away from the referenced button.
      // If they have, we’ll call setExpanded with  false, which will close our dropdown menu.
      if (ref.current && !ref.current.contains(event.target)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
    // by adding [ref] we track the side effect: whether the burger icon was clicked or not
  }, [ref]);

  return { expanded, setExpanded, ref };
};

export default useClickOutsideToggle;
