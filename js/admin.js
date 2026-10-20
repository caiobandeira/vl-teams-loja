(() => {
  const state = {
    products: vlGetProducts(),
    banners: vlGetBanners(),
    settings: vlGetSettings(),
    orders: vlGetOrders(),
    editingProductId: null,
    editingBannerId: null
  };

  const $ = (selector, root=document) => root.querySelector(selector);
  const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
  const escapeHTML = value => String(value ?? '').replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
  const orderTotalText = order => order?.pricePending ? 'A confirmar' : vlMoney(order?.total);
  const productPriceText = product => product?.priceOnRequest ? 'Preço sob consulta' : vlMoney(product?.price);

  function toast(message) {
    const el = $('#toast');
    el.textContent = message;
    el.classList.add('show');
    clearTimeout(el._timer);
    el._timer = setTimeout(() => el.classList.remove('show'), 2400);
  }

  function isLogged() { return sessionStorage.getItem(VL_KEYS.adminSession) === 'true'; }
  function showAdmin() {
    $('#loginScreen').hidden = true;
    $('#adminShell').hidden = false;
    $('#adminLogo').src = state.settings.logo || 'assets/logo-vl-teams.png';
    renderAll();
  }
  function showLogin() {
    $('#loginScreen').hidden = false;
    $('#adminShell').hidden = true;
  }

  function renderAll() {
    state.products = vlGetProducts();
    state.banners = vlGetBanners();
    state.settings = vlGetSettings();
    state.orders = vlGetOrders();
    renderDashboard();
    renderProducts();
    renderBanners();
    renderOrders();
    populateFooterForm();
    populateCredentials();
  }

  function renderDashboard() {
    const activeProducts = state.products.filter(p => p.active).length;
    const activeBanners = state.banners.filter(b => b.active).length;
    const pending = state.orders.filter(o => !['Entregue','Cancelado'].includes(o.status)).length;
    const paidOrders = state.orders.filter(o => ['Pago','Enviado','Entregue'].includes(o.status));
    const sales = paidOrders.filter(o => !o.pricePending).reduce((sum,o) => sum + Number(o.total || 0), 0);
    const pendingPrices = paidOrders.some(o => o.pricePending);
    $('#statsGrid').innerHTML = `
      <div class="stat-card"><span class="muted">Produtos ativos</span><strong>${activeProducts}</strong></div>
      <div class="stat-card"><span class="muted">Banners ativos</span><strong>${activeBanners}</strong></div>
      <div class="stat-card"><span class="muted">Pedidos em aberto</span><strong>${pending}</strong></div>
      <div class="stat-card"><span class="muted">Pedidos pagos</span><strong>${vlMoney(sales)}${pendingPrices ? ' + valores a confirmar' : ''}</strong></div>`;
    const recent = state.orders.slice(0,5);
    $('#recentOrders').innerHTML = recent.length ? `<table class="admin-table"><thead><tr><th>Pedido</th><th>Cliente</th><th>Total</th><th>Status</th></tr></thead><tbody>${recent.map(o => `<tr><td>${escapeHTML(o.number)}</td><td>${escapeHTML(o.customer?.name)}</td><td>${escapeHTML(orderTotalText(o))}</td><td><span class="status ${statusClass(o.status)}">${escapeHTML(o.status)}</span></td></tr>`).join('')}</tbody></table>` : '<div class="empty-state">Nenhum pedido registrado ainda.</div>';
  }

  function renderProducts() {
    $('#productsTable').innerHTML = state.products.length ? state.products.map(product => `
      <tr>
        <td><img class="admin-thumb" src="${escapeHTML(product.image)}" alt=""></td>
        <td><strong>${escapeHTML(product.name)}</strong><br><small class="muted">${escapeHTML(product.team || '')}${product.season ? ` · ${escapeHTML(product.season)}` : ''}</small></td>
        <td>${escapeHTML(product.category || '')}</td>
        <td>${escapeHTML(productPriceText(product))}</td>
        <td>${escapeHTML((product.sizes || []).join(', '))}</td>
        <td><span class="status ${product.active?'active':'inactive'}">${product.active?'Ativo':'Oculto'}</span></td>
        <td><div class="action-row"><button class="btn btn-outline btn-small" data-edit-product="${escapeHTML(product.id)}">Editar</button><button class="btn btn-danger btn-small" data-delete-product="${escapeHTML(product.id)}">Excluir</button></div></td>
      </tr>`).join('') : '<tr><td colspan="7"><div class="empty-state">Nenhum produto cadastrado.</div></td></tr>';
    $$('[data-edit-product]').forEach(btn => btn.addEventListener('click', () => openProductEditor(btn.dataset.editProduct)));
    $$('[data-delete-product]').forEach(btn => btn.addEventListener('click', () => deleteProduct(btn.dataset.deleteProduct)));
  }

  function renderBanners() {
    const banners = [...state.banners].sort((a,b) => Number(a.order)-Number(b.order));
    $('#bannersTable').innerHTML = banners.length ? banners.map(banner => `
      <tr>
        <td><img class="admin-thumb" style="width:110px;height:58px" src="${escapeHTML(banner.image)}" alt=""></td>
        <td><strong>${escapeHTML(banner.title)}</strong><br><small class="muted">${escapeHTML(banner.subtitle || '')}</small></td>
        <td>${escapeHTML(banner.buttonText || '')}</td>
        <td>${Number(banner.order || 0)}</td>
        <td><span class="status ${banner.active?'active':'inactive'}">${banner.active?'Ativo':'Oculto'}</span></td>
        <td><div class="action-row"><button class="btn btn-outline btn-small" data-edit-banner="${escapeHTML(banner.id)}">Editar</button><button class="btn btn-danger btn-small" data-delete-banner="${escapeHTML(banner.id)}">Excluir</button></div></td>
      </tr>`).join('') : '<tr><td colspan="6"><div class="empty-state">Nenhum banner cadastrado.</div></td></tr>';
    $$('[data-edit-banner]').forEach(btn => btn.addEventListener('click', () => openBannerEditor(btn.dataset.editBanner)));
    $$('[data-delete-banner]').forEach(btn => btn.addEventListener('click', () => deleteBanner(btn.dataset.deleteBanner)));
  }

  function statusClass(status) {
    if (['Pago','Enviado','Entregue'].includes(status)) return 'active';
    if (status === 'Cancelado') return 'inactive';
    return 'pending';
  }

  function renderOrders() {
    $('#ordersTable').innerHTML = state.orders.length ? state.orders.map(order => `
      <tr>
        <td><strong>${escapeHTML(order.number)}</strong></td>
        <td>${escapeHTML(order.customer?.name)}<br><small class="muted">${escapeHTML(order.customer?.phone)}</small></td>
        <td>${new Date(order.createdAt).toLocaleString('pt-BR')}</td>
        <td>${order.items?.reduce((s,i)=>s+Number(i.qty),0) || 0}</td>
        <td>${escapeHTML(orderTotalText(order))}</td>
        <td><span class="status ${statusClass(order.status)}">${escapeHTML(order.status)}</span></td>
        <td><button class="btn btn-outline btn-small" data-view-order="${escapeHTML(order.id)}">Ver pedido</button></td>
      </tr>`).join('') : '<tr><td colspan="7"><div class="empty-state">Nenhum pedido foi registrado.</div></td></tr>';
    $$('[data-view-order]').forEach(btn => btn.addEventListener('click', () => openOrder(btn.dataset.viewOrder)));
  }

  function openEditor(title, content) {
    $('#editorTitle').textContent = title;
    $('#editorBody').innerHTML = content;
    $('#editorModal').classList.add('open');
    $('#editorBackdrop').classList.add('open');
    document.body.classList.add('modal-open');
  }
  function closeEditor() {
    $('#editorModal').classList.remove('open');
    $('#editorBackdrop').classList.remove('open');
    document.body.classList.remove('modal-open');
  }

  function sizesToString(product) {
    if (product.showStock === false) return (product.sizes || []).join(', ');
    return (product.sizes || []).map(size => `${size}:${Number(product.stock?.[size] ?? 0)}`).join(', ');
  }
  function parseSizes(text) {
    const entries = String(text || '').split(',').map(v => v.trim()).filter(Boolean);
    const sizes = [];
    const stock = {};
    entries.forEach(entry => {
      const [rawSize, rawStock] = entry.split(':');
      const size = String(rawSize || '').trim().toUpperCase();
      if (!size || sizes.includes(size)) return;
      sizes.push(size);
      stock[size] = Math.max(0, Number(rawStock ?? 1) || 0);
    });
    return { sizes, stock };
  }

  function openProductEditor(productId=null) {
    state.editingProductId = productId;
    const defaultSizes = ['P','M','G','GG','XG','2XG','3XG','4XG'];
    const product = state.products.find(p => p.id === productId) || {
      name:'', team:'', category:'NBA', season:'', description:'', productType:'torcedor', price:159.99, oldPrice:null, priceOnRequest:false,
      sizes:defaultSizes, stock:Object.fromEntries(defaultSizes.map(size => [size, 99])), showStock:false,
      image:'assets/product-1.svg', images:['assets/product-1.svg'], badge:'Novidade', featured:false, active:true, personalization:false, personalizationPrice:0
    };
    openEditor(productId ? 'Editar produto' : 'Novo produto', `
      <form id="productEditorForm">
        <div class="admin-form-grid">
          <div class="form-group"><label>Nome do produto *</label><input class="input" id="productName" value="${escapeHTML(product.name)}" required></div>
          <div class="form-group"><label>Time ou coleção</label><input class="input" id="productTeam" value="${escapeHTML(product.team || '')}"></div>
          <div class="form-group"><label>Categoria *</label><input class="input" id="productCategory" value="${escapeHTML(product.category || '')}" placeholder="Boston Celtics, Cleveland Cavaliers..." required></div>
          <div class="form-group"><label>Ano ou temporada</label><input class="input" id="productSeason" value="${escapeHTML(product.season || '')}" placeholder="2025/26"></div>
          <div class="form-group"><label>Selo</label><input class="input" id="productBadge" value="${escapeHTML(product.badge || '')}" placeholder="Novidade, City Edition..."></div>
          <div class="form-group"><label>Tipo de camisa *</label><select id="productType" required><option value="torcedor" ${(product.productType || 'torcedor')==='torcedor'?'selected':''}>Torcedor — R$ 159,99</option><option value="jogador" ${product.productType==='jogador'?'selected':''}>Jogador — R$ 179,99</option><option value="retro" ${product.productType==='retro'?'selected':''}>Retrô — R$ 179,99</option><option value="infantil" ${product.productType==='infantil'?'selected':''}>Infantil — preço manual</option><option value="casaco" ${product.productType==='casaco'?'selected':''}>Casaco — preço manual</option><option value="outro" ${product.productType==='outro'?'selected':''}>Outro produto — preço manual</option></select></div>
          <div class="form-group"><label>Preço</label><input class="input" id="productPrice" type="number" min="0" step="0.01" value="${Number(product.price || 0)}"></div>
          <div class="form-group"><label>Preço anterior</label><input class="input" id="productOldPrice" type="number" min="0" step="0.01" value="${product.oldPrice ? Number(product.oldPrice) : ''}"></div>
          <div class="form-group"><label style="display:flex;gap:8px;align-items:center"><input type="checkbox" id="productPriceOnRequest" ${product.priceOnRequest?'checked':''}> Exibir “Preço sob consulta”</label></div>
          <div class="form-group full"><label>Descrição</label><textarea class="input" id="productDescription" rows="4" placeholder="Conte a história e os detalhes do modelo.">${escapeHTML(product.description || '')}</textarea></div>
          <div class="form-group full"><label>Tamanhos${product.showStock === false ? '' : ' e estoque'} *</label><input class="input" id="productSizes" value="${escapeHTML(sizesToString(product))}" placeholder="P, M, G, GG, XG, 2XG, 3XG, 4XG" required><small class="muted">Sem controle de quantidade: P, M, G... Com estoque: P:3, M:5, G:2.</small></div>
          <div class="form-group"><label style="display:flex;gap:8px;align-items:center"><input type="checkbox" id="productShowStock" ${product.showStock !== false?'checked':''}> Exibir e controlar quantidade em estoque</label></div>
          <div class="form-group"><label>URL da imagem principal</label><input class="input" id="productImageUrl" value="${escapeHTML(product.image || product.images?.[0] || '')}"></div>
          <div class="form-group"><label>Ou envie a imagem principal</label><input class="input" id="productImageFile" type="file" accept="image/*"></div>
          <div class="form-group full"><label>Outras imagens (uma URL por linha)</label><textarea class="input" id="productImages" rows="4" placeholder="Foto das costas, detalhes e outros ângulos">${escapeHTML((product.images || []).slice(1).join('\n'))}</textarea><small class="muted">A primeira imagem é a capa. Use as demais para costas e detalhes.</small></div>
          <div class="form-group full"><img class="image-preview product-preview-square" id="productImagePreview" src="${escapeHTML(product.image || 'assets/product-1.svg')}" alt="Prévia"></div>
          <div class="form-group"><label style="display:flex;gap:8px;align-items:center"><input type="checkbox" id="productFeatured" ${product.featured?'checked':''}> Exibir em novidades</label></div>
          <div class="form-group"><label style="display:flex;gap:8px;align-items:center"><input type="checkbox" id="productActive" ${product.active?'checked':''}> Produto ativo</label></div>
          <div class="form-group"><label style="display:flex;gap:8px;align-items:center"><input type="checkbox" id="productPersonalization" ${product.personalization?'checked':''}> Aceita personalização</label></div>
          <div class="form-group"><label>Valor da personalização</label><input class="input" id="productPersonalizationPrice" type="number" min="0" step="0.01" value="${Number(product.personalizationPrice || 0)}"></div>
        </div>
        <button class="btn btn-primary" type="submit" style="margin-top:18px">Salvar produto</button>
      </form>`);
    $('#productType').addEventListener('change', e => {
      if (['torcedor','jogador','retro'].includes(e.target.value)) {
        $('#productPrice').value = e.target.value === 'torcedor' ? '159.99' : '179.99';
        $('#productPriceOnRequest').checked = false;
      } else {
        $('#productPriceOnRequest').checked = !Number($('#productPrice').value || 0);
      }
    });
    $('#productImageUrl').addEventListener('input', e => { if (e.target.value) $('#productImagePreview').src = e.target.value; });
    $('#productImageFile').addEventListener('change', async e => { if (e.target.files[0]) $('#productImagePreview').src = await vlFileToDataURL(e.target.files[0]); });
    $('#productEditorForm').addEventListener('submit', saveProduct);
  }

  async function saveProduct(event) {
    event.preventDefault();
    const parsed = parseSizes($('#productSizes').value);
    if (!parsed.sizes.length) return toast('Cadastre ao menos um tamanho.');
    let image = $('#productImageUrl').value.trim() || 'assets/product-1.svg';
    const file = $('#productImageFile').files[0];
    if (file) image = await vlFileToDataURL(file);
    const extraImages = $('#productImages').value.split(/\n+/).map(value => value.trim()).filter(Boolean);
    const images = [...new Set([image, ...extraImages])];
    const showStock = $('#productShowStock').checked;
    const stock = showStock ? parsed.stock : Object.fromEntries(parsed.sizes.map(size => [size, 99]));
    const priceOnRequest = $('#productPriceOnRequest').checked;
    const data = {
      id: state.editingProductId || vlUid('product'),
      name: $('#productName').value.trim(),
      team: $('#productTeam').value.trim(),
      category: $('#productCategory').value.trim(),
      season: $('#productSeason').value.trim(),
      description: $('#productDescription').value.trim(),
      badge: $('#productBadge').value.trim(),
      productType: $('#productType').value,
      price: Number($('#productPrice').value || 0),
      oldPrice: $('#productOldPrice').value ? Number($('#productOldPrice').value) : null,
      priceOnRequest,
      sizes: parsed.sizes,
      stock,
      showStock,
      image,
      images,
      featured: $('#productFeatured').checked,
      active: $('#productActive').checked,
      personalization: $('#productPersonalization').checked,
      personalizationPrice: Number($('#productPersonalizationPrice').value || 0)
    };
    const index = state.products.findIndex(p => p.id === data.id);
    if (index >= 0) state.products[index] = data; else state.products.unshift(data);
    vlSetProducts(state.products);
    closeEditor();
    renderAll();
    toast('Produto salvo.');
  }

  function deleteProduct(id) {
    const product = state.products.find(p => p.id === id);
    if (!product || !confirm(`Excluir “${product.name}”?`)) return;
    state.products = state.products.filter(p => p.id !== id);
    vlSetProducts(state.products);
    renderAll();
    toast('Produto excluído.');
  }

  function openBannerEditor(bannerId=null) {
    state.editingBannerId = bannerId;
    const banner = state.banners.find(b => b.id === bannerId) || { title:'', subtitle:'', image:'assets/banner-1.svg', buttonText:'Ver catálogo', link:'#catalogo', order:state.banners.length+1, active:true };
    openEditor(bannerId ? 'Editar banner' : 'Novo banner', `
      <form id="bannerEditorForm">
        <div class="admin-form-grid">
          <div class="form-group"><label>Título *</label><input class="input" id="bannerTitle" value="${escapeHTML(banner.title)}" required></div>
          <div class="form-group"><label>Texto do botão</label><input class="input" id="bannerButton" value="${escapeHTML(banner.buttonText || '')}"></div>
          <div class="form-group full"><label>Descrição</label><input class="input" id="bannerSubtitle" value="${escapeHTML(banner.subtitle || '')}"></div>
          <div class="form-group"><label>Destino do botão</label><input class="input" id="bannerLink" value="${escapeHTML(banner.link || '#catalogo')}" placeholder="#catalogo"></div>
          <div class="form-group"><label>Ordem</label><input class="input" id="bannerOrder" type="number" min="1" value="${Number(banner.order || 1)}"></div>
          <div class="form-group"><label>URL da imagem</label><input class="input" id="bannerImageUrl" value="${escapeHTML(banner.image || '')}"></div>
          <div class="form-group"><label>Ou envie uma imagem</label><input class="input" id="bannerImageFile" type="file" accept="image/*"></div>
          <div class="form-group full"><img class="image-preview" id="bannerImagePreview" src="${escapeHTML(banner.image || 'assets/banner-1.svg')}" alt="Prévia"></div>
          <div class="form-group"><label style="display:flex;gap:8px;align-items:center"><input type="checkbox" id="bannerActive" ${banner.active?'checked':''}> Banner ativo</label></div>
        </div>
        <button class="btn btn-primary" type="submit" style="margin-top:18px">Salvar banner</button>
      </form>`);
    $('#bannerImageUrl').addEventListener('input', e => { if (e.target.value) $('#bannerImagePreview').src = e.target.value; });
    $('#bannerImageFile').addEventListener('change', async e => { if (e.target.files[0]) $('#bannerImagePreview').src = await vlFileToDataURL(e.target.files[0]); });
    $('#bannerEditorForm').addEventListener('submit', saveBanner);
  }

  async function saveBanner(event) {
    event.preventDefault();
    let image = $('#bannerImageUrl').value.trim() || 'assets/banner-1.svg';
    const file = $('#bannerImageFile').files[0];
    if (file) image = await vlFileToDataURL(file);
    const data = {
      id: state.editingBannerId || vlUid('banner'),
      title: $('#bannerTitle').value.trim(),
      subtitle: $('#bannerSubtitle').value.trim(),
      image,
      buttonText: $('#bannerButton').value.trim(),
      link: $('#bannerLink').value.trim() || '#catalogo',
      order: Number($('#bannerOrder').value || 1),
      active: $('#bannerActive').checked
    };
    const index = state.banners.findIndex(b => b.id === data.id);
    if (index >= 0) state.banners[index] = data; else state.banners.push(data);
    vlSetBanners(state.banners);
    closeEditor();
    renderAll();
    toast('Banner salvo.');
  }

  function deleteBanner(id) {
    const banner = state.banners.find(b => b.id === id);
    if (!banner || !confirm(`Excluir o banner “${banner.title}”?`)) return;
    state.banners = state.banners.filter(b => b.id !== id);
    vlSetBanners(state.banners);
    renderAll();
    toast('Banner excluído.');
  }

  function openOrder(id) {
    const order = state.orders.find(o => o.id === id);
    if (!order) return;
    $('#orderModalTitle').textContent = `Pedido ${order.number}`;
    $('#orderModalBody').innerHTML = `
      <div class="admin-form-grid">
        <div class="admin-card"><h3 style="margin-top:0">Cliente</h3><p><strong>${escapeHTML(order.customer?.name)}</strong><br>Telefone: ${escapeHTML(order.customer?.phone)}<br>CPF: ${escapeHTML(order.customer?.cpf || 'Não informado')}${order.customer?.email?`<br>E-mail: ${escapeHTML(order.customer.email)}`:''}</p></div>
        <div class="admin-card"><h3 style="margin-top:0">Entrega</h3><p>${escapeHTML(order.address?.street)}, ${escapeHTML(order.address?.number)}${order.address?.complement?` — ${escapeHTML(order.address.complement)}`:''}<br>${escapeHTML(order.address?.district)} — ${escapeHTML(order.address?.city)}/${escapeHTML(order.address?.state)}<br>CEP: ${escapeHTML(order.address?.zip)}</p></div>
      </div>
      <div class="admin-card"><h3 style="margin-top:0">Itens</h3>${order.items.map(item => `<div class="summary-line"><span>${item.qty}x ${escapeHTML(item.name)} — ${escapeHTML(item.size)}${item.productType?` — ${escapeHTML(({torcedor:'Torcedor',jogador:'Jogador',retro:'Retrô',outro:'Outro produto'})[item.productType] || item.productType)}`:''}${item.personalization?` (${escapeHTML(item.personalization)})`:''}</span><strong>${item.priceOnRequest ? 'A confirmar' : vlMoney((Number(item.unitPrice)+Number(item.personalizationPrice||0))*Number(item.qty))}</strong></div>`).join('')}<div class="summary-line summary-total"><span>Total</span><strong>${escapeHTML(orderTotalText(order))}</strong></div></div>
      <div class="admin-form-grid"><div class="form-group"><label>Status do pedido</label><select id="orderStatus">${['Novo pedido','Em atendimento','Pagamento pendente','Pago','Enviado','Entregue','Cancelado'].map(s => `<option ${order.status===s?'selected':''}>${s}</option>`).join('')}</select></div><div class="form-group"><label>Pagamento escolhido</label><input class="input" value="${escapeHTML(order.payment || '')}" disabled></div></div>
      ${order.notes?`<div class="notice" style="margin-top:14px"><strong>Observações:</strong> ${escapeHTML(order.notes)}</div>`:''}
      <button class="btn btn-primary" id="saveOrderStatus" style="margin-top:18px">Salvar status</button>
      <button class="btn btn-danger" id="deleteOrder" style="margin-top:18px">Excluir pedido</button>`;
    $('#orderModal').classList.add('open');
    $('#orderBackdrop').classList.add('open');
    document.body.classList.add('modal-open');
    $('#saveOrderStatus').addEventListener('click', () => {
      order.status = $('#orderStatus').value;
      vlSetOrders(state.orders);
      closeOrder();
      renderAll();
      toast('Status atualizado.');
    });
    $('#deleteOrder').addEventListener('click', () => {
      if (!confirm(`Excluir o pedido ${order.number}?`)) return;
      state.orders = state.orders.filter(o => o.id !== id);
      vlSetOrders(state.orders);
      closeOrder();
      renderAll();
      toast('Pedido excluído.');
    });
  }

  function closeOrder() {
    $('#orderModal').classList.remove('open');
    $('#orderBackdrop').classList.remove('open');
    document.body.classList.remove('modal-open');
  }

  function populateFooterForm() {
    const s = state.settings;
    $('#settingStoreName').value = s.storeName || '';
    $('#settingWhatsapp').value = s.whatsapp || '';
    $('#settingInstagram').value = s.instagram || '';
    $('#settingInstagramLabel').value = s.instagramLabel || '';
    $('#settingDescription').value = s.description || '';
    $('#settingHours').value = s.supportHours || '';
    $('#settingShipping').value = s.shippingText || '';
    $('#settingPrivacy').value = s.privacyText || '';
    $('#settingLogoUrl').value = s.logo || '';
    $('#settingLogoPreview').src = s.logo || 'assets/logo-vl-teams.png';
    $('#settingFooterBgUrl').value = s.footerBackground || '';
    $('#settingFooterBgPreview').src = s.footerBackground || 'assets/banner-1.svg';
    $('#settingSizeGuideUrl').value = s.sizeGuideImage || '';
    $('#settingSizeGuidePreview').src = s.sizeGuideImage || 'assets/guia-medidas-adulto.webp';
    $('#settingPaymentsUrl').value = s.paymentImage || '';
    $('#settingPaymentsPreview').src = s.paymentImage || 'assets/payments.svg';
  }

  async function saveFooter(event) {
    event.preventDefault();
    const current = { ...state.settings };
    let logo = $('#settingLogoUrl').value.trim() || current.logo;
    let footerBackground = $('#settingFooterBgUrl').value.trim();
    let sizeGuideImage = $('#settingSizeGuideUrl').value.trim() || current.sizeGuideImage;
    let paymentImage = $('#settingPaymentsUrl').value.trim() || current.paymentImage;
    if ($('#settingLogoFile').files[0]) logo = await vlFileToDataURL($('#settingLogoFile').files[0]);
    if ($('#settingFooterBgFile').files[0]) footerBackground = await vlFileToDataURL($('#settingFooterBgFile').files[0]);
    if ($('#settingSizeGuideFile').files[0]) sizeGuideImage = await vlFileToDataURL($('#settingSizeGuideFile').files[0]);
    if ($('#settingPaymentsFile').files[0]) paymentImage = await vlFileToDataURL($('#settingPaymentsFile').files[0]);
    state.settings = {
      ...current,
      storeName: $('#settingStoreName').value.trim(),
      whatsapp: $('#settingWhatsapp').value.trim(),
      instagram: $('#settingInstagram').value.trim(),
      instagramLabel: $('#settingInstagramLabel').value.trim(),
      description: $('#settingDescription').value.trim(),
      supportHours: $('#settingHours').value.trim(),
      shippingText: $('#settingShipping').value.trim(),
      privacyText: $('#settingPrivacy').value.trim(),
      logo, footerBackground, sizeGuideImage, paymentImage
    };
    vlSetSettings(state.settings);
    $('#adminLogo').src = logo;
    populateFooterForm();
    toast('Rodapé e informações salvos.');
  }

  function bindPreview(inputId, previewId) {
    $(inputId).addEventListener('input', e => { if (e.target.value) $(previewId).src = e.target.value; });
  }

  function populateCredentials() {
    $('#adminEmail').value = state.settings.adminEmail || '';
    $('#adminPassword').value = state.settings.adminPassword || '';
  }

  function switchSection(section) {
    $$('.admin-section').forEach(el => el.classList.toggle('active', el.id === `section-${section}`));
    $$('.admin-nav button[data-section]').forEach(btn => btn.classList.toggle('active', btn.dataset.section === section));
    const activeButton = $(`.admin-nav button[data-section="${section}"]`);
    $('#adminPageTitle').textContent = activeButton ? activeButton.textContent.trim().replace(/^\S+\s/,'') : 'Admin';
    $('#adminSidebar').classList.remove('open');
  }

  function bindEvents() {
    $('#loginForm').addEventListener('submit', event => {
      event.preventDefault();
      const s = vlGetSettings();
      if ($('#loginEmail').value.trim() === s.adminEmail && $('#loginPassword').value === s.adminPassword) {
        sessionStorage.setItem(VL_KEYS.adminSession, 'true');
        state.settings = s;
        showAdmin();
      } else toast('E-mail ou senha incorretos.');
    });
    $('#logoutButton').addEventListener('click', () => { sessionStorage.removeItem(VL_KEYS.adminSession); showLogin(); });
    $$('.admin-nav button[data-section]').forEach(btn => btn.addEventListener('click', () => switchSection(btn.dataset.section)));
    $('#adminMenuButton').addEventListener('click', () => $('#adminSidebar').classList.toggle('open'));
    $('#newProductButton').addEventListener('click', () => openProductEditor());
    $('#newBannerButton').addEventListener('click', () => openBannerEditor());
    $('#closeEditor').addEventListener('click', closeEditor);
    $('#editorBackdrop').addEventListener('click', closeEditor);
    $('#closeOrder').addEventListener('click', closeOrder);
    $('#orderBackdrop').addEventListener('click', closeOrder);
    $('#footerForm').addEventListener('submit', saveFooter);
    bindPreview('#settingLogoUrl','#settingLogoPreview');
    bindPreview('#settingFooterBgUrl','#settingFooterBgPreview');
    bindPreview('#settingSizeGuideUrl','#settingSizeGuidePreview');
    bindPreview('#settingPaymentsUrl','#settingPaymentsPreview');
    $('#settingLogoFile').addEventListener('change', async e => { if(e.target.files[0]) $('#settingLogoPreview').src = await vlFileToDataURL(e.target.files[0]); });
    $('#settingFooterBgFile').addEventListener('change', async e => { if(e.target.files[0]) $('#settingFooterBgPreview').src = await vlFileToDataURL(e.target.files[0]); });
    $('#settingSizeGuideFile').addEventListener('change', async e => { if(e.target.files[0]) $('#settingSizeGuidePreview').src = await vlFileToDataURL(e.target.files[0]); });
    $('#settingPaymentsFile').addEventListener('change', async e => { if(e.target.files[0]) $('#settingPaymentsPreview').src = await vlFileToDataURL(e.target.files[0]); });
    $('#credentialsForm').addEventListener('submit', event => {
      event.preventDefault();
      state.settings = { ...vlGetSettings(), adminEmail:$('#adminEmail').value.trim(), adminPassword:$('#adminPassword').value };
      vlSetSettings(state.settings);
      toast('Dados de acesso atualizados.');
    });
    $('#resetDemoButton').addEventListener('click', () => {
      if (!confirm('Restaurar todos os dados demonstrativos? Essa ação não pode ser desfeita.')) return;
      Object.values(VL_KEYS).forEach(key => localStorage.removeItem(key));
      sessionStorage.removeItem(VL_KEYS.adminSession);
      vlInitialize();
      location.reload();
    });
    document.addEventListener('keydown', e => { if(e.key==='Escape'){ closeEditor(); closeOrder(); }});
  }

  bindEvents();
  if (isLogged()) showAdmin(); else showLogin();
})();
