import Container from "../component/container.tsx";
import {NavLink, Outlet} from "react-router";
import Text from "../component/text.tsx";

export default function LayoutMain() {
    return <>
        <Container as="header" className="mt-3 md:mt-20">
            header :D
        </Container>
        <main className="mt-4 md:mt-8">
            <Outlet/> {/* conteúdo da página */}
        </main>
        <footer className="my-5 md:my-10">
            <nav className="flex items-center justify-center gap-4">
                <NavLink to={"/"}>
                    <Text className="text-gray-300" variant="body-sm-bold">
                        Tarefas
                    </Text>
                </NavLink>
                <NavLink to={"/componentes"}>
                    <Text className="text-gray-300" variant="body-sm-bold">
                        Componentes
                    </Text>
                </NavLink>
            </nav>
        </footer>
    </>
}