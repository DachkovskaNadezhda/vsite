let productList = [];

let product = {
  article: "01",
  productCategory: "woman",
  productSubCategory: "Одежда",
  productName: "ДЖЕМПЕР ОВЕРСАЙЗ",
  colors: [
    {
      hex: "#EFEBE0",
      name: "Тёплый белый",
      image: "./product/__img/product01_warmwhite.png"
    },
    {
      hex: "#252525", 
      name: "Тёмно-серый",
      image: "./product/__img/product01_darkgray.png"
    },
    {
      hex: "#FFE4B5", 
      name: "Персиковый",
      image: "./product/__img/product01_peach.png"
    }
  ],
  sizes: [36, 38, 40, 42, 44],
  selectedColor: "#EFEBE0",
  selectedSize: 38,

  stock: {
    "#EFEBE0": {
      36: 5,
      38: 3,
      40: 0,
      42: 7,
      44: 2
    },
    "#252525": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    },
    "#FFE4B5": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    }    
  },

  get productImg() {
    const colorObj = this.colors.find(c => c.hex === this.selectedColor);
    return colorObj ? colorObj.image : "./product/__img/default.png";
  },

  get stockQuantity() {
    return this.stock[this.selectedColor]?.[this.selectedSize] || 0;
  },

  get productHexArray() {
     return this.colors.map(color => color.hex);
  },

  price: 6999,
  itemPurchased: 10, 
  neWCollection: true,
  sale: false
};
productList.push(product);

product = {
  article: "02",
  productCategory: "woman",
  productSubCategory: "Одежда",
  productName: "ВЯЗАНАЯ ЮБКА В РУБЧИК",
  colors: [
    {
      hex: "#FFE4B5",
      name: "Персиковый",
      image: "./product/__img/product02_peach.png"
    },
    {
      hex: "#252525", 
      name: "Тёмно-серый",
      image: "./product/__img/product02_darkgray.png"
    },
    {
      hex: "#572F6F", 
      name: "Сливовый",
      image: "./product/__img/product02_plum.png"
    },
    {
      hex: "#FFFFF1", 
      name: "Слоновая кость",
      image: "./product/__img/product02_ivory.png"
    }
  ],
  sizes: [36, 38, 40, 42, 44],
  selectedColor: "#252525",
  selectedSize: 38,

  stock: {
    "#FFE4B5": {
      36: 5,
      38: 3,
      40: 0,
      42: 7,
      44: 2
    },
    "#252525": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    },
    "#572F6F": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    }  ,  
    "#FFFFF1": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    }    
  },

  get productImg() {
    const colorObj = this.colors.find(c => c.hex === this.selectedColor);
    return colorObj ? colorObj.image : "./product/__img/default.png";
  },

  get stockQuantity() {
    return this.stock[this.selectedColor]?.[this.selectedSize] || 0;
  },
  
  get productHexArray() {
     return this.colors.map(color => color.hex);
  },

  price: 7999,
  itemPurchased: 5, 
  neWCollection: false,
  sale: false
};

productList.push(product);
product = {
  article: "03",
  productCategory: "woman",
  productSubCategory: "Одежда",
  productName: "БРЮКИ ЖЕНСКИЕ",
  colors: [
    {
      hex: "#FFE4B5",
      name: "Персиковый",
      image: "./product/__img/product03_peach.png"
    },
    {
      hex: "#252525", 
      name: "Тёмно-серый",
      image: "./product/__img/product03_darkgray.png"
    }
  ],
  sizes: [36, 38, 40, 42, 44],
  selectedColor: "#252525",
  selectedSize: 38,

  stock: {
    "#FFE4B5": {
      36: 5,
      38: 3,
      40: 0,
      42: 7,
      44: 2
    },
    "#252525": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    }  
  },

  get productImg() {
    const colorObj = this.colors.find(c => c.hex === this.selectedColor);
    return colorObj ? colorObj.image : "./product/__img/default.png";
  },

  get stockQuantity() {
    return this.stock[this.selectedColor]?.[this.selectedSize] || 0;
  },
  
  get productHexArray() {
     return this.colors.map(color => color.hex);
  },

  price: 5999,
  itemPurchased: 5, 
  neWCollection: true,
  sale: false
};

