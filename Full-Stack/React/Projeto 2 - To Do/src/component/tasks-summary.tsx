import Text from "./ui/text.tsx";
import Badge from "./ui/badge.tsx";

export default function TasksSummary() {
    return (
        <>
            <div className="flex items-center m-2 gap-1">
                <Text variant="body-sm-bold" className="text-gray-300">Tarefas criadas</Text>
                <Badge variant="secondary">
                    5
                </Badge>
            </div>
            <div className="flex items-center m-2 gap-1">
                <Text variant="body-sm-bold" className="text-gray-300">Concluídas</Text>
                <Badge variant="primary">
                    2 de 5
                </Badge>
            </div>
        </>
    )
}