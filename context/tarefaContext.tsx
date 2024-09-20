"use client";

import { ProviderProps, Task, TaskContextType } from "@/@types";
import { createContext, useState } from "react";

const defaultUserContext: TaskContextType = {
    tasks: [],
    setTasks: () => {},
    completedTasks: [],
    setCompletedTasks: () => {},
};

export const TarefaContext = createContext<TaskContextType>(defaultUserContext);

export const TarefaProvider: React.FC<ProviderProps> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

    return (
        <TarefaContext.Provider
            value={{
                tasks,
                setTasks,
                completedTasks,
                setCompletedTasks,
            }}
        >
            {children}
        </TarefaContext.Provider>
    );
};
