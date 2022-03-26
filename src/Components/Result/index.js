import { View, Text } from "react-native";
import styles from "../../Styles";

export default function Result(props) {
    return (
        <View style={styles.result}>
            <Text style={styles.resultText}>Resultado:</Text>
            <Text style={styles.resultText}>{props.Result}</Text>
        </View>
    );
}