const apiUrl = 'https://crudcrud.com/api/c16f8602d0164a98abd62a2caa4c62e8/new';
console.log(apiUrl);

let products = [];

async function fetchProductsFromAPI() {
    try {
        const response = await axios.get(apiUrl);
        products = response.data;
        displayProducts();
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

async function addProduct() {
    const productName = document.getElementById('productName').value;
    const sellingPrice = document.getElementById('sellingPrice').value;
    const category = document.getElementById('category').value;

    const product = {
        name: productName,
        price: sellingPrice,
        category: category
    };

    try {
        const response = await axios.post(apiUrl, product);
        product._id = response.data._id;
        products.push(product);
        displayProducts();
    } catch (error) {
        console.error('Error:', error);
    }

    document.getElementById('productName').value = '';
    document.getElementById('sellingPrice').value = '';
    document.getElementById('category').value = 'electronics';
}

async function deleteProduct(product) {
    const productId = product._id;

    try {
        await axios.delete(`${apiUrl}/${productId}`);
        products = products.filter(p => p._id !== productId);
        displayProducts();
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayProducts() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    const groupedProducts = groupBy(products, 'category');

    for (const [category, categoryProducts] of Object.entries(groupedProducts)) {
        const categoryHeader = document.createElement('h3');
        categoryHeader.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        outputDiv.appendChild(categoryHeader);

        const productList = document.createElement('ul');
        categoryProducts.forEach((product) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${product.name} - $${product.price}`;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => deleteProduct(product);

            listItem.appendChild(deleteButton);
            productList.appendChild(listItem);
        });
        outputDiv.appendChild(productList);
    }
}

function groupBy(array, key) {
    return array.reduce((result, obj) => {
        (result[obj[key]] = result[obj[key]] || []).push(obj);
        return result;
    }, {});
}

fetchProductsFromAPI();
