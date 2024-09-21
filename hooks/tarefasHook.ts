"use client";

import { useEffect, useState } from "react";

import { TaskApi } from "@/api/task";
const taskApi = new TaskApi();

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

export default function TarefasHook() {
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [taskIdToDelete, setTaskIdToDelete] = useState<number | null>(null);

    /*  const handleCheckboxChange = (id: number) => {
       
    }; */

    useEffect(() => {
        const getAllTasks = async () => {
            const get = await taskApi.getTaskByAuthor();
            if (get) {
                setTasks(get.filter((task: Task) => task.completed === false));
                setCompletedTasks(
                    get.filter((task: Task) => task.completed === true)
                );
            } else {
                alert("Problema encontrado ao puxar as tarefas do DB");
            }
        };
        getAllTasks();
    }, [tasks, completedTasks]);

    return {
        tasks,
        setTasks,
        completedTasks,
        setCompletedTasks,
        taskIdToDelete,
        //handleCheckboxChange,
        setTaskIdToDelete,
    };
}
