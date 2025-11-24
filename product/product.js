//let productListFiltered = productList.filter();
renderProductCards(productList);

function renderProductCards() {
    let productsCardsContainer = document.getElementById("product-cards-container");


    productList.forEach(product => {
      let productCard = document.createElement("div");
      let productImgWarpper = document.createElement("div");
      let productImg = document.createElement("img");
      let productName = document.createElement("p");
      let price = document.createElement("p");
      let colorIconBtnWrapper = document.createElement("div");
    
      productCard.classList.add("product-card");
      productCard.setAttribute("id","artricle" + product.article);
      productImgWarpper.classList.add("product__img-wrapper");
      productImgWarpper.style.width = "300px";
      productImgWarpper.style.height = "385.62px";
      productImg.classList.add("product__img");
      productImg.setAttribute("src", product.productImg);
      productImg.style.objectFit = "contain";
      productName.classList.add("product-name");
      productName.innerHTML = product.productName;
      price.classList.add("price");
      price.innerHTML = product.price + " R";
      colorIconBtnWrapper.classList.add("color-icon-btn-wrapper");
      colorIconBtnWrapper.style.display = "flex";
      colorIconBtnWrapper.style.gap = "6px";

      productImgWarpper.appendChild(productImg);
      productCard.appendChild(productImgWarpper);
      productCard.appendChild(productName);
      productCard.appendChild(price);

      product.productHexArray.forEach((hex) => {
        let colorIconBtn = document.createElement("button");
        colorIconBtnWrapper.classList.add("color-icon-btn");
        colorIconBtn.style.width = "20px";
        colorIconBtn.style.height = "20px";
        colorIconBtn.style.backgroundColor = hex;
        colorIconBtn.style.borderColor = hex;
        colorIconBtn.style.borderRadius = "50%";
        colorIconBtnWrapper.appendChild(colorIconBtn);
      });

      productCard.appendChild(colorIconBtnWrapper);
       
      productsCardsContainer.appendChild(productCard);

    });

}


