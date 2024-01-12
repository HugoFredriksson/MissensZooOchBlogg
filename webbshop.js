const productsArray = [
    {
        productId: 1,
        productDescription: "Håll dina tår varma med dessa gulliga kattstrumpor av hög kvalitet. En perfekt present till kattälskaren!",
        productName: "Kattstrumpor",
        productCategory: "Kategori 1",
        productPrice: "99:-",
        productStock: 5,
        productImage: "image1.png",
        portionPerDay: "1",
        articleNumber: "1", 
        rating: "2",
        feedAmount: "3",
        foodInfo: "Kcal: 140/100 gram",
        onSale: "false",
        salePercentage: "null"
    },
    {
        productId: 2,
        productDescription: "Ge din hamster lite träning och skratt med dessa små, handgjorda boxningshandskar. Perfekt för de små kämparna!",
        productName: "Boxningshandskar för hamstrar.",
        productCategory: "Kategori 2",
        productPrice: "79:-",
        productStock: 10,
        productImage: "image2.png",
        portionPerDay: "1",
        articleNumber: "2", 
        rating: "2",
        feedAmount: "2",
        foodInfo: "Kcal: 120/100 gram",
        onSale: "true",
        salePercentage: "20%"

    },
    {
        productId: 3,
        productDescription: "Utforska fantasin med denna unika rådjurskanot! En dekorativ och konversationsvänlig prydnad till ditt hem.",
        productName: "Rådjurs kanot.",
        productCategory: "Kategori 3",
        productPrice: "349:-",
        productStock: 10,
        productImage: "image3.png",
        portionPerDay: "1",
        articleNumber: "3", 
        rating: "3",
        feedAmount: "3",
        foodInfo: "Kcal: 180/100 gram",
        onSale: "true",
        salePercentage: "40%"

    },
    {
        productId: 4,
        productDescription: "Res säkert med din fyrbenta vän med vår bekväma och robusta hundtransport. Perfekt för resor och äventyr!",
        productName: "Hundtransport.",
        productCategory: "Kategori 4",
        productPrice: "499:-",
        productStock: 10,
        productImage: "image4.png",
        portionPerDay: "1",
        articleNumber: "4", 
        rating: "4",
        feedAmount: "4",
        foodInfo: "Kcal: 200/100 gram",
        onSale: "false",
        salePercentage: "null"
    },
    {
        productId: 5,
        productDescription: "Klä din hund i stil med denna militära uniform. En cool och trendig look för din lojala kamrat.",
        productName: "Hund Militär.",
        productCategory: "Kategori 5",
        productPrice: "199:-",
        productStock: 10,
        productImage: "image5.png",
        portionPerDay: "5",
        articleNumber: "2", 
        rating: "5",
        feedAmount: "5",
        foodInfo: "Kcal: 1200/100 gram",
        onSale: "true",
        salePercentage: "10%"
    },
    {
        productId: 6,
        productDescription: "Ge din häst en lyxig behandling med vår specialdesignade hästolja. Gjord utav genuin häst.",
        productName: "Hästolja.",
        productCategory: "Kategori 6",
        productPrice: "149:-",
        productStock: 10,
        productImage: "image6.png",
        portionPerDay: "1",
        articleNumber: "6", 
        rating: "2",
        feedAmount: "3",
        foodInfo: "Kcal: 970/100 gram",
        onSale: "false",
        salePercentage: "null"
    },
    {
        productId: 7,
        productDescription: "Njut av sötheten av våra hamstermuffins! En rolig och underhållande godsak för smådjursägare.",
        productName: "Hamstermuffin",
        productCategory: "Kategori 7",
        productPrice: "49:-",
        productStock: 10,
        productImage: "image7.png",
        portionPerDay: "4.5",
        articleNumber: "7", 
        rating: "1",
        feedAmount: "7",
        foodInfo: "Kcal: 450/100 gram",
        onSale: "true",
        salePercentage: "25%"
    },
    {
        productId: 8,
        productDescription: "Mystisk hunddemon skulptur, inred hemmet med denna sataniska prydnad.",
        productName: "Hunddemon.",
        productCategory: "Kategori 8",
        productPrice: "299:-",
        productStock: 10,
        productImage: "image8.png",
        portionPerDay: "5",
        articleNumber: "8", 
        rating: "5",
        feedAmount: "10",
        foodInfo: "Kcal: 0/100 gram",
        onSale: "false",
        salePercentage: "null"
    },
    {
        productId: 9,
        productDescription: "Lägg till en touch av mystik med vår kanindemonfigur. Perfekt för dem som älskar det ovanliga och fantasifulla.",
        productName: "Kanindemon.",
        productCategory: "Kategori 9",
        productPrice: "179:-",
        productStock: 10,
        productImage: "image9.png",
        portionPerDay: "1",
        articleNumber: "9", 
        rating: "3",
        feedAmount: "2",
        foodInfo: "Kcal: 120/100 gram",
        onSale: "true",
        salePercentage: "20%"
    },  
];

function init() {
    generateProducts(productsArray);
}

window.onload = init;

function generateProducts(productsArray) {
    const productContainer = document.getElementById("productContainer");

    productsArray.forEach(productInfo => {
        const article = document.createElement("article");
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const rating = document.createElement("p");
        const p = document.createElement("p");
        const a = document.createElement("a");

        img.src = productInfo.productImage;
        h3.textContent = productInfo.productName;
        rating.textContent = productInfo.rating + "⭐";
        p.textContent = productInfo.productDescription;
        
         
         if (productInfo.onSale === "true") {
            const originalPrice = parseFloat(productInfo.productPrice);
            const salePercentage = parseFloat(productInfo.salePercentage);
            const salePrice = (originalPrice * (100 - salePercentage)) / 100;

            a.style.color = "white";
            a.textContent = "Köp " + salePrice.toFixed(2) + ":- (Rabatt: " + productInfo.salePercentage + ")";
        } else {
            
            a.textContent = "Köp " + productInfo.productPrice;
        }

        article.appendChild(img);
        article.appendChild(h3);
        article.appendChild(rating)
        article.appendChild(p);
        article.appendChild(a);

        productContainer.appendChild(article);
    });
}

