import { Metadata } from "next";
import About1 from "../components/About/About";
import Techs from "../components/TechNologies/Techs";
import WelcomeHome from "../components/homeWelcome/WelcomeComp";
import ProjectsSelect from "../components/Projects/ProjectsSelect";


const pagesData = {
  about: { component: About1, title: "Sobre mí" },
  technologies: { component: Techs, title: "Tecnologías" },
  welcome: { component: WelcomeHome, title: "Bienvenido" },
  projects: { component: ProjectsSelect, title: "Proyectos" },
};


export async function generateMetadata({ params }) {
  const pageData = pagesData[params.page];
  return {
    title: pageData?.title || "Page Not Found",
  };
}


export async function generateStaticParams() {
  return Object.keys(pagesData).map((page) => ({ page }));
}

const StaticPageDash = ({ params }) => {
  const pageData = pagesData[params.page];

  if (!pageData) {
    return <div>Page Not Found</div>;
  }

  const PageComponent = pageData.component;

  return (
    <div className="flex flex-col items-center">
      <PageComponent />
    </div>
  );
};

export default StaticPageDash;
