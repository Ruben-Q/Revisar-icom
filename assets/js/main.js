async function getProducts() {
    
    try {
        const data = await fetch(
            "http://ecommercebackend.fundamentos-29.rep1.co/"
        );
        const res = await data.json();
    
        window.localStorage.setItem("products", JSON.stringify(res));
    
        return res;
    } catch (error) {
    
    Console.log(error)
        }
    
    }
    
    
function printProducts(db) { // Obtener productos.
    // CREAMOS ESTA FUNCION Y LA PASAMOS COMO ARGUMENTO A: "function printProduc" y la recibimos coma parametro "(db)"
    // Esta funcion biene de afuera.
    const productsHTML = document.querySelector(".product");

    let html = ""; // Por cada producto.

    for (const product of db.products) { // Hacemos un fo o pata traer los preductos.

    // Concateno con cada interaccion.
    html +=`
        
    <div class="product">
    <div class="product_img">
        <img src="${product.image}" alt="imagen"/>
        </div>
        
        <p>${product.name}<p>
    </div>
    `;
}
productsHTML.innerHTML = html;
console.log(productsHTML); 
};

async function main() { // Hacemos la peticion si es la primera vez.
    const db = {
        products:
            JSON.parse(window.localStorage.getItem(".products")) || // P1-Ir al navegador local/ La funcion pregunra si consume lo que tenemos guardado en este codigo que seria la v entana.
            (await getProducts()), // O si comienza de 0.
            cart: {},
    };

    // Funciones exteriores extraidas al "main principal".
    function printProduc(db)
    main()
}; 

