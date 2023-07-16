const navBarSection = document.querySelector(".navbar__section");
window.onscroll = () => {
  if (scrollY > 65) {
    navBarSection.classList.add("is-nav-scrolled");
  } else {
    navBarSection.classList.remove("is-nav-scrolled");
  }
};
const pageURL = window.location.href;
const pageName = pageURL.substring(pageURL.lastIndexOf("/") + 1);
const showMoreBtn = document.querySelector(".show__more-btn");
const featuredProducts = [
  {
    _id: 1,
    name: "Burnikk",
    img: "/assets/salt-image-1.png",
    sub: "Sexbomb",
  },
  {
    _id: 2,
    name: "Kibal Batal",
    img: "/assets/salt-image-2.png",
    sub: "Kibal Black",
  },
  {
    _id: 3,
    name: "Very Nice",
    img: "/assets/salt-image-3.png",
    sub: "Salt maalat",
  },
  {
    _id: 4,
    name: "Buldit",
    img: "/assets/salt-image-4.png",
    sub: "Salt maalat",
  },
  {
    _id: 5,
    name: "Balakubak",
    img: "/assets/salt-image-5.png",
    sub: "Betsin Maalat",
  },
  {
    _id: 6,
    name: "Burnikk",
    img: "/assets/salt-image-7.png",
    sub: "Sexbomb",
  },
  {
    _id: 7,
    name: "Burnikk",
    img: "/assets/salt-image-10.png",
    sub: "Sexbomb",
  },
  {
    _id: 8,
    name: "Burnikk",
    img: "/assets/salt-image-2.png",
    sub: "Sexbomb",
  },
];

const recommendedProducts = [
  {
    _id: 7,
    name: "Tiktilaok Manok",
    img: "/assets/salt-image-10.png",
    sub: "Sexbomb",
  },
  {
    _id: 5,
    name: "Balakubak",
    img: "/assets/salt-image-5.png",
    sub: "Betsin Maalat",
  },
  {
    _id: 3,
    name: "Very Nice",
    img: "/assets/salt-image-2.png",
    sub: "Salt maalat",
  },
  {
    _id: 6,
    name: "Burnikk",
    img: "/assets/salt-image-7.png",
    sub: "Sexbomb",
  },
  {
    _id: 1,
    name: "Burnikk",
    img: "/assets/salt-image-1.png",
    sub: "Sexbomb",
  },
  {
    _id: 2,
    name: "Kibal Batal",
    img: "/assets/salt-image-3.png",
    sub: "Kibal Black",
  },
];
const shopProducts = [
  {
    _id: 1,
    name: "Burnikk",
    img: "/assets/salt-image-1.png",
    sub: "Sexbomb",
    price: 168,
    size: "28mm",
    totalPrice: 168,
  },
  {
    _id: 2,
    name: "Kibal Batal",
    img: "/assets/salt-image-2.png",
    sub: "Kibal Black",
    price: 79,
    size: "28mm",
    totalPrice: 79,
  },
  {
    _id: 3,
    name: "Very Nice",
    img: "/assets/salt-image-3.png",
    price: 68,
    sub: "Salt maalat",
    size: "28mm",
    totalPrice: 68,
  },
  {
    _id: 4,
    name: "Buldit",
    img: "/assets/salt-image-4.png",
    price: 679,
    sub: "Salt maalat",
    size: "28mm",
    totalPrice: 679,
  },
  {
    _id: 5,
    name: "Balakubak",
    img: "/assets/salt-image-5.png",
    price: 124,
    totalPrice: 124,
    sub: "Betsin Maalat",
    size: "28mm",
    totalPrice: 124,
  },
  {
    _id: 6,
    name: "Burnikk",
    img: "/assets/salt-image-7.png",
    price: 99,
    sub: "Sexbomb",
    size: "28mm",
    totalPrice: 99,
  },
  {
    _id: 7,
    name: "Kutu",
    img: "/assets/salt-image-10.png",
    price: 68,
    sub: "Sexbomb",
    size: "28mm",
    totalPrice: 68,
  },
  {
    _id: 8,
    name: "Quake Overload",
    img: "/assets/salt-image-2.png",
    price: 168,
    sub: "Yezyow",
    size: "28mm",
    totalPrice: 168,
  },
  {
    _id: 9,
    name: "Sugat",
    img: "/assets/salt-image-4.png",
    price: 56,
    sub: "Betsin Maalat",
    size: "28mm",
    totalPrice: 56,
  },
  {
    _id: 10,
    name: "Kulangot",
    img: "/assets/salt-image-3.png",
    price: 67,
    sub: "salt",
    size: "28mm",
    totalPrice: 67,
  },
  {
    _id: 11,
    name: "Tiktilaok Manok",
    img: "/assets/salt-image-7.png",
    price: 154,
    sub: "Yezyow",
    size: "28mm",
    totalPrice: 154,
  },
  {
    _id: 12,
    name: "Tuluk",
    img: "/assets/salt-image-10.png",
    price: 68,
    sub: "Black Kibal",
    size: "28mm",
    totalPrice: 68,
  },
  {
    _id: 13,
    name: "Takla Green",
    img: "/assets/salt-image-5.png",
    price: 150,
    sub: "Sexbomb",
    size: "28mm",
    totalPrice: 150,
  },
  {
    _id: 14,
    name: "Pitaklan",
    img: "/assets/salt-image-1.png",
    price: 174,
    sub: "Black Kibal",
    size: "28mm",
    totalPrice: 174,
  },
  {
    _id: 15,
    name: "Sipon Malapot",
    img: "/assets/salt-image-4.png",
    price: 68,
    sub: "salt",
    size: "28mm",
    totalPrice: 68,
  },
  {
    _id: 16,
    name: "Buldit",
    img: "/assets/salt-image-5.png",
    price: 733,
    size: "28mm",
    sub: "Salt Maalat",
    totalPrice: 733,
  },
  {
    _id: 17,
    name: "Merry Christmas",
    img: "/assets/salt-image-10.png",
    price: 618,
    sub: "Salt Maalat",
    size: "28mm",
    totalPrice: 618,
  },
  {
    _id: 18,
    name: "Tilis Malaput",
    img: "/assets/salt-image-7.png",
    price: 134,
    size: "28mm",
    sub: "Betsin Maalat",
    totalPrice: 134,
  },
  {
    _id: 19,
    name: "Merry Christmas",
    img: "/assets/salt-image-1.png",
    price: 54,
    size: "28mm",
    sub: "Salt Maalat",
    totalPrice: 54,
  },
  {
    _id: 20,
    name: "Tilapia",
    img: "/assets/salt-image-2.png",
    price: 168,
    size: "28mm",
    sub: "salt Maalat",
    totalPrice: 168,
  },
];

