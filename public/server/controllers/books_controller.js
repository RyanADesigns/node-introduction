const books = [];
let id = 0;

module.exports = {
    create: (request, response) => {
        const {title, author} = request.body;
        // need to know what above line does aside from destructering??
        books.push({ id, title, author });
        id++
        // push id, title, author to books object. when?????
        response.status(200).send(books);
        // with the 200 response send updated books object
    },

    read: (request, response) => {
        console.log('hello this wors');
        response.status(200).send(books);
    },
   // should return all books in collection

   update: (request, response) => {
       const updateId = request.params.id;
       //what is this???
       let index = books.findIndex(book => book.id == updateId);
       // why is                    ^^this singular^^
       // what does this assign to the index variable
       books[index] = {
           id: books[index].id, 
           title: request.body.title || books[index].title,
           author: request.body.author || books[index]. author
       };
       response.status(200).send(books);
   },

   delete: (request, response) => {
       const deleteID = request.params.id;
       bookId = books.findIndex(book => book.id == deleteID);
    //    declaring local variable called bookId
       books.splice(bookId, 1);
       response.status(200).send(books);
   }

};