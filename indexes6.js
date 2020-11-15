console.log("this is the ES6 version of library app.");

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

// class display
class Display {

    add(book) {
        let tableBody = document.getElementById("tableBody");

        let uiString = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>`;
        tableBody.innerHTML += uiString;
    };


    clear() {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }

    show(type, displayMessage) {
        let message = document.getElementById("message");
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                        <strong>Message:</strong> ${displayMessage}
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        </div>`
        setTimeout(() => {
            message.innerHTML = " ";

        }, 2000);

    }


}


// add eventlistener to the id libraryForm

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit)

function libraryFormSubmit(e) {
    console.log("you have submitted the form.");
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    let type;

    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }




    let book = new Book(name, author, type);
    console.log(book);
    // console.log(book.name);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show("success", "you have successfully added the book.")
    }
    else {
        display.show("danger", " you cannot add this book.")
    }




    e.preventDefault();

}