const featuredEl = document.getElementById("featured");
let fCount = 6;
const showFeaturedProducts = () => {
  let fProduct = [];
  for (let i = 0; i < fCount; i++) {
    const product = featuredProducts[i];
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.setAttribute("data-key", product._id);
    productElement.addEventListener("click", function () {
      window.location.href = "/pages/shop.html";
    });

    const imgElement = document.createElement("img");
    imgElement.src = product.img;
    imgElement.alt = `${product.name} image`;
    const imgContainer = document.createElement("div");
    imgContainer.className = "product__img";
    imgContainer.appendChild(imgElement);
    productElement.appendChild(imgContainer);

    const descElement = document.createElement("div");
    descElement.className = "product__desc";
    productElement.appendChild(descElement);

    const nameElement = document.createElement("h2");
    nameElement.className = "product__name";
    nameElement.textContent = product.name;
    descElement.appendChild(nameElement);

    const subElement = document.createElement("p");
    subElement.className = "text-italic text-subtle";
    subElement.textContent = product.sub;
    descElement.appendChild(subElement);

    fProduct.push(productElement);
  }

  featuredEl.innerHTML = "";
  fProduct.forEach(function (productElement) {
    featuredEl.appendChild(productElement);
  });
};

const recommendedEl = document.getElementById("recommended");
const showRecommendedProducts = () => {
  let rProduct = [];
  recommendedProducts.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.setAttribute("data-key", product._id);
    productElement.addEventListener("click", function () {
      window.location.href = "/pages/shop.html";
    });

    const imgElement = document.createElement("img");
    imgElement.src = product.img;
    imgElement.alt = `${product.name} image`;
    const imgContainer = document.createElement("div");
    imgContainer.className = "product__img";
    imgContainer.appendChild(imgElement);
    productElement.appendChild(imgContainer);

    const descElement = document.createElement("div");
    descElement.className = "product__desc";
    productElement.appendChild(descElement);

    const nameElement = document.createElement("h2");
    nameElement.className = "product__name";
    nameElement.textContent = product.name;
    descElement.appendChild(nameElement);

    const subElement = document.createElement("p");
    subElement.className = "text-italic text-subtle";
    subElement.textContent = product.sub;
    descElement.appendChild(subElement);

    rProduct.push(productElement);
  });

  recommendedEl.innerHTML = "";
  rProduct.forEach(function (productElement) {
    recommendedEl.appendChild(productElement);
  });
};
const clearButton = document.querySelector(".basket__clear-btn");
let basketItems = [];

