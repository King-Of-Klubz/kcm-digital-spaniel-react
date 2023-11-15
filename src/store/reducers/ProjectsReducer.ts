import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "@/store";
import { localStorage} from "@/lib";
import data from "@/lib/data/projects.json";

const state: projectsReducerState = {
    projects: null,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState: localStorage.getItem("projects", state),
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
      localStorage.setItem("projects", state);
    },
  },
});

export const { setProjects } = projectsSlice.actions;
export const selectProjects = (state: RootState) => state.projects.projects;

export const fetchProjects = () => async (dispatch: AppDispatch) => {
    console.log(data);
    
 dispatch(setProjects(data))
};

export default projectsSlice.reducer;
