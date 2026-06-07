/**
 * ==========================================================================
 * POCH FOOD - LÓGICA INTERACTIVA EN ESPAÑOL
 * ==========================================================================
 */

// Datos del Menú (Precios en USD $)
const CATALOGO_MENU = [
    // --- SUSHI & ROLLS ---
    {
        id: 'sushi-poch',
        nombre: 'Poch Roll Especial',
        categoria: 'rolls',
        descripcion: 'Delicioso rollo relleno de salmón fresco, aguacate cremoso y queso crema, cubierto con sésamo tostado de la casa.',
        precio: 6.50,
        imagen: 'assets/sushi.png',
        etiqueta: 'El Más Vendido'
    },
    {
        id: 'tokyo-crispy',
        nombre: 'Tokyo Crispy Roll',
        categoria: 'rolls',
        descripcion: 'Crujiente rollo tempurizado relleno de langostinos, queso crema y cebollino, bañado en salsa teriyaki de la casa.',
        precio: 7.00,
        imagen: 'assets/sushi2.png',
        etiqueta: 'Nuevo'
    },
    {
        id: 'avocado-spicy',
        nombre: 'Avocado Spicy Roll',
        categoria: 'rolls',
        descripcion: 'Relleno de atún picante y pepinillo, cubierto con láminas delgadas de aguacate hass y aderezo sriracha mayo.',
        precio: 6.80,
        imagen: 'assets/sushi3.png',
        etiqueta: 'Recomendado'
    },
    
    // --- GYOZAS & ENTRADAS ---
    {
        id: 'gyozas-casa',
        nombre: 'Gyozas de la Casa (5 unidades)',
        categoria: 'gyozas',
        descripcion: 'Empanadillas japonesas artesanales rellenas de cerdo y vegetales seleccionados, cocinadas al vapor y doradas a la plancha. ¡Como la de nuestro logo!',
        precio: 4.50,
        imagen: 'assets/logo.png',
        etiqueta: 'Hecho a Mano'
    },
    {
        id: 'edamame-sake',
        nombre: 'Edamame Flambeado al Sake',
        categoria: 'gyozas',
        descripcion: 'Vainas de edamame cocidas al vapor, salteadas con sal marina gruesa, un toque de sésamo negro y flambeadas al sake.',
        precio: 3.80,
        imagen: 'assets/sushi.png',
        etiqueta: 'Saludable'
    },
    
    // --- POCH BOWLS ---
    {
        id: 'poch-bowl',
        nombre: 'Poch Bowl Salmón',
        categoria: 'bowls',
        descripcion: 'Tazón asiático con base de arroz gohan, dados de salmón premium, aguacate hass, mango dulce, edamame y aderezo especial.',
        precio: 5.50,
        imagen: 'assets/poke.png',
        etiqueta: 'Recomendado'
    },
    {
        id: 'chicken-wok',
        nombre: 'Teriyaki Chicken Bowl',
        categoria: 'bowls',
        descripcion: 'Pechuga de pollo a la plancha glaseada en salsa teriyaki, sobre arroz gohan con sésamo, cebollín y zanahoria salteada.',
        precio: 5.00,
        imagen: 'assets/bento.png',
        etiqueta: 'Clásico'
    },
    
    // --- POSTRES Y BEBIDAS ---
    {
        id: 'taiyaki-helado',
        nombre: 'Taiyaki con Helado',
        categoria: 'postres',
        descripcion: 'Postre tradicional en forma de pez, crujiente por fuera y relleno de helado cremoso de vainilla.',
        precio: 3.50,
        imagen: 'assets/drink.png',
        etiqueta: 'Especialidad'
    },
    {
        id: 'sake-casa',
        nombre: 'Sake Artesanal Poch',
        categoria: 'postres',
        descripcion: 'Delicioso sake artesanal servido frío o caliente, ideal para maridar con tus rolls preferidos (150ml).',
        precio: 4.50,
        imagen: 'assets/drink.png',
        etiqueta: 'Premium'
    },
    {
        id: 'tea-hibiscus',
        nombre: 'Té de Hibisco & Lychee',
        categoria: 'postres',
        descripcion: 'Refrescante infusión de flor de hibisco con extracto de lychee natural, endulzada ligeramente con miel orgánica.',
        precio: 2.50,
        imagen: 'assets/drink.png',
        etiqueta: 'Natural'
    }
];

// Estado de la Aplicación
let carrito = [];

// Elementos del DOM
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

/* ==========================================================================
   1. INICIALIZACIÓN Y RENDERIZADO DEL MENÚ
   ========================================================================== */

function inicializarApp() {
    renderizarMenu('all');
    actualizarConstructor();
    inicializarSlider();
    configurarOyentesEventos();
}

let currentSlideIndex = 0;
let sliderAutoplayInterval;