clearButton.addEventListener("click", () => {
  // Clear the showProducts array
  basketItems = JSON.parse(localStorage.getItem("basketItems"));
  basketItems.forEach((product) => {
    removeFromBasket(product._id);
  });
  basketItems = [];
  // Update localStorage with empty basketItems
  localStorage.setItem("basketItems", JSON.stringify(basketItems));
  showBasketItems();
  checkOutTotal();
});

const showBasketCount = () => {
  if (basketItems.length === 0) {
    document.querySelector(".badge-count").style.display = "none";
    clearButton.disabled = true;
    document.querySelector(".basket__item-count").textContent = `(0 item)`;
  } else {
    document.querySelector(".badge-count").style.display = "flex";
    clearButton.disabled = false;
    document.querySelector(".badge-count").textContent = basketItems.length;
    document.querySelector(".basket__item-count").textContent =
      basketItems.length > 1
        ? `(${basketItems.length} items)`
        : `(${basketItems.length} item)`;
  }
};

const addToBasket = (id) => {
  const basketItem = document.querySelector(`[data-key="${id}"]`);
  const basketBtn = basketItem.querySelector(".card-btn");
  const cardCheck = basketItem.querySelector(".product__card-check");
  if (basketBtn.classList.contains("remove")) {
    basketBtn.textContent = "Add to Basket";
    basketBtn.classList.remove("remove");
    cardCheck.style.display = "none";
    removeFromBasket(id);
  } else {
    basketBtn.textContent = "Remove from Basket";
    cardCheck.style.display = "block";
    basketBtn.classList.add("remove");
    let filteredProduct = shopProducts.filter((product) => {
      return product._id === id;
    });
    if (filteredProduct.length > 0) {
      basketItems.push(filteredProduct[0]);
    }
  }
  localStorage.setItem("basketItems", JSON.stringify(basketItems));
  showBasketCount();
  showBasketItems();
  checkOutTotal();
};
const removeFromBasket = (id) => {
  const basketItem = document.querySelector(`[data-key="${id}"]`);
  const basketBtn = basketItem.querySelector(".card-btn");
  const cardCheck = basketItem.querySelector(".product__card-check");
  basketBtn.textContent = "Add to Basket";
  basketBtn.classList.remove("remove");
  cardCheck.style.display = "none";
  for (let i = 0; i < basketItems.length; i++) {
    if (basketItems[i]._id === id) {
      basketItems.splice(i, 1);
      break;
    }
  }
  localStorage.setItem("basketItems", JSON.stringify(basketItems));
  showBasketCount();
  showBasketItems();
};
const showBasketItems = () => {
  basketItems = JSON.parse(localStorage.getItem("basketItems")) || [];

  const basketEl = document.querySelector(".basket__list");
  basketEl.innerHTML = ``;
  if (basketItems.length > 0) {
    document.querySelector(".basket__empty").style.display = "none";
    document.querySelector(".basket__list").style.display = "flex";

    basketItems.forEach((product) => {
      const basketItem = document.querySelector(`[data-key="${product._id}"]`);
      if (basketItem !== null) {
        if (pageName === "shop.html") {
          const basketBtn = basketItem.querySelector(".card-btn");
          const cardCheck = basketItem.querySelector(".product__card-check");
          basketBtn.textContent = "Remove from Basket";
          cardCheck.style.display = "block";
          basketBtn.classList.add("remove");
        }
      }
      const basketItemElement = document.createElement("div");
      basketItemElement.className = "basket__item";

      const basketItemControlElement = document.createElement("div");
      basketItemControlElement.className = "basket__item-control";
      basketItemElement.appendChild(basketItemControlElement);

      const plusButtonElement = document.createElement("button");
      plusButtonElement.type = "button";
      plusButtonElement.className =
        "btn basket__control button__border-gray button__small button__border btn__plus";
      plusButtonElement.innerHTML = '<i class="fa-solid fa-plus"></i>';
      basketItemControlElement.appendChild(plusButtonElement);

      const minusButtonElement = document.createElement("button");
      minusButtonElement.type = "button";
      minusButtonElement.className =
        "btn basket__control button__border-gray button__small button__border btn__minus";
      minusButtonElement.disabled = true;
      minusButtonElement.innerHTML = '<i class="fa-solid fa-minus"></i>';
      basketItemControlElement.appendChild(minusButtonElement);

      const basketItemWrapperElement = document.createElement("div");
      basketItemWrapperElement.className = "basket__item-wrapper";
      basketItemElement.appendChild(basketItemWrapperElement);

      const basketItemWrapperImgElement = document.createElement("div");
      basketItemWrapperImgElement.className = "basket__item-wrapper-img";
      basketItemWrapperElement.appendChild(basketItemWrapperImgElement);

      const imgElement = document.createElement("img");
      imgElement.src = product.img;
      imgElement.alt = product.name;
      imgElement.className = "basket__item-img";
      basketItemWrapperImgElement.appendChild(imgElement);

      const basketItemDetailsElement = document.createElement("div");
      basketItemDetailsElement.className = "basket__item-details";
      basketItemWrapperElement.appendChild(basketItemDetailsElement);

      const productNameLinkElement = document.createElement("a");
      productNameLinkElement.href = "../pages/shop.html";
      basketItemDetailsElement.appendChild(productNameLinkElement);

      const productNameElement = document.createElement("h4");
      productNameElement.className = "basket__item-name";
      productNameElement.textContent = product.name;
      productNameLinkElement.appendChild(productNameElement);

      const basketItemSpecsElement = document.createElement("div");
      basketItemSpecsElement.className = "basket__item-specs";
      basketItemDetailsElement.appendChild(basketItemSpecsElement);

      const quantityDiv = document.createElement("div");
      basketItemSpecsElement.appendChild(quantityDiv);

      const quantityTitleSpan = document.createElement("span");
      quantityTitleSpan.className = "spec__title";
      quantityTitleSpan.textContent = "Quantity";
      quantityDiv.appendChild(quantityTitleSpan);

      const quantityValueH5 = document.createElement("h5");
      quantityValueH5.className = "my-0";
      quantityValueH5.textContent = "1";
      quantityDiv.appendChild(quantityValueH5);

      const sizeDiv = document.createElement("div");
      basketItemSpecsElement.appendChild(sizeDiv);

      const sizeTitleSpan = document.createElement("span");
      sizeTitleSpan.className = "spec__title";
      sizeTitleSpan.textContent = "Size";
      sizeDiv.appendChild(sizeTitleSpan);

      const sizeValueH5 = document.createElement("h5");
      sizeValueH5.className = "my-0";
      sizeValueH5.textContent = product.size;
      sizeDiv.appendChild(sizeValueH5);

      const colorDiv = document.createElement("div");
      basketItemSpecsElement.appendChild(colorDiv);

      const colorTitleSpan = document.createElement("span");
      colorTitleSpan.className = "spec__title";
      colorTitleSpan.textContent = "Color";
      colorDiv.appendChild(colorTitleSpan);

      const colorDivInner = document.createElement("div");
      colorDivInner.style.backgroundColor = "rgb(0, 0, 0)";
      colorDivInner.style.width = "15px";
      colorDivInner.style.height = "15px";
      colorDivInner.style.borderRadius = "50%";
      colorDiv.appendChild(colorDivInner);

      const basketItemPriceElement = document.createElement("div");
      basketItemPriceElement.className = "basket__item-price";
      basketItemElement.appendChild(basketItemPriceElement);

      const priceH4 = document.createElement("h4");
      priceH4.className = "my-0";
      priceH4.textContent = `$${product.price}`;
      basketItemPriceElement.appendChild(priceH4);

      const removeButtonElement = document.createElement("button");
      removeButtonElement.className = "btn button__border-gray button__small";
      removeButtonElement.innerHTML = '<i class="fa-solid fa-x"></i>';
      basketItemElement.appendChild(removeButtonElement);

      basketEl.appendChild(basketItemElement);

      // Add event listeners for plus, minus, and remove buttons
      plusButtonElement.addEventListener("click", () => {
        // Increment quantity
        let quantity = parseInt(quantityValueH5.textContent, 10);
        if (quantity < 7) {
          quantity++;
          quantityValueH5.textContent = quantity;

          // Update price
          let price = parseFloat(priceH4.textContent.replace("$", ""));
          price += product.price;
          priceH4.textContent = `$${price.toFixed(2)}`;

          // Update the product in the basketItems array
          const index = basketItems.findIndex((p) => p._id === product._id);
          if (index !== -1) {
            basketItems[index].quantity = quantity;
            basketItems[index].totalPrice = price;
          }

          // Update count in localStorage
          localStorage.setItem("basketItems", JSON.stringify(basketItems));
          checkOutTotal();
          // Enable minus button
          minusButtonElement.disabled = false;
        }

        // Disable plus button if count is 7
        if (quantity === 7) {
          plusButtonElement.disabled = true;
        }
      });

      minusButtonElement.addEventListener("click", () => {
        // Decrement quantity
        let quantity = parseInt(quantityValueH5.textContent, 10);
        if (quantity > 1) {
          quantity--;
          quantityValueH5.textContent = quantity;

          // Update price
          let price = parseFloat(priceH4.textContent.replace("$", ""));
          price -= product.price;
          priceH4.textContent = `$${price.toFixed(2)}`;

          // Update the product in the basketItems array
          const index = basketItems.findIndex((p) => p._id === product._id);
          if (index !== -1) {
            basketItems[index].quantity = quantity;
            basketItems[index].totalPrice = price;
          }

          // Update count in localStorage
          localStorage.setItem("basketItems", JSON.stringify(basketItems));
          checkOutTotal();
          // Enable plus button
          plusButtonElement.disabled = false;
        }

        // Disable minus button if count is 1
        if (quantity === 1) {
          minusButtonElement.disabled = true;
        }
      });

      removeButtonElement.addEventListener("click", () => {
        removeFromBasket(product._id);
        checkOutTotal();
      });
    });
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
  } else {
    document.querySelector(".basket__empty ").style.display = "flex";
    document.querySelector(".basket__list ").style.display = "none";
  }
};
const checkOutTotal = () => {
  const totalAmount = basketItems.reduce((accumulator, item) => {
    return accumulator + item.totalPrice;
  }, 0);
  document.querySelector(
    ".basket__total-amount"
  ).textContent = `$${totalAmount}`;
};
checkOutTotal();
const shopProductsEl = document.querySelector(".shop__card-section");
let shopCount = 20;
const showShopProducts = () => {
  shopProductsEl.innerHTML = ``;
  let sProducts = [];
  for (let i = 0; i < shopCount; i++) {
    const product = shopProducts[i];
    const productElement = document.createElement("div");
    productElement.className = "shop__card-product";
    productElement.setAttribute("data-key", product._id);

    const checkElement = document.createElement("span");
    checkElement.className = "product__card-check";
    checkElement.innerHTML = '<i class="fa-solid fa-check"></i>';
    productElement.appendChild(checkElement);

    const contentElement = document.createElement("div");
    contentElement.className = "product__card-content";
    productElement.appendChild(contentElement);

    const imgWrapperElement = document.createElement("div");
    imgWrapperElement.className = "product__img-wrapper";
    contentElement.appendChild(imgWrapperElement);

    const imgElement = document.createElement("img");
    imgElement.src = product.img;
    imgElement.alt = product.name;
    imgWrapperElement.appendChild(imgElement);

    const detailsElement = document.createElement("div");
    detailsElement.className = "product__details";
    contentElement.appendChild(detailsElement);

    const nameElement = document.createElement("h5");
    nameElement.className =
      "product-card-name text-overflow-ellipsis margin-auto";
    nameElement.textContent = product.name;
    detailsElement.appendChild(nameElement);

    const subElement = document.createElement("p");
    subElement.className = "product-card-brand";
    subElement.textContent = product.sub;
    detailsElement.appendChild(subElement);

    const priceElement = document.createElement("h4");
    priceElement.className = "product-card-price";
    priceElement.textContent = `$${product.price}`;
    detailsElement.appendChild(priceElement);

    const addToBasketButton = document.createElement("button");
    addToBasketButton.className = "btn card-btn";
    addToBasketButton.type = "button";
    addToBasketButton.textContent = "Add to basket";
    addToBasketButton.addEventListener("click", function () {
      addToBasket(product._id);
    });
    productElement.appendChild(addToBasketButton);

    sProducts.push(productElement);
  }

  sProducts.forEach(function (productElement) {
    shopProductsEl.appendChild(productElement);
  });
};

