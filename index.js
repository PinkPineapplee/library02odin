  const addNewBookBtn = document.querySelector("button#add-new");
  const leftArrow = document.querySelector(".left");
  const rightArrow = document.querySelector(".right")
  const dialog = document.querySelector("dialog")
  const submitBtn = document.querySelector("#submit")
  const titleInput = document.getElementById("book_title");
  const authorInput = document.getElementById("author");
  const pagesInput = document.getElementById("pages");
  const currentGallary = document.getElementById("current-box");
  const libraryGallary = document.getElementById("library-box");
  const newGallary = document.getElementById("new-box");
  const form = document.getElementById("myForm");

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
    this.content = [];
}


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
 form.addEventListener("submit",(e)=>{
   e.preventDefault();
   console.log("input for title:",  titleInput);
   let bookInstance = newbook(titleInput.value, authorInput.value, pagesInput.value);
   library.push(bookInstance);
   
   displayLib();
  console.log(bookInstance); 
  console.log((bookInstance.id)+ "book has been added to library.");
 });

submitBtn.addEventListener("click",()=>{
  dialog.close();
  form.reset();
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


   libraryGallary.appendChild(card);
   currentGallary.appendChild(card);
   newGallary.appendChild(card);

  //eventlistener to card
  card.addEventListener("click",(e)=>{
    let bookTouched = e.target
    bookTouched.id.isRead();
  });


  //delete button to remove all card for gallary and array.

 delBtn.addEventListener("click", (array)=>{
   card.remove();
   array.filter( e => e.target.id)
 })
}
  
    //write a function that loops through arrays and displays all cards in library[] into library gallary

 function displayLib(){ 
    for ( let book of library){  
    createNewCard(book);
    }
 }
  


 // add books for the last five books to newtolibrary array
    function current(){
      if(this.read === true){

        for(let currentBook of library){
        currentRead.push(currentBook);
        currentGallary.textContent += currentBook;

      }
    }}current();

 // add books that is clicked to the current read array
  Book.prototype.isRead = function(){
    this.read = true;
    currentRead.push()
   };
 


  Book.prototype.bookInfo = function(){
    return `${this.title} writen by ${this.author} \n ${this.pages}.`;
  };

  //make books move from right to left
  function arrowNavigation(array){
    leftArrow.addEventListener("click",()=>{
       //make library array items move to the left.
       let item = array.unshift(array[0]);
       array.push(item);
    });

    rightArrow.addEventListener("click",()=>{
      //make array items move to the right.
       let item = array.pop(array.length);
       array.shift(item);
    });
  }arrowNavigation(library);
  arrowNavigation(newToLibrary);
  arrowNavigation(currentRead);

  //get new function
  function getNew(){
  let newBooks = library.slice(Math.max(library.length - 5, 1));
  newToLibrary.push(newBooks);
  for (let book of newToLibrary){
  newGallary.textContent += book;
  };
}getNew()
  
 