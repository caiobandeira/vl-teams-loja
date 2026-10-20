(() => {
  const state = {
    products: vlGetProducts(),
    banners: vlGetBanners().filter(b => b.active).sort((a,b) => Number(a.order)-Number(b.order)),
    settings: vlGetSettings(),
    cart: vlGetCart(),
    activeCategory: 'Todos',
    search: '',
    sort: 'featured',
    slide: 0,
    slideTimer: null,
    selectedProduct: null,
    visibleLimit: 36
  };

  const $ = (selector, root=document) => root.querySelector(selector);
  const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
  const cleanPhone = value => String(value || '').replace(/\D/g, '');
  const formatBrazilianPhone = value => {
    let digits = cleanPhone(value);
    if (digits.startsWith('55') && digits.length >= 12) digits = digits.slice(2);
    if (digits.length === 11) return `(${digits.slice(0,2)}) ${digits.slice(2,7)}-${digits.slice(7)}`;
    if (digits.length === 10) return `(${digits.slice(0,2)}) ${digits.slice(2,6)}-${digits.slice(6)}`;
    return value || '';
  };
  const escapeHTML = value => String(value ?? '').replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
  const itemUnitTotal = item => Number(item.unitPrice) + Number(item.personalizationPrice || 0);
  const cartTotal = () => state.cart.reduce((sum,item) => sum + itemUnitTotal(item) * Number(item.qty), 0);
  const cartHasPendingPrice = () => state.cart.some(item => item.priceOnRequest);
  const productPriceText = product => product.priceOnRequest ? 'Preço sob consulta' : vlMoney(product.price);
  const itemPriceText = item => item.priceOnRequest ? 'A confirmar' : vlMoney(itemUnitTotal(item));
  const productImages = product => {
    const values = Array.isArray(product.images) ? product.images : [product.image];
    return [...new Set(values.filter(Boolean))];
  };
  const mainProductImage = product => productImages(product)[0] || 'assets/product-1.svg';

  function toast(message) {
    const el = $('#toast');
    el.textContent = message;
    el.classList.add('show');
    clearTimeout(el._timer);
    el._timer = setTimeout(() => el.classList.remove('show'), 2400);
  }

  function syncCart() {
    vlSetCart(state.cart);
    renderCart();
  }

  function applySettings() {
    const s = state.settings;
    $('#siteLogo').src = s.logo || 'assets/logo-vl-teams.png';
    $('#footerLogo').src = s.logo || 'assets/logo-vl-teams.png';
    $('#footerDescription').textContent = s.description;
    $('#footerHours').textContent = s.supportHours;
    $('#footerShipping').textContent = s.shippingText;
    $('#footerPrivacy').textContent = s.privacyText;
    $('#paymentImage').src = s.paymentImage || 'assets/payments.svg';
    $('#sizeGuideImage').src = s.sizeGuideImage || 'assets/guia-medidas-adulto.webp';
    $('#sizeGuideModalImage').src = s.sizeGuideImage || 'assets/guia-medidas-adulto.webp';
    $('#footerInstagram').href = s.instagram;
    $('#footerInstagram').textContent = s.instagramLabel || '@vl.teams';
    const waUrl = `https://wa.me/${cleanPhone(s.whatsapp)}?text=${encodeURIComponent('Olá! Vim pelo site da VL Teams e gostaria de atendimento.')}`;
    $('#headerWhatsapp').href = waUrl;
    $('#footerWhatsapp').href = waUrl;
    $('#footerWhatsapp').textContent = `WhatsApp: ${formatBrazilianPhone(s.whatsapp)}`;
    const footer = $('.footer');
    footer.style.backgroundImage = s.footerBackground ? `url("${s.footerBackground}")` : '';
    document.title = `${s.storeName || 'VL Teams'} | Camisas Esportivas`;
  }

  function renderHero() {
    const track = $('#heroTrack');
    const dots = $('#heroDots');
    const banners = state.banners.length ? state.banners : DEFAULT_BANNERS;
    track.innerHTML = banners.map(b => `
      <a class="hero-slide" href="${escapeHTML(b.link || '#catalogo')}">
        <img src="${escapeHTML(b.image)}" alt="${escapeHTML(b.title)}">
      </a>`).join('');
    dots.innerHTML = banners.map((_,i) => `<button class="hero-dot ${i===0?'active':''}" data-slide="${i}" aria-label="Banner ${i+1}"></button>`).join('');
    state.slide = 0;
    moveHero(0);
    $$('.hero-dot').forEach(dot => dot.addEventListener('click', () => {
      moveHero(Number(dot.dataset.slide));
      restartSlider();
    }));
    restartSlider();
  }

  function moveHero(index) {
    const count = Math.max(state.banners.length, 1);
    state.slide = (index + count) % count;
    $('#heroTrack').style.transform = `translateX(-${state.slide * 100}%)`;
    $$('.hero-dot').forEach((d,i) => d.classList.toggle('active', i === state.slide));
  }

  function restartSlider() {
    clearInterval(state.slideTimer);
    if (state.banners.length > 1) state.slideTimer = setInterval(() => moveHero(state.slide + 1), 5500);
  }

  function categories() {
    return ['Todos', ...new Set(state.products.filter(p => p.active).map(p => p.category).filter(Boolean))];
  }

  function renderFilters() {
    $('#categoryFilters').innerHTML = categories().map(category => `
      <button class="filter-chip ${state.activeCategory===category?'active':''}" data-category="${escapeHTML(category)}">${escapeHTML(category)}</button>
    `).join('');
    $$('.filter-chip').forEach(button => button.addEventListener('click', () => {
      state.activeCategory = button.dataset.category;
      state.visibleLimit = 36;
      renderFilters();
      renderProducts();
    }));
  }

  function filteredProducts() {
    let list = state.products.filter(p => p.active);
    if (state.activeCategory !== 'Todos') list = list.filter(p => p.category === state.activeCategory);
    if (state.search) {
      const term = state.search.toLowerCase();
      list = list.filter(p => [p.name,p.team,p.category,p.badge,p.season,p.description].some(v => String(v||'').toLowerCase().includes(term)));
    }
    if (state.sort === 'price-asc') list.sort((a,b) => Number(a.price)-Number(b.price));
    else if (state.sort === 'price-desc') list.sort((a,b) => Number(b.price)-Number(a.price));
    else if (state.sort === 'name') list.sort((a,b) => a.name.localeCompare(b.name,'pt-BR'));
    else list.sort((a,b) => Number(Boolean(b.featured))-Number(Boolean(a.featured)));
    return list;
  }

  function productCard(product) {
    const sizes = (product.sizes || []).filter(size => product.showStock === false || Number(product.stock?.[size] ?? 1) > 0);
    return `<article class="product-card">
      <div class="product-image-wrap">
        <img class="product-image" src="${escapeHTML(mainProductImage(product))}" alt="${escapeHTML(product.name)}" loading="lazy">
        ${product.badge ? `<span class="badge product-badge">${escapeHTML(product.badge)}</span>` : ''}
      </div>
      <div class="product-info">
        <div class="product-category">${escapeHTML(product.team || product.category || 'NBA')}${product.season ? ` · ${escapeHTML(product.season)}` : ''}</div>
        <div class="product-name">${escapeHTML(product.name)}</div>
        <div class="price-row"><span class="price">${escapeHTML(productPriceText(product))}</span>${!product.priceOnRequest && product.oldPrice ? `<span class="old-price">${vlMoney(product.oldPrice)}</span>`:''}</div>
        <div class="size-list">${sizes.length ? sizes.map(s => `<span class="size-pill">${escapeHTML(s)}</span>`).join('') : '<span class="muted">Esgotado</span>'}</div>
        <div class="product-actions">
          <button class="btn btn-dark" data-product="${escapeHTML(product.id)}" ${sizes.length?'':'disabled'}>${sizes.length?'Escolher tamanho':'Esgotado'}</button>
          <button class="icon-btn" data-product="${escapeHTML(product.id)}" aria-label="Ver produto">＋</button>
        </div>
      </div>
    </article>`;
  }

  function renderProducts() {
    const list = filteredProducts();
    const visible = list.slice(0, state.visibleLimit);
    $('#productGrid').innerHTML = visible.map(productCard).join('');
    $('#productEmpty').hidden = list.length > 0;
    $('#productCount').textContent = list.length ? `Exibindo ${visible.length} de ${list.length} produtos` : '';
    $('#loadMoreProducts').hidden = visible.length >= list.length;
    bindProductButtons($('#productGrid'));
    const featured = state.products.filter(p => p.active && p.featured).slice(0,4);
    $('#featuredGrid').innerHTML = featured.map(productCard).join('');
    bindProductButtons($('#featuredGrid'));
  }

  function bindProductButtons(root) {
    $$('[data-product]', root).forEach(btn => btn.addEventListener('click', () => openProduct(btn.dataset.product)));
  }

  function openProduct(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;
    state.selectedProduct = product;
    const availableSizes = (product.sizes || []).filter(size => product.showStock === false || Number(product.stock?.[size] ?? 1) > 0);
    $('#productModalTitle').textContent = product.name;
    $('#productModalBody').innerHTML = `
      <div style="display:grid;grid-template-columns:minmax(220px,340px) 1fr;gap:24px" class="product-modal-grid">
        <div class="product-gallery">
          <img id="productMainImage" class="product-gallery-main" src="${escapeHTML(mainProductImage(product))}" alt="${escapeHTML(product.name)}">
          ${productImages(product).length > 1 ? `<div class="product-gallery-thumbs">${productImages(product).map((img,index)=>`<button type="button" class="product-gallery-thumb ${index===0?'active':''}" data-gallery-image="${escapeHTML(img)}"><img src="${escapeHTML(img)}" alt="Foto ${index+1} de ${escapeHTML(product.name)}"></button>`).join('')}</div>` : ''}
        </div>
        <div>
          ${product.badge ? `<span class="badge">${escapeHTML(product.badge)}</span>`:''}
          <p class="muted" style="margin:12px 0 5px">${escapeHTML(product.team || product.category)}${product.season ? ` · ${escapeHTML(product.season)}` : ''}</p>
          <p class="muted" style="margin:0 0 8px"><strong>Versão:</strong> ${escapeHTML(productTypeLabel(product.productType || 'torcedor'))}</p>
          <div class="price-row"><span class="price" style="font-size:1.5rem">${escapeHTML(productPriceText(product))}</span>${!product.priceOnRequest && product.oldPrice?`<span class="old-price">${vlMoney(product.oldPrice)}</span>`:''}</div>
          ${product.description ? `<p class="product-description">${escapeHTML(product.description)}</p>` : ''}
          <div class="form-group" style="margin-top:18px"><label>Tamanho *</label><select id="modalSize"><option value="">Selecione</option>${availableSizes.map(s=>`<option value="${escapeHTML(s)}">${escapeHTML(s)}${product.showStock === false ? '' : ` — ${Number(product.stock?.[s] ?? 0)} disponível(is)`}</option>`).join('')}</select></div>
          <div class="form-group" style="margin-top:12px"><label>Quantidade *</label><input class="input" id="modalQty" type="number" min="1" max="10" value="1"></div>
          ${product.personalization ? `<div style="margin-top:14px"><label style="display:flex;gap:8px;align-items:center;font-weight:800"><input type="checkbox" id="modalPersonalize"> Adicionar nome e número (+${vlMoney(product.personalizationPrice)})</label><div id="personalizationFields" hidden style="margin-top:12px;display:grid;grid-template-columns:1fr 100px;gap:10px"><input class="input" id="modalName" maxlength="18" placeholder="Nome"><input class="input" id="modalNumber" maxlength="2" inputmode="numeric" placeholder="Nº"></div></div>`:''}
          ${product.sizeGuide === 'adult' ? `<details class="product-size-guide" style="margin-top:14px">
            <summary>Ver guia de medidas adulto</summary>
            <img src="${escapeHTML(state.settings.sizeGuideImage || 'assets/guia-medidas-adulto.webp')}" alt="Guia de medidas adulto" loading="lazy">
          </details>` : `<div class="notice" style="margin-top:14px">O tamanho deste item será confirmado pelo WhatsApp.</div>`}
          ${product.priceOnRequest ? '<div class="notice" style="margin-top:16px">O valor será confirmado no atendimento pelo WhatsApp.</div>' : ''}
          <button class="btn btn-primary btn-block" id="modalAdd" style="margin-top:20px">Adicionar ao carrinho</button>
        </div>
      </div>`;
    $$('[data-gallery-image]', $('#productModalBody')).forEach(button => button.addEventListener('click', () => {
      $('#productMainImage').src = button.dataset.galleryImage;
      $$('.product-gallery-thumb', $('#productModalBody')).forEach(item => item.classList.toggle('active', item === button));
    }));
    if (product.personalization) {
      $('#modalPersonalize').addEventListener('change', e => {
        const fields = $('#personalizationFields');
        fields.hidden = !e.target.checked;
        fields.style.display = e.target.checked ? 'grid' : 'none';
      });
    }
    $('#modalAdd').addEventListener('click', addSelectedProduct);
    openModal('product');
  }

  function addSelectedProduct() {
    const product = state.selectedProduct;
    const size = $('#modalSize').value;
    const qty = Math.max(1, Number($('#modalQty').value || 1));
    if (!size) return toast('Selecione um tamanho.');
    const stock = product.showStock === false ? 99 : Number(product.stock?.[size] ?? 0);
    if (qty > stock) return toast(`Há somente ${stock} unidade(s) desse tamanho.`);
    let personalization = '';
    let personalizationPrice = 0;
    if (product.personalization && $('#modalPersonalize')?.checked) {
      const name = $('#modalName').value.trim();
      const number = $('#modalNumber').value.trim();
      if (!name || !number) return toast('Informe o nome e o número da personalização.');
      personalization = `${name.toUpperCase()} ${number}`;
      personalizationPrice = Number(product.personalizationPrice || 0);
    }
    const key = `${product.id}|${size}|${personalization}`;
    const existing = state.cart.find(item => item.key === key);
    if (existing) {
      if (existing.qty + qty > stock) return toast(`O carrinho ultrapassa o estoque de ${stock} unidade(s).`);
      existing.qty += qty;
    } else {
      state.cart.push({
        key,
        productId: product.id,
        name: product.name,
        image: mainProductImage(product),
        size,
        qty,
        unitPrice: Number(product.price),
        priceOnRequest: Boolean(product.priceOnRequest),
        productType: product.productType || 'torcedor',
        personalization,
        personalizationPrice
      });
    }
    syncCart();
    closeModal('product');
    openCart();
    toast('Produto adicionado ao carrinho.');
  }

  function renderCart() {
    const count = state.cart.reduce((sum,item) => sum + Number(item.qty), 0);
    $('#cartCount').textContent = count;
    $('#cartSubtotal').textContent = cartHasPendingPrice() ? 'A confirmar' : vlMoney(cartTotal());
    $('#checkoutButton').disabled = state.cart.length === 0;
    $('#cartItems').innerHTML = state.cart.length ? state.cart.map((item,index) => `
      <div class="cart-item">
        <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.name)}">
        <div><h4>${escapeHTML(item.name)}</h4><p>Tamanho: ${escapeHTML(item.size)}</p><p>Versão: ${escapeHTML(productTypeLabel(item.productType || 'torcedor'))}</p>${item.personalization?`<p>Personalização: ${escapeHTML(item.personalization)}</p>`:''}<strong>${escapeHTML(itemPriceText(item))}</strong><div class="qty-controls"><button class="qty-btn" data-cart-action="minus" data-index="${index}">−</button><span>${item.qty}</span><button class="qty-btn" data-cart-action="plus" data-index="${index}">＋</button></div></div>
        <button class="icon-btn" data-cart-action="remove" data-index="${index}" aria-label="Remover">🗑</button>
      </div>`).join('') : '<div class="empty-state"><div style="font-size:2rem">🛒</div><h3>Seu carrinho está vazio</h3><p>Escolha uma camisa para começar.</p></div>';
    $$('[data-cart-action]').forEach(btn => btn.addEventListener('click', () => updateCart(btn.dataset.cartAction, Number(btn.dataset.index))));
  }

  function updateCart(action,index) {
    const item = state.cart[index];
    if (!item) return;
    if (action === 'remove') state.cart.splice(index,1);
    if (action === 'minus') {
      item.qty -= 1;
      if (item.qty <= 0) state.cart.splice(index,1);
    }
    if (action === 'plus') {
      const product = state.products.find(p => p.id === item.productId);
      const stock = product?.showStock === false ? 99 : Number(product?.stock?.[item.size] ?? 99);
      if (item.qty >= stock) return toast(`Limite de ${stock} unidade(s) para esse tamanho.`);
      item.qty += 1;
    }
    syncCart();
  }

  function openCart() {
    $('#cartDrawer').classList.add('open');
    $('#drawerBackdrop').classList.add('open');
    document.body.classList.add('modal-open');
  }
  function closeCart() {
    $('#cartDrawer').classList.remove('open');
    $('#drawerBackdrop').classList.remove('open');
    document.body.classList.remove('modal-open');
  }
  function openModal(type) {
    $(`#${type}Modal`).classList.add('open');
    $(`#${type}Backdrop`).classList.add('open');
    document.body.classList.add('modal-open');
  }
  function closeModal(type) {
    $(`#${type}Modal`).classList.remove('open');
    $(`#${type}Backdrop`).classList.remove('open');
    document.body.classList.remove('modal-open');
  }

  function renderCheckoutSummary() {
    $('#checkoutSummary').innerHTML = `
      ${state.cart.map(item => `<div class="summary-line"><span>${item.qty}x ${escapeHTML(item.name)} — ${escapeHTML(item.size)}${item.personalization?` (${escapeHTML(item.personalization)})`:''}</span><strong>${item.priceOnRequest ? 'A confirmar' : vlMoney(itemUnitTotal(item)*item.qty)}</strong></div>`).join('')}
      <div class="summary-line summary-total"><span>Total dos produtos</span><strong>${cartHasPendingPrice() ? 'A confirmar no WhatsApp' : vlMoney(cartTotal())}</strong></div>
      <div class="summary-line"><span>Frete</span><strong>A combinar</strong></div>`;
  }

  function openCheckout() {
    if (!state.cart.length) return toast('Adicione pelo menos um produto.');
    closeCart();
    renderCheckoutSummary();
    openModal('checkout');
  }

  async function lookupCep() {
    const input = $('#zipCode');
    const cep = input.value.replace(/\D/g,'');
    if (!cep) return;
    if (cep.length !== 8) {
      $('#cepStatus').textContent = 'Digite um CEP com 8 números.';
      return;
    }
    $('#cepStatus').textContent = 'Buscando endereço...';
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) throw new Error('Falha na consulta');
      const data = await response.json();
      if (data.erro) throw new Error('CEP não encontrado');
      $('#street').value = data.logradouro || '';
      $('#district').value = data.bairro || '';
      $('#city').value = data.localidade || '';
      $('#state').value = data.uf || '';
      $('#cepStatus').textContent = 'Endereço preenchido. Confira antes de enviar.';
      $('#number').focus();
    } catch (error) {
      $('#cepStatus').textContent = 'Não foi possível localizar o CEP. Preencha o endereço manualmente.';
    }
  }

  function formatCep(value) {
    const digits = value.replace(/\D/g,'').slice(0,8);
    return digits.length > 5 ? `${digits.slice(0,5)}-${digits.slice(5)}` : digits;
  }

  function formatCpf(value) {
    const digits = String(value || '').replace(/\D/g,'').slice(0,11);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0,3)}.${digits.slice(3)}`;
    if (digits.length <= 9) return `${digits.slice(0,3)}.${digits.slice(3,6)}.${digits.slice(6)}`;
    return `${digits.slice(0,3)}.${digits.slice(3,6)}.${digits.slice(6,9)}-${digits.slice(9)}`;
  }

  function cpfHasElevenDigits(value) {
    return String(value || '').replace(/\D/g,'').length === 11;
  }

  function productTypeLabel(type) {
    return ({ torcedor:'Torcedor', jogador:'Jogador', retro:'Retrô', infantil:'Infantil', casaco:'Casaco', outro:'Outro produto' })[type] || 'Torcedor';
  }

  function buildWhatsAppMessage(order) {
    const lines = [
      `Olá! Gostaria de finalizar meu pedido na ${state.settings.storeName}.`,
      '',
      `PEDIDO ${order.number}`,
      ''
    ];
    order.items.forEach((item,index) => {
      lines.push(`${index+1}. ${item.qty}x ${item.name}`);
      lines.push(`Tamanho: ${item.size}`);
      if (item.productType) lines.push(`Tipo: ${productTypeLabel(item.productType)}`);
      if (item.personalization) lines.push(`Personalização: ${item.personalization}`);
      lines.push(`Valor: ${item.priceOnRequest ? 'a confirmar' : vlMoney(itemUnitTotal(item)*item.qty)}`);
      lines.push('');
    });
    lines.push(`TOTAL DOS PRODUTOS: ${order.pricePending ? 'A CONFIRMAR' : vlMoney(order.total)}`);
    lines.push('Frete: a combinar');
    lines.push('');
    lines.push('DADOS DO CLIENTE');
    lines.push(`Nome: ${order.customer.name}`);
    lines.push(`Telefone/WhatsApp: ${order.customer.phone}`);
    lines.push(`CPF: ${order.customer.cpf}`);
    if (order.customer.email) lines.push(`E-mail: ${order.customer.email}`);
    lines.push('');
    lines.push('ENDEREÇO DE ENTREGA');
    lines.push(`CEP: ${order.address.zip}`);
    lines.push(`Rua: ${order.address.street}`);
    lines.push(`Número: ${order.address.number}`);
    if (order.address.complement) lines.push(`Complemento: ${order.address.complement}`);
    lines.push(`Bairro: ${order.address.district}`);
    lines.push(`Cidade/UF: ${order.address.city} - ${order.address.state}`);
    if (order.address.reference) lines.push(`Referência: ${order.address.reference}`);
    lines.push('');
    lines.push(`Preferência de pagamento: ${order.payment}`);
    if (order.notes) lines.push(`Observações: ${order.notes}`);
    lines.push('');
    lines.push('Gostaria de confirmar a disponibilidade, o frete e o prazo de entrega.');
    return lines.join('\n');
  }

  function submitOrder(event) {
    event.preventDefault();
    if (!state.cart.length) return toast('O carrinho está vazio.');
    const cpf = $('#customerCpf').value.trim();
    if (!cpfHasElevenDigits(cpf)) return toast('Informe um CPF com 11 números.');
    const order = {
      id: vlUid('order'),
      number: `VL${String(Date.now()).slice(-7)}`,
      createdAt: new Date().toISOString(),
      status: 'Novo pedido',
      items: JSON.parse(JSON.stringify(state.cart)),
      total: cartTotal(),
      pricePending: cartHasPendingPrice(),
      customer: { name:$('#customerName').value.trim(), phone:$('#customerPhone').value.trim(), cpf, email:$('#customerEmail').value.trim() },
      address: { zip:$('#zipCode').value.trim(), street:$('#street').value.trim(), number:$('#number').value.trim(), complement:$('#complement').value.trim(), district:$('#district').value.trim(), city:$('#city').value.trim(), state:$('#state').value.trim().toUpperCase(), reference:$('#reference').value.trim() },
      payment: $('#paymentMethod').value,
      notes: $('#notes').value.trim()
    };
    const orders = vlGetOrders();
    orders.unshift(order);
    vlSetOrders(orders);
    const message = buildWhatsAppMessage(order);
    const target = `https://wa.me/${cleanPhone(state.settings.whatsapp)}?text=${encodeURIComponent(message)}`;
    state.cart = [];
    syncCart();
    $('#checkoutForm').reset();
    closeModal('checkout');
    window.open(target, '_blank', 'noopener');
    toast(`Pedido ${order.number} registrado.`);
  }

  function bindEvents() {
    $('#menuButton').addEventListener('click', () => $('#mainNav').classList.toggle('open'));
    $$('#mainNav a').forEach(a => a.addEventListener('click', () => $('#mainNav').classList.remove('open')));
    $('#cartButton').addEventListener('click', openCart);
    $('#closeCart').addEventListener('click', closeCart);
    $('#drawerBackdrop').addEventListener('click', closeCart);
    $('#checkoutButton').addEventListener('click', openCheckout);
    $('#openSizeGuide').addEventListener('click', () => openModal('sizeGuide'));
    $('[data-close-size-guide]').addEventListener('click', () => closeModal('sizeGuide'));
    $('#sizeGuideBackdrop').addEventListener('click', () => closeModal('sizeGuide'));
    $('[data-close-product]').addEventListener('click', () => closeModal('product'));
    $('[data-close-checkout]').addEventListener('click', () => closeModal('checkout'));
    $('#productBackdrop').addEventListener('click', () => closeModal('product'));
    $('#checkoutBackdrop').addEventListener('click', () => closeModal('checkout'));
    $('#productSearch').addEventListener('input', e => { state.search = e.target.value.trim(); state.visibleLimit = 36; renderProducts(); });
    $('#sortProducts').addEventListener('change', e => { state.sort = e.target.value; state.visibleLimit = 36; renderProducts(); });
    $('#loadMoreProducts').addEventListener('click', () => { state.visibleLimit += 36; renderProducts(); });
    $('#zipCode').addEventListener('input', e => { e.target.value = formatCep(e.target.value); });
    $('#zipCode').addEventListener('blur', lookupCep);
    $('#customerCpf').addEventListener('input', e => { e.target.value = formatCpf(e.target.value); });
    $('#checkoutForm').addEventListener('submit', submitOrder);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') { closeCart(); closeModal('product'); closeModal('checkout'); closeModal('sizeGuide'); }
    });
  }

  // Ajuste visual do modal no celular sem depender de CSS adicional.
  const responsiveStyle = document.createElement('style');
  responsiveStyle.textContent = '@media(max-width:650px){.product-modal-grid{grid-template-columns:1fr!important}.product-gallery-main{max-height:360px}}';
  document.head.appendChild(responsiveStyle);

  applySettings();
  renderHero();
  renderFilters();
  renderProducts();
  renderCart();
  bindEvents();
})();
