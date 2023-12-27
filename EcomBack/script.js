const apiUrl = 'https://crudcrud.com/api/22bd654362dd4c338341c478a7597a2f/new';
const products = [];

function addProduct() {
    const productName = document.getElementById('productName').value;
    const sellingPrice = document.getElementById('sellingPrice').value;
    const category = document.getElementById('category').value;

    const product = {
        name: productName,
        price: sellingPrice,
        category: category
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    })
    .then(response => response.json())
    .then(data => {
        product._id = data._id;
        products.push(product);
        displayProducts();
    })
    .catch(error => console.error('Error:', error));

    document.getElementById('productName').value = '';
    document.getElementById('sellingPrice').value = '';
    document.getElementById('category').value = 'electronics';
}

function deleteProduct(index) {
    const productId = products[index]._id;

    fetch(`${apiUrl}/${productId}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok) {
            // Remove the product locally only after successful API delete
            products.splice(index, 1);
            displayProducts();
        } else {
            console.error('Error:', response.status);
        }
    })
    .catch(error => console.error('Error:', error));
}



function displayProducts() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            products.length = 0; // Clear the local products array
            data.forEach(item => products.push(item));

            const groupedProducts = groupBy(products, 'category');

            for (const [category, categoryProducts] of Object.entries(groupedProducts)) {
                const categoryHeader = document.createElement('h3');
                categoryHeader.textContent = category.charAt(0).toUpperCase() + category.slice(1);
                outputDiv.appendChild(categoryHeader);

                const productList = document.createElement('ul');
                categoryProducts.forEach((product, index) => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${product.name} - $${product.price}`;
                
                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete';
                    deleteButton.onclick = () => deleteProduct(index);
                
                    listItem.appendChild(deleteButton);
                    productList.appendChild(listItem);
                });
                outputDiv.appendChild(productList);
            }
        })
        .catch(error => console.error('Error:', error));
}

function groupBy(array, key) {
    return array.reduce((result, obj) => {
        (result[obj[key]] = result[obj[key]] || []).push(obj);
        return result;
    }, {});
}

// Initial display when the page loads
displayProducts();