if (pageName === "featured.html") {
  fCount = 8;
  showFeaturedProducts();
} else if (pageName === "recommended.html") {
  showRecommendedProducts();
} else if (pageName === "index.html") {
  showFeaturedProducts();
  showRecommendedProducts();
} else if (pageName === "shop.html") {
  showShopProducts();
  let showMore = true;
  showMoreBtn.addEventListener("click", () => {
    showMore = !showMore;
    if (showMore) {
      shopCount = 20;
      showShopProducts();
      showMoreBtn.textContent = "Show Less Items";
    } else {
      shopCount = 12;
      showShopProducts();
      showMoreBtn.textContent = "Show More Items";
    }
  });
}

// Search bar

const searchBarEl = document.getElementById("nav-search");
searchBarEl.addEventListener("onclick", () => {
  window.location.href = "shop.html";
});
searchBarEl.addEventListener("keyup", () => {
  let input = searchBarEl.value;
  if (pageName !== "shop.html") {
    localStorage.setItem("searchInputValue", input);
    window.location.href = "shop.html";
    searchBarEl.value = localStorage.getItem("searchInputValue") || "";
    localStorage.removeItem("searchInputValue");
  }
  if (input) {
    let searchProducts = shopProducts.filter((product) => {
      return product.name.toLowerCase().startsWith(input.toLowerCase());
    });
    const showSearchedProducts = () => {
      shopProductsEl.innerHTML = "";
      let sProducts = [];
      for (let i = 0; i < searchProducts.length; i++) {
        const product = searchProducts[i];
        const productElement = document.createElement("div");
        productElement.className = "shop__card-product";
        productElement.setAttribute("data-key", product._id);

        const checkElement = document.createElement("span");
        checkElement.className = "product__card-check";
        checkElement.innerHTML = '<i class="fa-solid fa-check"></i>';
        productElement.appendChild(checkElement);

        const contentElement = document.createElement("div");
        contentElement.className = "product__card-content";
        productElement.appendChild(contentElement);

        const imgWrapperElement = document.createElement("div");
        imgWrapperElement.className = "product__img-wrapper";
        contentElement.appendChild(imgWrapperElement);

        const imgElement = document.createElement("img");
        imgElement.src = product.img;
        imgElement.alt = product.name;
        imgWrapperElement.appendChild(imgElement);

        const detailsElement = document.createElement("div");
        detailsElement.className = "product__details";
        contentElement.appendChild(detailsElement);

        const nameElement = document.createElement("h5");
        nameElement.className =
          "product-card-name text-overflow-ellipsis margin-auto";
        nameElement.textContent = product.name;
        detailsElement.appendChild(nameElement);

        const subElement = document.createElement("p");
        subElement.className = "product-card-brand";
        subElement.textContent = product.sub;
        detailsElement.appendChild(subElement);

        const priceElement = document.createElement("h4");
        priceElement.className = "product-card-price";
        priceElement.textContent = `$${product.price}`;
        detailsElement.appendChild(priceElement);

        const addToBasketButton = document.createElement("button");
        addToBasketButton.className = "btn card-btn";
        addToBasketButton.type = "button";
        addToBasketButton.textContent = "Add to basket";
        addToBasketButton.addEventListener("click", function () {
          addToBasket(product._id);
        });
        productElement.appendChild(addToBasketButton);

        sProducts.push(productElement);
      }

      sProducts.forEach(function (productElement) {
        shopProductsEl.appendChild(productElement);
      });
    };

    showSearchedProducts();
    showMoreBtn.style.display = "none";
  } else {
    shopCount = 12;
    showShopProducts();
    showMoreBtn.style.display = "inline-block";
    showMoreBtn.textContent = "Show More Items";
  }
});

