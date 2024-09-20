"use client";

import styles from "../../../styles/modals.module.scss";
import stylesBtn from "../../../styles/buttons.module.scss";
import TarefasHook from "@/hooks/tarefasHook";
import { ModalAddHook } from "@/hooks/modalsHook";

export default function ModalAdd() {
    const { title, setTitle, addIsOpen, setAddIsOpen } = ModalAddHook();
    const { setTasks } = TarefasHook();

    function handleAdicionar() {
        if (!title || title.trim() === "") {
            alert("Por favor, insira um título.");
            return;
        }

        const tarefasExistentes = JSON.parse(
            localStorage.getItem("modalTitle") || "[]"
        );

        const novaTarefa = {
            id: Date.now(),
            titulo: title,
            finalizada: false,
        };
        const allTasks = tarefasExistentes.push(novaTarefa);
        setTasks(allTasks);

        localStorage.setItem("modalTitle", JSON.stringify(tarefasExistentes));

        alert("Título salvo: " + title);
        setAddIsOpen(false);
        setTitle("");
    }

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
                                onClick={handleAdicionar}
                            >
                                Adicionar
                            </button>
                        </div>
                        {/* Resolução <= que 768px */}
                        <div className={styles.modal_buttonsMin}>
                            <button
                                type="button"
                                className={stylesBtn.buttonPrimary}
                                onClick={handleAdicionar}
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