function inicializarSlider() {
    if (heroSlides.length === 0) return;
    
    // Iniciar timer automático
    iniciarAutoplaySlider();
    
    // Sincronizar color de fondo del contenedor del slider
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

function renderizarMenu(categoriaFiltro) {
    gridMenu.innerHTML = '';
    
    const platosFiltrados = categoriaFiltro === 'all' 
        ? CATALOGO_MENU 
        : CATALOGO_MENU.filter(plato => plato.categoria === categoriaFiltro);
        
    platosFiltrados.forEach(plato => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'menu-card glass-panel';
        
        tarjeta.innerHTML = `
            <div class="menu-card-img-wrapper">
                <img src="${plato.imagen}" alt="${plato.nombre}" class="menu-card-img">
                <span class="menu-card-badge">${plato.etiqueta}</span>
            </div>
            <div class="menu-card-content">
                <h3 class="menu-card-title">${plato.nombre}</h3>
                <p class="menu-card-desc">${plato.descripcion}</p>
                <div class="menu-card-footer">
                    <span class="menu-card-price">$${plato.precio.toFixed(2)}</span>
                    <button class="btn-icon btn-agregar-carrito" data-id="${plato.id}" aria-label="Agregar al carrito">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        
        // Evento agregar al carrito
        tarjeta.querySelector('.btn-agregar-carrito').addEventListener('click', (e) => {
            e.stopPropagation();
            agregarAlCarrito(plato.id);
        });
        
        gridMenu.appendChild(tarjeta);
    });
}

/* ==========================================================================
   2. GESTIÓN DEL CARRITO
   ========================================================================== */

function agregarAlCarrito(idProducto, detallesPersonalizados = null) {
    if (detallesPersonalizados) {
        // Añadir bowl personalizado
        carrito.push({
            id: 'custom-' + Date.now(),
            nombre: detallesPersonalizados.nombre,
            precio: detallesPersonalizados.precio,
            imagen: 'assets/poke.png',
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
                <button class="cart-qty-btn btn-restar-cantidad" data-id="${item.id}">-</button>
                <span class="cart-item-qty">${item.cantidad}</span>
                <button class="cart-qty-btn btn-sumar-cantidad" data-id="${item.id}">+</button>
            </div>
        `;
        
        // Oyentes de cantidad
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

/* ==========================================================================
   3. CONSTRUCTOR INTERACTIVO DE BOWLS (POCH BOWL)
   ========================================================================== */

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

/* ==========================================================================
   4. SIMULADOR DE PEDIDO MOTORIZADO (DARK KITCHEN)
   ========================================================================== */

function iniciarPedidoDomicilio() {
    if (carrito.length === 0) {
        alert('Agrega platos a tu carrito antes de realizar el pedido.');
        return;
    }
    
    cerrarPanelCarrito();
    overlayPedido.classList.add('active');
    
    pasosEstado.forEach(paso => paso.className = 'status-step');
    botonCerrarSimulador.style.display = 'none';
    
    iconoRepartidor.style.transition = 'none';
    iconoRepartidor.style.left = '0';
    
    // Paso 1: Cocinando
    activarPasoSimulador(1);
    textoTiempoEntrega.textContent = 'Tu pedido está siendo preparado por el Chef en nuestra Dark Kitchen...';
    
    // Paso 2: Empacando (3.5 segundos)
    setTimeout(() => {
        activarPasoSimulador(2);
        textoTiempoEntrega.textContent = 'Empacando tu comida en empaques especiales para mantener la temperatura...';
    }, 3500);
    
    // Paso 3: Repartidor en camino (7 segundos)
    setTimeout(() => {
        activarPasoSimulador(3);
        textoTiempoEntrega.textContent = '¡El repartidor motorizado está en camino! Tiempo aproximado de llegada: 15-20 minutos...';
        
        // Iniciar animación del motorizado cruzando la calle
        iconoRepartidor.style.transition = 'left 12s linear';
        iconoRepartidor.style.left = 'calc(100% - 40px)';
    }, 7000);
    
    // Paso 4: Entregado (19 segundos)
    setTimeout(() => {
        activarPasoSimulador(4);
        textoTiempoEntrega.textContent = '¡Tu pedido de Poch Food ha llegado! Retíralo en tu puerta. ¡Buen provecho! 🌸';
        botonCerrarSimulador.style.display = 'inline-block';
        
        // Vaciar carrito tras la entrega exitosa
        carrito = [];
        actualizarInterfazCarrito();
    }, 19000);
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

/* ==========================================================================
   5. OYENTES DE EVENTOS
   ========================================================================== */

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
        });
    });
    
    // Constructor de Bowls (cambio de inputs)
    inputsConstructor.forEach(input => {
        input.addEventListener('change', actualizarConstructor);
    });
    
    // Añadir desde constructor
    botonAgregarConstructor.addEventListener('click', agregarCustomBowlAlCarrito);
    
    // Confirmación de checkout
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
            const fecha = document.getElementById('resDate').value;
            const hora = document.getElementById('resTime').value;
            alert(`¡Reserva confirmada, ${nombre}! Te esperamos el ${fecha} a las ${hora}. ¡Muchas gracias por elegir Poch Food! 🍣`);
            reservationForm.reset();
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
}

// Arrancar la App
document.addEventListener('DOMContentLoaded', inicializarApp);
