// Datos de productos
const products = [
    {
        id: 1,
        name: "Caramelo de Fresa Artesanal",
        category: "hard",
        description: "Sabor intenso a fresa natural, elaborado con fruta real",
        price: 12.99,
        originalPrice: 15.99,
        image: "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: "Más Vendido"
    },
    {
        id: 2,
        name: "Gomitas de Ositos Multicolor",
        category: "gummy",
        description: "Suaves gomitas con 5 sabores diferentes",
        price: 9.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: null
    },
    {
        id: 3,
        name: "Caramelo de Menta Sin Azúcar",
        category: "sugarfree",
        description: "Refrescante sabor a menta, perfecto para dietas",
        price: 11.50,
        originalPrice: 13.99,
        image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: "Sin Azúcar"
    },
    {
        id: 4,
        name: "Caramelo de Café con Leche",
        category: "hard",
        description: "Intenso sabor a café arábigo con toques de leche",
        price: 14.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: "Nuevo"
    },
    {
        id: 5,
        name: "Gomitas de Frutas Tropicales",
        category: "gummy",
        description: "Explosión de sabores tropicales: mango, piña y maracuyá",
        price: 10.99,
        originalPrice: 12.99,
        image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: "Oferta"
    },
    {
        id: 6,
        name: "Caramelo de Limón Sin Azúcar",
        category: "sugarfree",
        description: "Acidez perfecta de limón natural, sin azúcares añadidos",
        price: 10.50,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: null
    },
    {
        id: 7,
        name: "Caramelo de Vainilla y Canela",
        category: "hard",
        description: "Combinación clásica de vainilla bourbon y canela de ceilán",
        price: 13.75,
        originalPrice: 16.50,
        image: "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: "Clásico"
    },
    {
        id: 8,
        name: "Gomitas de Sandía Ácida",
        category: "gummy",
        description: "Contraste perfecto entre dulce y ácido, forma de sandía",
        price: 8.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        badge: null
    }
];

// Variables globales
let cart = [];
let currentFilter = 'all';

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    // Cargar productos
    loadProducts();
    
    // Configurar filtros
    setupFilters();
    
    // Configurar contador animado
    setupCounterAnimation();
    
    // Configurar temporizador de oferta
    setupOfferTimer();
    
    // Configurar eventos del carrito
    setupCartEvents();
    
    // Configurar formulario de newsletter
    setupNewsletterForm();
    
    // Configurar menú móvil
    setupMobileMenu();
    
});

// Configurar controles de video del hero
function setupVideoControls() {
    const video = document.querySelector('.hero-video video');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playPauseIcon = document.getElementById('playPauseIcon');
    const muteBtn = document.getElementById('muteBtn');
    const volumeIcon = document.getElementById('volumeIcon');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const videoLoading = document.querySelector('.video-loading');
    
    if (!video) return;
    
    // Ocultar loading cuando el video se carga
    video.addEventListener('loadeddata', () => {
        if (videoLoading) {
            videoLoading.style.opacity = '0';
            setTimeout(() => {
                videoLoading.style.display = 'none';
            }, 300);
        }
    });
    
    // Controlar play/pause
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                playPauseIcon.className = 'fas fa-pause';
            } else {
                video.pause();
                playPauseIcon.className = 'fas fa-play';
            }
        });
    }
    
    // Controlar mute/unmute
    if (muteBtn) {
        muteBtn.addEventListener('click', () => {
            video.muted = !video.muted;
            volumeIcon.className = video.muted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
        });
    }
    
    // Controlar pantalla completa
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                if (video.requestFullscreen) {
                    video.requestFullscreen();
                } else if (video.webkitRequestFullscreen) {
                    video.webkitRequestFullscreen();
                } else if (video.msRequestFullscreen) {
                    video.msRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
        });
    }
    
    // Actualizar ícono cuando el video se pausa automáticamente
    video.addEventListener('pause', () => {
        if (playPauseIcon) {
            playPauseIcon.className = 'fas fa-play';
        }
    });
    
    video.addEventListener('play', () => {
        if (playPauseIcon) {
            playPauseIcon.className = 'fas fa-pause';
        }
    });
}

