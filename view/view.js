document.addEventListener("DOMContentLoaded", ()=>{
    const productList = document.getElementById("product-list");

    fetch("http://localhost:3000/products").then(response=>{
        if(!response.ok){
            throw new Error("Network respose was not OK");
        }
        return response.json();
    }).then(products=>{
        productList.innerHTML = "";

        if(products.length === 0)
        {
            productList.textContent = "No products available.";
            return;
        }

        products.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.className = "product";
            productDiv.innerHTML = `<h3> ${product.name} </h3>
            <p><strong>Price : </strong> ${product.price}</p>
            <p>${product.description}</p>`;
            productList.appendChild(productDiv);
        });
        
    }).catch(error=>{
        productDiv.textContent = "Failed to load products.";
        console.error("Error fetching products: ",error);
    })
});
 


 
 