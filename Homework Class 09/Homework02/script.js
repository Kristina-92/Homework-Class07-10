
// Homework 2


let book = {
    title: prompt("Enter the title of a book"),
    author: prompt("Enter its author"),
    readingStatus: prompt("Choose reading status by writing 'read' or 'unread'"),
    showMessage: function(){
        if (book.readingStatus === "read"){
            alert(`Already read ${this.title} by ${this.author}`);

        } else if (book.readingStatus === "unread"){
            alert(`You still need to read ${this.title} by ${this.author}`)
        } else{
            alert("Please enter valid readingStatus 'read' or 'unread'")
        }
    }
}

book.showMessage();