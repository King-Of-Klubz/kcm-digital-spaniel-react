import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from "@/store";
import { localStorage, testimonialApi } from "@/lib";

const state: testimonialsReducerState = {
    testimonials: null,
}

const testimonialsSlice = createSlice({
    name: 'testimonials',
    initialState: localStorage.getItem('testimonials', state),
    reducers: {
        setTestimonials: (state, action) => {
            state.projects = action.payload;
            localStorage.setItem('testimonials', state);
        },
    },
})

export const { setTestimonials} = testimonialsSlice.actions;
export const selectTestimonials = (state: RootState) => state.testimonials;

export const fetchTestimonials = () => async (dispatch: AppDispatch) => {
    await testimonialApi.get<testimonialsResponse>('/api').then(res => {
        dispatch(setTestimonials(res.data))
    }).catch(e => {
        console.log(e);
        throw new Error(e);
    });
}

export default testimonialsSlice.reducer;
