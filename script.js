// ==========================================
// ENTREUDOS PREMIUM — SCRIPT GLOBAL
// ==========================================

// Estado global
const AppState = {
    cartItems: [],
    isDrawerOpen: false,
    isPopupShown: sessionStorage.getItem('popup_shown') === 'true'
};

// ==========================================
// TRUST STRIP ANIMATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const trustContent = document.querySelector('.trust-content');
    if (trustContent) {
        const items = trustContent.querySelectorAll('.trust-item');
        items.forEach(item => {
            const clone = item.cloneNode(true);
            trustContent.appendChild(clone);
        });
    }
});

// ==========================================
// MENÚ MOBILE
// ==========================================

const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
}

if (mobileNavLinks.length > 0) {
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
}

document.addEventListener('click', (e) => {
    const isHeader = e.target.closest('.header');
    if (!isHeader && mobileMenu && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
    }
});

// ==========================================
// HEADER SCROLL EFFECT
// ==========================================

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ==========================================
// NAV ACTIVE STATE
// ==========================================

function setActiveNav() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const href = link.getAttribute('href').split('/').pop() || 'index.html';
        if (href === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

setActiveNav();

// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// ==========================================
// TOAST NOTIFICATIONS
// ==========================================

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <span>${message}</span>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50px)';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}


// ==========================================
// CART DRAWER
// ==========================================

const cartIcon = document.querySelector('.cart-icon');
const cartDrawer = document.querySelector('.cart-drawer');
const cartClose = document.querySelector('.cart-close');
const cartItems = document.querySelector('.cart-items');
const cartCount = document.querySelector('.cart-count');

if (cartIcon) {
    cartIcon.addEventListener('click', () => {
        if (cartDrawer) {
            cartDrawer.classList.toggle('active');
        }
    });
}

if (cartClose) {
    cartClose.addEventListener('click', () => {
        cartDrawer.classList.remove('active');
    });
}

if (cartDrawer) {
    cartDrawer.addEventListener('click', (e) => {
        if (e.target === cartDrawer) {
            cartDrawer.classList.remove('active');
        }
    });
}

function updateCartDisplay() {
    if (!cartItems) return;

    // Actualizar contador
    if (cartCount) {
        const total = AppState.cartItems.reduce((sum, item) => sum + item.qty, 0);
        cartCount.textContent = total;
    }

    if (AppState.cartItems.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: var(--spacing-2xl); color: var(--ink); opacity: 0.6;">Tu carrito está vacío</p>';
        return;
    }

    let total = 0;
    cartItems.innerHTML = AppState.cartItems.map((item, index) => {
        total += item.price * item.qty;
        return `
            <div class="cart-item" data-index="${index}">
                <div class="cart-item-image" style="background: linear-gradient(135deg, var(--beige), var(--bg));">
                    <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--beige); font-size: 12px;">Foto</div>
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">€${(item.price * item.qty).toFixed(2)}</div>
                    <div style="font-size: 12px; color: var(--ink); opacity: 0.6;">Cantidad: ${item.qty}</div>
                </div>
                <button class="cart-item-remove" style="background: none; border: none; color: var(--sage-dark); font-size: 20px; cursor: pointer; padding: 8px; transition: var(--transition-fast);" title="Eliminar">✕</button>
            </div>
        `;
    }).join('');

    // Event delegation para eliminar items
    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const cartItem = btn.closest('.cart-item');
            const index = parseInt(cartItem.getAttribute('data-index'));
            AppState.cartItems.splice(index, 1);
            updateCartDisplay();
        });
    });

    const cartFooter = document.querySelector('.cart-footer');
    if (cartFooter) {
        const cartTotalEl = cartFooter.querySelector('.cart-total');
        if (cartTotalEl) {
            cartTotalEl.innerHTML = `<span>Total</span><span>€${total.toFixed(2)}</span>`;
        }
    }
}

// ==========================================
// SHOPIFY CARRITO
// ==========================================

const ShopifyCart = {
    addItem(productId, variantId, qty = 1, productName = 'Producto', price = 0) {
        AppState.cartItems.push({
            productId,
            variantId,
            qty,
            name: productName,
            price
        });

        if (cartCount) {
            const total = AppState.cartItems.reduce((sum, item) => sum + item.qty, 0);
            cartCount.textContent = total;
        }

        updateCartDisplay();

        if (cartDrawer) {
            cartDrawer.classList.add('active');
        }

        showToast(`${productName} añadido al carrito ✓`, 'success');
    },

    getCount() {
        return AppState.cartItems.reduce((sum, item) => sum + item.qty, 0);
    },

    open() {
        if (cartDrawer) {
            cartDrawer.classList.add('active');
        }
    }
};

// ==========================================
// BOTONES AÑADIR AL CARRITO
// ==========================================

document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const productId = btn.getAttribute('data-product-id') || 'unknown';
        const variantId = btn.getAttribute('data-variant-id') || '0';
        const productName = btn.closest('.product-details')?.querySelector('.product-title-page')?.textContent || 'Producto';
        const priceText = btn.closest('.product-details')?.querySelector('.product-price-page')?.textContent || '0';
        const price = parseFloat(priceText.replace('€', ''));
        const qtyInput = btn.closest('.product-details')?.querySelector('.qty-input');
        const qty = qtyInput ? parseInt(qtyInput.value) : 1;

        ShopifyCart.addItem(productId, variantId, qty, productName, price);
    });
});

// ==========================================
// QUICK ADD (TIENDA)
// ==========================================

