export function ageCalculator(año,mes,dia) {
    const today = new Date();
    const cumple = new Date(año,mes,dia)

    let edad = today.getFullYear() - cumple.getFullYear();
    const Meses = today.getMonth() - cumple.getMonth();

    return edad;
}
console.log(ageCalculator(2001,11,16));