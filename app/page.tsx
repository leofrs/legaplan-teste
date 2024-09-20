import Header from "@/components/header";
//import Button from "../components/button/index";
import Tarefas from "@/components/tarefas";
import ModalContainer from "@/components/modals/index";

export default function Home() {
    return (
        <div className="main-container">
            <Header />
            <Tarefas />
            <ModalContainer />
        </div>
    );
}
