const products = {
  33: {
    name: "Produto 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://static3.tcdn.com.br/img/img_prod/769840/vestido_mirele_1329_1_20348177a5ec7e4dc844aae226aac5df.jpg",
      "https://static3.tcdn.com.br/img/img_prod/769840/vestido_mirele_1329_1_20348177a5ec7e4dc844aae226aac5df.jpg",
      "https://static3.tcdn.com.br/img/img_prod/769840/vestido_mirele_1329_1_20348177a5ec7e4dc844aae226aac5df.jpg",
    ],
    price: 299.99,
    categories: [1, 2, 3],
  },
  1: {
    name: "Vestido laranja",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://static3.tcdn.com.br/img/img_prod/769840/vestido_mirele_1329_1_20348177a5ec7e4dc844aae226aac5df.jpg",
      "https://ph-cdn3.ecosweb.com.br/imagens01/foto/moda-feminina/vestido-midi/vestido-laranja-neon-com-babado-no-decote_337997_600_1.jpg",
      "https://secretocloset.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/v/c/vc61.jpg",
    ],
    price: 299.99,
    promo_price: 199.99,
    percent: 15,
    categories: [1, 2],
  },
  4: {
    name: "Produto 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://static3.tcdn.com.br/img/img_prod/769840/vestido_mirele_1329_1_20348177a5ec7e4dc844aae226aac5df.jpg",
      "https://static3.tcdn.com.br/img/img_prod/769840/vestido_mirele_1329_1_20348177a5ec7e4dc844aae226aac5df.jpg",
      "https://static3.tcdn.com.br/img/img_prod/769840/vestido_mirele_1329_1_20348177a5ec7e4dc844aae226aac5df.jpg",
    ],
    price: 299.99,
    categories: [1, 3],
  },
  2: {
    name: "Produto 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://static3.tcdn.com.br/img/img_prod/769840/vestido_mirele_1329_1_20348177a5ec7e4dc844aae226aac5df.jpg",
      "https://static3.tcdn.com.br/img/img_prod/769840/vestido_mirele_1329_1_20348177a5ec7e4dc844aae226aac5df.jpg",
      "https://static3.tcdn.com.br/img/img_prod/769840/vestido_mirele_1329_1_20348177a5ec7e4dc844aae226aac5df.jpg",
    ],
    price: 299.99,
    promo_price: 199.99,
    percent: 15,
    categories: [1, 3, 4],
  },
};

const categories = {
  1: { name: "Roupas" },
  2: { name: "Acessórios" },
  3: { name: "Calçados" },
  4: {name: 'Jóias'},
};

module.exports = {
  products,
  categories
};
