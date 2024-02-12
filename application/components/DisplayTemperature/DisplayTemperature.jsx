import { Text } from "react-native";
import { styles } from './DisplayTemperature.style';

export function DisplayTemperature({convertedTemperature, convertedUnit}) {
    return (
        <Text style={styles.text}>{convertedTemperature} {convertedUnit}</Text>
    )
}