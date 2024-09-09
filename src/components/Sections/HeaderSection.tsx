import Background from "../Background";
import styles from "@/styles/modules/header.module.css";

export default function HeaderSection() {
    return (
        <main className={styles.header}>
            <h1 className={styles.headerName}>
                Noah
                <br />
                Van
                <br />
                Leemput
            </h1>
            <h2 className={styles.headerTitle}>
                Interface Student
                <br />
                Front End Developper
                <br />
                Interaction Designer
            </h2>
            <Background />
        </main>
    );
}
