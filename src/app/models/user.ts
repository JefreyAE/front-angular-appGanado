export class User{
   
    constructor(
        public name: string,
        public email: string,
        public password: string
    ){}

    public login(){
        console.log(this.email);

        return true;
    }
}