import { ImageBackground, StyleSheet } from 'react-native';
import hot from './assets/images/hot.png';
import cold from './assets/images/cold.png';
import { InputTemperature } from './application/components/InputTemperature/InputTemperature';
import { useEffect, useState } from 'react';
import { DisplayTemperature } from './application/components/DisplayTemperature/DisplayTemperature';
import { ButtonConvert } from './application/components/ButtonConvert/ButtonConvert';
import { DEFAULT_TEMPERATURE } from './application/services/constantes';
import { DEFAULT_UNIT } from './application/services/constantes';
import { convertTemperature, getOppositeUnit, isIcyTemperature } from './application/services/conversions';

export default function App() {
  const [temperatureValue, setTemperatureValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const [currentBackground, setCurrentBackground]= useState(null);
  const oppositeUnit = getOppositeUnit(currentUnit); // valeurs possibles de oppositeUnit : '°C' ou '°F'

  useEffect(() => {
    const temperatureAsFloat = Number.parseFloat(temperatureValue);
    if (!isNaN(temperatureAsFloat)) {
      const isColdBackground = isIcyTemperature(temperatureValue, currentUnit);
      setCurrentBackground(isColdBackground ? cold : hot);
    }
  }, [temperatureValue, currentUnit]);

  /**
   * 
   * @returns string
   * le but de cette fonction getConvertedTemperature est de nous retourner une string qui est vide si la temperatureValue
   * (entrée par l'utilisateur et stockée dans le state) ne peut pas être traduite en number
   * Si on a un nombre alors va nous retourner un string grâce au résultat de la fonction convertTemperature
   * toFixed, pour se débarasser des nombres après la virgule
   */
  function getConvertedTemperature() {
    const valueAsFloat = Number.parseFloat(temperatureValue);
    return isNaN(valueAsFloat) ? '' : convertTemperature(valueAsFloat, oppositeUnit).toFixed();
  }

  /**
   * handleCurrentUnit appelle le setter setCurrentUnit -> à la base la valeur de l'unité (stockée dans le state currentUnit) était °C
   * En faisant setCurrentUnit, on passe la valeur oppositeUnit donc on va changer l'unité de notre température
   */
  function handleCurrentUnit() {
    setCurrentUnit(oppositeUnit);
  }

  return (
    <ImageBackground style={styles.container} source={currentBackground}>
      <DisplayTemperature convertedTemperature={getConvertedTemperature()} convertedUnit={oppositeUnit}/>

      <InputTemperature temperatureValue={temperatureValue} unit={currentUnit} onChangeTemperature={setTemperatureValue}/>

      <ButtonConvert initialUnit={currentUnit} targetUnit={oppositeUnit} onUnitChange={handleCurrentUnit}/>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 20
  },
});

/**
 * Etape 1 : layout (sans créer les composants)
 * 
 * Etape 2 : création du composant principal InputTemperature
 * 
 * Etape 3 : créer mes states -> je sais maintenant que je vais avoir besoin de stocker la température entrée par l'utilisateur
 * et je vais également avoir besoin de stocker dans un state l'unité de ma température (car l'utilisateur pourra la faire varier)
 * 
 * Etape 4 : création du composant DisplayTemperature -> dans un premier temps, j'ai fait en sorte qu'il se contente d'afficher les mêmes
 * valeurs que celles stockées dans les states (puisqu'elles sont mises à jour par le composant InputTemperature)
 * Donc avec cette étape, au début on a DisplayTemperature qui va vous afficher les MEMES valeurs que InputTemperature
 * Le but est de voir si la connexion entre InputTemperature et DisplayTemperature fonctionne
 * 
 * Etape 5 : création du composant ButtonConvert qui aura pour but de changer le sens de la conversion 
 * 
 * Etape 6 : mettre en place les fonctions de calculs -> services et les constantes
 */
