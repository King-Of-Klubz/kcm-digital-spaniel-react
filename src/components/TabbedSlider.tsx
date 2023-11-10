import React, { useEffect, useState } from 'react';
import '../css/components/TabbedSlider.css';

export const TabbedSlider = (props: ProjectsProps) => {
  const [activeTab, setActiveTab] = useState<Filter>(props.filters[0]);
  const [projects, setProjects] = useState<Project[]>([]);
  const tabs = props.filters; // Define your tab labels
  useEffect(() => {
  
  },);
  const handleFilter = (tab: Filter) => {
    if (activeTab.slug !== 'all') {
      let filtered = props.projects.filter(project => project.filter === activeTab.slug)
      setProjects(filtered)
    }else{
      setProjects(props.projects)
    }
    setActiveTab(tab)
  }
  return (
    <div className="tabbed-slider">
      <div className="tabs">
        {tabs.map(tab => (
          <div
            className={`tab ${tab.slug === activeTab.slug ? 'active' : ''}`}
            onClick={() => handleFilter(tab)}
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
            >
              {project.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
