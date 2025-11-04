import Header from "../component/header.tsx";
import MainContent from "../component/main-content.tsx";
import { Outlet} from "react-router";
import Footer from "../component/footer.tsx";
import PageHome from "./page-home.tsx";

export default function LayoutMain() {
    return <>
       <Header/>
       <PageHome />

        <MainContent>
            <Outlet />
        </MainContent>

        <Footer />
    </>
}