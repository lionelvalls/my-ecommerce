const products = [
    {   id: 1,
        image: 'https://www.autoluna.com.ar/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-10-at-10.20.56-1-798x466.jpeg',
        title: 'TOYOTA COROLLA HIBRID 0KM',
        price: 26900,
        category: 'Nuevos',
        stock: 1,
        
    },
    {
        id: 2,
        image: 'https://1.bp.blogspot.com/-BE7sHkAbr3Q/YC-m9XHlCSI/AAAAAAADdBk/EtJVrxkIbtMM_OoKr7i6w8ccLxf6qOA_ACNcBGAsYHQ/w1200-h630-p-k-no-nu/Lanzamiento-Mercedes-Benz-CLA-Precios-0km-202100004.jpg',
        title: "MERCEDES BENZ CLA 200 0KM",
        price: 25500,
        category: "Nuevos",
        stock: 1,
        
    },
    {
        id: 3,
        image: "https://www.autoluna.com.ar/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-22-at-21.41.48-798x466.jpeg",
        title: "FIAT CRONOS PRECISION 1.8 0KM",
        price: 7300000,
        category: "Nuevos",
        stock: 1,
        
    },
    {
        id: 4,
        image: "https://www.autoluna.com.ar/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-22-at-21.43.43-798x466.jpeg",
        title: "TOYOTA SW4 SRV 4X4 7 AS 0KM",
        price: 12000000,
        category: "Nuevos",
        stock: 1,
        
    },
    {
        id: 5,
        image: "https://www.autoluna.com.ar/wp-content/uploads/2023/05/994d127f-e9ee-4155-a2fa-8a05398e8ed0-798x466.jpg",
        title: "Ford Kuga Trend 2010",
        price: 4950000,
        category: "Usados",
        stock: 1,
        
    },
    {
        id: 6,
        image: "https://autofamily.com.ar/wp-content/uploads/2023/07/21-1-1024x768.jpg",
        title: "Renault Fluence Luxe 2.0 2012",
        price: 3100000,
        category: "Usados",
        stock: 1,
      
    },
    {
        id: 7,
        image: "https://www.autoluna.com.ar/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-09-at-11.28.48-798x466.jpeg",
        title: "Fiat Qubo Active 2012",
        price: 2990000,
        category: "Usados",
        stock: 1,
        
    },
    {
        id: 8,
        image: "data:image/jpeg;base64,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",
        title: "CHEVROLET ONIX PLUS LS JOY 1.4 2020",
        price: 2004357,
        category: "Usados",
        stock: 1,
        
    },
    {
        id: 9,
        image: "https://www.autoluna.com.ar/wp-content/uploads/2023/01/599838a3-d4be-41df-95ec-56b0fd852aa2-798x466.jpg",
        title: "MERCEDES BENZ 220 1951",
        price: 22000,
        category: "Usados",
        stock: 1,
        
    }

]

export const getProducts= () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (products.find(prod => prod.id === parseInt(productId)))
        },500)
    }) 
}

export const getProductByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (products.filter(prod => prod.category === productCategory))
        },500)
    }) 
}
