import type { JSX } from "react";

import { Header } from "./Header.tsx";

export function App(): JSX.Element {
    // eslint-disable-next-line no-console
    console.log("App render");
    return (
        <>
            <Header title="Dotfiles" />
            <main>
                <div>Hello,World!</div>
            </main>
        </>
    );
}
