import {View, Image} from 'react-native';
import Button from "@/components/Button";
import {styles} from "./styles";
import Input from "@/components/Input";

export default function Index() {
    return (
        <View style={styles.container}>
            <Image source={require("@/assets/logo.png")} style={styles.logo}/>

            <View style={styles.form}>
                <Input placeholder="O que você quer comprar?"/>
                <Button title="Entrar"/>
            </View>

            <View style={styles.content}>

            </View>
        </View>
    );
}

