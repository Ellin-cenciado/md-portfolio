/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const NavBarContext = createContext();

//This controls which page is being currently shown

export function NavBarContextProvider(props) {
  //Sets current page to home, it works by addind the 'hidden' class to every page but the page currently
  //being rendered on

  const [currentPage, setCurrentPage] = useState("home");
  const [homeClassName, setHomeClassName] = useState(
    "flex items-center h-screen w-screen select-none"
  );
  const [aboutClassName, setAboutClassName] = useState(
    "flex items-center h-screen w-screen select-none hidden"
  );
  const [examplesClassName, setExamplesClassName] = useState(
    "flex items-center h-screen w-screen select-none hidden"
  );

  //adds or removes the 'hidden tag depending on which page u r in'

  function UpdatePage(page) {
    //Hides all pages before showing the selected one
    setHomeClassName("flex items-center h-screen w-screen select-none hidden");
    setAboutClassName("flex items-center h-screen w-screen select-none hidden");
    setExamplesClassName(
      "flex items-center h-screen w-screen select-none hidden"
    );

    setCurrentPage(page);
    switch (page) {
      case "home":
        console.log("Switched to home!!");

        setHomeClassName("flex items-center h-screen w-screen select-none");

        break;
      case "about":
        console.log("Switched to about!!");

        setAboutClassName("flex items-center h-screen w-screen select-none ");
        break;
      case "examples":
        console.log("Switched to examples!!");

        setExamplesClassName(
          "flex items-center h-screen w-screen select-none "
        );
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
