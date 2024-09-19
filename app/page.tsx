import Header from "@/components/header";
import Button from "../components/button/index";
import Tarefas from "@/components/tarefas";

export default function Home() {
    return (
        <main className="main-container">
            <Header />
            <Tarefas />
            <Button />
        </main>
    );
}
