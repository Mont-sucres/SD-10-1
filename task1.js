export function costCalculator(interesFinal) {
    const tarifa = 3;
    const interes = interesFinal * 0.1; 

    return interesFinal + tarifa + interes;
}
console.log(`Transacion con $100 =`, Math.round(costCalculator(100) * 100 / 100));