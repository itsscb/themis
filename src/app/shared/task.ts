export interface Task {
    id: number
    timestamp: Date
    begin: Date
    end: Date
    title: string
    description?: string
    category: Category[]
    subtasks?: Task[]
}

export interface Category{
    name: string
}
