import Header from "../component/header.tsx";
import MainContent from "../component/main-content.tsx";
import { Outlet} from "react-router";
import Footer from "../component/footer.tsx";

export default function LayoutMain() {
    return <>
       <Header/>

        <MainContent>
            <Outlet />
        </MainContent>

        <Footer />
    </>
}