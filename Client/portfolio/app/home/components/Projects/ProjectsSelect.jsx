import { datosProyectos } from "../../../../DatosPortfolio/datosmock";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import ProjectsPanel from "./ProjectFullpanel/ProjectFullPanel";
import { useState } from "react";

export default function ProjectsSelect() {
  let projectsName = [...datosProyectos];

  const [projectSelect, setProjectSelect] = useState([datosProyectos[0]]);

  const HandleSelect = (e) => {
    const val = Number(e.target.value);

    let projectUsed = datosProyectos.filter((project) => project.id === val);
    setProjectSelect(projectUsed);
  };

  return (
    <div className="w-[95vw] lg:w-[65vw] h-[90vh] relative lg:left-[8vw] items-center m-3 lg:top-0">
      <div className="w-fit relative place-content-end rounded-t lg:place-content-center bg-blue-200 flex py-3 gap-3 lg:gap-5 mx-auto px-3">
        {projectsName.map((a) => {
          return (
            <div
              key={a.id}
              className={`shadow-inner rounded p-1 ${
                projectSelect[0].name === a.name ? `bg-blue-100` : `bg-blue-200`
              }`}
            >
              <button
                onClick={HandleSelect}
                value={a.id}
                className="font-sans text-slate-950 font-semibold"
              >
                {a.name}
              </button>
            </div>
          );
        })}
      </div>
      {projectSelect
        ? projectSelect.map((a, index) => (
            <SwitchTransition key={index}>
              <CSSTransition
                classNames="fade3"
                addEndListener={(node, done) =>
                  node.addEventListener("transitionend", done, false)
                }
                key={a.name}
              >
                <ProjectsPanel
                  key={index}
                  name={a.name}
                  images={a.images}
                  description={a.description}
                  Implementations={a.Implementations}
                  shortDescript={a.shortDescript}
                  techs={a.techs}
                  icon={a.icon}
                  link={a.link}
                />
              </CSSTransition>
            </SwitchTransition>
          ))
        : null}
    </div>
  );
}
