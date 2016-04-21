function Human(name, age, gender, height, weight){
   this.name= name;
   this.age= age;
   this.gender= gender;
   this.height= height;
   this.weight= weight; 
};


function  Worker () {
    this.work='web developer';
    this.solary=1000000;
    this.make=function(){
        console.log('I like to make money');
    };
    
};
function Student () {
    this.school='GoIT';
    this.scholarship=100;
    this.watchtv= function(){
        console.log('I like to watch serials');
    };
};

Worker.prototype = new Human('Василий', 41, 'male', 196, 120);
Student.prototype = new Human('Григорий', 19, 'male', 188, 100);


var newStudent = new Student();

console.log('newStudent.gender', newStudent.gender );
console.log('newStudent.name', newStudent.name );

console.log('newStudent.age', newStudent.age + "лет");
console.log('newStudent.height', newStudent.height + "cm");
console.log('newStudent.weight', newStudent.weight + "kg");


newStudent.watchtv();


var newWorker = new Worker();

console.log('newWorker.gender', newWorker.gender);
console.log('newWorker.name', newWorker.name);

console.log('newWorker.age', newWorker.age + "лет");
console.log('newWorker.height', newWorker.height + "cm");
console.log('newWorker.weight', newWorker.weight + "kg");

newWorker.make();

