"use client";
import { ModalDeleHook } from "@/hooks/modalsHook";
import styles from "../../../styles/tarefas.module.scss";
import TarefasHook from "@/hooks/tarefasHook";

import { BiTrashAlt } from "react-icons/bi";
import ModalDelete from "@/components/modals/delete-tarefa";

export default function TasksAbertas() {
    const { tasks, handleCheckboxChange, setTaskIdToDelete } = TarefasHook();

    const { delIsOpen, setDelIsOpen } = ModalDeleHook();
    const { taskIdToDelete } = TarefasHook();

    const handleDelete = (id: number) => {
        setTaskIdToDelete(id);
        setDelIsOpen(true);
    };
    return (
        <>
            <h6 className={styles.containerTarefas_h6}>Suas Tarefas de hoje</h6>
            <div className={styles.containerTarefas_aFazer}>
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <div
                            key={task.id}
                            className={styles.containerTarefas_aFazer_tarefa}
                        >
                            <div
                                className={
                                    styles.containerTarefas_aFazer_tarefa_checkAndTitle
                                }
                            >
                                <input
                                    type="checkbox"
                                    id={`checkbox-${task.id}`}
                                    title="checked"
                                    onChange={() =>
                                        handleCheckboxChange(Number(task.id))
                                    }
                                />
                                <h6
                                    className={
                                        styles.containerTarefas_aFazer_tarefa_checkAndTitle_h6
                                    }
                                >
                                    {task.titulo}
                                </h6>
                            </div>
                            <button
                                className={
                                    styles.containerTarefas_aFazer_button
                                }
                                type="button"
                                title="Delete"
                                onClick={() => handleDelete(Number(task.id))}
                            >
                                <BiTrashAlt size={24} />
                            </button>
                        </div>
                    ))
                ) : (
                    <p>Não há tarefas para hoje.</p>
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
