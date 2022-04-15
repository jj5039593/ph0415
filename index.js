'use strinct';
//class
class Car{

    carName;//field
    carYear;//field
    carCoin;//field
    //생성자 -> method
    constructor(carName,carYear,carCoin){
        this.carName=carName;
        this.carYear=carYear;
        this.carCoin=carCoin;
    }
    //method
    toCarString(){
        console.log(this.carName, this.carYear, this.carCoin)
    }

}
//객체(instance)화
const aCar = new Car('Acar',2022,3000);
console.log(aCar.carName,aCar.carYear,aCar.carCoin)
aCar.toCarString();
const bCar = new Car('Acar',2023,5000)
bCar.toCarString();

console.log('ddd');

//상속
// 자식이 
class BigCar extends Car{
 getToString(){
     console.log('BigCar, getToStringMethod')
 }
}

const BigCar1 = new BigCar('BigACar',2022,10000);
console.log(BigCar1.carName, BigCar1.carYear, BigCar1.carCoin);
BigCar1.toCarString();

class SmallCar extends Car{

}