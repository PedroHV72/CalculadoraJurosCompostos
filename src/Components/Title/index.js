import { View, Text } from "react-native";
import { Image } from "react-native";
import styles from "../../Styles/"
import topo from "../../assets/iconenovo.jpg"

export default function Title() {
    return (
        <View style={styles.title}>
            <Text style={styles.titleText}>Juros Compostos</Text>
            <Image source={topo} style={{width:50, height:50,}} />
        </View>
    );
}