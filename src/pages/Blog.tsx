import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "@/hooks";
import { fetchTestimonials, selectTestimonials } from '@/store/reducers/TestimonalsReducer';
import { shallowEqual } from 'react-redux';

export const Blog = () => {
  const dispatch = useAppDispatch();
  const testimonials = useAppSelector(selectTestimonials, shallowEqual);
  useEffect(() => {
    dispatch(fetchTestimonials());
    console.log('this',testimonials);
    
  }, [dispatch]);
  return (
    <>
      <div className='container'>
      {/* {testimonials && testimonials.map((testimonial: testimonial) => (
            <div>
              {testimonial.name}
            </div>
          ))} */}
      </div>
    </>
  );
}

