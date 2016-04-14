function Human(){
   this.name='Garry';
   this.age= 41;
   this.gender='male';
   this.height=196;
   this.weight=120; 
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

Worker.prototype = new Human();
Student.prototype = new Human();


var newStudent = new Student();

console.log('newStudent.name', newStudent.name );

var newStudent1 = new Student();

console.log('newStudent1.name', newStudent1.height + "cm");

var newStudent2 = new Student();
newStudent2.watchtv();


var newWorker = new Worker();

console.log('newWorker.male', newWorker.gender);

var newWorker1 = new Worker();

console.log('newWorker1.male', newWorker1.weight + "kg");

var newWorker2 = new Worker();
newWorker2.make();

