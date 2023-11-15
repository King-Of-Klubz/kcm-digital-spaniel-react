import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "@/store";
import { localStorage, testimonialApi } from "@/lib";

const state: testimonialsReducerState = {
  testimonials: null,
};

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState: localStorage.getItem("testimonials", state),
  reducers: {
    setTestimonials: (state, action) => {
      state.testimonials = action.payload;
      localStorage.setItem("testimonials", state);
    },
  },
});

export const { setTestimonials } = testimonialsSlice.actions;
export const selectTestimonials = (state: RootState) => state.testimonials.testimonials;

export const fetchTestimonials = () => async (dispatch: AppDispatch) => {
  await fetch("https://testimonialapi.vercel.app/api")
    .then((res) => res.json())
    .then((data) => dispatch(setTestimonials(data)));
};

export default testimonialsSlice.reducer;
