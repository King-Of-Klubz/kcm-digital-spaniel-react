import React, { useEffect, useState } from 'react';
import '../css/components/TabbedSlider.css';
import filterData from "@/lib/data/filters.json";

export const TabbedSlider = (props: ProjectsProps) => {
  const [activeTab, setActiveTab] = useState('all');
  const [projects, setProjects] = useState<Project[]>(props.projects);
  const [filters] = useState<Filter[]>(filterData);

  useEffect(() => {
    if(activeTab == 'all'){
      setProjects(props.projects);
    }
  },[projects]);
  const handleFilter = (tab:string) => {
    console.log(tab);
    if (tab !== 'all') {
      console.log('changed');
      
      const filtered = props.projects.filter(project => project.topic === activeTab)
      console.log(filtered);
      setProjects(filtered)
    }
    setActiveTab(tab)
  }
  return (
    <div className="tabbed-slider">
      <div className="tabs">
        {filters && filters.map(tab => (
          <div
            className={`tab ${tab.slug === activeTab ? 'active' : ''}`}
            onClick={() => handleFilter(tab.slug)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="content">
        <div className="slider">
          {projects && projects.map((project: Project) => (
            <div
              className={'slide active'}
              key={project.id}
            >
              {project.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
