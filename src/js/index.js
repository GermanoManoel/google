import { searchOnGoogle } from './search.js';

let searchForm = document.querySelector('#searchForm');
searchForm.addEventListener('submit', (evForm) => {
    evForm.preventDefault();
});

let searchInput = document.querySelector('#search'); 
searchInput.addEventListener('keypress', (evInput) => {
    if (evInput.key === 'Enter') {
        searchOnGoogle();
    }
});