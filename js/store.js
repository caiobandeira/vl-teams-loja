const VL_KEYS = {
  products: 'vl_products_v17',
  legacyProducts: 'vl_products_v16',
  banners: 'vl_banners_v2',
  settings: 'vl_settings_v1',
  orders: 'vl_orders_v1',
  cart: 'vl_cart_v5',
  adminSession: 'vl_admin_session_v1'
};

const DEFAULT_PRODUCTS = [
  {
    "id": "cat2-botafogo-pb-25-26-botafogo-pb-away-58fef971",
    "name": "Camisa Botafogo-PB — Away 2025/26",
    "team": "Botafogo-PB",
    "category": "Campeonato Brasileiro",
    "season": "2025/26",
    "description": "Camisa adulta do Botafogo-PB, modelo away, da temporada 2025/26. Disponível nos tamanhos P ao 4XG. Consulte o guia de medidas e finalize o pedido pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/botafogo-pb-25-26-botafogo-pb-away-58fef971.webp",
    "badge": "Novidade",
    "featured": true,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/botafogo-pb-25-26-botafogo-pb-away-58fef971.webp",
      "assets/produtos/botafogo-pb-25-26-botafogo-pb-away-58fef971-extra-25-26-botafogo-pb-ho.webp"
    ]
  },
  {
    "id": "cat2-botafogo-25-26-botafogo-treino-2-65c90745",
    "name": "Camisa Botafogo — Treino 2025/26",
    "team": "Botafogo",
    "category": "Campeonato Brasileiro",
    "season": "2025/26",
    "description": "Camisa adulta de treino do Botafogo, modelo treino, da temporada 2025/26. Disponível nos tamanhos P ao 4XG. Consulte o guia de medidas e finalize o pedido pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/botafogo-25-26-botafogo-treino-2-65c90745.webp",
    "badge": "Treino",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/botafogo-25-26-botafogo-treino-2-65c90745.webp"
    ]
  },
  {
    "id": "cat2-flamengo-26-27-flamengo-home-feminina-797cc540",
    "name": "Camisa Flamengo — Home Feminina 2026/27",
    "team": "Flamengo",
    "category": "Campeonato Brasileiro",
    "season": "2026/27",
    "description": "Camisa adulta do Flamengo em versão feminina, modelo home feminina, da temporada 2026/27. Disponível nos tamanhos P ao 4XG. Consulte o guia de medidas e finalize o pedido pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/flamengo-26-27-flamengo-home-feminina-797cc540.webp",
    "badge": "Feminina",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/flamengo-26-27-flamengo-home-feminina-797cc540.webp"
    ]
  },
  {
    "id": "cat2-palmeiras-25-26-palmeiras-goleiro-b2d819c5",
    "name": "Camisa Palmeiras — Goleiro 2025/26",
    "team": "Palmeiras",
    "category": "Campeonato Brasileiro",
    "season": "2025/26",
    "description": "Camisa adulta de goleiro do Palmeiras, modelo goleiro, da temporada 2025/26. Disponível nos tamanhos P ao 4XG. Consulte o guia de medidas e finalize o pedido pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/palmeiras-25-26-palmeiras-goleiro-b2d819c5.webp",
    "badge": "Goleiro",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/palmeiras-25-26-palmeiras-goleiro-b2d819c5.webp",
      "assets/produtos/palmeiras-25-26-palmeiras-goleiro-b2d819c5-extra-25-26-palmeiras-away-.webp"
    ]
  },
  {
    "id": "cat2-palmeiras-25-26-palmeiras-third-2a9e3e9f",
    "name": "Camisa Palmeiras — Third 2025/26",
    "team": "Palmeiras",
    "category": "Campeonato Brasileiro",
    "season": "2025/26",
    "description": "Camisa adulta do Palmeiras, modelo third, da temporada 2025/26. Disponível nos tamanhos P ao 4XG. Consulte o guia de medidas e finalize o pedido pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/palmeiras-25-26-palmeiras-third-2a9e3e9f.webp",
    "badge": "Novidade",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/palmeiras-25-26-palmeiras-third-2a9e3e9f.webp"
    ]
  },
  {
    "id": "cat2-santa-cruz-25-26-santa-cruz-away-com-patrocinios-e13f80fd",
    "name": "Camisa Santa Cruz — Away com Patrocínios 2025/26",
    "team": "Santa Cruz",
    "category": "Campeonato Brasileiro",
    "season": "2025/26",
    "description": "Camisa adulta do Santa Cruz, modelo away com patrocínios, da temporada 2025/26. Disponível nos tamanhos P ao 4XG. Consulte o guia de medidas e finalize o pedido pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/santa-cruz-25-26-santa-cruz-away-com-patrocinios-e13f80fd.webp",
    "badge": "Novidade",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/santa-cruz-25-26-santa-cruz-away-com-patrocinios-e13f80fd.webp",
      "assets/produtos/santa-cruz-25-26-santa-cruz-away-com-patrocinios-e13f80fd-extra-25-26-.webp"
    ]
  },
  {
    "id": "cat2-santa-cruz-25-26-santa-cruz-home-com-patrocinios-43f6c5f8",
    "name": "Camisa Santa Cruz — Home com Patrocínios 2025/26",
    "team": "Santa Cruz",
    "category": "Campeonato Brasileiro",
    "season": "2025/26",
    "description": "Camisa adulta do Santa Cruz, modelo home com patrocínios, da temporada 2025/26. Disponível nos tamanhos P ao 4XG. Consulte o guia de medidas e finalize o pedido pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/santa-cruz-25-26-santa-cruz-home-com-patrocinios-43f6c5f8.webp",
    "badge": "Novidade",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/santa-cruz-25-26-santa-cruz-home-com-patrocinios-43f6c5f8.webp",
      "assets/produtos/santa-cruz-25-26-santa-cruz-home-com-patrocinios-43f6c5f8-extra-25-26-.webp"
    ]
  },
  {
    "id": "cat3-arsenal-2021-22-home",
    "name": "Camisa Arsenal — Home 2021/22",
    "team": "Arsenal",
    "category": "Campeonato Inglês",
    "season": "2021/22",
    "description": "Camisa adulta do Arsenal, temporada 2021/22, uniforme principal. Disponível do P ao 4XG; confirme o estoque pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/arsenal-2021-22-home.webp",
    "badge": "Home",
    "featured": true,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/arsenal-2021-22-home.webp"
    ]
  },
  {
    "id": "cat3-arsenal-2021-22-away",
    "name": "Camisa Arsenal — Away 2021/22",
    "team": "Arsenal",
    "category": "Campeonato Inglês",
    "season": "2021/22",
    "description": "Camisa adulta do Arsenal, temporada 2021/22, uniforme visitante. Disponível do P ao 4XG; confirme o estoque pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/arsenal-2021-22-away.webp",
    "badge": "Away",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/arsenal-2021-22-away.webp"
    ]
  },
  {
    "id": "cat3-aston-villa-2024-25-away",
    "name": "Camisa Aston Villa — Away 2024/25",
    "team": "Aston Villa",
    "category": "Campeonato Inglês",
    "season": "2024/25",
    "description": "Camisa adulta do Aston Villa, temporada 2024/25, uniforme visitante. Disponível do P ao 4XG; confirme o estoque pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/aston-villa-2024-25-away.webp",
    "badge": "Away",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/aston-villa-2024-25-away.webp"
    ]
  },
  {
    "id": "cat3-aston-villa-2024-25-home",
    "name": "Camisa Aston Villa — Home 2024/25",
    "team": "Aston Villa",
    "category": "Campeonato Inglês",
    "season": "2024/25",
    "description": "Camisa adulta do Aston Villa, temporada 2024/25, uniforme principal. Disponível do P ao 4XG; confirme o estoque pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/aston-villa-2024-25-home.webp",
    "badge": "Home",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/aston-villa-2024-25-home.webp"
    ]
  },
  {
    "id": "cat3-blackburn-rovers-2021-22-home",
    "name": "Camisa Blackburn Rovers — Home 2021/22",
    "team": "Blackburn Rovers",
    "category": "Campeonato Inglês",
    "season": "2021/22",
    "description": "Camisa adulta do Blackburn Rovers, temporada 2021/22, uniforme principal. Disponível do P ao 4XG; confirme o estoque pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/blackburn-rovers-2021-22-home.webp",
    "badge": "Home",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/blackburn-rovers-2021-22-home.webp"
    ]
  },
  {
    "id": "cat3-blackburn-rovers-2021-22-away",
    "name": "Camisa Blackburn Rovers — Away 2021/22",
    "team": "Blackburn Rovers",
    "category": "Campeonato Inglês",
    "season": "2021/22",
    "description": "Camisa adulta do Blackburn Rovers, temporada 2021/22, uniforme visitante. Disponível do P ao 4XG; confirme o estoque pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/blackburn-rovers-2021-22-away.webp",
    "badge": "Away",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/blackburn-rovers-2021-22-away.webp"
    ]
  },
  {
    "id": "cat2-barcelona-25-26-barcelona-away-096629da",
    "name": "Camisa Barcelona — Away 2025/26",
    "team": "Barcelona",
    "category": "Campeonato Espanhol",
    "season": "2025/26",
    "description": "Camisa adulta do Barcelona, modelo away, da temporada 2025/26. Disponível nos tamanhos P ao 4XG. Consulte o guia de medidas e finalize o pedido pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/barcelona-25-26-barcelona-away-096629da.webp",
    "badge": "Novidade",
    "featured": true,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/barcelona-25-26-barcelona-away-096629da.webp"
    ]
  },
  {
    "id": "cat2-barcelona-25-26-barcelona-home-jogador-6a3730f1",
    "name": "Camisa Barcelona — Home Versão Jogador 2025/26",
    "team": "Barcelona",
    "category": "Campeonato Espanhol",
    "season": "2025/26",
    "description": "Camisa adulta do Barcelona, modelo home versão jogador, da temporada 2025/26. Disponível nos tamanhos P ao 4XG. Consulte o guia de medidas e finalize o pedido pelo WhatsApp.",
    "price": 179.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/barcelona-25-26-barcelona-home-jogador-6a3730f1.webp",
    "badge": "Versão jogador",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "jogador",
    "images": [
      "assets/produtos/barcelona-25-26-barcelona-home-jogador-6a3730f1.webp"
    ]
  },
  {
    "id": "cat2-cadiz-25-26-cardiz-home-63a54543",
    "name": "Camisa Cádiz — Cárdiz Home 2025/26",
    "team": "Cádiz",
    "category": "Campeonato Espanhol",
    "season": "2025/26",
    "description": "Camisa adulta do Cádiz, modelo cárdiz home, da temporada 2025/26. Disponível nos tamanhos P ao 4XG. Consulte o guia de medidas e finalize o pedido pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/cadiz-25-26-cardiz-home-63a54543.webp",
    "badge": "Novidade",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/cadiz-25-26-cardiz-home-63a54543.webp"
    ]
  },
  {
    "id": "cat2-real-madrid-25-26-real-madrid-away-6d35db41",
    "name": "Camisa Real Madrid — Away 2025/26",
    "team": "Real Madrid",
    "category": "Campeonato Espanhol",
    "season": "2025/26",
    "description": "Camisa adulta do Real Madrid, modelo away, da temporada 2025/26. Disponível nos tamanhos P ao 4XG. Consulte o guia de medidas e finalize o pedido pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/real-madrid-25-26-real-madrid-away-6d35db41.webp",
    "badge": "Novidade",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/real-madrid-25-26-real-madrid-away-6d35db41.webp"
    ]
  },
  {
    "id": "cat2-real-madrid-25-26-real-madrid-home-9249d335",
    "name": "Camisa Real Madrid — Home 2025/26",
    "team": "Real Madrid",
    "category": "Campeonato Espanhol",
    "season": "2025/26",
    "description": "Camisa adulta do Real Madrid, modelo home, da temporada 2025/26. Disponível nos tamanhos P ao 4XG. Consulte o guia de medidas e finalize o pedido pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/real-madrid-25-26-real-madrid-home-9249d335.webp",
    "badge": "Novidade",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/real-madrid-25-26-real-madrid-home-9249d335.webp"
    ]
  },
  {
    "id": "fim-aston-martin-10b7c35a",
    "name": "Camisa Aston Martin — Modelo 01",
    "team": "Aston Martin",
    "category": "Fórmula 1",
    "season": "",
    "description": "Camisa adulta inspirada na equipe Aston Martin, com visual de automobilismo. Disponível do P ao 4XG; confirme o estoque pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/aston-martin-10b7c35a.webp",
    "badge": "Fórmula 1",
    "featured": true,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/aston-martin-10b7c35a.webp"
    ]
  },
  {
    "id": "fim-aston-martin-35e775a9",
    "name": "Camisa Aston Martin — Modelo 02",
    "team": "Aston Martin",
    "category": "Fórmula 1",
    "season": "",
    "description": "Camisa adulta inspirada na equipe Aston Martin, com visual de automobilismo. Disponível do P ao 4XG; confirme o estoque pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/aston-martin-35e775a9.webp",
    "badge": "Fórmula 1",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/aston-martin-35e775a9.webp"
    ]
  },
  {
    "id": "fim-audi-audi-adidas",
    "name": "Camisa Audi x adidas — Edição especial",
    "team": "Audi",
    "category": "Fórmula 1",
    "season": "",
    "description": "Camisa adulta inspirada na equipe Audi, com visual de automobilismo. Disponível do P ao 4XG; confirme o estoque pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/audi-audi-adidas.webp",
    "badge": "Edição especial",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/audi-audi-adidas.webp"
    ]
  },
  {
    "id": "fim-ferrari-129f979f",
    "name": "Camisa Ferrari — Modelo 01",
    "team": "Ferrari",
    "category": "Fórmula 1",
    "season": "",
    "description": "Camisa adulta inspirada na equipe Ferrari, com visual de automobilismo. Disponível do P ao 4XG; confirme o estoque pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/ferrari-129f979f.webp",
    "badge": "Fórmula 1",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/ferrari-129f979f.webp"
    ]
  },
  {
    "id": "fim-brasil-2019-brasil-copa-america-feminina",
    "name": "Camisa Brasil — Copa América Feminina 2019",
    "team": "Brasil",
    "category": "Seleções",
    "season": "2019",
    "description": "Camisa adulta da seleção de Brasil, modelo feminina de 2019. Disponível do P ao 4XG; confirme o estoque pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/brasil-2019-brasil-copa-america-feminina.webp",
    "badge": "Feminina",
    "featured": true,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/brasil-2019-brasil-copa-america-feminina.webp"
    ]
  },
  {
    "id": "fim-brasil-450c7f51",
    "name": "Camisa Brasil — Edição especial vermelha",
    "team": "Brasil",
    "category": "Seleções",
    "season": "",
    "description": "Camisa adulta da seleção de Brasil. Disponível do P ao 4XG; confirme o estoque pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/brasil-450c7f51.webp",
    "badge": "Edição especial",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/brasil-450c7f51.webp"
    ]
  },
  {
    "id": "fim-holanda-2022-holanda-away",
    "name": "Camisa Holanda — Away 2022",
    "team": "Holanda",
    "category": "Seleções",
    "season": "2022",
    "description": "Camisa adulta da seleção de Holanda, modelo away de 2022. Disponível do P ao 4XG; confirme o estoque pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/holanda-2022-holanda-away.webp",
    "badge": "Away",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/holanda-2022-holanda-away.webp"
    ]
  },
  {
    "id": "fim-inglaterra-2022-inglaterra-home",
    "name": "Camisa Inglaterra — Home 2022",
    "team": "Inglaterra",
    "category": "Seleções",
    "season": "2022",
    "description": "Camisa adulta da seleção da Inglaterra, modelo home de 2022. Disponível do P ao 4XG; confirme o estoque pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/inglaterra-2022-inglaterra-home.webp",
    "badge": "Home",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/inglaterra-2022-inglaterra-home.webp"
    ]
  },
  {
    "id": "bos-tatum-city-2526",
    "name": "Boston Celtics Jayson Tatum #0 — City Edition",
    "team": "Boston Celtics",
    "category": "Boston Celtics",
    "season": "2025/26",
    "description": "Modelo inspirado na City Edition 2025/26 do Boston Celtics. A base branca recebe detalhes dourados e pretos, em uma proposta que celebra o padrão de excelência e a história vitoriosa da franquia.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/boston-tatum-city-2025-26.webp",
    "badge": "City Edition",
    "featured": true,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/boston-tatum-city-2025-26.webp"
    ]
  },
  {
    "id": "bos-queta-icon-2324",
    "name": "Boston Celtics Neemias Queta #88 — Icon Edition",
    "team": "Boston Celtics",
    "category": "Boston Celtics",
    "season": "2023/24",
    "description": "Regata verde inspirada na tradicional Icon Edition do Boston Celtics, com o número 88 de Neemias Queta. Um modelo clássico para quem prefere as cores históricas da equipe.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/boston-queta-icon-2023-24.webp",
    "badge": "Icon Edition",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/boston-queta-icon-2023-24.webp",
      "assets/produtos/bos-queta-icon-2324-extra-30a15d19-53ca375836.webp"
    ]
  },
  {
    "id": "cavs-mitchell-city-2526",
    "name": "Cleveland Cavaliers Donovan Mitchell #45 — City Edition",
    "team": "Cleveland Cavaliers",
    "category": "Cleveland Cavaliers",
    "season": "2025/26",
    "description": "Modelo laranja inspirado na City Edition 2025/26 dos Cavaliers, com a inscrição “The Land” e o número 45 de Donovan Mitchell. As cores remetem ao pôr do sol e à paisagem de outono de Cleveland.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/cavaliers-mitchell-city-2025-26.webp",
    "badge": "City Edition",
    "featured": true,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/cavaliers-mitchell-city-2025-26.webp"
    ]
  },
  {
    "id": "cavs-lebron-icon-1718",
    "name": "Cleveland Cavaliers LeBron James #23 — Icon Edition",
    "team": "Cleveland Cavaliers",
    "category": "Cleveland Cavaliers",
    "season": "2017/18",
    "description": "Regata vinho inspirada na Icon Edition 2017/18 dos Cavaliers, com “Cleveland” no peito e o número 23 de LeBron James. Um modelo ligado à segunda passagem do jogador pela equipe.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/cavaliers-lebron-icon-2017-18.webp",
    "badge": "LeBron #23",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/cavaliers-lebron-icon-2017-18.webp"
    ]
  },
  {
    "id": "fim-denver-nuggets-806bb4cb",
    "name": "Regata Denver Nuggets — Modelo 01",
    "team": "Denver Nuggets",
    "category": "NBA",
    "season": "",
    "description": "Regata adulta inspirada na identidade do Denver Nuggets. Modelo de catálogo disponível do P ao 4XG; confirme o estoque pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/denver-nuggets-806bb4cb.webp",
    "badge": "NBA",
    "featured": true,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/denver-nuggets-806bb4cb.webp"
    ]
  },
  {
    "id": "fim-denver-nuggets-80874a04",
    "name": "Regata Denver Nuggets — Modelo 02",
    "team": "Denver Nuggets",
    "category": "NBA",
    "season": "",
    "description": "Regata adulta inspirada na identidade do Denver Nuggets. Modelo de catálogo disponível do P ao 4XG; confirme o estoque pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/denver-nuggets-80874a04.webp",
    "badge": "NBA",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/denver-nuggets-80874a04.webp"
    ]
  },
  {
    "id": "fim-golden-state-warriors-01dcb2c1",
    "name": "Regata Golden State Warriors — Modelo 01",
    "team": "Golden State Warriors",
    "category": "NBA",
    "season": "",
    "description": "Regata adulta inspirada na identidade do Golden State Warriors. Modelo de catálogo disponível do P ao 4XG; confirme o estoque pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/golden-state-warriors-01dcb2c1.webp",
    "badge": "NBA",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/golden-state-warriors-01dcb2c1.webp"
    ]
  },
  {
    "id": "fim-golden-state-warriors-39c9385e",
    "name": "Regata Golden State Warriors — Modelo 02",
    "team": "Golden State Warriors",
    "category": "NBA",
    "season": "",
    "description": "Regata adulta inspirada na identidade do Golden State Warriors. Modelo de catálogo disponível do P ao 4XG; confirme o estoque pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/golden-state-warriors-39c9385e.webp",
    "badge": "NBA",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/golden-state-warriors-39c9385e.webp"
    ]
  },
  {
    "id": "camisa-psg-home-2019-20",
    "name": "Camisa PSG — Home 2019/20",
    "team": "PSG",
    "category": "PSG",
    "season": "2019/20",
    "description": "Camisa PSG no modelo home 2019/20. Produto adulto disponível para pedido pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/psg-2019-20-19-20-psg-paris-home-0eb5063e.webp",
    "images": [
      "assets/produtos/psg-2019-20-19-20-psg-paris-home-0eb5063e.webp"
    ],
    "badge": "Novo",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "readyDelivery": false,
    "audience": "adult",
    "kind": "camisa"
  },
  {
    "id": "ac-milan-2019-20-away-586326c492",
    "name": "Camisa AC Milan — Away 2019/20",
    "team": "AC Milan",
    "category": "AC Milan",
    "season": "2019/20",
    "description": "Camisa adulta do AC Milan, modelo away, referente à temporada 2019/20. Disponível do P ao 4XG.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/ac-milan-2019-20-away-586326c492.webp",
    "badge": "Novo",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/ac-milan-2019-20-away-586326c492.webp"
    ]
  },
  {
    "id": "bayer-04-leverkusen-2023-24-away",
    "name": "Camisa Bayer 04 Leverkusen — Away 2023/24",
    "team": "Bayer 04 Leverkusen",
    "category": "Campeonato Alemão",
    "season": "2023/24",
    "description": "Camisa adulta Away do Bayer 04 Leverkusen na temporada 2023/24, com base branca e grafismo diagonal vermelho e preto.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/bayer-04-leverkusen-2023-24-away.webp",
    "badge": "Away",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/bayer-04-leverkusen-2023-24-away.webp"
    ]
  },
  {
    "id": "bayer-04-leverkusen-2023-24-home",
    "name": "Camisa Bayer 04 Leverkusen — Home 2023/24",
    "team": "Bayer 04 Leverkusen",
    "category": "Campeonato Alemão",
    "season": "2023/24",
    "description": "Camisa adulta Home do Bayer 04 Leverkusen na temporada 2023/24, com base preta e uma grande cruz vermelha no centro.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/bayer-04-leverkusen-2023-24-home.webp",
    "badge": "Home",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/bayer-04-leverkusen-2023-24-home.webp"
    ]
  },
  {
    "id": "inter-miami-2021-22-away-manga-longa-8fcbdd4401",
    "name": "Camisa Inter Miami — Away — Manga longa 2021/22",
    "team": "Inter Miami",
    "category": "Inter Miami",
    "season": "2021/22",
    "description": "Camisa adulta do Inter Miami, modelo away — manga longa, referente à temporada 2021/22. Disponível do P ao 4XG.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/inter-miami-2021-22-away-manga-longa-8fcbdd4401.webp",
    "badge": "Novo",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/inter-miami-2021-22-away-manga-longa-8fcbdd4401.webp"
    ]
  },
  {
    "id": "cat3-benfica-2021-22-reserva-branca-ee7d21f8",
    "name": "Camisa Benfica — Reserva branca 2021/22",
    "team": "Benfica",
    "category": "Campeonato Português",
    "season": "2021/22",
    "description": "Camisa adulta inspirada no modelo reserva branca do Benfica, temporada 2021/22. Peça de catálogo disponível do P ao 4XG. Consulte estoque, prazo de envio e demais detalhes pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/benfica-2021-22-reserva-branca-ee7d21f8.webp",
    "badge": "Reserva",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/benfica-2021-22-reserva-branca-ee7d21f8.webp"
    ]
  },
  {
    "id": "cat3-benfica-2021-22-terceira-camisa-27530eba",
    "name": "Camisa Benfica — Terceira camisa 2021/22",
    "team": "Benfica",
    "category": "Campeonato Português",
    "season": "2021/22",
    "description": "Camisa adulta inspirada no modelo terceira camisa do Benfica, temporada 2021/22. Peça de catálogo disponível do P ao 4XG. Consulte estoque, prazo de envio e demais detalhes pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/benfica-2021-22-terceira-camisa-27530eba.webp",
    "badge": "Terceira",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/benfica-2021-22-terceira-camisa-27530eba.webp"
    ]
  },
  {
    "id": "cat2-boca-juniors-20-21-boca-juniors-4-fora-a2f754b8",
    "name": "Camisa Boca Juniors — 4 Away 2020/21",
    "team": "Boca Juniors",
    "category": "Campeonato Argentino",
    "season": "2020/21",
    "description": "Camisa adulta do Boca Juniors, modelo 4 away, da temporada 2020/21. Disponível nos tamanhos P ao 4XG. Consulte o guia de medidas e finalize o pedido pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/boca-juniors-20-21-boca-juniors-4-fora-a2f754b8.webp",
    "badge": "Camisa adulta",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/boca-juniors-20-21-boca-juniors-4-fora-a2f754b8.webp"
    ]
  },
  {
    "id": "cat2-boca-juniors-21-22-boca-camisa-de-treino-7ea8d860",
    "name": "Camisa Boca Juniors — Treino 2021/22",
    "team": "Boca Juniors",
    "category": "Campeonato Argentino",
    "season": "2021/22",
    "description": "Camisa adulta de treino do Boca Juniors, modelo treino, da temporada 2021/22. Disponível nos tamanhos P ao 4XG. Consulte o guia de medidas e finalize o pedido pelo WhatsApp.",
    "price": 159.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/boca-juniors-21-22-boca-camisa-de-treino-7ea8d860.webp",
    "badge": "Treino",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "torcedor",
    "images": [
      "assets/produtos/boca-juniors-21-22-boca-camisa-de-treino-7ea8d860.webp"
    ]
  },
  {
    "id": "bayern-de-munique-2013-14-manga-longa-retro",
    "name": "Camisa Bayern de Munique — Manga Longa (Retrô) 2013/14",
    "team": "Bayern de Munique",
    "category": "Campeonato Alemão",
    "season": "2013/14",
    "description": "Camisa adulta retrô do Bayern de Munique, inspirada no modelo da temporada 2013/14. Produto de catálogo disponível nos tamanhos P, M, G, GG, XG, 2XG, 3XG e 4XG. Disponibilidade e prazo são confirmados pelo WhatsApp.",
    "price": 179.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/bayern-de-munique-2013-14-manga-longa-retro.webp",
    "badge": "Retrô",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "retro",
    "images": [
      "assets/produtos/bayern-de-munique-2013-14-manga-longa-retro.webp"
    ]
  },
  {
    "id": "bayern-de-munique-2014-15-home-retro",
    "name": "Camisa Bayern de Munique — Home (Retrô) 2014/15",
    "team": "Bayern de Munique",
    "category": "Campeonato Alemão",
    "season": "2014/15",
    "description": "Camisa adulta retrô do Bayern de Munique, inspirada no modelo da temporada 2014/15. Produto de catálogo disponível nos tamanhos P, M, G, GG, XG, 2XG, 3XG e 4XG. Disponibilidade e prazo são confirmados pelo WhatsApp.",
    "price": 179.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/bayern-de-munique-2014-15-home-retro.webp",
    "badge": "Retrô",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "retro",
    "images": [
      "assets/produtos/bayern-de-munique-2014-15-home-retro.webp"
    ]
  },
  {
    "id": "borussia-dortmund-2012-13-retro-home",
    "name": "Camisa Borussia Dortmund — Retrô Home 2012/13",
    "team": "Borussia Dortmund",
    "category": "Campeonato Alemão",
    "season": "2012/13",
    "description": "Camisa adulta retrô do Borussia Dortmund, inspirada no modelo da temporada 2012/13. Produto de catálogo disponível nos tamanhos P, M, G, GG, XG, 2XG, 3XG e 4XG. Disponibilidade e prazo são confirmados pelo WhatsApp.",
    "price": 179.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/borussia-dortmund-2012-13-retro-home.webp",
    "badge": "Retrô",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "retro",
    "images": [
      "assets/produtos/borussia-dortmund-2012-13-retro-home.webp"
    ]
  },
  {
    "id": "al-hilal-2023-24-away-versao-jogador",
    "name": "Camisa Al-Hilal — Away — versão jogador 2023/24",
    "team": "Al-Hilal",
    "category": "Campeonato Saudita",
    "season": "2023/24",
    "description": "Camisa adulta do Al-Hilal, temporada 2023/24, em versão jogador. Produto de catálogo disponível nos tamanhos P, M, G, GG, XG, 2XG, 3XG e 4XG. Disponibilidade e prazo são confirmados pelo WhatsApp.",
    "price": 179.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/al-hilal-2023-24-away-versao-jogador.webp",
    "badge": "Versão jogador",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "jogador",
    "images": [
      "assets/produtos/al-hilal-2023-24-away-versao-jogador.webp",
      "assets/produtos/al-hilal-2023-24-away-versao-jogador-costas-a62b5e1c.webp"
    ]
  },
  {
    "id": "al-hilal-2023-24-home-versao-jogador",
    "name": "Camisa Al-Hilal — Home — versão jogador 2023/24",
    "team": "Al-Hilal",
    "category": "Campeonato Saudita",
    "season": "2023/24",
    "description": "Camisa adulta do Al-Hilal, temporada 2023/24, em versão jogador. Produto de catálogo disponível nos tamanhos P, M, G, GG, XG, 2XG, 3XG e 4XG. Disponibilidade e prazo são confirmados pelo WhatsApp.",
    "price": 179.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/al-hilal-2023-24-home-versao-jogador.webp",
    "badge": "Versão jogador",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "jogador",
    "images": [
      "assets/produtos/al-hilal-2023-24-home-versao-jogador.webp",
      "assets/produtos/al-hilal-2023-24-home-versao-jogador-costas-62736b5a.webp"
    ]
  },
  {
    "id": "al-ittihad-2023-24-home-versao-jogador",
    "name": "Camisa Al-Ittihad — Home Versão jogador 2023/24",
    "team": "Al-Ittihad",
    "category": "Campeonato Saudita",
    "season": "2023/24",
    "description": "Camisa adulta do Al-Ittihad, temporada 2023/24, em versão jogador. Produto de catálogo disponível nos tamanhos P, M, G, GG, XG, 2XG, 3XG e 4XG. Disponibilidade e prazo são confirmados pelo WhatsApp.",
    "price": 179.99,
    "oldPrice": null,
    "priceOnRequest": false,
    "sizes": [
      "P",
      "M",
      "G",
      "GG",
      "XG",
      "2XG",
      "3XG",
      "4XG"
    ],
    "stock": {
      "P": 99,
      "M": 99,
      "G": 99,
      "GG": 99,
      "XG": 99,
      "2XG": 99,
      "3XG": 99,
      "4XG": 99
    },
    "showStock": false,
    "image": "assets/produtos/al-ittihad-2023-24-home-versao-jogador.webp",
    "badge": "Versão jogador",
    "featured": false,
    "active": true,
    "personalization": false,
    "personalizationPrice": 0,
    "sizeGuide": "adult",
    "productType": "jogador",
    "images": [
      "assets/produtos/al-ittihad-2023-24-home-versao-jogador.webp"
    ]
  }
];

