import Container from "../component/ui/container.tsx";
import TasksSummary from "../component/tasks-summary.tsx";
import TaskList from "../component/task-list.tsx";

export default function PageHome() {
    return <>
        <Container as="article" className="space-y-3">
            <header className="flex justify-between items-center">
                <TasksSummary />
            </header>

            <TaskList />
        </Container>
    </>
}