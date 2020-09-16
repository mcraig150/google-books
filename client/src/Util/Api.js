import axios from 'axios';

export default {
    getBook: function (query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    },
    getBooks: function() {
        return axios.get('/books');
    }, 
    sendBooks: function(book) {
        return axios.post('/api/book', book)
    },
    removeBook: function(book) {
        return axios.delete('/delete/'+ book)
    }
}