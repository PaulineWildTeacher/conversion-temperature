import { Text, TextInput, View } from "react-native";
import { styles } from './InputTemperature.style';

export function InputTemperature({temperatureValue, unit, onChangeTemperature}) {
    return (
        <View style={styles.inputContainer}> 
            <TextInput 
            style={styles.input}
            placeholder="Entre une température"
            keyboardType="numeric"
            maxLength={4}
            value={temperatureValue}
            onChangeText={onChangeTemperature}
            />

            <Text style={styles.unit}>{unit}</Text>
        </View>
    )
}