import { createContext, useState } from "react";
import filterData from "@/data/filters.json";
import projectsData from "@/data/projects.json";

export const ProjectsContext = createContext<ProjectsContextType | null>(null);
// @ts-ignore
export const ProjectsProvider = ({ children }) => {
  const [allProjects] = useState<Project[]>(projectsData);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [filteredProjects, setFilterProjects] =
    useState<Project[]>(projectsData);
  const [filters] = useState<Filter[]>(filterData);

  const handleSelectedFilter = (tab: Filter) => {
    if (tab.slug !== "all") {
      const filtered = allProjects.filter(
        (project) => project.topic === tab.slug
      );
      setFilterProjects(filtered);
    } else {
      setFilterProjects(projectsData);
    }
    setActiveTab(tab.slug);
  };
  return (
    <ProjectsContext.Provider
      value={{ activeTab, handleSelectedFilter, filteredProjects, filters }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