// Configurar modal de tour virtual
function setupTourModal() {
    const tourBtn = document.getElementById('tourBtn');
    const tourModal = document.getElementById('tourModal');
    const closeTourModal = document.querySelector('.close-tour-modal');
    const bookTourBtn = document.getElementById('bookTourBtn');
    
    if (tourBtn && tourModal) {
        tourBtn.addEventListener('click', () => {
            tourModal.classList.add('active');
            
            // Intentar reproducir el video del tour
            const tourVideo = document.getElementById('tourVideo');
            if (tourVideo) {
                tourVideo.play().catch(e => {
                    console.log('Autoplay bloqueado:', e);
                });
            }
        });
    }
    
    if (closeTourModal) {
        closeTourModal.addEventListener('click', () => {
            tourModal.classList.remove('active');
            
            // Pausar video al cerrar
            const tourVideo = document.getElementById('tourVideo');
            if (tourVideo) {
                tourVideo.pause();
            }
        });
    }
    
    // Cerrar modal al hacer clic fuera
    if (tourModal) {
        tourModal.addEventListener('click', (e) => {
            if (e.target === tourModal) {
                tourModal.classList.remove('active');
                
                // Pausar video al cerrar
                const tourVideo = document.getElementById('tourVideo');
                if (tourVideo) {
                    tourVideo.pause();
                }
            }
        });
    }
    
    // Configurar botón de reserva
    if (bookTourBtn) {
        bookTourBtn.addEventListener('click', () => {
            // Aquí normalmente redirigirías a un formulario de reserva
            window.location.href = '#contacto';
            tourModal.classList.remove('active');
            
            // Pausar video
            const tourVideo = document.getElementById('tourVideo');
            if (tourVideo) {
                tourVideo.pause();
            }
            
            showNotification('Te redirigiremos al formulario de reserva');
        });
    }
}

// Configurar scroll suave
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Optimizar carga de video
function optimizeVideoLoading() {
    const video = document.querySelector('.hero-video video');
    if (!video) return;
    
    // Precargar video
    video.preload = 'auto';
    
    // Usar video de respaldo si el principal falla
    video.addEventListener('error', () => {
        const fallbackSource = video.querySelector('source[fallback]');
        if (fallbackSource) {
            video.src = fallbackSource.src;
            video.load();
        }
    });
    
    // Mostrar loading si el video tarda
    setTimeout(() => {
        const videoLoading = document.querySelector('.video-loading');
        if (videoLoading && video.readyState < 3) {
            videoLoading.style.display = 'block';
        }
    }, 1000);
}

// Cargar productos en la grilla
function loadProducts(filter = 'all') {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) return;
    
    // Filtrar productos
    let filteredProducts = products;
    if (filter !== 'all') {
        filteredProducts = products.filter(product => product.category === filter);
    }
    
    // Limpiar grilla
    productsGrid.innerHTML = '';
    
    // Agregar productos filtrados
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Crear tarjeta de producto
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.category = product.category;
    
    let badgeHTML = '';
    if (product.badge) {
        badgeHTML = `<span class="product-badge">${product.badge}</span>`;
    }
    
    let originalPriceHTML = '';
    if (product.originalPrice) {
        originalPriceHTML = `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>`;
    }
    
    card.innerHTML = `
        ${badgeHTML}
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <span class="product-category">${getCategoryName(product.category)}</span>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">
                <div>
                    <span class="price">$${product.price.toFixed(2)}</span>
                    ${originalPriceHTML}
                </div>
            </div>
            <button class="add-to-cart" data-id="${product.id}">
                <i class="fas fa-cart-plus"></i> Agregar al Carrito
            </button>
        </div>
    `;
    
    // Agregar evento al botón
    const addButton = card.querySelector('.add-to-cart');
    addButton.addEventListener('click', () => addToCart(product.id));
    
    return card;
}

// Obtener nombre legible de categoría
function getCategoryName(categoryKey) {
    const categories = {
        'hard': 'Caramelos Duros',
        'gummy': 'Gomosos',
        'sugarfree': 'Sin Azúcar'
    };
    return categories[categoryKey] || 'Caramelos';
}

// Configurar filtros de productos
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            // Obtener filtro
            currentFilter = this.dataset.filter;
            
            // Cargar productos filtrados
            loadProducts(currentFilter);
        });
    });
}

// Configurar animación de contador
function setupCounterAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.dataset.count);
        const duration = 2000; // 2 segundos
        const step = target / (duration / 16); // 60fps
        
        let current = 0;
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current);
        }, 16);
    });
}

// Configurar temporizador de oferta
function setupOfferTimer() {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    if (!hoursElement || !minutesElement || !secondsElement) return;
    
    // Establecer tiempo inicial (12 horas, 45 minutos, 30 segundos)
    let hours = 12;
    let minutes = 45;
    let seconds = 30;
    
    // Actualizar cada segundo
    const timer = setInterval(() => {
        seconds--;
        
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            
            if (minutes < 0) {
                minutes = 59;
                hours--;
                
                if (hours < 0) {
                    // Oferta terminada
                    clearInterval(timer);
                    document.querySelector('.offer-timer').innerHTML = '<p class="offer-ended">¡Oferta terminada!</p>';
                    return;
                }
            }
        }
        
        // Actualizar elementos
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    }, 1000);
}

