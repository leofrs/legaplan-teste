"use client";
import { ModalDeleHook } from "@/hooks/modalsHook";
import styles from "../../../styles/tarefas.module.scss";
import TarefasHook from "@/hooks/tarefasHook";

import { BiTrashAlt } from "react-icons/bi";
import ModalDelete from "@/components/modals/delete-tarefa";

import { TaskApi } from "@/api/task";
import { ConcludeTask } from "@/@types";
const taskApi = new TaskApi();

export default function TasksAbertas() {
    const { tasks } = TarefasHook();

    const { delIsOpen, setDelIsOpen } = ModalDeleHook();
    const { taskIdToDelete, setTaskIdToDelete, setCompletedTasks } =
        TarefasHook();

    const handleCheckboxChange = async ({
        id,
        title,
        completed,
    }: ConcludeTask) => {
        if (id !== null && completed !== null) {
            const up = await taskApi.conclude({ id, title, completed: true });
            setCompletedTasks(up);
        }
    };

    const handleDelete = async (id: number) => {
        if (id !== null) {
            setDelIsOpen(true);
            setTaskIdToDelete(id);
        }
    };

    return (
        <>
            <h6 className={styles.containerTarefas_h6}>Suas Tarefas de hoje</h6>
            <div className={styles.containerTarefas_aFazer}>
                {tasks.length > 0 ? (
                    tasks.map((task) => {
                        const { id, title } = task;
                        return (
                            <div
                                key={id}
                                className={
                                    styles.containerTarefas_aFazer_tarefa
                                }
                            >
                                <div
                                    className={
                                        styles.containerTarefas_aFazer_tarefa_checkAndTitle
                                    }
                                >
                                    <input
                                        type="checkbox"
                                        id={`checkbox-${id}`}
                                        title="checked"
                                        onChange={() =>
                                            handleCheckboxChange({
                                                id,
                                                title,
                                                completed: true,
                                            })
                                        }
                                    />
                                    <h6
                                        className={
                                            styles.containerTarefas_aFazer_tarefa_checkAndTitle_h6
                                        }
                                    >
                                        {title}
                                    </h6>
                                </div>
                                <button
                                    className={
                                        styles.containerTarefas_aFazer_button
                                    }
                                    type="button"
                                    title="Delete"
                                    onClick={() => handleDelete(id)}
                                >
                                    <BiTrashAlt size={24} />
                                </button>
                            </div>
                        );
                    })
                ) : (
                    <p>Não há tarefas à serem feitas.</p>
                )}
            </div>

            {delIsOpen && (
                <ModalDelete
                    delIsOpen={delIsOpen}
                    setDelIsOpen={setDelIsOpen}
                    id={taskIdToDelete}
                />
            )}
        </>
    );
}
