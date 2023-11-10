import React, { useState } from 'react';
import { TabbedSlider } from '../components';

export const Work = () => {
  const projects = [
    {
      id:1,
      title: 'test',
      discription: 'theius',
      filter: 'seas',
      type: 'long',
      url:'src'
    },
    {
      id:2,
      title: 'tester',
      discription: 'theius',
      filter: 'spin',
      type: 'long',
      url:'src'
    }
  ]
  const filters = [
    {
      id:0,
      title: 'All',
      slug: 'all',
    },
    {
      id:1,
      title: 'Seas',
      slug: 'seas',
    },
    {
      id:2,
      title: 'Spin',
      slug: 'spin',
    },
  ]

  return (
    <>
      <div className='container'>
        <div className='title'>
          <h1>Some of our</h1>
          <h2>recent projects</h2>
        </div>
        <div>
          <TabbedSlider projects={projects} filters={filters} />
        </div>
      </div>
    </>
  );
}
