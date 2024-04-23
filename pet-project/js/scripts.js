const products = [
  {
    id: "1",
    name: "Linden honey",
    price: "5",
    image: "./image/card1.png",
  },
  {
    id: "2",
    name: "Acacia honey",
    price: "6.34",
    image: "./image/card1.png",
  },
  {
    id: "3",
    name: "Buckwheat honey",
    price: "3.02",
    image: "./image/card1.png",
  },
  {
    id: "4",
    name: "Forest honey",
    price: "4.75",
    image: "./image/card1.png",
  },
  {
    id: "5",
    name: "Sunflower honey",
    price: "5",
    image: "./image/card1.png",
  },
  {
    id: "6",
    name: "Mix with hazelnuts",
    price: "15",
    image: "./image/card2.png",
  },
  {
    id: "7",
    name: "Mix with hazelnuts",
    price: "15",
    image: "./image/card2.png",
  },
  {
    id: "8",
    name: "Mix with hazelnuts",
    price: "15",
    image: "./image/card2.png",
  },
];

//Header constants
const header = document.querySelector(".header");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

//Modal constants
const modalOverlay = document.querySelector(".modal-overlay");
const busketModal = document.querySelector(".busket-modal");
const busketIcon = document.querySelector(".busket-icon");
const busketCross = document.querySelector(".busket-cross");
const busketContinueButton = document.querySelector(".continue-shopping");
const busketProductsListBody = document.querySelector(
  ".busket-product-list-body"
);
const submitBuyingButton = document.querySelector(".submit-buying");

//Products constants
const buttonCards = document.querySelectorAll(".button-card");
const productIncrementDecrement = document.getElementById(
  "product-increase-descrise"
);
const singleProductAdd = document.getElementById("add-product");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

//Modal scripts
const toggleModal = () => {
  modalOverlay.classList.toggle("open");
  busketModal.classList.toggle("open");
};

const switchOverflowBody = () => {
  const isOpenOverlay = modalOverlay.classList.contains("open");
  if (isOpenOverlay) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};

//Modal listeners
[busketIcon, busketCross, busketContinueButton].forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    toggleModal();
    switchOverflowBody();
    const isOpenOverlay = modalOverlay.classList.contains("open");
    if (isOpenOverlay) {
      document.querySelector(".busket-product-list-body").innerHTML =
        productModalTemplate();
      document.querySelector(
        ".busket-total-sum"
      ).textContent = `$${countTotalProductsPrice()}`;
    }
  });
});

//Products scripts
const addToLocalStorage = (productId, count) => {
  let localProducts = JSON.parse(localStorage.getItem("products"));
  if (!localProducts) {
    localProducts = [];
  }

  const productIndex = localProducts.findIndex((x) => {
    return x.id === productId;
  });
  if (productIndex !== -1) {
    localProducts[productIndex].count += count ? count : 1;
  } else {
    localProducts.push({ id: productId, count: count ? count : 1 });
  }

  localStorage.setItem("products", JSON.stringify(localProducts));
};

const removeFromLocalStorate = (productId) => {
  let localProducts = JSON.parse(localStorage.getItem("products"));
  if (!localProducts) return;

  const productIndex = localProducts.findIndex((x) => {
    return x.id === productId;
  });

  localProducts.splice(productIndex, 1);
  localStorage.setItem("products", JSON.stringify(localProducts));
};

const decreaseProductInLocalStorage = (productId) => {
  let localProducts = JSON.parse(localStorage.getItem("products"));
  if (!localProducts) return;

  const productIndex = localProducts.findIndex((x) => {
    return x.id === productId;
  });
  if (localProducts[productIndex].count === 1) {
    removeFromLocalStorate(productId);
  } else {
    localProducts[productIndex].count -= 1;
    localStorage.setItem("products", JSON.stringify(localProducts));
  }
};

const changeBusketCounter = () => {
  const totalCount = countTotalProducts();
  if (totalCount === 0) {
    return;
  }
  busketIcon.querySelector(".busket-product-count").textContent = totalCount;
};

const countTotalProducts = () => {
  let localProducts = JSON.parse(localStorage.getItem("products"));
  if (!localProducts || localProducts.length === 0) {
    return;
  }
  const totalcount = localProducts.reduce((agg, item) => {
    return agg + item.count;
  }, 0);

  return totalcount;
};

const totalPrice = (count, price) => {
  return Number(count) * Number(price);
};

const countTotalProductsPrice = () => {
  const localProducts = JSON.parse(localStorage.getItem("products"));
  if (!localProducts) return;
  let totalSum = 0;
  localProducts.forEach((item) => {
    const product = products.find(
      (productsItem) => productsItem.id === item.id
    );
    totalSum += totalPrice(product.price, item.count);
  });
  return Math.round(totalSum * 100) / 100;
};

const productModalTemplate = () => {
  const localProducts = JSON.parse(localStorage.getItem("products"));
  if (!localProducts) return;

  let template = "";
  localProducts.forEach((item) => {
    const product = products.find(
      (productsItem) => productsItem.id === item.id
    );
    template += productTemplateItem(product, item.count);
  });
  return template;
};

