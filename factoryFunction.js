function creatPerson(name,age,city){
    return{
        name,
        age,
        city,
        show(){
            console.log(this.name);
        }
    }
}

let person1 = creatPerson('anam',25,'Rangpur');
let person2 = creatPerson('mithu miya', 27, 'Rangpur');

console.log(person1);
