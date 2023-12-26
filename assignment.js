
// Function to fetch product data from the mock API
async function fetchProductData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching product data:', error);
    }
}

// Function to update the UI with product data
async function updateUI() {
    const productData = await fetchProductData();
    document.getElementById('product-image').src = 'th.jpg'; 
    document.getElementById('product-name').textContent = productData.title;
    document.getElementById('product-description').textContent = productData.body;
}

// Function to simulate a purchase action
function buyNow() {
    alert('Thank you for your purchase!');
}

// Update the UI when the page loads
document.addEventListener('DOMContentLoaded', updateUI);