import Container from "../component/ui/container.tsx";
import TasksSummary from "../component/tasks-summary.tsx";

export default function PageHome() {
    return <>
        <Container as="article" className="space-y-3">
            <header className="flex justify-between items-center">
                <TasksSummary />
            </header>
        </Container>
    </>
}