productList.push(product);
product = {
  article: "04",
  productCategory: "woman",
  productSubCategory: "Одежда",
  productName: "ЮБКА НА ЗАПАХ",
  colors: [
    {
      hex: "#252026",
      name: "Глубокий антрацит",
      image: "./product/__img/product04_deepanthracite.png"
    },
    {
      hex: "#7D9478", 
      name: "Пыльная олива",
      image: "./product/__img/product04_dustyolive.png"
    },
    {
      hex: "#E1D9CC", 
      name: "Песочный беж",
      image: "./product/__img/product04_sandbeige .png"
    }
  ],
  sizes: [36, 38, 40, 42, 44],
  selectedColor: "#252026",
  selectedSize: 38,

  stock: {
    "#252026": {
      36: 5,
      38: 3,
      40: 0,
      42: 7,
      44: 2
    },
    "#7D9478": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    },
    "#E1D9CC": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    }   
  },

  get productImg() {
    const colorObj = this.colors.find(c => c.hex === this.selectedColor);
    return colorObj ? colorObj.image : "./product/__img/default.png";
  },

  get stockQuantity() {
    return this.stock[this.selectedColor]?.[this.selectedSize] || 0;
  },
  
  get productHexArray() {
     return this.colors.map(color => color.hex);
  },

  price: 9999,
  itemPurchased: 5, 
  neWCollection: false,
  sale: false
};

productList.push(product);
product = {
  article: "05",
  productCategory: "woman",
  productSubCategory: "Одежда",
  productName: "Классические брюки",
  colors: [
    {
      hex: "#130E14",
      name: "Темно-фиолетовый",
      image: "./product/__img/product05_darkpurple.png"
    },
    {
      hex: "#FFFFF1", 
      name: "Слоновая кость",
      image: "./product/__img/product05_ivory.png"
    },
    {
      hex: "#397153", 
      name: "Амазонка",
      image: "./product/__img/product05_amazon.png"
    }
  ],
  sizes: [36, 38, 40, 42, 44],
  selectedColor: "#130E14",
  selectedSize: 38,

  stock: {
    "#130E14": {
      36: 5,
      38: 3,
      40: 0,
      42: 7,
      44: 2
    },
    "#FFFFF1": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    },
    "#397153": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    }   
  },

  get productImg() {
    const colorObj = this.colors.find(c => c.hex === this.selectedColor);
    return colorObj ? colorObj.image : "./product/__img/default.png";
  },

  get stockQuantity() {
    return this.stock[this.selectedColor]?.[this.selectedSize] || 0;
  },
  
  get productHexArray() {
     return this.colors.map(color => color.hex);
  },

  price: 15999,
  itemPurchased: 4, 
  neWCollection: true,
  sale: false
};

productList.push(product);

product = {
  article: "06",
  productCategory: "woman",
  productSubCategory: "Одежда",
  productName: "Базовые трикотажные",
  colors: [
    {
      hex: "#73BDE4",
      name: "Небесно-голубой",
      image: "./product/__img/product06_skyblue.png"
    },
    {
      hex: "#252525", 
      name: "Тёмно-серый",
      image: "./product/__img/product06_darkgray.png"
    },
    {
      hex: "#397153", 
      name: "Амазонка",
      image: "./product/__img/product06_amazon.png"
    }
  ],
  sizes: [36, 38, 40, 42, 44],
  selectedColor: "#73BDE4",
  selectedSize: 38,

  stock: {
    "#73BDE4": {
      36: 5,
      38: 3,
      40: 0,
      42: 7,
      44: 2
    },
    "#252525": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    },
    "#397153": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    }    
  },

  get productImg() {
    const colorObj = this.colors.find(c => c.hex === this.selectedColor);
    return colorObj ? colorObj.image : "./product/__img/default.png";
  },

  get stockQuantity() {
    return this.stock[this.selectedColor]?.[this.selectedSize] || 0;
  },
  
  get productHexArray() {
     return this.colors.map(color => color.hex);
  },

  price: 7999,
  itemPurchased: 5, 
  neWCollection: true,
  sale: false
};

