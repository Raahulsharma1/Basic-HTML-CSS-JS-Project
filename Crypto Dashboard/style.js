let data = [];
const cardContainer = document.getElementById("card");

document.addEventListener("DOMContentLoaded", async function(event) {
    try {
        const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false");
        data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        cardContainer.innerHTML = `<p>Error loading data.</p>`;
    }
});

function displayData(data) {
    let content = '';
    data.forEach(item => {
        // Three states for colors: red (negative), green (positive), gray (zero)
        let changeColor;
        if (item.price_change_percentage_24h < 0) {
            changeColor = 'red';  // Negative numbers
        } else if (item.price_change_percentage_24h > 0) {
            changeColor = 'green';  // Positive numbers
        } else {
            changeColor = 'gray';  // Zero percentage
        }

        content += `
        <div class="card">
            <div class="image">
                <img class="img" src="${item.image}" alt="${item.id}">
            </div>
            <div class="details">
                <div class="row">
                    <span class="name">${item.id}</span>
                    <span class="price">${item.current_price}</span>
                </div>
                <div class="row">
                    <span class="short-name">${item.symbol}</span>
                    <span class="change" style="color: ${changeColor};">${item.price_change_percentage_24h !== null ? item.price_change_percentage_24h : 'N/A'}</span>
                </div>
            </div>
        </div>`;
    });
    cardContainer.innerHTML = content;
}
