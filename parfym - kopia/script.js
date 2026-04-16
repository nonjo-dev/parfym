/*var datorValue = Math.random();
var spelarVal = prompt("Välj sten, sax eller påse").toLowerCase();
var datorVal = "inget";

if (datorValue <= 0.33) {
    datorVal = "sten";
} else if (datorValue > 0.33 && datorValue < 0.66) {
    datorVal = "påse";
} else if (datorValue >= 0.66) {
    datorVal = "sax";
};

if (spelarVal == "sten") {
    if (datorVal == "sten") {
        alert("Sten mot sten är lika");
    } else if (datorVal == "sax") {
        alert("Du vann med sten mot sax");
    } else if (datorVal == "påse") {
        alert("Du förlorade med sten mot påse")
    };
} else if (spelarVal == "sax") {
    if (datorVal == "sax") {
        alert("Sax mot sax är lika");
    } else if (datorVal == "påse") {
        alert("Du vann med sax mot påse");
    } else if (datorVal == "sten") {
        alert("Du förlorade med sax mot sten")
    };
} else if (spelarVal == "påse") {
    if (datorVal == "påse") {
        alert("Påse mot påse är lika");
    } else if (datorVal == "sten") {
        alert("Du vann med påse mot sten");
    } else if (datorVal == "sax") {
        alert("Du förlorade med påse mot sax")
    };

}
else {
    alert("Du valde inte sten, sax eller påse.");
}*/

const test = []

function randomSubpage() {
    let number = Math.random();
    console.log(number);
    if (number <= 0.5) {
        console.log("dam")
        window.location.href = "subpages/damParfym.html"
    }
    else {
        console.log("herr")
        window.location.href = "subpages/herrparfym.html"
    }
}

var pCards = document.querySelectorAll(".card")
pCards.forEach((card) => {
    console.log(card)
    card.priceContainer = card.querySelector(".price");
    card.priceText = card.priceContainer.textContent;
    card.sizePrice = card.priceText.replace("$", "");
});




function changePrice(button, sizeCost, qChange, typeChange) {
    let card = button.closest(".card");
    let quantityContainer = card.querySelector(".qAmount");
    let quantity = Number(quantityContainer.textContent);


    console.log("quantity = " + quantity)
    console.log("Price text = " + card.priceText)
    console.log("old price = " + card.sizePrice)

    console.log("type change = " + typeChange)

    if (typeChange == 0) {
        card.sizePrice = sizeCost;
    }
    else {
        if (quantity + qChange <= 10 && quantity + qChange >= 1) {
            quantity += qChange;
            console.log("new quantity = " + quantity)
        }
  
    }
    function calculatePriceTag(productQuantity, size) {
        console.log("productQuantity = " + productQuantity);
        console.log("size price = " + size)
        console.log("calculated price = " + (Number(productQuantity) * Number(size)))
        return Number(productQuantity) * Number(size);
    }
    var finalPrice = Math.round(calculatePriceTag(quantity, card.sizePrice))
    console.log("final price = " + finalPrice)

    // Add animation class
    if (typeChange == 1) {
        quantityContainer.classList.add("price-animate");
    }
    card.priceContainer.classList.add("price-animate");
    


    // Wait for animation out, then change text
    setTimeout(() => {
        if(quantity == 1){
            finalPrice -= 0.01;
        }
        
        card.priceContainer.textContent = "$" + finalPrice;


        quantityContainer.textContent = quantity
        card.priceContainer.classList.remove("price-animate");

        quantityContainer.classList.remove("price-animate");

    }, 150); // match half animation duration


}

/*function changeSize(size, newPrice) {
    let container = size.closest(".card");
    let price = container.querySelector(".price");

    // Add animation class
    price.classList.add("price-animate");

    // Wait for animation out, then change text
    setTimeout(() => {
        price.textContent = "$" + newPrice;
        price.classList.remove("price-animate");
    }, 150); // match half animation duration
}

function changeQuantity(button, change){
    let card = button.closest(".card");
    let qContainer = button.closest(".qContainer");
    let qAmount = container.querySelector(".qAmount");


}*/