const DEFAULT_BANNERS = [
  { id:'b1', title:'Vista o seu time', subtitle:'Camisas adultas de clubes, seleções e basquete.', image:'assets/banner-1.svg', buttonText:'Ver catálogo', link:'#catalogo', active:true, order:1 },
  { id:'b2', title:'Novidades no catálogo', subtitle:'Novos modelos da NBA, Fórmula 1, seleções e Campeonato Sueco.', image:'assets/banner-2.svg', buttonText:'Ver novidades', link:'#novidades', active:true, order:2 },
  { id:'b3', title:'Do P ao 4XG', subtitle:'Consulte o guia de medidas e escolha seu tamanho.', image:'assets/banner-3.svg', buttonText:'Guia de medidas', link:'#guia-medidas', active:true, order:3 }
];

const DEFAULT_SETTINGS = {
  storeName: 'VL Teams',
  logo: 'assets/logo-vl-teams.png',
  whatsapp: '5581900000000', // número fictício para a demonstração
  instagram: 'https://www.instagram.com/vl.teams',
  instagramLabel: '@vl.teams',
  supportHours: 'Segunda a sábado, das 9h às 18h',
  description: 'Camisas esportivas adultas para quem veste a paixão pelo futebol, basquete e automobilismo.',
  footerBackground: '',
  paymentImage: 'assets/payments.svg',
  sizeGuideImage: 'assets/guia-medidas-adulto.webp',
  shippingText: 'Enviamos para todo o Brasil. Frete, prazo e disponibilidade são confirmados pelo WhatsApp.',
  privacyText: 'Seus dados são utilizados somente para atendimento e entrega do pedido.',
  // Acesso de DEMONSTRAÇÃO do painel (login apenas no navegador, sem servidor)
  adminEmail: 'admin@vlteams.com',
  adminPassword: 'demo1234'
};

