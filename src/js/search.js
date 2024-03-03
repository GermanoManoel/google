let searchInput = document.querySelector('#search'); 

export function searchOnGoogle() {
    let valueSearch = searchInput.value;
    let urlSearch = `https://www.google.com/search?q=${valueSearch}`;
    window.location.href = urlSearch;

    searchInput.value = '';
}



