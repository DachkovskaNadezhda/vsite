// Состояние приложения
let productListFiltered = [...productList]; // Начинаем со всех товаров
// productListFiltered.length = 0;
console.log("Всего товаров:", productListFiltered.length);

let currentPage = 1;
let itemsPerPageMax = 0;

// DOM элементы
const productsCardsContainer = document.getElementById("product-cards-container");
const productsCardsContainerWidth = productsCardsContainer.clientWidth;

// Размеры карточек и отступы
let productCardWidth = 300;
let productCardHeight = 500;
let productsCardsColumnGap = 64; 
let productsCardsRowGap = 44;

let itemsPerColumnMax = 3;
let itemsPerRow = calculateItemsPerRow();
console.log("itemsPerRow: " + itemsPerRow);
let totalPages = 0;

init();

window.addEventListener('resize', () => {
  // Обновляем ширину контейнера при ресайзе
  const newWidth = productsCardsContainer.clientWidth;
  itemsPerRow = calculateItemsPerRow(newWidth);
  itemsPerPageMax = itemsPerRow * itemsPerColumnMax;
  totalPages = Math.ceil(productListFiltered.length / itemsPerPageMax);
  if (totalPages > 0) {
    currentPage = Math.min(currentPage, totalPages);
  }
  updatePage();
});

function calculateItemsPerRow(containerWidth = productsCardsContainerWidth) {
  let itemsPerRow = Math.floor(containerWidth / (productCardWidth + productsCardsColumnGap));
  
  // Проверяем, можно ли добавить ещё одну карточку
  if (itemsPerRow > 0 && (productCardWidth + productsCardsColumnGap) * (itemsPerRow + 1) <= containerWidth) {
    itemsPerRow++;
  }
  
  return Math.max(1, itemsPerRow);
}

function calculateVarStartIndex(pageNumber, itemsPerPageMax) {
  return (pageNumber - 1) * itemsPerPageMax;
}

function calculateVarEndIndex(currentPage, itemsPerPageMax, productListLength) {
  return Math.min(currentPage * itemsPerPageMax - 1, productListLength - 1);
}

function updatePage() {
  if (itemsPerRow === 0) return;
  
  itemsPerPageMax = itemsPerRow * itemsPerColumnMax;
  totalPages = Math.ceil(productListFiltered.length / itemsPerPageMax);
  
  // Корректируем текущую страницу, если она выходит за пределы
  if (currentPage > totalPages && totalPages > 0) {
    currentPage = totalPages;
  }
  if (currentPage < 1 && totalPages > 0) {
    currentPage = 1;
  }
  
  console.log("updatePage - текущая страница:", currentPage, "всего страниц:", totalPages);
  
  // Если товаров нет, показываем сообщение
  if (productListFiltered.length === 0) {
    productsCardsContainer.innerHTML = '<p style="width: 100%; text-align: center;">Товары не найдены</p>';
    renderPagination();
    return;
  }
  
  let startIndex = calculateVarStartIndex(currentPage, itemsPerPageMax);
  let endIndex = calculateVarEndIndex(currentPage, itemsPerPageMax, productListFiltered.length);
  
  console.log("Отображаем товары с", startIndex, "по", endIndex);
  
  renderProductCards(startIndex, endIndex);
  renderPagination();
}

// Отрисовка карточек товаров
function renderProductCards(start, end) {
  productsCardsContainer.innerHTML = '';
  
  for (let i = start; i <= end && i < productListFiltered.length; i++) {
    let product = productListFiltered[i];
    let productCard = document.createElement("div");
    let productImgWarpper = document.createElement("div");
    let productImg = document.createElement("img");
    let productName = document.createElement("p");
    let price = document.createElement("p");
    let colorIconBtnWrapper = document.createElement("div");
    
    productCard.classList.add("product-card");
    productCard.style.width = `${productCardWidth}px`;
    productCard.style.flexShrink = '0';
    productCard.setAttribute("id", "article" + product.article);
    
    productImgWarpper.classList.add("product__img-wrapper");
    productImgWarpper.style.width = `${productCardWidth}px`;
    productImgWarpper.style.height = "385.62px";
    
    productImg.classList.add("product__img");
    productImg.setAttribute("src", product.productImg);
    productImg.style.objectFit = "contain";
    productImg.style.width = "100%";
    productImg.style.height = "100%";
    
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
    
    if (product.productHexArray && product.productHexArray.length > 0) {
      product.productHexArray.forEach((hex) => {
        let colorIconBtn = document.createElement("button");
        colorIconBtn.classList.add("color-icon-btn");
        colorIconBtn.style.width = "20px";
        colorIconBtn.style.height = "20px";
        colorIconBtn.style.backgroundColor = hex;
        colorIconBtn.style.border = `1px solid ${hex}`;
        colorIconBtn.style.borderRadius = "50%";
        colorIconBtn.style.cursor = "pointer";
        
        colorIconBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          console.log(`Выбран цвет: ${hex} для товара ${product.article}`);
        });
        
        colorIconBtnWrapper.appendChild(colorIconBtn);
      });
    }
    
    productCard.appendChild(colorIconBtnWrapper);
    productsCardsContainer.appendChild(productCard);
  }
}

