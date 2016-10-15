class Person {
	private _nid : number;
	private _name: string;
	private _age: number;

	constructor(nid:number, name:string, age:number)
	{
		this._nid = nid;
		this._name = name;
		this._age = age;		
	}

	getnid() : number { // get nid() : number { // no funcionan con la version configurada como target de compilación
		return this._nid;
	}

	getname() : string { // get name() : string { // no funcionan con la version configurada como target de compilación
		return this._name;
	}

	setname(newName: string) { //set name(newName: string) { // no funcionan con la version configurada como target de compilación
		this._name = newName;
	}

	getage() : number { //get age() : number { // no funcionan con la version configurada como target de compilación
		return this._age;
	}

	setage(newAge: number) { //set age(newAge: number) { // no funcionan con la version configurada como target de compilación
		this._age = newAge;
	}
}

class Student extends Person {
	private _id : number;
	private _classes : Array<string>;

	constructor(nid:number, name:string, age:number)
	{
		super(nid, name, age);
		this._id = nid;
		this._classes = [];
	}

	getid() : number { // get id() : number { // no funcionan con la version configurada como target de compilación
		return this._id;
	}

	getClass(index: number): string {
		return this._classes[index];
	}

	addClass(classname: string) : void {
		this._classes[this._classes.length] = classname;
	}

	getclasses() : Array<string>  // get classes() : Array<string>  // no funcionan con la version configurada como target de compilación
	{
		return this._classes;
	}
}

class Teacher extends Person {
	private _id: number;
	private _grades: Array<string>;
	private _classrooms: Array<number>;

	constructor(nid:number, name:string, age:number)
	{
		super(nid, name, age);
		this._id = nid;
	}

	get grades() : Array<string>{ // get grades() : Array<string>{
		return this._grades;
	}

	set grades(grades: Array<string>) { // set grades(grades: Array<string>) {
		this._grades = grades;
	}

	getclassrooms() : Array<number> // get classrooms() : Array<number>
	{
		return this._classrooms;
	}
}

var student = new Student(1, 'Emilio', 32);
student.addClass('Mathematics');
student.addClass('Chemistry');
student.addClass('Language');

console.log(student);

var class1 : string = student.getClass(1);

console.log(class1);

var id1 : number = student.getid();

var teacher = new Teacher(1, 'Alicia', 41);
teacher.grades = ['1A', '1B']; //  ?????????

console.log(teacher);


