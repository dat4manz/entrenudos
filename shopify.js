// ==========================================
// CARRITO SHOPIFY - STUB / PLACEHOLDER
// ==========================================
//
// Este archivo es un stub. Cuando tengas tu tienda Shopify:
// 1. Reemplaza con el SDK oficial de Shopify Buy Button
// 2. Añade tu storeDomain y storefrontAccessToken
// 3. El resto de la web seguirá funcionando igual
//

const ShopifyCart = {
    items: [],
    countElement: document.querySelector('.cart-count'),

    addItem(productId, variantId, qty = 1) {
        console.log(`Producto ${productId} - Variante ${variantId} - Cantidad ${qty} añadido al carrito`);

        // Stub: simplemente loguear en consola
        // TODO: Integrar con Shopify Buy SDK
        this.items.push({ productId, variantId, qty });
        this.updateCount();

        // Feedback visual
        if (this.countElement) {
            this.countElement.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.countElement.style.transform = 'scale(1)';
            }, 200);
        }
    },

    getCount() {
        return this.items.reduce((sum, item) => sum + item.qty, 0);
    },

    updateCount() {
        if (this.countElement) {
            this.countElement.textContent = this.getCount();
        }
    },

    open() {
        console.log('Abrir carrito/checkout');
        // TODO: Abrir drawer del carrito o redirigir a Shopify checkout
    },

    // Método para cuando tengas Shopify Buy SDK
    initShopify(storeDomain, accessToken) {
        console.log('Inicializando Shopify con:', storeDomain);
        // const client = ShopifyBuy.buildClient({
        //     domain: storeDomain,
        //     storefrontAccessToken: accessToken
        // });
        // TODO: Implementar lógica real de Shopify
    }
};

// Inicializar contador
ShopifyCart.updateCount();

// Escuchar cambios en el carrito (para futura integración)
window.addEventListener('shopify-cart-update', (e) => {
    ShopifyCart.updateCount();
});

console.log('✓ Carrito Shopify inicializado (stub)');
