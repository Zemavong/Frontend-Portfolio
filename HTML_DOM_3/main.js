const userSurname = document.querySelector('[name="surname"]');
const userName = document.querySelector('[name="name"]');

const goodsElements = document.querySelectorAll(".checkbox-btn");
const countElements =  document.querySelectorAll(".input-number");

const btn = document.querySelector(".main-button");
const resultElem = document.querySelector(".result");

let resultSum = 0;

const countGoods = { 
    "expresso": 0,
    "americano": 0,
    "latte": 0,
    "capuchino": 0,
    "chocolate_muffin": 0,
    "blueberry_muffin": 0,
    "apple_tart": 0
}

const choicePriceGoods = { 
    "expresso": 0,
    "americano": 0,
    "latte": 0,
    "capuchino": 0,
    "chocolate_muffin": 0,
    "blueberry_muffin": 0,
    "apple_tart": 0
}

function answerSum(priceItem, countItem) {
    return priceItem*countItem;
}

countElements.forEach(elem => {
    elem.addEventListener("change", function() {
        if(elem.value>0) {
            countGoods[elem.name] = elem.value;
        } else {
            countGoods[elem.name] = 0;
        }
        
    })
});

goodsElements.forEach(function (element, index) {
	element.addEventListener("change", function () {
		if (element.checked) {
			countElements[index].value = "1";
		} else {
			countElements[index].value = "0";
		}
		loadData(element.name, parseInt(countElements[index].value), parseInt(countElements[index].value) * element.value);
		finalSum();
	});
});

countElements.forEach(function (element, index) {
	element.addEventListener("change", function () {
		if (parseInt(element.value) >= 0) {
			loadData(element.name, parseInt(element[index].value), parseInt(element[index].value) * goodsElements.value);
		}
		finalSum();
	})
});

function loadData(goodName, amount, value) {
	countGoods[goodName] = amount;
	choicePriceGoods[goodName] = value;
}

function finalSum() {
	let charge = 0;
	let iterator = 0;
	for (const [key, value] of Object.entries(choicePriceGoods)) {
		if (goodsElements[iterator].checked) {
			charge += value;
		}
		iterator++;
	}
	resultElem.textContent = charge.toString() + "р.";
}

