import Header from "../component/header.tsx";
import MainContent from "../component/main-content.tsx";
import { Outlet} from "react-router";
import Footer from "../component/footer.tsx";
import PageHome from "./page-home.tsx";
import TaskItem from "../component/task-item.tsx";

export default function LayoutMain() {
    return <>
       <Header/>
       <PageHome />

        <TaskItem />

        <MainContent>
            <Outlet />
        </MainContent>

        <Footer />
    </>
}