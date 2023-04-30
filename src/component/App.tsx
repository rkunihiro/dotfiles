import { Header } from "./Header";

export function App(): JSX.Element {
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
