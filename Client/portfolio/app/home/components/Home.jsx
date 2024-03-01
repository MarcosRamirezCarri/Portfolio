import ProjectsSelect from "./Projects/ProjectsSelect"
import About1 from "./About/About"
import Techs from "./TechNologies/Techs";
import WelcomeHome from "./homeWelcome/WelcomeComp";

export default function HomePrin ({state, setState}) {
    return(
        <div className="mt-3 lg:mt-0">
       {state === 'Projects' ?  <ProjectsSelect/> : null}
       {state === 'About'? <About1/> : null }
       {state === 'Tech' ? <Techs/> : null}
       {state === 'Welcome' ? <WelcomeHome setState={setState}/> : null}
        </div>
    )
}