import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "@/hooks";
import { fetchTestimonials, selectTestimonials } from '@/store/reducers/TestimonalsReducer';
import { shallowEqual } from 'react-redux';

export const Blog = () => {
  const dispatch = useAppDispatch();
  const testimonials = useAppSelector(selectTestimonials, shallowEqual);
  useEffect(() => {
    dispatch(fetchTestimonials());
  }, [dispatch]);
  return (
    <>
      <div className='container'>
      {testimonials && testimonials.map((testimonial: testimonial) => (
            <div key={testimonial.id}>
              {testimonial.name}
            </div>
          ))}
      </div>
    </>
  );
}

