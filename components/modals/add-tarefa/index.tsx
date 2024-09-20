"use client";

import styles from "../../../styles/modal-add.module.scss";
import stylesBtn from "../../../styles/buttons.module.scss";
import { ModalType } from "@/@types";

export default function ModalAdd({ title, setTitle, setAddIsOpen }: ModalType) {
    function saveTitle() {
        if (!title || title.trim() === "") {
            alert("Por favor, insira um título.");
            return;
        }

        const tarefasExistentes = JSON.parse(
            localStorage.getItem("modalTitle") || "[]"
        );

        const novaTarefa = { titulo: title, finalizada: false };
        tarefasExistentes.push(novaTarefa);

        localStorage.setItem("modalTitle", JSON.stringify(tarefasExistentes));

        alert("Título salvo: " + title);
        setAddIsOpen(false);
    }
    console.log("ModalAdd rendered");
    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                <h2 className={styles.title}>Nova tarefa</h2>
                <div className={styles.input_container}>
                    <label htmlFor="text_input">Título</label>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Digite"
                        value={title || ""}
                        onChange={(e) => setTitle(e.target.value)}
                        id="text_input"
                    />
                </div>

                <div className={styles.buttons}>
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
                        onClick={saveTitle}
                    >
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    );
}
