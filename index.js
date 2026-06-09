/**
 * ==========================================================================
 * POCH FOOD - LÓGICA INTERACTIVA COMPLETA
 * Catálogo completo con todos los productos del menú
 * ==========================================================================
 */

// =========================================================================
// CATÁLOGO DE PRODUCTOS (Precios en USD $)
// =========================================================================
const CATALOGO_MENU = [

    // =====================================================================
    // ENTRADAS & ACOMPAÑANTES
    // =====================================================================
    {
        id: 'corn-dog-simple',
        nombre: 'Corn Dog Simple',
        categoria: 'entradas',
        descripcion: 'Banderilla de salchicha empanizada, crujiente y deliciosa.',
        precio: 1.00,
        imagen: '/assets/bento.png',
        etiqueta: 'Entrada'
    },
    {
        id: 'corn-dog-mixto',
        nombre: 'Corn Dog Mixto',
        categoria: 'entradas',
        descripcion: 'Banderilla de salchicha empanizada con queso fundido por dentro.',
        precio: 1.50,
        imagen: '/assets/bento.png',
        etiqueta: 'Entrada'
    },
    {
        id: 'k-pop-corn',
        nombre: 'K-Pop Corn',
        categoria: 'entradas',
        descripcion: 'Pechuga de pollo troceada y tempura con salsa BBQ o Tonkatsu.',
        precio: 3.50,
        imagen: '/assets/bento.png',
        etiqueta: 'Coreano'
    },

    // =====================================================================
    // MENÚ DE SUSHI — ROLLS
    // =====================================================================
    {
        id: 'tokio-roll',
        nombre: 'Tokio Roll',
        categoria: 'rolls',
        descripcion: 'Rollo tempurizado, kanikama, queso crema, láminas de pepino con topping de camarón tempura, cebollín y salsa de anguila.',
        precio: 7.00,
        imagen: '/assets/sushi.png',
        etiqueta: 'Tempurizado'
    },
    {
        id: 'tropical-roll',
        nombre: 'Tropical Roll',
        categoria: 'rolls',
        descripcion: 'Rollo relleno con kanikama, queso crema con aguacate, cubierto de láminas de maduro frito y salsa fuji.',
        precio: 7.00,
        imagen: '/assets/sushi2.png',
        etiqueta: 'Exótico'
    },
    {
        id: 'tobiko-roll',
        nombre: 'Tobiko Roll',
        categoria: 'rolls',
        descripcion: 'Sashimi de pescado a la plancha, queso crema, aguacate con topping de perlas de tobiko rojo y mayonesa acevichada.',
        precio: 7.00,
        imagen: '/assets/sushi3.png',
        etiqueta: 'Especial'
    },
    {
        id: 'california-roll',
        nombre: 'California Roll',
        categoria: 'rolls',
        descripcion: 'Rollo relleno con kanikama tempurizado, aguacate, queso crema y decorado con topping de sésamo negro.',
        precio: 7.00,
        imagen: '/assets/sushi.png',
        etiqueta: 'Clásico'
    },
    {
        id: 'dragon-roll',
        nombre: 'Dragon Roll',
        categoria: 'rolls',
        descripcion: 'Camarón tempura, queso crema, láminas de pepino con topping de aguacate y salsa sriracha.',
        precio: 7.00,
        imagen: '/assets/sushi2.png',
        etiqueta: 'Spicy'
    },
    {
        id: 'avocado-roll',
        nombre: 'Avocado Roll',
        categoria: 'rolls',
        descripcion: 'Rollo relleno de camarón tempura, aguacate, queso crema, y adornado con finas láminas de aguacate y sésamo como topping.',
        precio: 7.00,
        imagen: '/assets/sushi3.png',
        etiqueta: 'Saludable'
    },
    {
        id: 'fuji-roll',
        nombre: 'Fuji Roll',
        categoria: 'rolls',
        descripcion: 'Camarón tempura, queso crema, aguacate con topping de semillas de sésamo y camarón tempura con salsa fuji y de anguila.',
        precio: 7.00,
        imagen: '/assets/sushi.png',
        etiqueta: 'Recomendado'
    },
    {
        id: 'capy-roll',
        nombre: 'Capy Roll',
        categoria: 'rolls',
        descripcion: 'Rollo tempurizado estilo uramaki relleno con kanikama tempura, aguacate y salmón tempura, acompañado de nuestra salsa.',
        precio: 7.00,
        imagen: '/assets/sushi_blue_tempura.jpg',
        etiqueta: 'Exclusivo'
    },
    {
        id: 'orenyi-roll',
        nombre: 'Orenyi Roll',
        categoria: 'rolls',
        descripcion: 'Camarón tempura, aguacate, kanikama, queso crema con topping de mango y salsa fuji.',
        precio: 7.00,
        imagen: '/assets/sushi3.png',
        etiqueta: 'Frutal'
    },
    {
        id: 'samurai-roll',
        nombre: 'Samurai Roll',
        categoria: 'rolls',
        descripcion: 'Rollo estilo uramaki con atún rojo, queso crema y aguacate. Adornado con topping de tobiko, tempura flakes y spicy mayo.',
        precio: 7.50,
        imagen: '/assets/sushi_especial.jpg',
        etiqueta: 'Premium'
    },

    // =====================================================================
    // PLATOS FUERTES
    // =====================================================================
    {
        id: 'alitas-poch',
        nombre: 'Alitas',
        categoria: 'platos_fuertes',
        descripcion: '5 alitas aderezadas con salsa BBQ, Cheddar o Fuji junto a una porción de papas.',
        precio: 5.00,
        imagen: '/assets/bento.png',
        etiqueta: 'Para Compartir'
    },
    {
        id: 'gyozas-casa',
        nombre: 'Gyozas',
        categoria: 'platos_fuertes',
        descripcion: '5 bocados de gyozas crujientes rellenas de carne premium y bañadas en salsa.',
        precio: 4.00,
        imagen: '/assets/logo.png',
        etiqueta: 'Hecho a Mano'
    },
    {
        id: 'capy-bite',
        nombre: 'Capy-Bite',
        categoria: 'platos_fuertes',
        descripcion: 'Hamburguesa tradicional de pulpa de cerdo tempura bañada en salsa tonkatsu, queso cheddar, tomate, lechuga fresca y salsa golf, junto a una porción de papas spicy.',
        precio: 3.50,
        imagen: '/assets/bento.png',
        etiqueta: 'Hamburguesa'
    },
    {
        id: 'cryspy-bara',
        nombre: 'Cryspy-Bara',
        categoria: 'platos_fuertes',
        descripcion: 'Hamburguesa de pechuga de pollo tempura, cebollas caramelizadas, queso cheddar, salsa de anguila y salsa golf, junto a una porción de papas spicy.',
        precio: 3.50,
        imagen: '/assets/bento.png',
        etiqueta: 'Hamburguesa'
    },
    {
        id: 'nami-burguer',
        nombre: 'Nami-Burguer',
        categoria: 'platos_fuertes',
        descripcion: 'Hamburguesa al estilo nipón, carne de camarón tempura, queso cheddar, lechuga, tomate, bañada en salsa golf y ponzu. Acompañada de una porción de papas spicy.',
        precio: 4.00,
        imagen: '/assets/bento.png',
        etiqueta: 'Premium'
    },

    // =====================================================================
    // RAMEN
    // =====================================================================
    {
        id: 'chicken-ramen',
        nombre: 'Chicken Ramen',
        categoria: 'ramen',
        descripcion: 'Delicioso ramen de pollo tempura, huevo, cebollín, sésamo, maíz dulce y kanikama.',
        precio: 3.50,
        imagen: '/assets/bento.png',
        etiqueta: 'Ramen'
    },
    {
        id: 'beef-ramen',
        nombre: 'Beef Ramen',
        categoria: 'ramen',
        descripcion: 'Delicioso ramen, carne de res a la plancha en su punto, huevo, cebollín, sésamo, maíz dulce y kanikama.',
        precio: 3.50,
        imagen: '/assets/bento.png',
        etiqueta: 'Ramen'
    },
    {
        id: 'tempork-ramen',
        nombre: 'Tempork Ramen',
        categoria: 'ramen',
        descripcion: 'Exquisito ramen tradicional con carne de cerdo tempura, huevo, cebollín, sésamo, maíz dulce y kanikama.',
        precio: 4.00,
        imagen: '/assets/bento.png',
        etiqueta: 'Ramen Especial'
    },
    {
        id: 'nami-ramen',
        nombre: 'Nami Ramen',
        categoria: 'ramen',
        descripcion: 'Exquisito ramen tradicional con camarones tempura, huevo, cebollín, sésamo, maíz dulce y kanikama.',
        precio: 4.00,
        imagen: '/assets/bento.png',
        etiqueta: 'Ramen Especial'
    },

    // =====================================================================
    // BEBIDAS
    // =====================================================================
    {
        id: 'frappe-especial',
        nombre: 'Frappés',
        categoria: 'bebidas',
        descripcion: 'Sabores: Choco-menta, Calabaza horneada con expresso, Coca-Cola con helado.',
        precio: 2.50,
        imagen: '/assets/drink.png',
        etiqueta: 'Refrescante'
    },
    {
        id: 'refresco-personal',
        nombre: 'Refresco Personal',
        categoria: 'bebidas',
        descripcion: 'Bebida gaseosa en presentación personal.',
        precio: 0.75,
        imagen: '/assets/drink.png',
        etiqueta: 'Bebida'
    },
    {
        id: 'refresco-litro',
        nombre: 'Refresco de 1 Litro',
        categoria: 'bebidas',
        descripcion: 'Bebida gaseosa familiar de 1 litro.',
        precio: 1.75,
        imagen: '/assets/drink.png',
        etiqueta: 'Familiar'
    },
    {
        id: 'limonada-neon',
        nombre: 'Neon no Mizu',
        categoria: 'bebidas',
        descripcion: 'Limonada de limón + menta que cambia de color. ¡Experiencia visual única!',
        precio: 2.50,
        imagen: '/assets/drink.png',
        etiqueta: 'Especial'
    },
    {
        id: 'limonada-jengibre',
        nombre: 'Limón con Jengibre',
        categoria: 'bebidas',
        descripcion: 'Limonada natural con infusión refrescante de jengibre.',
        precio: 2.00,
        imagen: '/assets/drink.png',
        etiqueta: 'Natural'
    },
    {
        id: 'te-personal',
        nombre: 'Té Personal',
        categoria: 'bebidas',
        descripcion: 'Refrescante té helado de la casa en presentación personal.',
        precio: 0.75,
        imagen: '/assets/drink.png',
        etiqueta: 'Té'
    },
    {
        id: 'te-litro',
        nombre: 'Té de 1 Litro',
        categoria: 'bebidas',
        descripcion: 'Té helado de la casa en presentación de 1 litro para compartir.',
        precio: 1.75,
        imagen: '/assets/drink.png',
        etiqueta: 'Familiar'
    },

    // =====================================================================
    // POSTRES
    // =====================================================================
    {
        id: 'dorayaki',
        nombre: 'Dorayaki',
        categoria: 'postres',
        descripcion: 'Relleno de nutella, mermelada o dulce de leche. ¡El postre favorito de Doraemon!',
        precio: 1.50,
        imagen: '/assets/drink.png',
        etiqueta: 'Postre Japonés'
    },
    {
        id: 'taiyaki',
        nombre: 'Taiyaki',
        categoria: 'postres',
        descripcion: 'Relleno de nutella, mermelada o dulce de leche. En forma de pez tradicional japonés.',
        precio: 1.50,
        imagen: '/assets/drink.png',
        etiqueta: 'Postre Japonés'
    },
    {
        id: 'capy-crepp',
        nombre: 'Capy-Crepp',
        categoria: 'postres',
        descripcion: 'Crepa rellena de fresa, banana y Nutella, decorada con crema y más Nutella!',
        precio: 2.50,
        imagen: '/assets/drink.png',
        etiqueta: 'Recomendado'
    },

    // =====================================================================
    // COMBINACIONES (COMBOS)
    // =====================================================================
    {
        id: 'combo-capi-roll',
        nombre: 'Combo Capi Roll',
        categoria: 'combos',
        descripcion: '2 rollos de sushi (20 bocados) a elección.',
        precio: 11.00,
        imagen: '/assets/sushi_bento_white.jpg',
        etiqueta: 'Combo'
    },
    {
        id: 'capi-ramen-feast',
        nombre: 'Capi Ramen Feast',
        categoria: 'combos',
        descripcion: '1 ramen + 1 rollo (10 bocados) a elección.',
        precio: 8.50,
        imagen: '/assets/sushi2.png',
        etiqueta: 'Combo'
    },
    {
        id: 'fusion-box',
        nombre: 'Fusion Box',
        categoria: 'combos',
        descripcion: '1 ramen + 1 rollo (10 bocados) a elección + 1 orden de gyozas (5 unidades).',
        precio: 12.00,
        imagen: '/assets/bento_blue_combo.jpg',
        etiqueta: 'Combo Premium'
    },
    {
        id: 'capi-wings',
        nombre: 'Capi Wings',
        categoria: 'combos',
        descripcion: '1 japan burguer a elección + 1 orden de alitas (5 alitas) + 1 gaseosa personal.',
        precio: 7.00,
        imagen: '/assets/bento.png',
        etiqueta: 'Combo'
    },
    {
        id: 'capi-box',
        nombre: 'Capi Box',
        categoria: 'combos',
        descripcion: '1 japan burguer a elección + 2 corn dogs + 1 gaseosa personal.',
        precio: 6.00,
        imagen: '/assets/bento.png',
        etiqueta: 'Combo'
    },
    {
        id: 'capi-ramen-deluxe',
        nombre: 'Capi Ramen Deluxe',
        categoria: 'combos',
        descripcion: '1 ramen a elección + 1 corn dog mixto + 1 orden de gyozas (5 unidades).',
        precio: 7.00,
        imagen: '/assets/bento.png',
        etiqueta: 'Combo'
    },
    {
        id: 'capi-mega',
        nombre: 'Capi Mega',
        categoria: 'combos',
        descripcion: '1 orden de alitas + 1 orden de gyozas + 2 corn dogs + 1 japan burguer + 1 frappé + 2 taiyakis.',
        precio: 16.00,
        imagen: '/assets/sushi.png',
        etiqueta: 'Mega Combo'
    },
    {
        id: 'roll-party',
        nombre: 'Roll Party',
        categoria: 'combos',
        descripcion: '3 rollos a elección (30 bocados). ¡Perfecto para compartir en grupo!',
        precio: 16.00,
        imagen: '/assets/sushi2.png',
        etiqueta: 'Para Compartir'
    },
    {
        id: 'capi-dog',
        nombre: 'Capi Dog',
        categoria: 'combos',
        descripcion: '1 corn dog + 3 dorayakis.',
        precio: 4.50,
        imagen: '/assets/bento.png',
        etiqueta: 'Combo'
    },
    {
        id: 'combi-bara',
        nombre: 'Combi-Bara',
        categoria: 'combos',
        descripcion: '1 orden de gyozas (5 unidades) + 3 dorayakis.',
        precio: 6.00,
        imagen: '/assets/bento.png',
        etiqueta: 'Combo'
    },
    {
        id: 'capi-munch',
        nombre: 'Capi Munch',
        categoria: 'combos',
        descripcion: '1 orden de gyozas (5 unidades) + 1 corn dog.',
        precio: 5.00,
        imagen: '/assets/bento.png',
        etiqueta: 'Combo'
    },
    {
        id: 'deli-bara',
        nombre: 'Deli-Bara',
        categoria: 'combos',
        descripcion: '1 japan-burguer + 1 frappé (incluye porción de papas).',
        precio: 5.00,
        imagen: '/assets/bento.png',
        etiqueta: 'Combo'
    },
    {
        id: 'capi-fest',
        nombre: 'Capi Fest',
        categoria: 'combos',
        descripcion: '1 japan-burguer + 1 orden de alitas (5 alitas) + 1 frappé (incluye porción de papas).',
        precio: 8.50,
        imagen: '/assets/bento.png',
        etiqueta: 'Combo Premium'
    },
    {
        id: 'pochi-set',
        nombre: 'Pochi Set',
        categoria: 'combos',
        descripcion: '1 rollo (10 bocados) a elección + 3 gyozas.',
        precio: 8.50,
        imagen: '/assets/sushi3.png',
        etiqueta: 'Combo'
    },
    {
        id: 'capi-snack',
        nombre: 'Capi Snack',
        categoria: 'combos',
        descripcion: '1 orden de alitas (5 alitas) + 2 corn dogs (incluye porción de papas).',
        precio: 6.50,
        imagen: '/assets/bento.png',
        etiqueta: 'Combo'
    },
];

