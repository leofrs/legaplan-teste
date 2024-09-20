import { ReactNode } from "react";

export interface ProviderProps {
    children: ReactNode;
}

export interface ModalAddType {
    title: string | null;
    setTitle: (title: string | null) => void;
    addIsOpen: boolean;
    setAddIsOpen: (isOpen: boolean) => void;
}
export interface ModalDeleType {
    id: number | null;
    delIsOpen: boolean;
    setDelIsOpen: (delIsOpen: boolean) => void;
}

export interface Task {
    titulo: string;
    finalizada: boolean;
}

export interface Task {
    id: string;
    title: string;
    finalizada: boolean;
}

export interface TaskContextType {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    completedTasks: Task[];
    setCompletedTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}
