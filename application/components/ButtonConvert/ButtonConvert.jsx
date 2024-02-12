import { Text, TouchableOpacity } from "react-native";
import { styles } from './ButtonConvert.style';

export function ButtonConvert({initialUnit, targetUnit, onUnitChange}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onUnitChange}>
            <Text style={styles.text}>Convertir {targetUnit} en {initialUnit}</Text>
        </TouchableOpacity>
    )
}