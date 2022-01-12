
const products = [
    { id: "1", imagen: "https://www.tripstore.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/C/D/CD6278-002_0.JPG", name: "Zapas Nike", desc: "zapatillas ultima coleccion", precio: 15000, stock: 5, categoria: "zapatillas" },
    { id: "2", imagen: "https://www.tripstore.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/3/8/38111804_0.jpg", name: "Zapas Puma", desc: "zapatillas ultima coleccion", precio: 20000, stock: 5, categoria: "zapatillas" },
    { id: "3", imagen: "https://www.tripstore.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/C/7/C77124_0.jpg", name: "Zapas Adidas", desc: "zapatillas ultima coleccion", precio: 12000, stock: 5, categoria: "zapatillas" },
    { id: "4", imagen: "https://www.tripstore.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/D/A/DA0933-010_0.jpg", name: "Remera Nike", desc: "remera algodon todos los talles", precio: 2500, stock: 5, categoria: "remeras" },
    { id: "5", imagen: "https://www.tripstore.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/5/9/59970262_0.jpg", name: "Remera Puma", desc: "remera algodon todos los talles", precio: 3000, stock: 5, categoria: "remeras" },
    { id: "6", imagen: "https://www.tripstore.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/G/E/GE4315_0.jpg", name: "Remera Adidas", desc: "remera algodon todos los talles", precio: 3500, stock: 5, categoria: "remeras" }

]


export const getMock = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products)
    }, 3000)
})

