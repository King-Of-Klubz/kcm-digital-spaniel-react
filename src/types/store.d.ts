interface Project {
    id: number
    title: string
    discription: string
    filter: string
    type: string
    url: string
}
interface Filter {
    id: number
    title: string
    slug: string
}

interface ProjectsProps {
    projects: Project[]
    filters: Filter[]
}

interface projectsReducerState {
    projects: Project[] | null
    filter: Filter | null
    filters: Filter[] | null
}

interface testimonialsReducerState {
    testimonials: [] | null
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