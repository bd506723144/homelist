const FACTORY_URL = 'https://mp.weixin.qq.com/s/Vs3v8ogRtoOXe_F3oi_dOw';
const XHS_URL     = 'https://xhslink.com/m/6r4ma8W3V2Q';
const DY_URL      = 'https://v.douyin.com/tYsSktGVYbo/';

const tagConfig = {
  factory: { cls: "tag-factory",      label: "佛山工厂" },
  online:  { cls: "tag-online",       label: "线上购买" },
  collab:  { cls: "tag-collab",       label: "合作优惠" },
  info:    { cls: "tag-info",         label: "型号参考" },
  xhs:     { cls: "tag-xiaohongshu", label: "小红书橱窗" },
  dy:      { cls: "tag-douyin",      label: "抖音橱窗" },
  video:   { cls: "tag-online",      label: "视频链接" },
};

function buildCard(item, idx) {
  const tc = tagConfig[item.type] || tagConfig.info;
  const tagLabel = item.tagLabel || tc.label;
  const id = `card-${idx}-${Math.random().toString(36).slice(2, 6)}`;

  const btns = [];
  let expandHtml = '';
  let hasPurchaseChannel = false;

  // 图片展开
  if (item.img) {
    const imgId = `img-${id}`;
    btns.push(`<button class="btn btn-outline" onclick="toggleExpand('${imgId}')">查看图片</button>`);
    expandHtml += `<div class="qr-expand" id="${imgId}"><img src="${item.img}" style="width:100%;border-radius:2px;display:block;"></div>`;
  }

  // 工厂信息跳转
  if (item.hasQR) {
    btns.push(`<a class="btn btn-primary" href="${FACTORY_URL}" target="_blank">查看工厂信息</a>`);
    hasPurchaseChannel = true;
  }

  // 购买 / 平台 / 视频链接
  if (item.link) {
    const label = item.type === 'video'  ? '观看视频'
                : item.type === 'collab' ? '查看优惠链接'
                : '前往购买';
    btns.push(`<a class="btn btn-primary" href="${item.link}" target="_blank">${label}</a>`);
    hasPurchaseChannel = true;
  } else if (item.type === 'xhs') {
    btns.push(`<a class="btn btn-outline btn-xhs" href="${XHS_URL}" target="_blank">小红书橱窗</a>`);
    hasPurchaseChannel = true;
  } else if (item.type === 'dy') {
    btns.push(`<a class="btn btn-outline btn-dy" href="${DY_URL}" target="_blank">抖音橱窗</a>`);
    hasPurchaseChannel = true;
  }

  // 没有购买渠道 且 非"即将分享" → 默认淘宝搜索
  if (!hasPurchaseChannel && item.tagLabel !== '即将分享') {
    const q = [item.detail, item.name].filter(Boolean).join(' ');
    const tbUrl = `https://s.taobao.com/search?q=${encodeURIComponent(q)}`;
    btns.push(`<a class="btn btn-outline" href="${tbUrl}" target="_blank">淘宝搜索</a>`);
  }

  const promoText = item.promo === 1 ? '报小言名字有折扣'
                  : item.promo === 2 ? '不定期有团购 可关注公众号'
                  : '';
  const promoHtml = promoText ? `<div class="promo-tip">${promoText}</div>` : '';

  const actionsHtml = btns.length ? `<div class="card-actions">${btns.join('')}</div>` : '';

  return `
    <div class="card">
      <div class="card-header">
        <div class="card-left">
          <div class="card-name">${item.name}</div>
          ${item.detail ? `<div class="card-detail">${item.detail}</div>` : ''}
          ${item.price ? `<div class="price">${item.price}</div>` : ''}
          ${promoHtml}
        </div>
        <span class="tag ${tc.cls}">${tagLabel}</span>
      </div>
      ${actionsHtml}
      ${expandHtml}
    </div>`;
}

function buildSection(container, categories) {
  let html = '';
  const labels = { hard: '硬装', soft: '软装', small: '小物件', aroll: '一镜到底' };
  categories.forEach(cat => {
    html += `<div class="section-title">${labels[cat]}</div>`;
    data[cat].forEach((item, i) => { html += buildCard(item, `${cat}-${i}`); });
  });
  container.innerHTML = html;
}

buildSection(document.getElementById('all'),   ['hard', 'soft', 'small', 'aroll']);
buildSection(document.getElementById('hard'),  ['hard']);
buildSection(document.getElementById('soft'),  ['soft']);
buildSection(document.getElementById('small'), ['small']);
buildSection(document.getElementById('aroll'), ['aroll']);

function switchTab(id, btn) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}

function toggleExpand(id) {
  document.getElementById(id).classList.toggle('open');
}

function openModal() {
  document.getElementById('qrModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('qrModal').classList.remove('open');
  document.body.style.overflow = '';
}
