function searchBooks() {
    const searchQuery = document.getElementById('searchQuery').value;

    if (searchQuery.length === 0) {
        document.getElementById('searchResults').innerText = 'Please enter a search query.';
    } else {

        let results = ['Book 1 by Author A', 'Book 2 by Author B', 'Book 3 by Author C'];
        let resultsHTML = '';
        results.forEach(function(result) {
            resultsHTML += '<p>' + result + '</p>'; 
        });
        document.getElementById('searchResults').innerHTML = 'Nice book';
    }
}

document.getElementById('recommendationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const bookTitle = document.getElementById('bookTitle').value.trim();
    const authorName = document.getElementById('authorName').value.trim();

    let confirmationMessage = '';
    if (bookTitle !== '' && authorName !== '') {
        confirmationMessage = `Thank you for recommending "${bookTitle}" by ${authorName}.`;
    } else {
        confirmationMessage = 'Please enter both book title and author name.';
    }

    document.getElementById('recommendationConfirmation').innerText = confirmationMessage;
});