// =========================================================================
// ESTADO DE LA APLICACIÓN
// =========================================================================
let carrito = [];

// =========================================================================
// ELEMENTOS DEL DOM
// =========================================================================
const gridMenu = document.getElementById('menuGrid');
const botonAbrirCarrito = document.getElementById('cartToggle');
const botonCerrarCarrito = document.getElementById('cartClose');
const overlayCarrito = document.getElementById('cartOverlay');
const contenedorItemsCarrito = document.getElementById('cartItemsContainer');
const precioTotalCarrito = document.getElementById('cartTotalPrice');
const badgeContadorCarrito = document.getElementById('cartCount');
const botonConfirmarPedido = document.getElementById('checkoutBtn');

// Elementos del Constructor de Bowls
const inputsConstructor = document.querySelectorAll('#constructor input');
const precioConstructor = document.getElementById('builderPrice');
const botonAgregarConstructor = document.getElementById('addBuilderToCart');
const listaIngredientesResumen = document.getElementById('summaryList');

// Elementos de Capas en la Vista Previa del Bowl
const capaBase = document.getElementById('previewBase');
const capaProteina = document.getElementById('previewProtein');
const capaToppings = document.getElementById('previewToppings');
const capaSalsa = document.getElementById('previewSauce');

// Elementos del Simulador de Pedido
const overlayPedido = document.getElementById('orderOverlay');
const iconoRepartidor = document.querySelector('.drone-icon');
const pasosEstado = document.querySelectorAll('.status-step');
const textoTiempoEntrega = document.getElementById('orderEtaText');
const botonCerrarSimulador = document.getElementById('closeOrderModal');

