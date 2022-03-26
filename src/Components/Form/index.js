import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Keyboard } from "react-native";
import styles from "../../Styles";
import Result from "../Result";

export default function Form() {

    const [capital, setCapital] = useState(null)
    const [taxa, setTaxa] = useState(null)
    const [tempo, setTempo] = useState(null)
    const [montante, setMontante] = useState(null)

    function calcularJuros() {
        let valor
        for (let i = 1; i <= tempo; i++) {
            valor = capital * (1 + taxa / 100) ** tempo
        }
        return setMontante(valor.toFixed(2))
    }

    function validar(){
        if (capital != null && taxa != null && tempo != null){
            calcularJuros()
            setCapital(null)
            setTaxa(null)
            setTempo(null)
            Keyboard.dismiss()
        } else {
            setMontante(null)
        }
    }


    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.text}>Informe o capital:</Text>
                <TextInput style={styles.textInput}
                keyboardType="numeric" 
                onChangeText={setCapital} 
                value={capital} />
                <Text style={styles.text}>Informe a taxa de juros (a.m):</Text>
                <TextInput style={styles.textInput}
                keyboardType="numeric" 
                onChangeText={setTaxa} 
                value={taxa} />
                <Text style={styles.text}>Informe o tempo (meses):</Text>
                <TextInput style={styles.textInput}
                keyboardType="numeric" 
                onChangeText={setTempo} 
                value={tempo} />
                <TouchableOpacity style={styles.button} 
                onPress={() => validar()} >
                    <Text style={styles.buttonText}>
                        Calcular</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Result Result={montante}/>
            </View>
        </View>
    );
}