productList.push(product);
product = {
  article: "07",
  productCategory: "woman",
  productSubCategory: "Одежда",
  productName: "ВЯЗАНАЯ ЮБКА В РУБЧИК",
  colors: [
    {
      hex: "#FFE4B5",
      name: "Персиковый",
      image: "./product/__img/product02_peach.png"
    },
    {
      hex: "#252525", 
      name: "Тёмно-серый",
      image: "./product/__img/product02_darkgray.png"
    },
    {
      hex: "#572F6F", 
      name: "Сливовый",
      image: "./product/__img/product02_plum.png"
    },
    {
      hex: "#FFFFF1", 
      name: "Слоновая кость",
      image: "./product/__img/product02_ivory.png"
    }
  ],
  sizes: [36, 38, 40, 42, 44],
  selectedColor: "#252525",
  selectedSize: 38,

  stock: {
    "#FFE4B5": {
      36: 5,
      38: 3,
      40: 0,
      42: 7,
      44: 2
    },
    "#252525": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    },
    "#572F6F": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    }  ,  
    "#FFFFF1": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    }    
  },

  get productImg() {
    const colorObj = this.colors.find(c => c.hex === this.selectedColor);
    return colorObj ? colorObj.image : "./product/__img/default.png";
  },

  get stockQuantity() {
    return this.stock[this.selectedColor]?.[this.selectedSize] || 0;
  },
  
  get productHexArray() {
     return this.colors.map(color => color.hex);
  },

  price: 7999,
  itemPurchased: 5, 
  neWCollection: true,
  sale: false
};

productList.push(product);
product = {
  article: "08",
  productCategory: "woman",
  productSubCategory: "Одежда",
  productName: "ВЯЗАНАЯ ЮБКА В РУБЧИК",
  colors: [
    {
      hex: "#FFE4B5",
      name: "Персиковый",
      image: "./product/__img/product02_peach.png"
    },
    {
      hex: "#252525", 
      name: "Тёмно-серый",
      image: "./product/__img/product02_darkgray.png"
    },
    {
      hex: "#572F6F", 
      name: "Сливовый",
      image: "./product/__img/product02_plum.png"
    },
    {
      hex: "#FFFFF1", 
      name: "Слоновая кость",
      image: "./product/__img/product02_ivory.png"
    }
  ],
  sizes: [36, 38, 40, 42, 44],
  selectedColor: "#252525",
  selectedSize: 38,

  stock: {
    "#FFE4B5": {
      36: 5,
      38: 3,
      40: 0,
      42: 7,
      44: 2
    },
    "#252525": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    },
    "#572F6F": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    }  ,  
    "#FFFFF1": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    }    
  },

  get productImg() {
    const colorObj = this.colors.find(c => c.hex === this.selectedColor);
    return colorObj ? colorObj.image : "./product/__img/default.png";
  },

  get stockQuantity() {
    return this.stock[this.selectedColor]?.[this.selectedSize] || 0;
  },
  
  get productHexArray() {
     return this.colors.map(color => color.hex);
  },

  price: 7999,
  itemPurchased: 5, 
  neWCollection: true,
  sale: false
};

productList.push(product);
product = {
  article: "09",
  productCategory: "woman",
  productSubCategory: "Одежда",
  productName: "ВЯЗАНАЯ ЮБКА В РУБЧИК",
  colors: [
    {
      hex: "#FFE4B5",
      name: "Персиковый",
      image: "./product/__img/product02_peach.png"
    },
    {
      hex: "#252525", 
      name: "Тёмно-серый",
      image: "./product/__img/product02_darkgray.png"
    },
    {
      hex: "#572F6F", 
      name: "Сливовый",
      image: "./product/__img/product02_plum.png"
    },
    {
      hex: "#FFFFF1", 
      name: "Слоновая кость",
      image: "./product/__img/product02_ivory.png"
    }
  ],
  sizes: [36, 38, 40, 42, 44],
  selectedColor: "#252525",
  selectedSize: 38,

  stock: {
    "#FFE4B5": {
      36: 5,
      38: 3,
      40: 0,
      42: 7,
      44: 2
    },
    "#252525": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    },
    "#572F6F": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    }  ,  
    "#FFFFF1": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    }    
  },

  get productImg() {
    const colorObj = this.colors.find(c => c.hex === this.selectedColor);
    return colorObj ? colorObj.image : "./product/__img/default.png";
  },

  get stockQuantity() {
    return this.stock[this.selectedColor]?.[this.selectedSize] || 0;
  },
  
  get productHexArray() {
     return this.colors.map(color => color.hex);
  },

  price: 7999,
  itemPurchased: 5, 
  neWCollection: true,
  sale: false
};

