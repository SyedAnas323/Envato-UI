document.addEventListener("DOMContentLoaded", function() {

    const cardContainer = document.getElementById("card-container");

    const textArray = [
        "Homepage Main",
        "Homepage Bold",
        "Homepage Bold 2",
        "Homepage Modern 2",
        "Homepage Beach Resort",
        "Homepage City Apartment",
        "Homepage Mountain Hotel",
        "Homepage Modern"
    ];

  
    const cardsArray = Array.from({ length: 8 }, (_, index) => index + 1);

  
    cardsArray.map((number, index) => {
       
        const cardWrapper = document.createElement("div");
        cardWrapper.className = "card-wrapper";

   
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.className = "card-img";
        img.src = `Assets/homepage-${number}.webp`; 
        img.alt = `Homepage ${number}`;

   
        card.appendChild(img);

        cardWrapper.appendChild(card);

        const textBelowCard = document.createElement("span");
        textBelowCard.className = "text-below-card";
        textBelowCard.textContent = textArray[index]; 

        cardWrapper.appendChild(textBelowCard);

        cardContainer.appendChild(cardWrapper);
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const cardContainer2 = document.getElementById("card-container2");
  
    if (!cardContainer2) {
        console.error("Container not found! Make sure the element exists in the DOM.");
        return;
    }
  
    const cardsArray = Array.from({ length: 13 }, (_, index) => index + 1);

    const customTexts = [
        "Rooms",
        "Room Single",
        "Room Single Style 2",
        "Reservations",
        "Special Offers",
        "Special Offer Single",
        "About",
        "Facalities",
        "Gallery",
        "Gallery Carousel",
        "News",
        "News Single",
        "contact",
    ];
  
    cardsArray.forEach((number) => {
        const cardWrapper = document.createElement("div");
        cardWrapper.className = "card-wrapper";
  
        const card = document.createElement("div");
        card.className = "card";
  
        const img = document.createElement("img");
        img.className = "card-img";
  
        img.src = `Assets-02/room-0${number}.webp`;
  
        console.log(`Attempting to load image: ${img.src}`);
  
        img.onerror = function () {
            console.error(`Failed to load image: ${img.src}`);
        };
  
        img.alt = `Room ${number}`;
        card.appendChild(img);
        cardWrapper.appendChild(card);
  
        const textBelowCard = document.createElement("span");
        textBelowCard.className = "text-below-card";
  
        textBelowCard.textContent = customTexts[number - 1]; 
  
        cardWrapper.appendChild(textBelowCard);
        cardContainer2.appendChild(cardWrapper);
    });
  });
  