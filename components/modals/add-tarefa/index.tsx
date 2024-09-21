"use client";

import styles from "../../../styles/modals.module.scss";
import stylesBtn from "../../../styles/buttons.module.scss";
import TarefasHook from "@/hooks/tarefasHook";
import { ModalAddHook } from "@/hooks/modalsHook";

import { TaskApi } from "@/api/task";
const taskApi = new TaskApi();

export default function ModalAdd() {
    const { title, setTitle, addIsOpen, setAddIsOpen } = ModalAddHook();
    const { setTasks } = TarefasHook();

    const handleCretae = async () => {
        try {
            if (title !== null) {
                const task = await taskApi.createTask({
                    title,
                    completed: false,
                });
                setTasks(task);
                setAddIsOpen(false);
                setTitle("");

                alert("Tarefa criada com sucesso");
            } else {
                alert("O titulo não pode ser vázio");
            }
        } catch (error) {
            alert(`Error encontrado ao criar a task: ${error}`);
        }
    };

    return (
        <>
            <button
                type="button"
                className={stylesBtn.buttonPrimary}
                onClick={() => setAddIsOpen(true)}
            >
                Adicionar nova tarefa
            </button>

            {addIsOpen ? (
                <div className={styles.modal}>
                    <div className={styles.modal_content}>
                        <h2 className={styles.modal_content_title}>
                            Nova tarefa
                        </h2>
                        <div className={styles.modal_content_inputContainer}>
                            <label htmlFor="text_input">Título</label>
                            <input
                                type="text"
                                className={styles.modal_input}
                                placeholder="Digite"
                                value={title || ""}
                                onChange={(e) => setTitle(e.target.value)}
                                id="text_input"
                            />
                        </div>

                        <div className={styles.modal_buttons}>
                            <button
                                type="button"
                                className={stylesBtn.btnCancel}
                                onClick={() => setAddIsOpen(false)}
                            >
                                Cancelar
                            </button>
                            <button
                                type="button"
                                className={stylesBtn.buttonPrimary}
                                onClick={handleCretae}
                            >
                                Adicionar
                            </button>
                        </div>
                        {/* Resolução <= que 768px */}
                        <div className={styles.modal_buttonsMin}>
                            <button
                                type="button"
                                className={stylesBtn.buttonPrimary}
                                onClick={handleCretae}
                            >
                                Adicionar
                            </button>
                            <button
                                type="button"
                                className={stylesBtn.btnCancel}
                                onClick={() => setAddIsOpen(false)}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}
