export interface Assignment {
    id: number,
    name: string,
    className: string,
    category: string,
    dueDate: string, //Convert to Date when handling sorting and warning logic
    isComplete: boolean,
    grade?: number,
}
