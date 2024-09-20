"use client";

import { useContext } from "react";
import styles from "../../styles/buttons.module.scss";
import { ModalContext } from "@/context/modalContext";

export default function Button() {
    const context = useContext(ModalContext);
    const { setIsOpen } = context;
    return (
        <button
            className={styles.buttonPrimary}
            onClick={() => setIsOpen(true)}
        >
            Adicionar nova tarefa
        </button>
    );
}
