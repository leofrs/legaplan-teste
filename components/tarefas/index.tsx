"use client";

import { useContext, useEffect } from "react";
import styles from "../../styles/tarefas.module.scss";
import { TarefaContext } from "@/context/tarefaContext";
import { Task } from "@/@types";

export default function Tarefas() {
    const context = useContext(TarefaContext);
    const { tasks, setTasks, completedTasks, setCompletedTasks } = context;

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
    }, [setTasks, setCompletedTasks]);

    return (
        <main className={styles.containerTarefas}>
            <h6>Suas Tarefas de hoje</h6>
            <div className={styles.aFazer}>
                {tasks.length > 0 ? (
                    tasks.map((task, index) => (
                        <div key={index}>{task.titulo}</div>
                    ))
                ) : (
                    <p>Não há tarefas para hoje.</p>
                )}
            </div>

            <h6>Tarefas finalizadas</h6>
            <div className={styles.finalizadas}>
                {completedTasks.length > 0 ? (
                    completedTasks.map((task, index) => (
                        <div key={index}>{task.titulo}</div>
                    ))
                ) : (
                    <p>Não há tarefas finalizadas.</p>
                )}
            </div>
        </main>
    );
}
