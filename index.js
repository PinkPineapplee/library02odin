  const addNewBookBtn = document.querySelector("button#add-new");
  const leftArrow =document.querySelector(".left");
  const rightArrow =document.querySelector(".right")
  const dialog = document.querySelector("dialog")
  const submitBtn = document.querySelector("#submit")
  const titleInput = document.querySelector("#book-title");
  const authorInput = document.querySelector("#author");
  const pagesInput = document.querySelector("#pages");
  const currentGallary=document.getElementById("current-gallary");
  const libraryGallary=document.getElementById("library-gallary");
  const newGallary=document.getElementById("new-gallary");

const library = new Array();
const currentRead = new Array();
const newToLibrary = new Array();

//create a book constructor with a unique ID
function Book(title,author,pages){
    this.id = self.crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.content = []

}
console.log(Book);

//function that adds new book to library array
function addNewBook(title,author,pages){
    let newBook = new Book(title,author,pages);
      
    return newBook;
}

//show dialog modal for add new book form
addNewBookBtn.addEventListener("click", ()=>{
dialog.showModal();

});


// add event listener to get input values
 submitBtn.addEventListener("click",(event)=>{
  event.preventDefault();
   const bookInstance = addNewBook(titleInput.value, authorInput.value, pagesInput.value);
   library.push(bookInstance);
   dialog.close();
   displayLib();

console.log((bookInstance.id)+ "book has been added to library."
)

 })


 //create new card for book
   function createNewCard(book){
    let card = document.createElement("div");
    card.classList.add("card");
    // add book background image
    let delBtn = document.createElement("button");
    delBtn.classList.add("delBtn");
    let info = document.createElement("div");
    let p = document.createElement("p");

    info.classList.add("info");
    // append children to card
    info.append(p, delBtn);
    card.appendChild(info);

    p.textContent = book.bookInfo();
    delBtn.textContent = "DELETE";

}


    //write a function that loops through arrays and displays all cards in library[] into library gallary

 function displayLib(){
    
    for ( let book in library){
     
      libraryGallary.textContent += createNewCard(book);
    }
 }
  
//eventlistener to card
  card.addEventListener("click",(e)=>{
    e.Target.isRead();
  });

 // add books for the last five books to newtolibrary array
    function current(){
      if(this.read === true){

        for(let currentBook in library){
        currentRead.push(currentBook);
        currentGallary.textContent = currentBook;

      }
    }}
 // add books that is clicked to the current read array
  Book.prototype.isRead = function(){
    this.read = true;
    currentRead.push()
   };
 


  Book.prototype.bookInfo = function(){
    return `${this.title} writen by ${this.author} \n ${this.pages}.`;
  };

  //make books move from right to left
  function arrowNavigation(){
    leftArrow.addEventListener("click",()=>{
       //make library array items move to the left.
    });

    rightArrow.addEventListener("click",()=>{
      //make library array items move to the right.
    });
  }

  //get new function
  function getNew(){
  let newBooks = library.slice(Math.max(library.length - 5, 1));
  newToLibrary.push(newBooks);
  for (let book in newToLibrary){
  newGallary.textContent += book;
  }
  }
 