//to Fixed!!!

/****************************************/

let bookInput = document.querySelector("body > form > input[type=text]:nth-child(2)");
let yearInput = document.querySelector("body > form > input[type=number]:nth-child(4)");
let priceInput = document.querySelector("body > form > input[type=number]:nth-child(6)");
let button = document.getElementsByTagName("BUTTON")[0];
let newBook = document.querySelector("#outputs > section:nth-child(2) > div");
let oldBook = document.querySelector("#outputs > section:nth-child(1) > div");
let totalPrice = document.querySelector("body > h1:nth-child(3)");

function solve() {
    button.addEventListener("click",function(e) {



            e.preventDefault();
            let title = String(bookInput.value);
            let year = Number(yearInput.value);
            let price = Number(priceInput.value);
            if (title === "" || year < 0 || price < 0) {
                console.log("Error!!!!")
            }
            if (year >= 2000) {
                let div = document.createElement("div");
                let p = document.createElement("p");
                let btnOne = createElement("button");
                let btnMove = createElement("button");
                //div.classList.add("book");
                classList(div, "book");
                //p.textContent = `${title} [${year}]`;
                textContentElement(p, "", title, year);
                //btnOne.textContent = `Buy it only for ${price.toFixed(2)} BGN`;
                textContentElement(btnOne, "Buy it only for", price.toFixed(2), "");
                //btnMove.textContent = "Move to old section";
                textContentElement(btnMove, "Move to old section", "", "");

                //div.append(p, btnOne, btnMove);
                appendElement(div, p, btnOne, btnMove)
                newBook.appendChild(div)

                btnMove.addEventListener("click",function () {
                    let divOldBook = createElement("div");

                    let pOld = createElement("p");

                    let buttonOld = createElement("button");

                    classList(divOldBook, "book");
                    pOld.textContent = `${title}[${year}]`;
                    buttonOld.textContent = `Buy it only for ${priceDiscount(price).toFixed(2)} BGN`;
                    appendElement(divOldBook, pOld, buttonOld);
                    oldBook.appendChild(divOldBook);
                    buttonOld.addEventListener("click",function () {
                        totalPrice.textContent = `Total Store Profit: ${priceDiscount(price).toFixed(2)} BGN`
                    })
                })
                btnOne.addEventListener("click",function() {
                    totalPrice.textContent = `Total Store Profit: ${price} BGN`
                })



            } else {

                let divOldBook = createElement("div");

                let pOld = createElement("p");

                let buttonOld = createElement("button");

                classList(divOldBook, "book");
                pOld.textContent = `${title}[${year}]`;
                buttonOld.textContent = `Buy it only for ${priceDiscount(price).toFixed(2)} BGN`;

                appendElement(divOldBook, pOld, buttonOld);
                oldBook.appendChild(divOldBook);

            }


        })

    }






function createElement(type) {
    return document.createElement(type);
}

function classList(el,classEl) {
    return el.classList.add(`${classEl}`)
}

function textContentElement(el,text,param,param2) {

  return el.textContent = `${text} ${param} ${param2}`
}

function appendElement(el,...args) {
      return el.append(...args)
}



function priceDiscount(elPrice) {
    let resultDiscount = elPrice - (elPrice * 15 / 100);
        return resultDiscount
}



/***********************************************/
