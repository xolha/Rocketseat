import Text from "./component/text.tsx"
import TrashIcon from "./assets/icons/Trash-Regular.svg?react"
import Icon from "./component/icon.tsx";
import CheckIcon from "./assets/icons/Check-Regular.svg?react"
import PlusIcon from "./assets/icons/Plus-Regular.svg?react"
import SpinnerIcon from "./assets/icons/spinner.svg?react"
import PencilIcon from "./assets/icons/PencilSimple-Regular.svg?react"
import XIcon from "./assets/icons/X-Regular.svg?react"
import Badge from "./component/badge.tsx";

function App() {

    return (
        <div className="grid gap-3">
            <Text className="text-green-dark">
                Olá Mundo!
            </Text>

            <div className="flex gap-1">
                <Icon svg={TrashIcon} className="fill-pink-base"/>
                <Icon svg={CheckIcon} className="fill-pink-base"/>
                <Icon svg={PlusIcon} className="fill-pink-base"/>
                <Icon svg={SpinnerIcon} animate className="fill-pink-base"/>
                <Icon svg={PencilIcon} className="fill-pink-base"/>
                <Icon svg={XIcon} className="fill-pink-base"/>

                <div>
                    <Badge variant="primary">
                                2 de 5
                    </Badge>
                    <Badge variant="secondary">
                        5
                    </Badge>
                </div>
            </div>
        </div>

    )
}

export default App
