import PersonalCard from "../components/PersonalCard";
import Examples from "../components/Examples";
import About from "../components/About";

function PageWrapper() {

    return (
    <div className="page-wrapper">
      <PersonalCard/>
      <About />
      <Examples />
    </div>
  );
}

export default PageWrapper;