// Open and close basket

const closeBtn = document.querySelector(".basket__close-btn");
const navCart = document.querySelector(".nav__cart");
let openedBasket = false;
const openCloseBasket = () => {
  openedBasket = !openedBasket;
  if (openedBasket) {
    document.querySelector(".basket").classList.add("open");
  } else {
    document.querySelector(".basket").classList.remove("open");
  }
};
closeBtn.addEventListener("click", openCloseBasket);
navCart.addEventListener("click", openCloseBasket);
//
showBasketItems();
showBasketCount();
checkOutTotal();

// Sign up and sign in

let isSigned = false;
isSigned = localStorage.getItem("signed");


const showAuthentication = () => {
  const authEl = document.querySelector(".nav__auth");
  if (isSigned === "false") {
    if (pageName === "signup.html") {
      const signInLink = document.createElement("a");
      signInLink.href = "/pages/signin.html";

      const signInButton = document.createElement("button");
      signInButton.type = "button";
      signInButton.className = "nav__sign-in btn";
      signInButton.textContent = "Sign In";

      signInLink.appendChild(signInButton);
      authEl.innerHTML = "";
      authEl.appendChild(signInLink);
    } else if (pageName === "signin.html") {
      const signUpLink = document.createElement("a");
      signUpLink.href = "/pages/signup.html";

      const signUpButton = document.createElement("button");
      signUpButton.type = "button";
      signUpButton.className = "nav__sign-up btn";
      signUpButton.textContent = "Sign Up";

      signUpLink.appendChild(signUpButton);
      authEl.innerHTML = "";

      authEl.appendChild(signUpLink);
    } else {
      const signUpLink = document.createElement("a");
      signUpLink.href = "/pages/signup.html";

      const signUpButton = document.createElement("button");
      signUpButton.type = "button";
      signUpButton.className = "nav__sign-up btn";
      signUpButton.textContent = "Sign Up";

      signUpLink.appendChild(signUpButton);

      const signInLink = document.createElement("a");
      signInLink.href = "/pages/signin.html";

      const signInButton = document.createElement("button");
      signInButton.type = "button";
      signInButton.className = "nav__sign-in btn";
      signInButton.textContent = "Sign In";

      signInLink.appendChild(signInButton);
      authEl.innerHTML = "";
      authEl.appendChild(signUpLink);
      authEl.appendChild(signInLink);
    }
  } else if (isSigned === "true") {
    const profileButton = document.createElement("button");
    profileButton.className = "profile-btn";
    profileButton.className = "btn";
    profileButton.textContent = "Logout";
    profileButton.addEventListener("click", logout);

    const navAuth = document.querySelector(".nav__auth");
    navAuth.appendChild(profileButton);
  }
};
showAuthentication();

