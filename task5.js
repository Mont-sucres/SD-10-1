export function rubricPassFail(Puntuacion) {
 if (Puntuacion >= 5){
 return "pass";
  } else {
    return "Fail"
  }
 }
console.log(rubricPassFail(8));
console.log(rubricPassFail(2));
