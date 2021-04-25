export class User {
    id?;
    name: string;
    surname: string;
    email: string;
    age: number;

    constructor(id, name, surname, email, age) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.age = age;
    }
}