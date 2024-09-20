import { Task } from "@/@types";
import { useState } from "react";

export default function TarefasHook() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

    return { tasks, setTasks, completedTasks, setCompletedTasks };
}
