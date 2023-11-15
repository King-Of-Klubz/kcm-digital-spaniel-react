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

interface ProjectsProps {
    projects: Project[]
}

interface projectsReducerState {
    projects: Project[] | null
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