// Elementos del Slider y Reservas
const heroSlides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.slider-dots .dot');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');
const reservationForm = document.getElementById('reservationForm');

// Elementos del Menú Lateral Móvil (Drawer)
const mobileDrawer = document.getElementById('mobileDrawer');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileDrawerClose = document.getElementById('mobileDrawerClose');

// =========================================================================
// 1. INICIALIZACIÓN
// =========================================================================

function inicializarApp() {
    renderizarMenu('all');
    actualizarConstructor();
    inicializarSlider();
    configurarOyentesEventos();
    inicializarContadorProductos();
}

/**
 * Muestra la cantidad total de productos disponibles
 */
function inicializarContadorProductos() {
    const contador = document.getElementById('totalProductCount');
    if (contador) {
        contador.textContent = CATALOGO_MENU.length;
    }
}

// =========================================================================
// 2. HERO SLIDER
// =========================================================================
let currentSlideIndex = 0;
let sliderAutoplayInterval;

function inicializarSlider() {
    if (heroSlides.length === 0) return;
    iniciarAutoplaySlider();
    actualizarColorContenedorSlider();
}

function mostrarSlide(index) {
    if (index >= heroSlides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = heroSlides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    heroSlides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    heroSlides[currentSlideIndex].classList.add('active');
    if (dots[currentSlideIndex]) {
        dots[currentSlideIndex].classList.add('active');
    }

    actualizarColorContenedorSlider();
}

function cambiarSlide(direccion) {
    mostrarSlide(currentSlideIndex + direccion);
    reiniciarAutoplaySlider();
}

function irASlide(index) {
    mostrarSlide(index);
    reiniciarAutoplaySlider();
}

function iniciarAutoplaySlider() {
    sliderAutoplayInterval = setInterval(() => {
        mostrarSlide(currentSlideIndex + 1);
    }, 5000);
}

function reiniciarAutoplaySlider() {
    clearInterval(sliderAutoplayInterval);
    iniciarAutoplaySlider();
}

function actualizarColorContenedorSlider() {
    const contenedor = document.querySelector('.hero-slider-container');
    const slideActivo = heroSlides[currentSlideIndex];
    if (contenedor && slideActivo) {
        const bgColor = slideActivo.style.getPropertyValue('--slide-bg');
        if (bgColor) {
            contenedor.style.backgroundColor = bgColor;
        }
    }
}

// =========================================================================
// 3. NAVEGACIÓN POR PESTAÑAS (SPA)
// =========================================================================

function activarPestaña(targetId) {
    const cleanId = targetId.replace('#', '');
    const section = document.getElementById(cleanId);
    if (!section || !section.classList.contains('tab-section')) return false;

    const secciones = document.querySelectorAll('.tab-section');
    secciones.forEach(sec => sec.classList.remove('active-tab'));
    section.classList.add('active-tab');

    // Sincronizar enlaces de navegación de escritorio
    const enlacesNav = document.querySelectorAll('.nav-link');
    enlacesNav.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${cleanId}`) {
            link.classList.add('active');
        }
    });

    // Sincronizar enlaces de navegación móvil (Drawer)
    const enlacesDrawer = document.querySelectorAll('.drawer-link');
    enlacesDrawer.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${cleanId}`) {
            link.classList.add('active');
        }
    });

    // Cerrar el Drawer móvil si está abierto
    if (mobileDrawer) {
        mobileDrawer.classList.remove('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    return true;
}

// =========================================================================
// 4. RENDERIZADO DEL MENÚ
// =========================================================================

function renderizarMenu(categoriaFiltro) {
    gridMenu.innerHTML = '';

    const platosFiltrados = categoriaFiltro === 'all'
        ? CATALOGO_MENU
        : CATALOGO_MENU.filter(plato => plato.categoria === categoriaFiltro);

    if (platosFiltrados.length === 0) {
        gridMenu.innerHTML = `
            <div class="menu-empty-state">
                <i class="fa-solid fa-utensils"></i>
                <p>No hay productos en esta categoría.</p>
            </div>
        `;
        return;
    }

    platosFiltrados.forEach((plato, index) => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'menu-card glass-panel';
        tarjeta.style.animationDelay = `${index * 0.05}s`;

        tarjeta.innerHTML = `
            <div class="menu-card-img-wrapper">
                <img src="${plato.imagen}" alt="${plato.nombre}" class="menu-card-img" loading="lazy">
                <span class="menu-card-badge">${plato.etiqueta}</span>
            </div>
            <div class="menu-card-content">
                <h3 class="menu-card-title">${plato.nombre}</h3>
                <p class="menu-card-desc">${plato.descripcion}</p>
                <div class="menu-card-footer">
                    <span class="menu-card-price">$${plato.precio.toFixed(2)}</span>
                    <button class="btn-icon btn-agregar-carrito" data-id="${plato.id}" aria-label="Agregar ${plato.nombre} al carrito">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        `;

        // Evento agregar al carrito
        tarjeta.querySelector('.btn-agregar-carrito').addEventListener('click', (e) => {
            e.stopPropagation();
            agregarAlCarrito(plato.id);

            // Micro-animación de feedback visual
            const botonAgregar = e.currentTarget;
            botonAgregar.classList.add('added');
            botonAgregar.innerHTML = '<i class="fa-solid fa-check"></i>';
            setTimeout(() => {
                botonAgregar.classList.remove('added');
                botonAgregar.innerHTML = '<i class="fa-solid fa-plus"></i>';
            }, 800);
        });

        gridMenu.appendChild(tarjeta);
    });
}

