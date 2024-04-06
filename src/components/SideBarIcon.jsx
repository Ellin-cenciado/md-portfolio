/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { NavBarContext } from "../context/NavBarContext.jsx";

export function SideBarIcon({ icon, text, render }) {
  const { UpdatePage } = useContext(NavBarContext);
  const [classList, setClassList] = useState("sidebar-icon group");
  const [classListText, setClassListText] = useState(
    "sidebar-tooltip group-hover:opacity-100 group-hover:left-40 group-hover:scale-100"
  );

  async function HandleClick() {
    UpdatePage(render);
    await setTimeout(() => {
      setClassList("sidebar-icon group");
      setClassListText(
        "sidebar-tooltip group-hover:opacity-100 group-hover:left-40 group-hover:scale-100"
      );
    }, 500);

    setClassList("sidebar-icon group clicked");
    setClassListText("hidden");
  }
  return (
    <div className={classList} onClick={HandleClick}>
      {icon}
      <md-ripple />
      <span className={classListText}>{text}</span>
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
      <span className="sidebar-tooltip group-hover:opacity-100 group-hover:left-40 group-hover:scale-100">
        {text}
      </span>
    </div>
  );
}
