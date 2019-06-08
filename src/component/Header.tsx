import React from "react";

import style from "./Header.module.scss";

interface Props {
    title: string;
}

export const Header: React.FC<Props> = ({ title }) => {
    return (
        <header className={style.header}>
            <h1>{title}</h1>
        </header>
    );
};
