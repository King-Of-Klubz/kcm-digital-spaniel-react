import { useContext } from "react";
import "../css/components/TabbedSlider.css";
import { ProjectsContext } from "@/contexts/projectsContext";
export const TabbedSlider = () => {
  const { activeTab, handleSelectedFilter, filteredProjects, filters } =
    useContext(ProjectsContext) as ProjectsContextType;
  return (
    <div className="tabbed-slider">
      <div className="tabs">
        {filters &&
          filters.map((tab) => (
            <div
              key={tab.id}
              className={`tab ${tab.slug === activeTab ? "active" : ""}`}
              onClick={() => handleSelectedFilter(tab)}
            >
              {tab.title}
            </div>
          ))}
      </div>
      <div className="content">
        <div className="slider">
          {filteredProjects &&
            filteredProjects.map((project: Project) => (
              <div className="slide">
                <div className={`single ${project.type}`} key={project.id}>
                  <img src={project.url} alt={""} />
                  <div className="centered">
                    <div>{project.title}</div>
                    <div>{project.discription}</div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
