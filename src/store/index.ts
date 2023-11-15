import {configureStore} from '@reduxjs/toolkit'
import {
    testimonialsReducer,
    projectsReducer
} from "@/store/reducers";


export const store = configureStore({
    reducer: {
        testimonials: testimonialsReducer,
        projects: projectsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