// Configurar eventos del carrito
function setupCartEvents() {
    const cartIcon = document.querySelector('.cart-icon');
    const closeModal = document.querySelector('.close-modal');
    const cartModal = document.querySelector('.cart-modal');
    
    if (cartIcon) {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            cartModal.classList.add('active');
            updateCartModal();
        });
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            cartModal.classList.remove('active');
        });
    }
    
    // Cerrar modal al hacer clic fuera
    cartModal.addEventListener('click', function(e) {
        if (e.target === cartModal) {
            cartModal.classList.remove('active');
        }
    });
}

// Agregar producto al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Buscar si el producto ya está en el carrito
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    // Actualizar contador del carrito
    updateCartCount();
    
    // Mostrar notificación
    showNotification(`${product.name} agregado al carrito`);
    
    // Actualizar modal si está abierto
    const cartModal = document.querySelector('.cart-modal');
    if (cartModal.classList.contains('active')) {
        updateCartModal();
    }
}

// Actualizar contador del carrito
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    if (cartCount) {
        cartCount.textContent = totalItems;
        if (totalItems > 0) {
            cartCount.style.display = 'flex';
        } else {
            cartCount.style.display = 'none';
        }
    }
}

// Actualizar modal del carrito
function updateCartModal() {
    const cartModalBody = document.querySelector('.cart-modal-body');
    const cartTotal = document.querySelector('.total-price');
    const cartItemsCount = document.querySelector('.cart-items-count');
    
    if (!cartModalBody || !cartTotal || !cartItemsCount) return;
    
    // Calcular total
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    // Actualizar contador
    cartItemsCount.textContent = `(${totalItems} producto${totalItems !== 1 ? 's' : ''})`;
    
    // Actualizar total
    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    
    // Actualizar contenido
    if (cart.length === 0) {
        cartModalBody.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Tu carrito está vacío</p>
            </div>
        `;
    } else {
        let cartHTML = '<div class="cart-items">';
        
        cart.forEach(item => {
            cartHTML += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
                    </div>
                    <div class="cart-item-actions">
                        <button class="cart-item-remove" data-id="${item.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
        });
        
        cartHTML += '</div>';
        cartModalBody.innerHTML = cartHTML;
        
        // Agregar eventos a los botones de eliminar
        document.querySelectorAll('.cart-item-remove').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.dataset.id);
                removeFromCart(productId);
            });
        });
    }
}

// Eliminar producto del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartModal();
}

// Mostrar notificación
function showNotification(message) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    // Estilos para la notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: var(--success-color);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: var(--shadow);
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 1002;
        animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s;
    `;
    
    // Agregar estilos de animación
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Agregar al documento
    document.body.appendChild(notification);
    
    // Eliminar después de 3 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

// Configurar formulario de newsletter
function setupNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email) {
                // Aquí normalmente enviarías el email a tu servidor
                console.log('Email suscrito:', email);
                
                // Mostrar mensaje de éxito
                showNotification('¡Gracias por suscribirte a nuestro newsletter!');
                
                // Limpiar campo
                emailInput.value = '';
            }
        });
    }
}

// Configurar menú móvil
function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.style.display = mainNav.style.display === 'block' ? 'none' : 'block';
            
            // Ajustar estilos para móvil
            if (mainNav.style.display === 'block') {
                mainNav.style.position = 'absolute';
                mainNav.style.top = '100%';
                mainNav.style.left = '0';
                mainNav.style.width = '100%';
                mainNav.style.backgroundColor = 'white';
                mainNav.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                mainNav.style.padding = '20px';
                
                mainNav.querySelector('ul').style.flexDirection = 'column';
                mainNav.querySelectorAll('li').forEach(li => {
                    li.style.margin = '10px 0';
                });
            }
        });
        
        // Cerrar menú al hacer clic en un enlace
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    mainNav.style.display = 'none';
                }
            });
        });
        
        // Ajustar menú al cambiar tamaño de ventana
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                mainNav.style.display = '';
                mainNav.style.position = '';
                mainNav.style.top = '';
                mainNav.style.left = '';
                mainNav.style.width = '';
                mainNav.style.backgroundColor = '';
                mainNav.style.boxShadow = '';
                mainNav.style.padding = '';
                
                const ul = mainNav.querySelector('ul');
                ul.style.flexDirection = '';
                
                mainNav.querySelectorAll('li').forEach(li => {
                    li.style.margin = '';
                });
            }
        });
    }
}

// Inicializar contador del carrito
updateCartCount();