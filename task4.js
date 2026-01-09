

export class FriendAge {
    constructor(nombre,año,mes,dia){
        this.nombre = nombre;
        this.año = año;
        this.mes = mes;
        this.dia = dia;
    }
    returnAge(){
        const var1 = new Date();
        const Var2 = new Date(this.año,this.mes,this.dia);
        let Edad = var1.getFullYear() - Var2.getFullYear();
        const var3 = var1.getMonth() - Var2.getMonth();

        return `${this.nombre} tiene ${Edad}`;
    }
}

const usuario1 = new FriendAge("Javier",1995,10,7);
console.log(usuario1.returnAge());