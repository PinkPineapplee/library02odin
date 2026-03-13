const library = new Array();

function Book(title,author,pages, read=false){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}


function addNewBook(form){
    const newBook = new Book()

    return newBook
}