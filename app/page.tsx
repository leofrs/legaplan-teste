import Header from "@/components/header";
import Tarefas from "@/components/tarefas";
import ModalAdd from "@/components/modals/add-tarefa";

export default function Home() {
    return (
        <div className="main-container">
            <Header />
            <Tarefas />
            <ModalAdd />
        </div>
    );
}