const productTemplateItem = (product, count) => `
  <div class="busket-product-item">
    <div class="width1 mg-r "><img src="${product.image}" /></div>
    <h4 class="width2 pg-r">${product.name}<br><span> 250g</span></h4>
    <p class="width1 pg-r">$${product.price}</p>
    <div class="buy-width bg width1">
      <span class="buy-width1 span2" data-product-id="${product.id}">-</span>
      <span class="buy-width2 text">${count}</span>
      <span class="buy-width3 span" data-product-id="${
        product.id
      }"><b data-product-id="${product.id}">+</b></span>
    </div>
    <p class="width1 pg-l pg-r">$${totalPrice(count, product.price)}</p>
    <div class="remove-product width1 pg-l2" data-product-id="${
      product.id
    }"><svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.0712 2C8.27117 2 2.07117 8.2 2.07117 16C2.07117 23.8 8.27117 30 16.0712 30C23.8712 30 30.0712 23.8 30.0712 16C30.0712 8.2 23.8712 2 16.0712 2ZM16.0712 28C9.47117 28 4.07117 22.6 4.07117 16C4.07117 9.4 9.47117 4 16.0712 4C22.6712 4 28.0712 9.4 28.0712 16C28.0712 22.6 22.6712 28 16.0712 28Z" fill="#654501"/>
    <path d="M21.4712 23L16.0712 17.6L10.6712 23L9.07117 21.4L14.4712 16L9.07117 10.6L10.6712 9L16.0712 14.4L21.4712 9L23.0712 10.6L17.6712 16L23.0712 21.4L21.4712 23Z" fill="#654501"/>
    </svg></div>
  </div>
`;

//Products listeners
document.addEventListener("DOMContentLoaded", () => {
  changeBusketCounter();
});

buttonCards.forEach((card) => {
  card.addEventListener("click", () => {
    const productId = card.dataset.productId;
    addToLocalStorage(productId);
    changeBusketCounter();
  });
});

busketProductsListBody.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("remove-product")) {
    const productId = target.dataset.productId;

    if (productId) {
      removeFromLocalStorate(productId);
    }
  } else if (target.classList.contains("buy-width1")) {
    const productId = target.dataset.productId;
    if (productId) {
      decreaseProductInLocalStorage(productId);
    }
  } else if (
    target.classList.contains("buy-width3") ||
    target.closest(".buy-width3")
  ) {
    const productId =
      target.dataset.productId ||
      target.closest(".buy-width3").dataset.productId;
    if (productId) {
      addToLocalStorage(productId);
    }
  }
  document.querySelector(".busket-product-list-body").innerHTML =
    productModalTemplate();
  document.querySelector(
    ".busket-total-sum"
  ).textContent = `$${countTotalProductsPrice()}`;
  changeBusketCounter();
});

if (productIncrementDecrement) {
  productIncrementDecrement.addEventListener("click", (event) => {
    const target = event.target;
    const numberElement =
      productIncrementDecrement.querySelector(".buy-width2");
    let number = Number(numberElement.textContent);
    if (target.classList.contains("buy-width1") && number > 1) {
      number -= 1;
      numberElement.textContent = number;
    } else if (
      target.classList.contains("buy-width3") ||
      target.closest(".buy-width3")
    ) {
      number += 1;
      numberElement.textContent = number;
    }
  });
}

if (singleProductAdd) {
  singleProductAdd.addEventListener("click", () => {
    const productId = singleProductAdd.dataset.productId;
    const productCountElement =
      productIncrementDecrement.querySelector(".buy-width2");
    let productCount = Number(productCountElement.textContent);

    addToLocalStorage(productId, productCount);
    changeBusketCounter();
  });
}

submitBuyingButton.addEventListener("click", (event) => {
  console.log("imitating buying the products and clearing the busket");
  const localProducts = JSON.parse(localStorage.getItem("products"));
  if (!localProducts) return;
  localProducts.forEach((product) => {
    removeFromLocalStorate(product.id);
  });
  changeBusketCounter();
  toggleModal();
  switchOverflowBody();
});

//Slider
const emblaNode = document.querySelector(".embla");
if (emblaNode) {
  const viewportNode = emblaNode.querySelector(".embla__viewport");
  const options = { loop: true, duration: 30 };
  const prevButtonNode = emblaNode.querySelector(".embla__prev");
  const nextButtonNode = emblaNode.querySelector(".embla__next");
  const plugins = [EmblaCarouselAutoplay({ delay: 10000 })];
  const embla = EmblaCarousel(viewportNode, options, plugins);
  prevButtonNode.addEventListener("click", embla.scrollPrev, false);
  nextButtonNode.addEventListener("click", embla.scrollNext, false);
}

document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname; // Отримуємо поточний шлях сторінки
  const menuItems = document.querySelectorAll("#menu .menuItem"); // Знаходимо всі пункти меню

  menuItems.forEach((item) => {
    const itemPath = item.dataset.path;
    if (currentPath.includes(itemPath)) {
      item.classList.add("active"); // Додаємо клас 'active', якщо шлях збігається
    }
  });
});
