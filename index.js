const library = new Array();

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false

}


function addNewBook(form){
    const newBook = new Book()

    return newBook
}