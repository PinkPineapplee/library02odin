  const addNewBookBtn = document.querySelector("button");

const library = new Array();
const currentRead = new Array();
const newToLibrary = new Array();

//create a book constructor with a unique ID
function Book(id, title,author,pages, read=false){
    this.id = self.crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}
console.log(Book);

//function that add new book to library array
function addNewBook(title,author,pages){
    const newBook = new Book();
      
    return library.push(newBook);
}

// add event listener to get input values
 addNewBookBtn.addEventListener("click",()=>{
    addNewBook()
 })


 //create new card for book

   function createNewCard(){
    let card = document.createElement("div");
    let delBtn = document.createElement("button");
    let info = document.createElement("div");
}



//write a function that loops through arrays and displays all cards in library[] into library gallary

 function diplayLib(){
    
    for ( let book in library){
       createNewCard();
    }
 }