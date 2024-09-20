"use client";

import Header from "@/components/header";
import Button from "../components/button/index";
import Tarefas from "@/components/tarefas";
import ModalAdd from "@/components/modals/add-tarefa";
import { ContextProvider } from "@/context/modalContext";
import { TarefaProvider } from "@/context/tarefaContext";

export default function App() {
    return (
        <main className="main-container">
            <ContextProvider>
                <TarefaProvider>
                    <Header />
                    <Tarefas />
                    <ModalAdd />
                    <Button />
                </TarefaProvider>
            </ContextProvider>
        </main>
    );
}