productList.push(product);
product = {
  article: "10",
  productCategory: "woman",
  productSubCategory: "Одежда",
  productName: "ВЯЗАНАЯ ЮБКА В РУБЧИК",
  colors: [
    {
      hex: "#FFE4B5",
      name: "Персиковый",
      image: "./product/__img/product02_peach.png"
    },
    {
      hex: "#252525", 
      name: "Тёмно-серый",
      image: "./product/__img/product02_darkgray.png"
    },
    {
      hex: "#572F6F", 
      name: "Сливовый",
      image: "./product/__img/product02_plum.png"
    },
    {
      hex: "#FFFFF1", 
      name: "Слоновая кость",
      image: "./product/__img/product02_ivory.png"
    }
  ],
  sizes: [36, 38, 40, 42, 44],
  selectedColor: "#252525",
  selectedSize: 38,

  stock: {
    "#FFE4B5": {
      36: 5,
      38: 3,
      40: 0,
      42: 7,
      44: 2
    },
    "#252525": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    },
    "#572F6F": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    }  ,  
    "#FFFFF1": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    }    
  },

  get productImg() {
    const colorObj = this.colors.find(c => c.hex === this.selectedColor);
    return colorObj ? colorObj.image : "./product/__img/default.png";
  },

  get stockQuantity() {
    return this.stock[this.selectedColor]?.[this.selectedSize] || 0;
  },
  
  get productHexArray() {
     return this.colors.map(color => color.hex);
  },

  price: 7999,
  itemPurchased: 5, 
  neWCollection: true,
  sale: false
};

productList.push(product);
product = {
  article: "11",
  productCategory: "woman",
  productSubCategory: "Одежда",
  productName: "ВЯЗАНАЯ ЮБКА В РУБЧИК",
  colors: [
    {
      hex: "#FFE4B5",
      name: "Персиковый",
      image: "./product/__img/product02_peach.png"
    },
    {
      hex: "#252525", 
      name: "Тёмно-серый",
      image: "./product/__img/product02_darkgray.png"
    },
    {
      hex: "#572F6F", 
      name: "Сливовый",
      image: "./product/__img/product02_plum.png"
    },
    {
      hex: "#FFFFF1", 
      name: "Слоновая кость",
      image: "./product/__img/product02_ivory.png"
    }
  ],
  sizes: [36, 38, 40, 42, 44],
  selectedColor: "#252525",
  selectedSize: 38,

  stock: {
    "#FFE4B5": {
      36: 5,
      38: 3,
      40: 0,
      42: 7,
      44: 2
    },
    "#252525": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    },
    "#572F6F": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    }  ,  
    "#FFFFF1": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    }    
  },

  get productImg() {
    const colorObj = this.colors.find(c => c.hex === this.selectedColor);
    return colorObj ? colorObj.image : "./product/__img/default.png";
  },

  get stockQuantity() {
    return this.stock[this.selectedColor]?.[this.selectedSize] || 0;
  },
  
  get productHexArray() {
     return this.colors.map(color => color.hex);
  },

  price: 7999,
  itemPurchased: 5, 
  neWCollection: true,
  sale: false
};

productList.push(product);
product = {
  article: "12",
  productCategory: "woman",
  productSubCategory: "Одежда",
  productName: "ВЯЗАНАЯ ЮБКА В РУБЧИК",
  colors: [
    {
      hex: "#FFE4B5",
      name: "Персиковый",
      image: "./product/__img/product02_peach.png"
    },
    {
      hex: "#252525", 
      name: "Тёмно-серый",
      image: "./product/__img/product02_darkgray.png"
    },
    {
      hex: "#572F6F", 
      name: "Сливовый",
      image: "./product/__img/product02_plum.png"
    },
    {
      hex: "#FFFFF1", 
      name: "Слоновая кость",
      image: "./product/__img/product02_ivory.png"
    }
  ],
  sizes: [36, 38, 40, 42, 44],
  selectedColor: "#252525",
  selectedSize: 38,

  stock: {
    "#FFE4B5": {
      36: 5,
      38: 3,
      40: 0,
      42: 7,
      44: 2
    },
    "#252525": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    },
    "#572F6F": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    }  ,  
    "#FFFFF1": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    }    
  },

  get productImg() {
    const colorObj = this.colors.find(c => c.hex === this.selectedColor);
    return colorObj ? colorObj.image : "./product/__img/default.png";
  },

  get stockQuantity() {
    return this.stock[this.selectedColor]?.[this.selectedSize] || 0;
  },
  
  get productHexArray() {
     return this.colors.map(color => color.hex);
  },

  price: 7999,
  itemPurchased: 5, 
  neWCollection: true,
  sale: false
};

