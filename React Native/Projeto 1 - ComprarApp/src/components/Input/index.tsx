import {TextInput, TextInputProps} from 'react-native';
import { styles } from "./styles";

export default function Input({...rest}: TextInputProps) {
    return (
        <TextInput {...rest} style={styles.container} />
    )
}