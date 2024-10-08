"use client";

import TarefasHook from "@/hooks/tarefasHook";
import styles from "../../../styles/tarefas.module.scss";

import Image from "next/image";
import check from "../../../assets/check.png";

import { BiTrashAlt } from "react-icons/bi";
import { ModalDeleHook } from "@/hooks/modalsHook";
import ModalDelete from "@/components/modals/delete-tarefa";

export default function TasksFinalizadas() {
    const { delIsOpen, setDelIsOpen } = ModalDeleHook();
    const { setTaskIdToDelete, completedTasks, taskIdToDelete } = TarefasHook();

    const handleDelete = async (id: number) => {
        if (id !== null) {
            setDelIsOpen(true);
            setTaskIdToDelete(id);
        }
    };
    return (
        <>
            <h6 className={styles.containerTarefas_h6}>Tarefas finalizadas</h6>
            <div className={styles.containerTarefas_finalizadas}>
                {completedTasks.length > 0 ? (
                    completedTasks.map((task) => {
                        const { id, title, completed } = task;
                        return (
                            <div
                                key={id}
                                className={
                                    styles.containerTarefas_finalizadas_tarefaFinalizada
                                }
                            >
                                <div
                                    className={
                                        styles.containerTarefas_finalizadas_tarefaFinalizada_checkAndTitle
                                    }
                                >
                                    <input
                                        type="checkbox"
                                        id={`checkbox-${id}`}
                                        title="checked"
                                        defaultChecked={completed}
                                        className={
                                            styles.containerTarefas_finalizadas_tarefaFinalizada_checkAndTitle_checkbox
                                        }
                                    />
                                    <label
                                        htmlFor={`checkbox-${id}`}
                                        className={
                                            styles.containerTarefas_finalizadas_tarefaFinalizada_checkAndTitle_customCheckbox
                                        }
                                    >
                                        <Image
                                            src={check}
                                            alt="check"
                                            width={12}
                                            height={8.5}
                                        />
                                    </label>
                                    <h6
                                        className={
                                            styles.containerTarefas_finalizadas_tarefaFinalizada_checkAndTitle_completed
                                        }
                                    >
                                        {title}
                                    </h6>
                                </div>
                                <button
                                    className={
                                        styles.containerTarefas_finalizadas_tarefaFinalizada_button
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
                    <p>Não há tarefas finalizadas.</p>
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
