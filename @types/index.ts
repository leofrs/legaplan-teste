import { ReactNode } from "react";

export interface ProviderProps {
    children: ReactNode;
}

export interface UserContextType {
    title: string | null;
    setTitle: (title: string | null) => void;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export interface Task {
    titulo: string;
    finalizada: boolean;
}

export interface Task {
    id: string;
    title: string;
    completed: boolean;
}

export interface TaskContextType {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    completedTasks: Task[];
    setCompletedTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}
