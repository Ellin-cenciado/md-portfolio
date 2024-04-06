/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const NavBarContext = createContext();

//This controls which page is being currently shown

export function NavBarContextProvider(props) {
  //Sets current page to home, it works by addind the 'hidden' class to every page but the page currently
  //being rendered on

  const [currentPage, setCurrentPage] = useState("examples");
  const [homeClassName, setHomeClassName] = useState("hidden");
  const [aboutClassName, setAboutClassName] = useState("hidden");
  const [examplesClassName, setExamplesClassName] = useState("relative");

  //adds or removes the 'hidden tag depending on which page u r in'

  function UpdatePage(page) {
    //Hides all pages before showing the selected one
    setHomeClassName("hidden");
    setAboutClassName("hidden");
    setExamplesClassName("hidden");

    setCurrentPage(page);
    switch (page) {
      case "home":
        console.log("Switched to home!!");
        setHomeClassName("relative"); //Deletes hidden className
        break;

      case "about":
        console.log("Switched to about!!");
        setAboutClassName("relative");
        break;
      
        case "examples":
        console.log("Switched to examples!!");
        setExamplesClassName("relative");
        break;
    }
  }

  return (
    <NavBarContext.Provider
      value={{
        currentPage,
        UpdatePage,
        homeClassName,
        aboutClassName,
        examplesClassName,
      }}
    >
      {props.children}
    </NavBarContext.Provider>
  );
}
