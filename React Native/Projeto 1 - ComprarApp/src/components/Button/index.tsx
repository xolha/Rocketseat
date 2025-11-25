import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

type Props = {
    title: string;
}

export default function Button({title, ...rest}: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest} activeOpacity={0.7}>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}