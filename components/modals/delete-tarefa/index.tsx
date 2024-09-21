"use client";

import styles from "../../../styles/modals.module.scss";
import stylesBtn from "../../../styles/buttons.module.scss";
import { ModalDeleType } from "@/@types";

import { TaskApi } from "@/api/task";
const taskApi = new TaskApi();

export default function ModalDelete({ id, setDelIsOpen }: ModalDeleType) {
    const handleDelete = async () => {
        try {
            if (id !== null) {
                await taskApi.del(id);
                setDelIsOpen(false);
                alert("Tarefa excluida com sucesso");
            }
        } catch (error) {
            alert(`Um erro inesperado aconteceu: ${error}`);
        }
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
