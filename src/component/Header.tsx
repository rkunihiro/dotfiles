import React from "react";

import styles from "./Header.module.scss";
// const styles = {
//     header: "header",
// };

interface Props {
    title: string;
}

export const Header: React.FC<Props> = ({ title }) => {
    return (
        <header className={styles["header"]}>
            <h1>{title}</h1>
        </header>
    );
};
