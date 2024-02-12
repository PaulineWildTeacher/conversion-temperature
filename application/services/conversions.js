import { UNITS } from "./constantes";

/**
 * 
 * @param {*} unit : string
 * @returns string
 * 
 * le but de cette fonction est à partir d'une unité, de récupérer l'unite "opposé" -> si on est en Celsius on retourne des Fahrenheit et inversement
 */
export function getOppositeUnit(unit) {
    return unit === UNITS.celcius ? UNITS.fahrenheit : UNITS.celcius;
}


/**
 * 
 * @param {*} initTemperature : temperature que l'on va vouloir convertir
 * @param {*} targetUnit : l'unité VERS LAQUELLE on va vouloir convertir
 * @returns la veleur numérique qui résulte de la conversion (donc résultat en Fahrenheit si on était en Celsius et ivnersement)
 * 
 * convertTemperature : son but est de nous renvoyer la valeur numérique résultant de la conversion
 */
export function convertTemperature(initTemperature, targetUnit) {
    if (targetUnit === '°C') {
        return (initTemperature - 32) / 1.8;
    } else {
        return (initTemperature * 1.8) + 32;
    }
}

/**
 * 
 * @param {*} value : la temperature qu'on veut analyser
 * @param {*} unit : l'unité de notre temperature
 * @returns un boolean, qui reflétera si oui ou non, la temperature est "froide"
 * retournera true si la temperature en Celsius est inférieure ou égale à 0
 * retournera true si la température en Fahrenheit est inférieure ou égale à 32
 */
export function isIcyTemperature(value, unit) {
    if (unit === UNITS.celcius) {
        return value <= 0;
    } else {
        return value <= 32;
    }
}