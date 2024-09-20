"use client";

import { ModalsHook } from "@/hooks/modalsHook";
import ModalAdd from "./add-tarefa";
import styles from "../../styles/buttons.module.scss";

export default function ModalContainer() {
    const modalHook = ModalsHook();
    const { title, setTitle, addIsOpen, setAddIsOpen } = modalHook;

    return (
        <>
            <button
                type="button"
                className={styles.buttonPrimary}
                onClick={() => setAddIsOpen(true)}
            >
                Adicionar nova tarefa
            </button>
            {addIsOpen ? (
                <ModalAdd
                    title={title}
                    setTitle={setTitle}
                    addIsOpen={addIsOpen}
                    setAddIsOpen={setAddIsOpen}
                />
            ) : null}
        </>
    );
}
