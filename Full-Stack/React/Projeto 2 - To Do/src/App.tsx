import {BrowserRouter, Route, Routes} from "react-router";
import PageComponents from "./pages/page-components.tsx";
import LayoutMain from "./pages/layout-main.tsx";
import PageHome from "./pages/page-home.tsx";

function App() {
        return (
            <BrowserRouter> {/*onde a rota vai*/}
                <Routes> {/*componente de rotas*/}
                    <Route element={<LayoutMain />}>
                        <Route index element={<PageHome />}/>
                        <Route path={"/componentes"} element={<PageComponents />} /> {/*a rota em si*/}
                    </Route>
                </Routes>
            </BrowserRouter>
        )
}

export default App