function createPageButton(pageNumber) {
  const button = document.createElement("button");
  button.classList.add("pagination__page");
  button.textContent = pageNumber;
  
  if (pageNumber === currentPage) {
    button.classList.add("pagination__page--active");
  }
  
  button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Клик по странице:", pageNumber);
    if (currentPage !== pageNumber) {
      currentPage = pageNumber;
      updatePage();
      // Плавная прокрутка к началу контейнера
      productsCardsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
  
  return button;
}

function renderPagination() {
  const paginationContainer = document.querySelector(".pagination");
  
  if (!paginationContainer) {
    console.error("Элемент .pagination не найден!");
    return;
  }
  
  // Полностью очищаем контейнер
  paginationContainer.innerHTML = "";
  
  if (totalPages <= 1) {
    // Если всего одна страница или меньше, не показываем пагинацию
    console.log("Пагинация скрыта, так как всего страниц:", totalPages);
    return;
  }
  
  console.log("Рендерим пагинацию, страниц:", totalPages);
  
  // КНОПКА "НАЗАД"
  const prevButton = document.createElement('button');
  prevButton.textContent = "←";
  prevButton.classList.add("pagination__prev");
  prevButton.disabled = currentPage === 1;
  prevButton.style.padding = "8px 12px";
  prevButton.style.cursor = "pointer";
  prevButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Нажата кнопка Назад, текущая страница:", currentPage);
    if (currentPage > 1) {
      currentPage--;
      updatePage();
      productsCardsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
  
  // КОНТЕЙНЕР ДЛЯ СТРАНИЦ
  const pagesContainer = document.createElement('div');
  pagesContainer.classList.add('pagination__pages');
  pagesContainer.style.display = 'flex';
  pagesContainer.style.gap = '5px';
  
  // КНОПКА "ВПЕРЕД"
  const nextButton = document.createElement('button');
  nextButton.textContent = "→";
  nextButton.classList.add("pagination__next");
  nextButton.disabled = currentPage === totalPages;
  nextButton.style.padding = "8px 12px";
  nextButton.style.cursor = "pointer";
  nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Нажата кнопка Вперед, текущая страница:", currentPage);
    if (currentPage < totalPages) {
      currentPage++;
      updatePage();
      productsCardsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
  
  // Собираем пагинацию
  paginationContainer.appendChild(prevButton);
  paginationContainer.appendChild(pagesContainer);
  paginationContainer.appendChild(nextButton);
  
  // Ограничиваем количество отображаемых страниц
  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
  
  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }
  
  // Первая страница
  if (startPage > 1) {
    pagesContainer.appendChild(createPageButton(1));
    if (startPage > 2) {
      const dots = document.createElement('span');
      dots.textContent = '...';
      dots.classList.add('pagination__dots');
      dots.style.margin = '0 5px';
      pagesContainer.appendChild(dots);
    }
  }
  
  // Страницы в диапазоне
  for (let i = startPage; i <= endPage; i++) {
    pagesContainer.appendChild(createPageButton(i));
  }
  
  // Последняя страница
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      const dots = document.createElement('span');
      dots.textContent = '...';
      dots.classList.add('pagination__dots');
      dots.style.margin = '0 5px';
      pagesContainer.appendChild(dots);
    }
    pagesContainer.appendChild(createPageButton(totalPages));
  }
  
  // Добавляем базовые стили для кнопок пагинации
  const allButtons = paginationContainer.querySelectorAll('button');
  allButtons.forEach(btn => {
    if (!btn.disabled) {
      btn.style.backgroundColor = 'white';
      btn.style.border = '1px solid #ddd';
      btn.style.borderRadius = '4px';
      btn.style.transition = 'all 0.3s';
      
      btn.addEventListener('mouseenter', () => {
        if (!btn.disabled) {
          btn.style.backgroundColor = '#f0f0f0';
        }
      });
      
      btn.addEventListener('mouseleave', () => {
        if (!btn.disabled) {
          btn.style.backgroundColor = 'white';
        }
      });
    } else {
      btn.style.opacity = '0.5';
      btn.style.cursor = 'not-allowed';
    }
  });
  
  // Стиль для активной страницы
  const activeButton = pagesContainer.querySelector('.pagination__page--active');
  if (activeButton) {
    activeButton.style.backgroundColor = '#007bff';
    activeButton.style.color = 'white';
    activeButton.style.borderColor = '#007bff';
  }
  
  console.log("Пагинация отрисована, текущая страница:", currentPage);
}

function init() {
  itemsPerPageMax = itemsPerRow * itemsPerColumnMax;
  totalPages = Math.ceil(productListFiltered.length / itemsPerPageMax);
  updatePage();
}

// Добавляем стили для пагинации динамически (если нет в CSS)
const style = document.createElement('style');
style.textContent = `
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 30px;
    padding: 20px 0;
  }
  
  .pagination button {
    padding: 8px 12px;
    border: 1px solid #ddd;
    background-color: white;
    cursor: pointer;
    border-radius: 4px;
    font-size: 14px;
    transition: all 0.3s;
  }
  
  .pagination button:hover:not(:disabled) {
    background-color: #f0f0f0;
    border-color: #999;
    transform: scale(1.05);
  }
  
  .pagination button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .pagination__page--active {
    background-color: #007bff !important;
    color: white !important;
    border-color: #007bff !important;
  }
  
  .pagination__pages {
    display: flex;
    gap: 5px;
  }
  
  .pagination__dots {
    padding: 8px 4px;
    user-select: none;
    color: #666;
  }
  
  .product-card {
    transition: transform 0.3s;
  }
  
  .product-card:hover {
    transform: translateY(-5px);
  }
`;
document.head.appendChild(style);