const productsArray = [
    {
        "productId": 1,
        "productDescription": "Håll dina tår varma med dessa gulliga kattstrumpor av hög kvalitet. En perfekt present till kattälskaren!",
        "productName": "Kattstrumpor",
        "productCategory": "Kategori 1",
        "productPrice": "99:-",
        "productStock": 5,
        "productImage": "image1.png",
        "portionPerDay": 1,
        "articleNumber": 1,
        "rating": 2,
        "feedAmount": 3,
        "foodInfo": "Kcal: 140/100 gram",
        "onSale": "false",
        "salePercentage": null
      },
      {
        "productId": 2,
        "productDescription": "Ge din hamster lite träning och skratt med dessa små, handgjorda boxningshandskar. Perfekt för de små kämparna!",
        "productName": "Boxningshandskar för hamstrar",
        "productCategory": "Kategori 2",
        "productPrice": "79:-",
        "productStock": 28,
        "productImage": "image2.png",
        "portionPerDay": 2,
        "articleNumber": 2,
        "rating": 4,
        "feedAmount": 4,
        "foodInfo": "Kcal: 120/100 gram",
        "onSale": "true",
        "salePercentage": 15
      },
      {
        "productId": 3,
        "productDescription": "Utforska fantasin med denna unika rådjurskanot! En dekorativ och konversationsvänlig prydnad till ditt hem.",
        "productName": "Rådjurs kanot",
        "productCategory": "Kategori 3",
        "productPrice": "349:-",
        "productStock": 57,
        "productImage": "image3.png",
        "portionPerDay": 3,
        "articleNumber": 3,
        "rating": 5,
        "feedAmount": 5,
        "foodInfo": "Kcal: 150/100 gram",
        "onSale": "false",
        "salePercentage": null
      },
      {
        "productId": 4,
        "productDescription": "Res säkert med din fyrbenta vän med vår bekväma och robusta hundtransport. Perfekt för resor och äventyr!",
        "productName": "Hundtransport",
        "productCategory": "Kategori 4",
        "productPrice": "499:-",
        "productStock": 12,
        "productImage": "image4.png",
        "portionPerDay": 4,
        "articleNumber": 4,
        "rating": 3,
        "feedAmount": 2,
        "foodInfo": "Kcal: 130/100 gram",
        "onSale": "true",
        "salePercentage": 20
      },
      {
        "productId": 5,
        "productDescription": "Klä din hund i stil med denna militära uniform. En cool och trendig look för din lojala kamrat.",
        "productName": "Hund Militär",
        "productCategory": "Kategori 5",
        "productPrice": "199:-",
        "productStock": 81,
        "productImage": "image5.png",
        "portionPerDay": 1,
        "articleNumber": 5,
        "rating": 4,
        "feedAmount": 3,
        "foodInfo": "Kcal: 160/100 gram",
        "onSale": "false",
        "salePercentage": null
      },
      {
        "productId": 6,
        "productDescription": "Ge din häst en lyxig behandling med vår specialdesignade hästolja. Gjord utav genuin häst.",
        "productName": "Hästolja",
        "productCategory": "Kategori 6",
        "productPrice": "149:-",
        "productStock": 64,
        "productImage": "image6.png",
        "portionPerDay": 10,
        "articleNumber": 6,
        "rating": 5,
        "feedAmount": 8,
        "foodInfo": "Kcal: 180/100 gram",
        "onSale": "true",
        "salePercentage": 10
      },
      {
        "productId": 7,
        "productDescription": "Njut av sötheten av våra hamstermuffins! En rolig och underhållande godsak för smådjursägare.",
        "productName": "Hamstermuffin",
        "productCategory": "Kategori 7",
        "productPrice": "49:-",
        "productStock": 36,
        "productImage": "image7.png",
        "portionPerDay": 2,
        "articleNumber": 7,
        "rating": 4,
        "feedAmount": 4,
        "foodInfo": "Kcal: 150/100 gram",
        "onSale": "false",
        "salePercentage": null
      },
      {
        "productId": 8,
        "productDescription": "Mystisk hunddemon skulptur, indred hemmet med denna sataniska prydnad.",
        "productName": "Hunddemon",
        "productCategory": "Kategori 8",
        "productPrice": "299:-",
        "productStock": 73,
        "productImage": "image8.png",
        "portionPerDay": 5,
        "articleNumber": 8,
        "rating": 3,
        "feedAmount": 6,
        "foodInfo": "Kcal: 170/100 gram",
        "onSale": "true",
        "salePercentage": 15
      },
      {
        "productId": 9,
        "productDescription": "Lägg till en touch av mystik med vår kanindemonfigur. Perfekt för dem som älskar det ovanliga och fantasifulla.",
        "productName": "Kanindemon",
        "productCategory": "Kategori 9",
        "productPrice": "179:-",
        "productStock": 42,
        "productImage": "image9.png",
        "portionPerDay": 3,
        "articleNumber": 9,
        "rating": 4,
        "feedAmount": 4,
        "foodInfo": "Kcal: 160/100 gram",
        "onSale": "false",
        "salePercentage": null
      },
      {
        "productId": 10,
        "productDescription": "Stig in i en annan värld med vår magiska människobur, gjord av drakfjäll och alvglitter. En unik inredningsdetalj.",
        "productName": "Människobur",
        "productCategory": "Kategori 10",
        "productPrice": "899:-",
        "productStock": 19,
        "productImage": "image10.png",
        "portionPerDay": 1,
        "articleNumber": 10,
        "rating": 5,
        "feedAmount": 2,
        "foodInfo": "Kcal: 140/100 gram",
        "onSale": "true",
        "salePercentage": 25
      },
      {
        "productId": 11,
        "productDescription": "En unik konsttrycksbild som kombinerar historia och humor. Ett samtalsämne för de modiga och kuriositetssökande.",
        "productName": "Hitler med Katt (Historisk bild)",
        "productCategory": "Kategori 11",
        "productPrice": "599:-",
        "productStock": 61,
        "productImage": "image11.png",
        "portionPerDay": 0,
        "articleNumber": 11,
        "rating": 4,
        "feedAmount": 0,
        "foodInfo": "Kcal: 0/100 gram",
        "onSale": "false",
        "salePercentage": null
      },
      {
        "productId": 12,
        "productDescription": "Ge din katt en ninja-makeover med denna roliga kostym. Perfekt för tema-fester och Instagram-foton.",
        "productName": "Kattkninja",
        "productCategory": "Kategori 12",
        "productPrice": "129:-",
        "productStock": 47,
        "productImage": "image12.png",
        "portionPerDay": 1,
        "articleNumber": 12,
        "rating": 3,
        "feedAmount": 2,
        "foodInfo": "Kcal: 140/100 gram",
        "onSale": "true",
        "salePercentage": 10
      },
      {
        "productId": 13,
        "productDescription": "Kattmat producerad av nyttiga varor perfekt för en hälsosam och aktiv katt.",
        "productName": "Adiciem kattmat (Katt inte inkluderad)",
        "productCategory": "Kategori 13",
        "productPrice": "39:-",
        "productStock": 15,
        "productImage": "image13.png",
        "portionPerDay": 4,
        "articleNumber": 13,
        "rating": 4,
        "feedAmount": 3,
        "foodInfo": "Kcal: 160/100 gram",
        "onSale": "false",
        "salePercentage": null
      },
      {
        "productId": 14,
        "productDescription": "Kattmat producerad utav färskt kattkött.",
        "productName": "Kattmat gjord av katt",
        "productCategory": "Kategori 14",
        "productPrice": "499:-",
        "productStock": 85,
        "productImage": "image14.png",
        "portionPerDay": 2,
        "articleNumber": 14,
        "rating": 5,
        "feedAmount": 4,
        "foodInfo": "Kcal: 150/100 gram",
        "onSale": "true",
        "salePercentage": 15
      },
      {
        "productId": 15,
        "productDescription": "Krydda ditt kattliv med vår specialdesignade taco-krydda. En humoristisk touch till matlagningen.",
        "productName": "Katt taco krydda",
        "productCategory": "Kategori 15",
        "productPrice": "29:-",
        "productStock": 92,
        "productImage": "image15.png",
        "portionPerDay": 1,
        "articleNumber": 15,
        "rating": 4,
        "feedAmount": 3,
        "foodInfo": "Kcal: 140/100 gram",
        "onSale": "false",
        "salePercentage": null
      },
      {
        "productId": 16,
        "productDescription": "Söta och läckra - dessa kattformade godisar är det perfekta tilltugget för kattälskare.",
        "productName": "Katt dumlekola",
        "productCategory": "Kategori 16",
        "productPrice": "19:-",
        "productStock": 37,
        "productImage": "image16.png",
        "portionPerDay": 3,
        "articleNumber": 16,
        "rating": 3,
        "feedAmount": 2,
        "foodInfo": "Kcal: 130/100 gram",
        "onSale": "true",
        "salePercentage": 10
      },
      {
        "productId": 17,
        "productDescription": "Ett konstverk som spelar på politik och humor. En provocerande, men humoristisk prydnad för hemmet.",
        "productName": "Bild på Jimmie Åkesson sparkar en hund",
        "productCategory": "Kategori 17",
        "productPrice": "799:-",
        "productStock": 24,
        "productImage": "image17.png",
        "portionPerDay": 0,
        "articleNumber": 17,
        "rating": 4,
        "feedAmount": 0,
        "foodInfo": "Kcal: 0/100 gram",
        "onSale": "false",
        "salePercentage": null
      },
      {
        "productId": 18,
        "productDescription": "En fantasifull skulptur som förenar två ikoniska karaktärer. Perfekt för fans av fantasy och popkultur.",
        "productName": "Gollum och demoniserade Gargamel",
        "productCategory": "Kategori 18",
        "productPrice": "349:-",
        "productStock": 50,
        "productImage": "image18.png",
        "portionPerDay": 1,
        "articleNumber": "18",
        "rating": "5",
        "feedAmount": "2",
        "foodInfo": "Kcal: 140/100 gram",
        "onSale": "true",
        "salePercentage": 20
      },
      {
        "productId": 19,
        "productDescription": "En unik och detaljrik skulptur som tar Gollum till en ny nivå av fantasy. En konversationsstartare.",
        "productName": "Demon Gollum på en gollumcentaur",
        "productCategory": "Kategori 19",
        "productPrice": "599:-",
        "productStock": 14,
        "productImage": "image19.png",
        "portionPerDay": 0,
        "articleNumber": "19",
        "rating": "4",
        "feedAmount": "0",
        "foodInfo": "Kcal: 0/100 gram",
        "onSale": "false",
        "salePercentage": null
      },
      {
        "productId": 20,
        "productDescription": "Skapa en skräckinjagande atmosfär med denna realistiska demonödlafigur. En perfekt inredningsdetalj för de djärvare.",
        "productName": "Demonödla i vardagsrummet",
        "productCategory": "Kategori 20",
        "productPrice": "449:-",
        "productStock": 66,
        "productImage": "image20.png",
        "portionPerDay": 3,
        "articleNumber": "20",
        "rating": "3",
        "feedAmount": "4",
        "foodInfo": "Kcal: 150/100 gram",
        "onSale": "true",
        "salePercentage": 15
      },
      {
        "productId": 21,
        "productDescription": "En alternativ vinkel ger nya perspektiv på denna mystiska demonödlafigur. En konstnärlig och unik skapelse.",
        "productName": "Demonödla två (annan vinkel)",
        "productCategory": "Kategori 21",
        "productPrice": "249:-",
        "productStock": 34,
        "productImage": "image21.png",
        "portionPerDay": 2,
        "articleNumber": "21",
        "rating": "4",
        "feedAmount": "3",
        "foodInfo": "Kcal: 140/100 gram",
        "onSale": "false",
        "salePercentage": null
      },
      {
        "productId": 22,
        "productDescription": "En humoristisk skulptur som föreställer en fiktiv kattkompanjon för Kim Jong Un. Perfekt för politik- och kattentusiaster.",
        "productName": "Kim Jong uns katt",
        "productCategory": "Kategori 22",
        "productPrice": "169:-",
        "productStock": 25,
        "productImage": "image22.png",
        "portionPerDay": 1,
        "articleNumber": "22",
        "rating": "3",
        "feedAmount": "2",
        "foodInfo": "Kcal: 130/100 gram",
        "onSale": "true",
        "salePercentage": 10
      },
      {
        "productId": 23,
        "productDescription": "Firande med stil! Denna konstnärliga skulptur föreställer en demonisk katt som firar sin speciella dag.",
        "productName": "Demonkattens födelsedag",
        "productCategory": "Kategori 23",
        "productPrice": "169:-",
        "productStock": 18,
        "productImage": "image23.png",
        "portionPerDay": 0,
        "articleNumber": "23",
        "rating": "4",
        "feedAmount": "0",
        "foodInfo": "Kcal: 0/100 gram",
        "onSale": "false",
        "salePercentage": null
      },
      {
        "productId": 24,
        "productDescription": "En satirisk skulptur som spelar på politik och humor. En unik och kontroversiell prydnad för samlare.",
        "productName": "Putins hemliga furry vän",
        "productCategory": "Kategori 24",
        "productPrice": "699:-",
        "productStock": 47,
        "productImage": "image24.png",
        "portionPerDay": 1,
        "articleNumber": "24",
        "rating": "4",
        "feedAmount": "2",
        "foodInfo": "Kcal: 50/100 gram",
        "onSale": "false",
        "salePercentage": null
      }
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
            a.textContent = "Köp " + salePrice.toFixed(2) + ":- (Rabatt: " + productInfo.salePercentage + "%)";
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