// =========================================================================
// 5. GESTIÓN DEL CARRITO
// =========================================================================

function agregarAlCarrito(idProducto, detallesPersonalizados = null) {
    if (detallesPersonalizados) {
        // Añadir bowl personalizado o combo especial
        carrito.push({
            id: 'custom-' + Date.now(),
            nombre: detallesPersonalizados.nombre,
            precio: detallesPersonalizados.precio,
            imagen: '/assets/poke.png',
            descripcion: detallesPersonalizados.descripcion,
            cantidad: 1
        });
    } else {
        // Añadir producto estándar
        const itemExistente = carrito.find(item => item.id === idProducto);
        if (itemExistente) {
            itemExistente.cantidad += 1;
        } else {
            const productoBase = CATALOGO_MENU.find(item => item.id === idProducto);
            if (productoBase) {
                carrito.push({
                    id: productoBase.id,
                    nombre: productoBase.nombre,
                    precio: productoBase.precio,
                    imagen: productoBase.imagen,
                    descripcion: productoBase.descripcion,
                    cantidad: 1
                });
            }
        }
    }

    actualizarInterfazCarrito();
    animarBotonCarrito();
    abrirPanelCarrito();
}

function actualizarInterfazCarrito() {
    contenedorItemsCarrito.innerHTML = '';

    if (carrito.length === 0) {
        contenedorItemsCarrito.innerHTML = `
            <div class="cart-empty">
                <i class="fa-solid fa-cookie-bite empty-icon"></i>
                <p>Tu carrito está vacío. ¡Elige algo delicioso!</p>
            </div>
        `;
        precioTotalCarrito.textContent = '0.00';
        badgeContadorCarrito.textContent = '0';
        return;
    }

    let sumaTotal = 0;
    let cantidadTotal = 0;

    carrito.forEach(item => {
        sumaTotal += item.precio * item.cantidad;
        cantidadTotal += item.cantidad;

        const elementoItem = document.createElement('div');
        elementoItem.className = 'cart-item';

        elementoItem.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}" class="cart-item-img">
            <div class="cart-item-details">
                <h4 class="cart-item-name">${item.nombre}</h4>
                <p class="cart-item-price">$${item.precio.toFixed(2)}</p>
            </div>
            <div class="cart-item-ctrl">
                <button class="cart-qty-btn btn-restar-cantidad" data-id="${item.id}" aria-label="Reducir cantidad">-</button>
                <span class="cart-item-qty">${item.cantidad}</span>
                <button class="cart-qty-btn btn-sumar-cantidad" data-id="${item.id}" aria-label="Aumentar cantidad">+</button>
            </div>
        `;

        elementoItem.querySelector('.btn-restar-cantidad').addEventListener('click', () => modificarCantidad(item.id, -1));
        elementoItem.querySelector('.btn-sumar-cantidad').addEventListener('click', () => modificarCantidad(item.id, 1));

        contenedorItemsCarrito.appendChild(elementoItem);
    });

    precioTotalCarrito.textContent = sumaTotal.toFixed(2);
    badgeContadorCarrito.textContent = cantidadTotal;
}

function modificarCantidad(idProducto, cambio) {
    const indice = carrito.findIndex(item => item.id === idProducto);
    if (indice !== -1) {
        carrito[indice].cantidad += cambio;
        if (carrito[indice].cantidad <= 0) {
            carrito.splice(indice, 1);
        }
    }
    actualizarInterfazCarrito();
}

function animarBotonCarrito() {
    botonAbrirCarrito.classList.add('pulse');
    setTimeout(() => {
        botonAbrirCarrito.classList.remove('pulse');
    }, 400);
}

function abrirPanelCarrito() {
    overlayCarrito.classList.add('active');
}

function cerrarPanelCarrito() {
    overlayCarrito.classList.remove('active');
}

// =========================================================================
// 6. CONSTRUCTOR INTERACTIVO DE BOWLS (POCH BOWL)
// =========================================================================

function actualizarConstructor() {
    let precioAcumulado = 0;
    let baseSeleccionada = '';
    let proteinaSeleccionada = '';
    let toppingsSeleccionados = [];
    let salsaSeleccionada = '';

    // 1. Base
    const radioBase = document.querySelector('input[name="base"]:checked');
    if (radioBase) {
        precioAcumulado += parseFloat(radioBase.dataset.price);
        baseSeleccionada = radioBase.value;
        capaBase.className = 'pod-layer layer-base active';
        capaBase.textContent = baseSeleccionada;
    }

    // 2. Proteína
    const radioProteina = document.querySelector('input[name="protein"]:checked');
    if (radioProteina) {
        precioAcumulado += parseFloat(radioProteina.dataset.price);
        proteinaSeleccionada = radioProteina.value;
        capaProteina.className = 'pod-layer layer-protein active';
        capaProteina.textContent = proteinaSeleccionada;
    }

    // 3. Toppings
    const checkboxesToppings = document.querySelectorAll('input[name="toppings"]:checked');
    capaToppings.className = 'pod-layer layer-toppings';
    capaToppings.textContent = '';

    checkboxesToppings.forEach(cb => {
        precioAcumulado += parseFloat(cb.dataset.price);
        toppingsSeleccionados.push(cb.value);
    });

    if (toppingsSeleccionados.length > 0) {
        capaToppings.classList.add('active');
        capaToppings.textContent = toppingsSeleccionados.slice(0, 2).join(' / ');
    }

    // 4. Salsa
    const radioSalsa = document.querySelector('input[name="sauce"]:checked');
    if (radioSalsa) {
        precioAcumulado += parseFloat(radioSalsa.dataset.price);
        salsaSeleccionada = radioSalsa.value;
        capaSalsa.className = 'pod-layer layer-sauce active';
        capaSalsa.textContent = salsaSeleccionada;
    }

    // Actualizar precio en pantalla
    precioConstructor.textContent = precioAcumulado.toFixed(2);

    // Actualizar resumen textual
    listaIngredientesResumen.innerHTML = `
        <li><span>Base:</span> <strong>${baseSeleccionada}</strong></li>
        <li><span>Proteína:</span> <strong>${proteinaSeleccionada}</strong></li>
        <li><span>Toppings:</span> <strong>${toppingsSeleccionados.join(', ') || 'Ninguno'}</strong></li>
        <li><span>Salsa:</span> <strong>${salsaSeleccionada}</strong></li>
    `;

    // Clases activas visuales
    document.querySelectorAll('.option-card').forEach(tarjeta => {
        const input = tarjeta.querySelector('input');
        if (input && input.checked) {
            tarjeta.classList.add('active');
        } else {
            tarjeta.classList.remove('active');
        }
    });
}

function agregarCustomBowlAlCarrito() {
    const precio = parseFloat(precioConstructor.textContent);
    const base = document.querySelector('input[name="base"]:checked').value;
    const proteina = document.querySelector('input[name="protein"]:checked').value;
    const toppingsCB = document.querySelectorAll('input[name="toppings"]:checked');
    const salsa = document.querySelector('input[name="sauce"]:checked').value;

    let toppings = [];
    toppingsCB.forEach(cb => toppings.push(cb.value));

    const descripcion = `Base: ${base}, Proteína: ${proteina}, Toppings: ${toppings.join(', ') || 'sin toppings'}, Salsa: ${salsa}.`;

    agregarAlCarrito(null, {
        nombre: 'Poch Bowl Personalizado',
        precio: precio,
        descripcion: descripcion
    });
}

// =========================================================================
// 7. SIMULADOR DE PEDIDO MOTORIZADO (DARK KITCHEN)
// =========================================================================

function iniciarPedidoDomicilio() {
    if (carrito.length === 0) {
        alert('Agrega platos a tu carrito antes de realizar el pedido.');
        return;
    }

    // Construir mensaje de WhatsApp con detalle del pedido
    let mensaje = '🍣 *NUEVO PEDIDO - POCH FOOD* 🍣\n\n';
    let total = 0;

    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        mensaje += `▸ ${item.cantidad}x *${item.nombre}* — $${subtotal.toFixed(2)}\n`;
    });

    mensaje += `\n💰 *TOTAL: $${total.toFixed(2)}*\n`;
    mensaje += `\n📍 Mi dirección: [Escribe tu dirección aquí]\n`;
    mensaje += `📝 Notas: [Algún detalle adicional]\n`;

    const urlWhatsApp = `https://wa.me/593980454796?text=${encodeURIComponent(mensaje)}`;

    // Abrir la simulación visual
    cerrarPanelCarrito();
    overlayPedido.classList.add('active');

    pasosEstado.forEach(paso => paso.className = 'status-step');
    botonCerrarSimulador.style.display = 'none';

    iconoRepartidor.style.transition = 'none';
    iconoRepartidor.style.left = '0';

    // Paso 1: Cocinando
    activarPasoSimulador(1);
    textoTiempoEntrega.textContent = 'Preparando tu pedido para enviar por WhatsApp...';

    // Paso 2: Abrir WhatsApp (2 segundos)
    setTimeout(() => {
        activarPasoSimulador(2);
        textoTiempoEntrega.textContent = 'Redirigiendo a WhatsApp para confirmar tu pedido...';
    }, 1500);

    // Paso 3: Redirigir (3 segundos)
    setTimeout(() => {
        activarPasoSimulador(3);
        textoTiempoEntrega.textContent = '¡Enviando a WhatsApp!';

        // Iniciar animación del motorizado
        iconoRepartidor.style.transition = 'left 5s linear';
        iconoRepartidor.style.left = 'calc(100% - 40px)';

        // Abrir WhatsApp
        window.open(urlWhatsApp, '_blank');
    }, 3000);

    // Paso 4: Completado (6 segundos)
    setTimeout(() => {
        activarPasoSimulador(4);
        textoTiempoEntrega.textContent = '¡Pedido enviado a WhatsApp! Confirma tu dirección con el equipo de Poch Food. 🍱';
        botonCerrarSimulador.style.display = 'inline-block';

        // Vaciar carrito
        carrito = [];
        actualizarInterfazCarrito();
    }, 7000);
}

function activarPasoSimulador(numeroPaso) {
    for (let i = 0; i < pasosEstado.length; i++) {
        const paso = pasosEstado[i];
        if (i + 1 < numeroPaso) {
            paso.className = 'status-step completed';
        } else if (i + 1 === numeroPaso) {
            paso.className = 'status-step active';
        } else {
            paso.className = 'status-step';
        }
    }
}

// =========================================================================
// 8. OYENTES DE EVENTOS
// =========================================================================

function configurarOyentesEventos() {
    // Carrito abrir/cerrar
    botonAbrirCarrito.addEventListener('click', abrirPanelCarrito);
    botonCerrarCarrito.addEventListener('click', cerrarPanelCarrito);

    // Menú Lateral Móvil (Drawer) abrir/cerrar
    if (mobileMenuToggle && mobileDrawer && mobileDrawerClose) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileDrawer.classList.add('active');
        });

        mobileDrawerClose.addEventListener('click', () => {
            mobileDrawer.classList.remove('active');
        });

        mobileDrawer.addEventListener('click', (e) => {
            if (e.target === mobileDrawer) {
                mobileDrawer.classList.remove('active');
            }
        });
    }

    overlayCarrito.addEventListener('click', (e) => {
        if (e.target === overlayCarrito) cerrarPanelCarrito();
    });

    // Botones de filtro del menú
    const botonesFiltro = document.querySelectorAll('.filter-btn');
    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', () => {
            botonesFiltro.forEach(b => b.classList.remove('active'));
            boton.classList.add('active');
            renderizarMenu(boton.dataset.category);

            // Scroll suave al grid del menú
            const menuGrid = document.getElementById('menuGrid');
            if (menuGrid) {
                menuGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Constructor de Bowls (cambio de inputs)
    inputsConstructor.forEach(input => {
        input.addEventListener('change', actualizarConstructor);
    });

    // Añadir desde constructor
    botonAgregarConstructor.addEventListener('click', agregarCustomBowlAlCarrito);

    // Confirmación de checkout → WhatsApp
    botonConfirmarPedido.addEventListener('click', iniciarPedidoDomicilio);

    // Cerrar simulador
    botonCerrarSimulador.addEventListener('click', () => {
        overlayPedido.classList.remove('active');
    });

    // Controles del Slider Hero
    if (prevArrow && nextArrow) {
        prevArrow.addEventListener('click', () => cambiarSlide(-1));
        nextArrow.addEventListener('click', () => cambiarSlide(1));
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => irASlide(index));
    });

    // Formulario de Reservas
    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('resName').value;
            const telefono = document.getElementById('resPhone').value;
            const fecha = document.getElementById('resDate').value;
            const hora = document.getElementById('resTime').value;
            const personas = document.getElementById('resPeople').value;

            // Enviar reserva por WhatsApp
            let mensajeReserva = `🍣 *RESERVA - POCH FOOD* 🍣\n\n`;
            mensajeReserva += `👤 *Nombre:* ${nombre}\n`;
            mensajeReserva += `📱 *Teléfono:* ${telefono}\n`;
            mensajeReserva += `📅 *Fecha:* ${fecha}\n`;
            mensajeReserva += `⏰ *Hora:* ${hora}\n`;
            mensajeReserva += `👥 *Personas:* ${personas}\n`;

            const urlReserva = `https://wa.me/593980454796?text=${encodeURIComponent(mensajeReserva)}`;
            window.open(urlReserva, '_blank');

            alert(`¡Reserva enviada, ${nombre}! Te esperamos el ${fecha} a las ${hora}. ¡Muchas gracias por elegir Poch Food! 🍣`);
            reservationForm.reset();
        });
    }

    // Botón pedir combo semanal
    const btnComboSemanal = document.getElementById('btnPedirComboSemanal');
    if (btnComboSemanal) {
        btnComboSemanal.addEventListener('click', () => {
            agregarAlCarrito(null, {
                nombre: 'Poch de la Semana (Combo)',
                precio: 12.00,
                descripcion: 'Combo especial: 1 Sushi Roll (10 bocados) + 1 Ramen + 5 Gyozas (Carne Premium).'
            });
        });
    }

    // Lightbox para la carta física
    const catalogLightbox = document.getElementById('catalogLightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');

    if (catalogLightbox && lightboxImage && lightboxClose) {
        document.querySelectorAll('.zoomable-catalog').forEach(card => {
            card.addEventListener('click', () => {
                const imgSrc = card.dataset.image;
                lightboxImage.src = imgSrc;
                catalogLightbox.classList.add('active');
            });
        });

        lightboxClose.addEventListener('click', () => {
            catalogLightbox.classList.remove('active');
        });

        catalogLightbox.addEventListener('click', () => {
            catalogLightbox.classList.remove('active');
        });
    }

    // Captura global de clics en enlaces internos para el SPA de pestañas
    document.addEventListener('click', (e) => {
        const anchor = e.target.closest('a');
        if (anchor) {
            const href = anchor.getAttribute('href');
            if (href && href.startsWith('#')) {
                const exito = activarPestaña(href);
                if (exito) {
                    e.preventDefault();
                }
            }
        }
    });

    // Interacciones con el teclado: Escape para cerrar modales
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            cerrarPanelCarrito();
            if (overlayPedido) overlayPedido.classList.remove('active');
            if (mobileDrawer) mobileDrawer.classList.remove('active');
            const catalogLightbox = document.getElementById('catalogLightbox');
            if (catalogLightbox) catalogLightbox.classList.remove('active');
        }
    });
}

// =========================================================================
// ARRANQUE
// =========================================================================
document.addEventListener('DOMContentLoaded', inicializarApp);
