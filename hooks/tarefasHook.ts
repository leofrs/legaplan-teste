import { Task } from "@/@types";
import { useEffect, useState } from "react";
import { ModalDeleHook } from "./modalsHook";

export default function TarefasHook() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
    const [taskIdToDelete, setTaskIdToDelete] = useState<number | null>(null);

    const { setDelIsOpen } = ModalDeleHook();

    const handleDelete = (id: number) => {
        setTaskIdToDelete(id);
        setDelIsOpen(true);
    };

    const handleCheckboxChange = (id: number) => {
        const storedTasks = JSON.parse(
            localStorage.getItem("modalTitle") || "[]"
        );
        const updatedTasks = storedTasks.map((task: Task) => {
            if (Number(task.id) === id) {
                return { ...task, finalizada: true };
            }
            return task;
        });

        localStorage.setItem("modalTitle", JSON.stringify(updatedTasks));

        setTasks(updatedTasks.filter((task: Task) => !task.finalizada));
        setCompletedTasks(updatedTasks.filter((task: Task) => task.finalizada));
    };

    useEffect(() => {
        const storedTasks = localStorage.getItem("modalTitle");
        if (storedTasks) {
            const parsedTasks: Task[] = JSON.parse(storedTasks);
            if (Array.isArray(parsedTasks)) {
                setTasks(parsedTasks.filter((task) => !task.finalizada));
                setCompletedTasks(
                    parsedTasks.filter((task) => task.finalizada)
                );
            } else {
                console.error(
                    "Os dados armazenados não são um array:",
                    parsedTasks
                );
            }
        }
    }, []);

    return {
        tasks,
        setTasks,
        completedTasks,
        setCompletedTasks,
        taskIdToDelete,
        handleDelete,
        handleCheckboxChange,
        setTaskIdToDelete,
    };
}
