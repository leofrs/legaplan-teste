"use client";

import styles from "../../../styles/modals.module.scss";
import stylesBtn from "../../../styles/buttons.module.scss";
import { ModalDeleType } from "@/@types";

export default function ModalDelete({ id, setDelIsOpen }: ModalDeleType) {
    const handleDelete = () => {
        const storedTasks = JSON.parse(
            localStorage.getItem("modalTitle") || "[]"
        );
        const updatedTasks = storedTasks.filter(
            (task: ModalDeleType) => task.id !== id
        );
        localStorage.setItem("modalTitle", JSON.stringify(updatedTasks));
        setDelIsOpen(false);
    };
    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <h2 className={styles.modal_content_title}>Deletar tarefa</h2>
                <div className={styles.modal_content_inputContainer}>
                    <p>Tem certeza que você deseja deletar essa tarefa?</p>
                </div>

                <div className={styles.modal_buttons}>
                    <button
                        type="button"
                        className={stylesBtn.btnCancel}
                        onClick={() => setDelIsOpen(false)}
                    >
                        Cancelar
                    </button>
                    <button
                        type="button"
                        className={stylesBtn.btnDelete}
                        onClick={handleDelete}
                    >
                        Excluir
                    </button>
                </div>
                {/* Resolução <= que 768px */}
                <div className={styles.modal_buttonsMin}>
                    <button
                        type="button"
                        className={stylesBtn.btnDelete}
                        onClick={handleDelete}
                    >
                        Excluir
                    </button>
                    <button
                        type="button"
                        className={stylesBtn.btnCancel}
                        onClick={() => setDelIsOpen(false)}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
}