function logout() {
  isSigned = false;
  localStorage.setItem("signed", isSigned);
  window.location.href = "index.html";
  showAuthentication();
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCN6B38qNuXdlDL6m1Ef15LrA7fpCVcbrc",
  authDomain: "e-commerce-clone-eyewear.firebaseapp.com",
  projectId: "e-commerce-clone-eyewear",
  storageBucket: "e-commerce-clone-eyewear.appspot.com",
  messagingSenderId: "1021121430119",
  appId: "1:1021121430119:web:760d5218a1e43526e24ac2",
};

const app = initializeApp(firebaseConfig);
const signUpForm = document.querySelector(".signup__form");
const signInForm = document.querySelector(".signin__form");

if (pageName === "signup.html") {
  const auth = getAuth();
  signUpForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        isSigned = true;
        localStorage.setItem("signed", isSigned);
        window.location.href = "index.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage + "!!");
        console.log(error, errorCode, errorMessage);
      });
  });
  document.querySelector(".provider__google").addEventListener("click", () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(email, error, errorMessage);
      });
  });
} else if (pageName === "signin.html") {
  const auth = getAuth();
  signInForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        isSigned = true;
        localStorage.setItem("signed", isSigned);
        window.location.href = "index.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error, errorCode, errorMessage);
      });
  });
  document.querySelector(".provider__google").addEventListener("click", () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log("Success");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(email, error, errorMessage);
      });
  });
}
