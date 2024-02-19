/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import {NavBarContext} from '../context/NavBarContext.jsx';

export function SideBarIcon({ icon, text ,render}) {
  const {UpdatePage} = useContext(NavBarContext);
  const [classList, setClassList] = useState("sidebar-icon group");
  const [clasListText, setClassListText] = useState(
    "sidebar-tooltip group-hover:opacity-100 group-hover:left-40 group-hover:scale-100 hover:hidden"
  );
  

  async function HandleClick() {
    UpdatePage(render);
    /* On click it enlarges the button to fit the whole screen for 0.5 sec and also hides the button description when hovering*/
    await setTimeout(() => {
      setClassList("sidebar-icon group ");
      setClassListText(
        "sidebar-tooltip group-hover:opacity-100 group-hover:left-40 group-hover:scale-100 hover:hidden"
      );
    }, 500);

    setClassList("sidebar-icon group clicked");
    setClassListText("hidden");
  }

  return (
    <div className={classList} onClick={HandleClick}>
      {icon}
      <md-ripple />
      <span className={clasListText}>{text}</span>
    </div>
  );
}

export function SideBarSocial({ icon, text, link }) {
  const openInNewTab = (link) => {
    window.open(link);
  };
  return (
    <div className="sidebar-icon group" onClick={() => openInNewTab(link)}>
      {icon}
      <md-ripple />
      <span className="sidebar-tooltip group-hover:opacity-100 group-hover:left-40 group-hover:scale-100 hover:hidden">
        {text}
      </span>
    </div>
  );
}
