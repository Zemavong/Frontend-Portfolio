const userSurname = document.querySelector('[name="surname"]');//получите элемент input с фамилией(*)
const userName = document.querySelector('[name="name"]'); //получите элемент input с именем(*)

const goodsElements = document.querySelectorAll(".checkbox-btn");//получите элементы checkbox с товарами goods(*)
const countElements =  document.querySelectorAll(".input-number");//получите элементы input с кол-вом(*)

const btn = document.querySelector(".main-button");//получите элемент button(*)
const resultElem = document.querySelector(".result");   //получите элемент span для итоговой суммы

//создайте переменную для хранения итоговой суммы (*)
let resultSum = 0;

//этот объект нужен для хранения количества каждого товара
//либо, вы можете создать переменные/массив для хранения значений 
const countGoods = { 
    "expresso": 0,
    "americano": 0,
    "latte": 0,
    "capuchino": 0,
    "chocolate_muffin": 0,
    "blueberry_muffin": 0,
    "apple_tart": 0
}

//этот объект нужен для хранения цены каждого товара
//т.е. если товар выбран, записываем его цену, если не выбран - записываем 0
//либо, вы можете создать переменные/массив для хранения значений
const choicePriceGoods = { 
    "expresso": 0,
    "americano": 0,
    "latte": 0,
    "capuchino": 0,
    "chocolate_muffin": 0,
    "blueberry_muffin": 0,
    "apple_tart": 0
}

//создайте функцию, которая будет считать итоговую сумму, подумайте над формулой.
function answerSum(priceItem, countItem) {
    return priceItem*countItem;
}


//для каждого элемента input с кол-вом нужно повесить событие на изменение change, 
//по которому в объекте должны меняться значения на значение в input
countElements.forEach(elem => {
    elem.addEventListener("change", function() {
        if(elem.value>0) {
            countGoods[elem.name] = elem.value;
        } else {
            countGoods[elem.name] = 0;
        }
        
    })
});

//для каждого элемента checkbox нужно повесить событие на изменение change, 
//по которому в объекте должны меняться значение на цену, если чекбокс выбран
//или обратно на 0, если чекбокс не выбран
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


//по клику на кнопку должен появиться alert с текстом
//(*)для выбравших способ 1 или 2 именно внутри данного события будет происходить подсчет итоговой суммы,
//вам нужно перебрать все элементы checkbox и input в цикле

