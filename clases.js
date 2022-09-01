class User{
    constructor(name, lastName, pets=[], book=[]){
        this.name=name
        this.lastName=lastName
        this.pets=pets
        this.book=book
    };
    getFullName(){
        console.log(`Buenas, yo soy ${this.name} ${this.lastName}`)
    };
    addPet(petName){
        this.pets.push(petName)
    };
    countPets(){
        return console.log(this.pets.length)
    };
    addLibro(title, author){
        let book={
            title:title,
            author:author
        };
        this.book.push(book)
    };
    getBookNames(){
        let userBooks=""
        for (const books of this.book) {
            userBooks=`${books.title}`
        }
        console.log(userBooks)
    };
}

const user1=new User(
    "Carlos",
    "Perez",
    [("Aquiles", "Uma")],
    [
        {
            title:"Las aventuras de Tom Bombadil",
            author:"J.R.R Tolkiem"
        }
    ]
);

user1.getFullName();
user1.countPets();
user1.getBookNames();