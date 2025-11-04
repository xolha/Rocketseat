import Text from "../component/ui/text.tsx"
import TrashIcon from "../assets/icons/Trash-Regular.svg?react"
import Icon from "../component/ui/icon.tsx";
import CheckIcon from "../assets/icons/Check-Regular.svg?react"
import PlusIcon from "../assets/icons/Plus-Regular.svg?react"
import SpinnerIcon from "../assets/icons/spinner.svg?react"
import PencilIcon from "../assets/icons/PencilSimple-Regular.svg?react"
import XIcon from "../assets/icons/X-Regular.svg?react"
import Badge from "../component/ui/badge.tsx";
import Button from "../component/ui/button.tsx";
import ButtonIcon from "../component/ui/button-icon.tsx";
import InputText from "../component/ui/input-text.tsx";
import InputCheckbox from "../component/ui/input-checkbox.tsx";
import Card from "../component/ui/card.tsx";
import Container from "../component/ui/container.tsx";


export default function PageComponents() {
    return (
        <Container>
            <div className="grid gap-10">
                <div className="flex flex-col gap-2">
                    <Text variant="body-sm-bold" className="text-pink-base">
                        Olá mundo!
                    </Text>
                    <Text className="text-green-base">Olá mundo!</Text>
                    <Text variant="body-md-bold">Olá mundo!</Text>
                    <Text>Levar o dog pra passear</Text>
                </div>

                <div className="flex gap-1">
                    <Icon svg={TrashIcon} className="fill-green-base" />
                    <Icon svg={CheckIcon} />
                    <Icon svg={PlusIcon} />
                    <Icon svg={SpinnerIcon} animate />
                    <Icon svg={PencilIcon} />
                    <Icon svg={XIcon} />
                </div>

                <div className="flex gap-1">
                    <Badge variant="secondary">5</Badge>
                    <Badge variant="primary">2 de 5</Badge>
                    <Badge loading></Badge>
                </div>

                <div>
                    <Button icon={PlusIcon}>Nova tarefa</Button>
                    <Button icon={PlusIcon} handling>
                        Criando...
                    </Button>
                </div>

                <div className="flex gap-1">
                    <ButtonIcon icon={TrashIcon} disabled />
                    <ButtonIcon icon={TrashIcon} variant="secondary" />
                    <ButtonIcon icon={TrashIcon} variant="tertiary" />
                    <ButtonIcon icon={TrashIcon} loading />
                    <ButtonIcon icon={TrashIcon} handling />
                </div>

                <div>
                    <InputText />
                </div>

                <div>
                    <InputCheckbox />
                    <InputCheckbox loading />
                </div>

                <div>
                    <Card size="md">Olá mundo</Card>
                </div>

                <div className="space-y-2">
                    <Skeleton className="h-6" />
                    <Skeleton className="h-6" />
                    <Skeleton className="w-96 h-6" />
                </div>
            </div>
        </Container>
    );
}}