productList.push(product);
product = {
  article: "13",
  productCategory: "woman",
  productSubCategory: "Одежда",
  productName: "ВЯЗАНАЯ ЮБКА В РУБЧИК",
  colors: [
    {
      hex: "#FFE4B5",
      name: "Персиковый",
      image: "./product/__img/product02_peach.png"
    },
    {
      hex: "#252525", 
      name: "Тёмно-серый",
      image: "./product/__img/product02_darkgray.png"
    },
    {
      hex: "#572F6F", 
      name: "Сливовый",
      image: "./product/__img/product02_plum.png"
    },
    {
      hex: "#FFFFF1", 
      name: "Слоновая кость",
      image: "./product/__img/product02_ivory.png"
    }
  ],
  sizes: [36, 38, 40, 42, 44],
  selectedColor: "#252525",
  selectedSize: 38,

  stock: {
    "#FFE4B5": {
      36: 5,
      38: 3,
      40: 0,
      42: 7,
      44: 2
    },
    "#252525": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    },
    "#572F6F": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    }  ,  
    "#FFFFF1": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    }    
  },

  get productImg() {
    const colorObj = this.colors.find(c => c.hex === this.selectedColor);
    return colorObj ? colorObj.image : "./product/__img/default.png";
  },

  get stockQuantity() {
    return this.stock[this.selectedColor]?.[this.selectedSize] || 0;
  },
  
  get productHexArray() {
     return this.colors.map(color => color.hex);
  },

  price: 7999,
  itemPurchased: 5, 
  neWCollection: true,
  sale: false
};

productList.push(product);
product = {
  article: "14",
  productCategory: "woman",
  productSubCategory: "Одежда",
  productName: "ВЯЗАНАЯ ЮБКА В РУБЧИК",
  colors: [
    {
      hex: "#FFE4B5",
      name: "Персиковый",
      image: "./product/__img/product02_peach.png"
    },
    {
      hex: "#252525", 
      name: "Тёмно-серый",
      image: "./product/__img/product02_darkgray.png"
    },
    {
      hex: "#572F6F", 
      name: "Сливовый",
      image: "./product/__img/product02_plum.png"
    },
    {
      hex: "#FFFFF1", 
      name: "Слоновая кость",
      image: "./product/__img/product02_ivory.png"
    }
  ],
  sizes: [36, 38, 40, 42, 44],
  selectedColor: "#252525",
  selectedSize: 38,

  stock: {
    "#FFE4B5": {
      36: 5,
      38: 3,
      40: 0,
      42: 7,
      44: 2
    },
    "#252525": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    },
    "#572F6F": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    }  ,  
    "#FFFFF1": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    }    
  },

  get productImg() {
    const colorObj = this.colors.find(c => c.hex === this.selectedColor);
    return colorObj ? colorObj.image : "./product/__img/default.png";
  },

  get stockQuantity() {
    return this.stock[this.selectedColor]?.[this.selectedSize] || 0;
  },
  
  get productHexArray() {
     return this.colors.map(color => color.hex);
  },

  price: 7999,
  itemPurchased: 5, 
  neWCollection: true,
  sale: false
};

productList.push(product);
product = {
  article: "15",
  productCategory: "woman",
  productSubCategory: "Одежда",
  productName: "ВЯЗАНАЯ ЮБКА В РУБЧИК",
  colors: [
    {
      hex: "#FFE4B5",
      name: "Персиковый",
      image: "./product/__img/product02_peach.png"
    },
    {
      hex: "#252525", 
      name: "Тёмно-серый",
      image: "./product/__img/product02_darkgray.png"
    },
    {
      hex: "#572F6F", 
      name: "Сливовый",
      image: "./product/__img/product02_plum.png"
    },
    {
      hex: "#FFFFF1", 
      name: "Слоновая кость",
      image: "./product/__img/product02_ivory.png"
    }
  ],
  sizes: [36, 38, 40, 42, 44],
  selectedColor: "#252525",
  selectedSize: 38,

  stock: {
    "#FFE4B5": {
      36: 5,
      38: 3,
      40: 0,
      42: 7,
      44: 2
    },
    "#252525": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    },
    "#572F6F": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    }  ,  
    "#FFFFF1": {
      36: 0,
      38: 8,
      40: 4,
      42: 1,
      44: 0
    }    
  },

  get productImg() {
    const colorObj = this.colors.find(c => c.hex === this.selectedColor);
    return colorObj ? colorObj.image : "./product/__img/default.png";
  },

  get stockQuantity() {
    return this.stock[this.selectedColor]?.[this.selectedSize] || 0;
  },
  
  get productHexArray() {
     return this.colors.map(color => color.hex);
  },

  price: 7999,
  itemPurchased: 5, 
  neWCollection: true,
  sale: false
};

productList.push(product);