function vlRead(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.warn('Falha ao ler dados locais:', error);
    return fallback;
  }
}

function vlWrite(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function vlInferProductType(product) {
  if (product?.productType) return product.productType;
  const text = [product?.name, product?.description, product?.badge, product?.category, product?.team]
    .map(value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase())
    .join(' ');
  if (/\bcasacos?\b/.test(text) || /\bmoletom\b/.test(text)) return 'casaco';
  if (/\binfantil\b/.test(text) || /\bkids?\b/.test(text)) return 'infantil';
  if (/\bshorts?\b/.test(text)) return 'outro';
  if (/\bretro\b/.test(text) || text.includes('hardwood classics')) return 'retro';
  if (text.includes('versao jogador') || text.includes('versao de jogador') || text.includes('player version')) return 'jogador';
  return 'torcedor';
}

function vlApplyCatalogPricing(products) {
  return (products || []).map(product => {
    const productType = vlInferProductType(product);
    if (['outro','infantil','casaco'].includes(productType)) {
      return { ...product, productType, price: Number(product.price || 0), priceOnRequest: !Number(product.price || 0) };
    }
    return {
      ...product,
      productType,
      price: productType === 'torcedor' ? 159.99 : 179.99,
      priceOnRequest: false
    };
  });
}

function vlInitialize() {
  if (!localStorage.getItem(VL_KEYS.products)) {
    const legacyProducts = localStorage.getItem(VL_KEYS.legacyProducts)
      ? vlRead(VL_KEYS.legacyProducts, [])
      : [];

    const mergedProducts = new Map(DEFAULT_PRODUCTS.map(product => [product.id, product]));
    legacyProducts.forEach(product => {
      const defaultProduct = mergedProducts.get(product.id) || {};
      mergedProducts.set(product.id, { ...defaultProduct, ...product });
    });

    vlWrite(VL_KEYS.products, vlApplyCatalogPricing([...mergedProducts.values()]));
  }
  if (!localStorage.getItem(VL_KEYS.banners)) vlWrite(VL_KEYS.banners, DEFAULT_BANNERS);

  if (!localStorage.getItem(VL_KEYS.settings)) {
    vlWrite(VL_KEYS.settings, DEFAULT_SETTINGS);
  } else {
    const currentSettings = vlRead(VL_KEYS.settings, DEFAULT_SETTINGS);
    let changed = false;

    if (!currentSettings.logo || currentSettings.logo === 'assets/logo.svg') {
      currentSettings.logo = DEFAULT_SETTINGS.logo;
      changed = true;
    }

    if (!currentSettings.whatsapp || currentSettings.whatsapp === '5581999999999') {
      currentSettings.whatsapp = DEFAULT_SETTINGS.whatsapp;
      changed = true;
    }

    if (changed) vlWrite(VL_KEYS.settings, currentSettings);
  }

  if (!localStorage.getItem(VL_KEYS.orders)) vlWrite(VL_KEYS.orders, []);
  if (!localStorage.getItem(VL_KEYS.cart)) vlWrite(VL_KEYS.cart, []);
}

function vlGetProducts() { return vlRead(VL_KEYS.products, DEFAULT_PRODUCTS); }
function vlSetProducts(value) { vlWrite(VL_KEYS.products, value); }
function vlGetBanners() { return vlRead(VL_KEYS.banners, DEFAULT_BANNERS); }
function vlSetBanners(value) { vlWrite(VL_KEYS.banners, value); }
function vlGetSettings() { return { ...DEFAULT_SETTINGS, ...vlRead(VL_KEYS.settings, DEFAULT_SETTINGS) }; }
function vlSetSettings(value) { vlWrite(VL_KEYS.settings, { ...DEFAULT_SETTINGS, ...value }); }
function vlGetOrders() { return vlRead(VL_KEYS.orders, []); }
function vlSetOrders(value) { vlWrite(VL_KEYS.orders, value); }
function vlGetCart() { return vlRead(VL_KEYS.cart, []); }
function vlSetCart(value) { vlWrite(VL_KEYS.cart, value); }

function vlMoney(value) {
  return Number(value || 0).toLocaleString('pt-BR', { style:'currency', currency:'BRL' });
}

function vlUid(prefix='id') {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2,8)}`;
}

function vlFileToDataURL(file) {
  return new Promise((resolve, reject) => {
    if (!file) return resolve('');
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

vlInitialize();
