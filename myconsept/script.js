const quote_text = document.getElementById('quote_text');
const quote_author = document.getElementById('quote_author');
const new_quote_btn = document.getElementById('new_quote_btn');

const API_URL = 'https://api.quotable.io/random';

async function getNewQuote() {
    try{
        quote_text.textContent = 'Loading...'; // Show loading text
        quote_author.textContent = ''; // Clear previous author

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        quote_text.textContent = `"${data.content}"`
        quote_author.textContent = `-${data.author}`;
    }
    catch (error) {
        console.error('Error fetching quote:', error);
        if (error.name === 'TypeError') {
            quote_text.textContent = 'Network error. Check your internet connection.';
        } else {
            quote_text.textContent = 'Failed to load quote.';
        }
        quote_author.textContent = '';
    }

}

new_quote_btn.addEventListener('click', getNewQuote);

// Get an initial quote when the page loads
getNewQuote();