// Click en foto para ir a producto
document.querySelectorAll('.product-image').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', (e) => {
        const card = img.closest('.product-card');
        const productId = card?.getAttribute('data-product-id');
        const productUrl = card?.getAttribute('data-product-url') ||
                          card?.querySelector('a')?.getAttribute('href') ||
                          (productId ? `producto.html?id=${productId}` : null);

        if (productUrl) {
            window.location.href = productUrl;
        }
    });
});

// Quick-add button (center button)
document.querySelectorAll('.quick-add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();

        const card = btn.closest('.product-card');
        const productId = card?.getAttribute('data-product-id');
        const productUrl = card?.getAttribute('data-product-url') ||
                          card?.querySelector('a')?.getAttribute('href') ||
                          (productId ? `producto.html?id=${productId}` : null);

        if (productUrl) {
            window.location.href = productUrl;
        }
    });
});

// ==========================================
// GALERÍA DE PRODUCTO
// ==========================================

const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.querySelector('.main-image img');

if (thumbnails.length > 0) {
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            const newSrc = thumb.getAttribute('data-src');

            if (mainImage && newSrc && newSrc !== '#') {
                mainImage.src = newSrc;
            }

            thumbnails.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });
}

// ==========================================
// SELECTOR DE CANTIDAD
// ==========================================

document.querySelectorAll('.qty-selector').forEach(selector => {
    const minusBtn = selector.querySelector('button:first-child');
    const plusBtn = selector.querySelector('button:last-child');
    const qtyInput = selector.querySelector('.qty-input');

    if (minusBtn && plusBtn && qtyInput) {
        minusBtn.addEventListener('click', () => {
            let qty = parseInt(qtyInput.value);
            if (qty > 1) qtyInput.value = qty - 1;
        });

        plusBtn.addEventListener('click', () => {
            let qty = parseInt(qtyInput.value);
            qtyInput.value = qty + 1;
        });
    }
});

// ==========================================
// ACORDEÓN DE CUIDADOS
// ==========================================

document.querySelectorAll('.care-item').forEach(item => {
    const careTitle = item.querySelector('.care-title');
    if (careTitle) {
        careTitle.addEventListener('click', () => {
            // Cerrar otros items
            document.querySelectorAll('.care-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('open');
                }
            });

            // Toggle actual
            item.classList.toggle('open');
        });
    }
});

// Abrir el primer acordeón por defecto
const firstCareItem = document.querySelector('.care-item');
if (firstCareItem) {
    firstCareItem.classList.add('open');
}

// ==========================================
// FILTROS EN TIENDA
// ==========================================

const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover activo de todos
            filterBtns.forEach(b => b.classList.remove('active'));

            // Activar el clickeado
            btn.classList.add('active');

            // Filtrar productos
            const selectedCategory = btn.getAttribute('data-category');
            let visibleCount = 0;

            productCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                    card.style.position = 'relative';
                    card.style.opacity = '1';
                    card.style.pointerEvents = 'auto';
                    visibleCount++;
                } else {
                    card.style.position = 'absolute';
                    card.style.opacity = '0';
                    card.style.pointerEvents = 'none';
                }
            });

            // Actualizar contador
            const counter = document.querySelector('.products-counter');
            if (counter) {
                counter.textContent = `Mostrando ${visibleCount} de ${productCards.length} productos`;
            }
        });
    });
}

// ==========================================
// NAVEGACIÓN A PRODUCTO
// ==========================================

document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
        // No navegar si hace clic en el botón quick-add
        if (e.target.closest('.quick-add-btn')) return;

        const productUrl = card.getAttribute('data-product-url');
        if (productUrl) {
            window.location.href = productUrl;
        }
    });
});

// ==========================================
// ANIMACIONES AL SCROLL
// ==========================================

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';

            // Animar números si es un stat
            if (entry.target.classList.contains('stat-number')) {
                animateNumber(entry.target);
            }

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Animar product cards
document.querySelectorAll('.product-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
    observer.observe(card);
});

// Animar value cards
document.querySelectorAll('.value-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Animar stat numbers
document.querySelectorAll('.stat-number').forEach(stat => {
    stat.style.opacity = '0';
    stat.style.transform = 'translateY(20px)';
    stat.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(stat);
});

// ==========================================
// ANIMAR NÚMEROS
// ==========================================

function animateNumber(element) {
    const target = parseInt(element.textContent);
    if (isNaN(target)) return;

    let current = 0;
    const increment = Math.ceil(target / 30);
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(interval);
        } else {
            element.textContent = current + '+';
        }
    }, 30);
}

// ==========================================
// STICKY ADD TO CART (MOBILE)
// ==========================================

const addToCartBtn = document.querySelector('.add-to-cart-btn');

if (addToCartBtn && window.innerWidth <= 768) {
    window.addEventListener('scroll', () => {
        const rect = addToCartBtn.getBoundingClientRect();
        const stickyBtn = document.querySelector('.add-to-cart-btn.sticky');

        if (rect.bottom < 0 && !stickyBtn) {
            const clonedBtn = addToCartBtn.cloneNode(true);
            clonedBtn.classList.add('sticky');
            document.body.appendChild(clonedBtn);

            clonedBtn.addEventListener('click', () => {
                addToCartBtn.click();
            });
        } else if (rect.bottom > 0 && stickyBtn) {
            stickyBtn.remove();
        }
    });
}

// ==========================================
// FILTROS ACCESORIOS
// ==========================================

const filterButtons = document.querySelectorAll('.filter-btn');
const allProductCards = document.querySelectorAll('.products-grid .product-card[data-category]');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');

        // Update active button
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter products
        allProductCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (category === 'all' || cardCategory === category) {
                card.style.display = '';  // Restaura el display por defecto del CSS
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ==========================================
// INIT
// ==========================================

console.log('✓ EntreNudos Premium — Script cargado');
