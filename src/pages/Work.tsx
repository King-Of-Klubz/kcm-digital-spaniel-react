import React, { useEffect, useState } from 'react';
import { TabbedSlider } from '../components';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { shallowEqual } from 'react-redux';
import { fetchProjects, selectProjects } from '@/store/reducers/ProjectsReducer';

export const Work = () => {

  const dispatch = useAppDispatch();
  const projects = useAppSelector(selectProjects, shallowEqual);
  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <>
      <div className='container'>
        <div className='title'>
          <h1>Some of our</h1>
          <h2>recent projects</h2>
        </div>
        <div>
          <TabbedSlider projects={projects} />
        </div>
      </div>
    </>
  );
}
