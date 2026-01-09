export class FriendNames {
    constructor(name1,name2,name3) {
  this.name1 = name1;
  this.name2 = name2;
  this.name3 = name3;
    }
  

  mostrar(){
    console.log(`Mis amigos son: ${this.name1}, ${this.name2} y ${this.name3}`);
  }

}
  const amigos = new FriendNames(`Wero`,`Galope`,`luke`); 
  amigos.mostrar();