import Badge from "../component/ui/badge.tsx";
import Text from "../component/ui/text.tsx";
import useTasks from "../hooks/use-tasks";

export default function TasksSummary() {
    const { createdTasksCount, concludedTasksCount, isLoadingTasks } = useTasks();

    return (
        <>
            <div className="flex items-center gap-2">
                <Text className="!text-gray-300" variant="body-sm-bold">
                    Tarefas criadas
                </Text>s
                <Badge variant="secondary" loading={isLoadingTasks}>
                    {createdTasksCount}
                </Badge>
            </div>

            <div className="flex items-center gap-2">
                <Text className="!text-gray-300" variant="body-sm-bold">
                    Concluídas
                </Text>
                <Badge variant="primary" loading={isLoadingTasks}>
                    {concludedTasksCount} de {createdTasksCount}
                </Badge>
            </div>
        </>
    );
}