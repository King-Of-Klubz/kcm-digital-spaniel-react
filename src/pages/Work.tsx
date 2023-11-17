import { ProjectsProvider } from "@/contexts/projectsContext";
import { TabbedSlider } from "../components";
export const Work = () => {
  return (
    <>
      <div className="container">
        <div className="title">
          <h1>Some of our</h1>
          <h2>recent projects</h2>
        </div>
        <ProjectsProvider>
          <TabbedSlider />
        </ProjectsProvider>
      </div>
    </>
  );
};
