const library = new Array();

//create a book constructor
function Book(id, title,author,pages, read=false){
    this.id = self.crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

//function that add new book to library array
function addNewBook(title,author,pages){
    const newBook = new Book()
      
    return library.push(newBook);
}

//