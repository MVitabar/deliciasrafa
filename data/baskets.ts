import type { Basket } from "@/types/basket"

// Imágenes de Unsplash de cestas de desayuno
const basketImages = [
  "https://images.unsplash.com/photo-1600335895229-6e75511892c8?q=80", // Cesta elegante
  "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80", // Cesta gourmet
  "https://images.unsplash.com/photo-1513442542250-854d436a73f2?q=80", // Cesta brunch
  "https://images.unsplash.com/photo-1546039907-7fa05f864c02?q=80", // Cesta premium
  "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80", // Cesta especial
  "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80", // Cesta deluxe
  "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80", // Cesta celebración
  "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80", // Cesta romántica
  "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80"  // Cesta executive
]

export const basketsData: Basket[] = [
  {
    id: 1,
    name: "Cesta Café da Manhã Especial",
    shortDescription: "Um café da manhã completo e especial",
    description: "Uma cesta repleta de delícias para um café da manhã inesquecível...",
    price: 149.90,
    image: basketImages[0],
    items: [
      "Pães frescos artesanais",
      "Croissants",
      "Geleias caseiras",
      // ...otros items
    ]
  },
  {
    id: 2,
    name: "Cesta Gourmet Premium",
    shortDescription: "Uma seleção premium de produtos gourmet",
    description: "Produtos selecionados para os paladares mais exigentes...",
    price: 199.90,
    image: basketImages[1],
    items: [
      "Queijos especiais",
      "Vinhos selecionados",
      "Chocolates finos",
      // ...otros items
    ]
  },
  {
    id: 3,
    name: "Cesta Infantil - Guloseimas",
    price: 259.9,
    image: basketImages[2],
    shortDescription: "Cesta especial para crianças com guloseimas e doces.",
    description:
      "Uma cesta especialmente projetada para os pequenos, cheia de guloseimas e doces que farão a alegria de qualquer criança.",
    items: [
      "01 CESTA DE PALHA/VIME",
      "01 BOLO DE CHOCOLATE COM COBERTURA",
      "01 CAIXA COM 6 BRIGADEIROS",
      "04 PÃES DELICIA",
      "04 PÃES MINAS",
      "01 CAIXA DE FONDUE DE BRIGADEIRO (FRUTA + BRIGADEIRO + CONFETTI)",
      "01 BATATA PRINGLES P",
      "01 DORITOS",
      "01 PORÇÃO MINI OREO",
      "01 CAIXA DE BIS",
      "01 POTE DE JUJUBA",
      "01 SUCO DE UVA",
      "01 NESCAU OU SCHWEPPES",
      "01 PORTA RETRATO 10X15 (COM FOTO)",
      "01 VASO DE FLOR",
      "01 CARTÃO E TAGS DECORATIVOS",
      "FITAS DECORATIVAS (COR A ESCOLHER)",
    ],
  },
  {
    id: 4,
    name: "Cesta Zero Lactose",
    price: 279.9,
    image: basketImages[3],
    shortDescription: "Cesta especial sem lactose para pessoas intolerantes.",
    description:
      "Cesta especialmente projetada para pessoas com intolerância à lactose, com produtos deliciosos e livres de lactose.",
    items: [
      "01 CESTA DE PALHA/VIME",
      "02 PAES ARTESANAIS ZERO LACTOSE",
      "01 BOLO ZERO LACTOSE",
      "01 PORÇÃO DE BANANA CHIPS SALGADA",
      "01 POTINHO DE GELÉIA ARTESANAL",
      "04 PÃES DELICIA",
      "02 POLEGUINHO ZERO LACTOSE",
      "01 PORÇÃO DE SEQUILHOS ESPECIAIS",
      "01 FRUTA (KIWI / MAÇÃ OU UVAS)",
      "01 PORÇÃO DE BATATA DOCE OU BANANA",
      "01 SUCO DE UVA",
      "01 ÁGUA DE COCO",
      "02 SACHÊS DE CHÁ",
      "01 IOGURTE ZERO LACTOSE",
      "01 POTE 200G DE GRANOLA TAPIOCANTE",
      "01 PORTA RETRATO 10X15 (COM FOTO)",
      "01 VASO DE FLOR",
      "01 CARTÃO E TAGS DECORATIVOS",
      "FITAS DECORATIVAS (COR A ESCOLHER)",
    ],
  },
  {
    id: 5,
    name: "Cesta Diet",
    price: 269.9,
    image: basketImages[4],
    shortDescription: "Cesta com produtos diet, sem açúcar adicionado.",
    description:
      "Cesta especial com produtos diet, ideal para pessoas que cuidam do consumo de açúcar ou seguem uma dieta específica.",
    items: [
      "01 CESTA DE PALHA/VIME",
      "01 BOLO DIET",
      "02 PÃES FRANÇA (SEM SAL E SEM AÇUCAR)",
      "01 PORÇÃO DE BANANA CHIPS SALGADA",
      "01 POTINHO DE GELEIA ARTESANAL DIET",
      "04 PÃES DELICIA",
      "02 POLEGUINHO 0% AÇUCAR",
      "01 PORÇÃO DE SEQUILHOS SALGADOS",
      "01 FRUTA (KIWI / MAÇÃ OU UVAS)",
      "01 PORÇÃO DE BATATA DOCE OU BANANA",
      "01 SUCO DE UVA",
      "01 ÁGUA DE COCO",
      "02 SACHÊS DE CHÁ",
      "01 IOGURTE 0% AÇUCAR",
      "01 POTE 200G DE GRANOLA TAPIOCANTE",
      "01 PORTA RETRATO 10X15 (COM FOTO)",
      "01 VASO DE FLOR",
      "01 CARTÃO E TAGS DECORATIVOS",
      "FITAS DECORATIVAS (COR A ESCOLHER)",
    ],
  },
  {
    id: 6,
    name: "Cesta Fit",
    price: 259.9,
    image: basketImages[5],
    shortDescription: "Cesta com produtos saudáveis para um estilo de vida fit.",
    description:
      "Cesta projetada para pessoas que mantêm um estilo de vida saudável, com produtos naturais e nutritivos.",
    items: [
      "01 CESTA DE PALHA/VIME",
      "01 ÁGUA DE COCO",
      "04 SANDUÍCHE COM PÃO INTEGRAL E QUEIJO BRANCO",
      "01 PÃO ARTESANAL DE FERMENTAÇÃO NATURAL",
      "01 SALADA DE FRUTAS",
      "03 TIPOS DE FRUTAS (Consultar)",
      "01 BOLO NATURAL",
      "01 PORÇÃO BATATA DOCE OU BANANA DA TERRA",
      "01 POTE 200G GRANOLA TAPIOCANTE",
      "01 PORÇÃO BANANA CHIPS",
      "01 PORÇÃO BEIJU SALGADO",
      "02 POLENGUINHO LIGHT",
      "01 IOGURTE DESNATADO",
      "01 GELÉIA DE MORANGO",
      "01 SUCO DE UVA",
      "02 SACHÊS DE ChÁ",
      "01 PORTA RETRATO 10X15 (COM FOTO)",
      "01 VASO DE FLOR",
      "01 CARTÃO E TAGS DECORATIVOS",
      "FITAS DECORATIVAS (COR A ESCOLHER)",
    ],
  },
  {
    id: 7,
    name: "Cesta Celebração",
    shortDescription: "Perfeita para comemorações",
    description: "Uma cesta especial para momentos de celebração...",
    price: 189.90,
    image: basketImages[6],
    items: [/* ...items... */]
  },
  {
    id: 8,
    name: "Cesta Romântica",
    shortDescription: "Para momentos a dois",
    description: "Uma seleção romântica para surpreender...",
    price: 169.90,
    image: basketImages[7],
    items: [/* ...items... */]
  },
  {
    id: 9,
    name: "Cesta Executive",
    shortDescription: "Elegância e sofisticação",
    description: "A escolha perfeita para presentes corporativos...",
    price: 209.90,
    image: basketImages[8],
    items: [/* ...items... */]
  }
]

