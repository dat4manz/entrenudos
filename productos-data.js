// Base de datos de productos
const PRODUCTOS = {
    bea: {
        nombre: "Bolso Bea",
        categoria: "Bolso Artesanal",
        coleccion: "Boho",
        precio: 95,
        description: "El bolso que define lo artesanal. Textura tejida a mano, detalles únicos, perfecto para quién busca autenticidad.",
        folder: "img/Bolso Boho/Bolso Bea",
        images: ["IMG_0627.jpeg", "IMG_0633.jpeg", "IMG_0644.jpeg", "IMG_0653.jpeg", "IMG_0664.jpeg", "IMG_0672.jpeg", "IMG_0680.jpeg", "IMG_0693.jpeg"]
    },
    cami: {
        nombre: "Bolso Cami",
        categoria: "Bolso Artesanal",
        coleccion: "Boho",
        precio: 89,
        description: "Moderno pero con raíces. Estructura versátil, colores tierra, diseño que funciona para cualquier look.",
        folder: "img/Bolso Boho/bolso cami",
        images: ["IMG_0547.jpeg", "IMG_0552.jpeg", "IMG_0553.jpeg", "IMG_0562.jpeg", "IMG_0564.jpeg", "IMG_0574.jpeg", "IMG_0581.jpeg", "IMG_0585.jpeg"]
    },
    amanda: {
        nombre: "Bolso Amanda",
        categoria: "Bolso Chic",
        coleccion: "Chic",
        precio: 105,
        description: "Líneas limpias, proporciones perfectas. Un bolso que comunica refinamiento sin decir palabra.",
        folder: "img/Bolso Chic/Bolso Amanda",
        images: ["IMG_0589.jpeg", "IMG_0601.jpeg", "IMG_0612.jpeg", "IMG_0622.jpeg", "IMG_0697.jpeg", "IMG_0699.jpeg"]
    },
    jess: {
        nombre: "Bolso Jess",
        categoria: "Bolso Chic",
        coleccion: "Chic",
        precio: 98,
        description: "Lo que siempre buscaste. Menos detalles, más impacto. Un bolso que habla de quién lo lleva.",
        folder: "img/Bolso Chic/Bolso Jess",
        images: ["IMG_0711.jpeg", "IMG_0720.jpeg", "IMG_0730.jpeg", "IMG_0745.jpeg", "IMG_0757.jpeg", "IMG_0761.jpeg"]
    },
    llavero_espiral: {
        nombre: "Llavero Espiral",
        categoria: "Llavero",
        coleccion: "Accesorios",
        precio: 18,
        description: "Llavero artesanal con diseño espiral. Perfecto para llevar tus llaves con estilo.",
        folder: "img/Llaveros/llavero espiral",
        images: ["IMG_0958.jpeg", "IMG_0959.jpeg", "IMG_0960.jpeg", "IMG_0961.jpeg", "IMG_0963.jpeg", "IMG_0964.jpeg", "IMG_0965.jpeg"]
    },
    llavero_flecha: {
        nombre: "Llavero Flecha",
        categoria: "Llavero",
        coleccion: "Accesorios",
        precio: 16,
        description: "Diseño moderno con forma de flecha. Accesorio funcional y bonito.",
        folder: "img/Llaveros/llaveros flecha",
        images: ["IMG_0936.jpeg", "IMG_0942.jpeg", "IMG_0945.jpeg", "IMG_0976.jpeg", "IMG_0978.jpeg"]
    },
    llavero_nudo: {
        nombre: "Llavero Nudo",
        categoria: "Llavero",
        coleccion: "Accesorios",
        precio: 14,
        description: "Diseño clásico con nudo tradicional. Lo imprescindible.",
        folder: "img/Llaveros/llaveros nudo plano",
        images: ["IMG_0948.jpeg", "IMG_0949.jpeg", "IMG_0951.jpeg", "IMG_0956.jpeg"]
    },
    pompon: {
        nombre: "Pompón Artesanal",
        categoria: "Pompón",
        coleccion: "Accesorios",
        precio: 22,
        description: "Pompón decorativo hecho a mano. Perfecto para mochilas y bolsos.",
        folder: "img/Pompones",
        images: ["IMG_0981.jpeg", "IMG_0983.jpeg", "IMG_0984.jpeg", "IMG_0985.jpeg", "IMG_0986.jpeg", "IMG_0988.jpeg", "IMG_0989.jpeg", "IMG_0990.jpeg", "IMG_0991.jpeg", "IMG_0992.jpeg"]
    },
    portalabios: {
        nombre: "Portalabios",
        categoria: "Portalabios",
        coleccion: "Accesorios",
        precio: 12,
        description: "Portalabios tejido artesanalmente. Pequeño pero funcional.",
        folder: "img/Portalabiales",
        images: ["IMG_0968.jpeg", "IMG_0969.jpeg", "IMG_0973.jpeg"]
    }
};

// Mapeo de IDs antiguos a nuevos
const ALIASES = {
    'llavero-1': 'llavero_espiral',
    'llavero-2': 'llavero_espiral',
    'llavero-3': 'llavero_espiral',
    'llavero-4': 'llavero_espiral',
    'llavero-5': 'llavero_flecha',
    'llavero-6': 'llavero_flecha',
    'llavero-7': 'llavero_nudo',
    'pompon-1': 'pompon',
    'pompon-2': 'pompon',
    'pompon-3': 'pompon',
    'pompon-4': 'pompon',
    'pompon-5': 'pompon',
    'pompon-6': 'pompon',
    'pompon-7': 'pompon',
    'pompon-8': 'pompon',
    'pompon-9': 'pompon',
    'pompon-10': 'pompon',
    'porta-1': 'portalabios',
    'porta-2': 'portalabios',
    'porta-3': 'portalabios'
};

function getProducto(id) {
    // Resolver alias
    const realId = ALIASES[id] || id;
    return PRODUCTOS[realId] || null;
}
