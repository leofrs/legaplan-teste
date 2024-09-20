"use client";

import TasksFinalizadas from "./finalizadas";
import TasksAbertas from "./abertas";

import styles from "../../styles/tarefas.module.scss";

export default function Tarefas() {
    return (
        <main className={styles.containerTarefas}>
            <TasksAbertas />
            <TasksFinalizadas />
        </main>
    );
}
