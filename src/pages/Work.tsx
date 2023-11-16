import { ProjectsProvider } from "@/lib/contexts/projectsContext";
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
          <div>
          <TabbedSlider />
          </div>
        </ProjectsProvider>
      </div>
    </>
  );
};
