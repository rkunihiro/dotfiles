import React from "react";

import { Header } from "./Header";

export const App: React.FC = () => {
    console.log("App render");
    return (
        <>
            <Header title="Dotfiles" />
            <main>
                <div>Hello,World!</div>
            </main>
        </>
    );
};
