//Task 1
/*//
let arr1 = ['all', 'video', 'image', 'text'];
let arr2 = ['all', 'video', 'footprints', 'photo'];
console.log(conCate(arr1,arr2));
function conCate(arr1, arr2) {
    let arr3 = arr1.concat(arr2);
    arr3.sort();
    let arr = [arr3[0]];
    for ( let i = 1; i < arr3.length; i++) {
        if (arr3[i] != arr3[i-1]) {
            arr.push(arr3[i]);
        }
    }
    return arr;
}

let arr = conCate(arr1,arr2);
console.log(arr.join (" ")) ;
 */
//Task 2
/*//
let str='преобразование первой буквы каждого слова строки str в верхний регистр.';

console.log(cup(str));
function cup(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function spamolovka(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('100% бесплатно') || lowerStr.includes('увеличение продаж') || lowerStr.includes('только сегодня') || lowerStr.includes('не удаляйте') || lowerStr.includes('ххх');
}
console.log(spamolovka('бесплатно увеличение ххх'));
console.log(spamolovka('JavaScript появился новый метод includes для работы с массивами. По своей сути он очень сильно ...'));
console.log(spamolovka('увеличение продаж'));
console.log(spamolovka('только сегодня'));
console.log(spamolovka('не удаляйте'));
console.log(spamolovka('ххх'));
 */
//Task 3
/*//

function Worker(name, surname, rate, days ) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
    this.getSalary = this.rate*this.days;
}

const worker1=new Worker("Jan", "Jankowsky", 100, 3);
const worker2=new Worker("Sam","Fitcher",99,2);
console.log(worker1);
console.log(worker2);
console.log(worker1.getSalary+worker2.getSalary);

let worker3= {
    name:  "Ivan",
    surname: "Ivanovich",
    rate: 100,
    days: 30,

    get WORKER(){
        return `${this.name} ${this.surname} ${this.rate} ${this.days} ${this.rate*this.days}`;
    }
};
console.log(worker3.WORKER);
*/
//Task 4
/*//
let setK= new Set([1,2,3]);

console.log(setK.has(3));
console.log(setK.has(4));

setK.add(6);
setK.add(9);
setK.add(5);

for(let val of setK){
    console.log(val);
}

console.log('setValSum');
let sum=0;
for(let sVal of setK){
    sum+=sVal;
}
console.log(sum);

setK.delete(2);
setK.clear();
 */
//Task 5
/*//
let arr1=['a','b','c','d','e','f','g','h','k','l','m'];
let arr2=[1,2,3,4,5,6,7,8,9,10,11];
let map = new Map();
    for (let i=0;i<arr1.length && arr1.length===arr2.length;i++){
        map.set(arr1[i],arr2[i]);
    }

console.log("map.keys");

for(let valK of map.keys()){
    console.log(valK);
}
console.log("map.values");
for(let valV of map.values()){
    console.log(valV);
}

console.log("map.size");

console.log(map.size);

map.set('n',12);
map.delete("a");

console.log("map.has(b)");
console.log(map.has("b"));
console.log("map.has(d)");
console.log(map.has("d"));
console.log("map.has(c)");
console.log(map.has("c"));
console.log("map.has(t)");
console.log(map.has("t"));

 */



