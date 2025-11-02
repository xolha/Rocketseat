import Text from "./component/text.tsx"
import TrashIcon from "./assets/icons/Trash-Regular.svg?react"

function App() {

    return (
        <div className="grid gap-3">
            <Text className="text-green-dark">
                Olá Mundo!
            </Text>


            <div className="flex gap-1">
                <TrashIcon />
            </div>
        </div>

    )
}

export default App
