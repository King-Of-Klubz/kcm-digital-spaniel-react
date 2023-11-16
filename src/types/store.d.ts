interface Project {
    id: number
    title: string
    discription: string
    topic: string
    type: string
    url: string
}
interface Filter {
    id: number
    title: string
    slug: string
}

interface testimonialsReducerState {
    testimonials: testimonial[] | null
}
interface testimonial {
    id: number
    name: string
    location: string
    designation: string
    avatar: string
    message: string
    rating: number
    audio: string
}
type ProjectsContextType = {
    filteredProjects: Project[] | null;
    filters: Filter[];
    activeTab: string;
    handleSelectedFilter: (selectTab: Filter) => void;
  };