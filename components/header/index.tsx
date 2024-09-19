import Image from "next/image";

import styles from "../../styles/header.module.scss";

import logo from "../../app/assets/logo.png";

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.content}>
                <Image src={logo} width={150} height={36} alt="Logo aqui" />
                <h1>Bem vindo de volta, Marcus</h1>
                <p>Segunda, 01 de dezembro de 2025</p>
            </div>
        </header>
    );
}
