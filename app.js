const $ = id => document.getElementById(id);

let heSelected = "all";
let tuKhoa = "";
let chiHuongDan = false;

// Ghép danh sách đầy đủ (HERO_BASE) với phần hướng dẫn chi tiết đã viết (HEROES).
// Chỉ lấy các trường hướng dẫn từ HEROES, còn thông tin cơ bản luôn dùng của HERO_BASE
// để mọi tướng hiển thị nhất quán theo đúng số liệu từ nguồn.
const TRUONG_HUONG_DAN = ["icon", "danhHieu", "skills", "lenSkill", "doBuild", "chienThuat", "khacChe"];

const DS_TUONG = HERO_BASE.map(base => {
  const ct = (typeof HEROES !== "undefined" ? HEROES : []).find(h => h.id === base.id);
  const gop = Object.assign({}, base);
  if (ct) TRUONG_HUONG_DAN.forEach(k => { if (ct[k] !== undefined) gop[k] = ct[k]; });
  gop.coHuongDan = !!(ct && ct.skills);
  return gop;
}).sort((a, b) => a.ten.localeCompare(b.ten, "vi"));

const SO_CO_HUONG_DAN = DS_TUONG.filter(h => h.coHuongDan).length;

function locTuong() {
  return DS_TUONG.filter(h => {
    if (heSelected !== "all" && h.he !== heSelected) return false;
    if (chiHuongDan && !h.coHuongDan) return false;
    if (!tuKhoa) return true;
    const gop = (h.ten + " " + (h.danhHieu || "") + " " + h.vaiTro.join(" ")).toLowerCase();
    return gop.includes(tuKhoa.toLowerCase());
  });
}

function renderChips() {
  const box = $("filter-chips");
  const dsHe = [["all", "Tất cả"], ["str", "Sức mạnh"], ["agi", "Nhanh nhẹn"], ["int", "Phép thuật"]];
  box.innerHTML = dsHe.map(([key, nhan]) =>
    `<button type="button" class="chip${key === heSelected ? " on" : ""}" data-he="${key}">${nhan}</button>`
  ).join("") +
  `<button type="button" class="chip guide${chiHuongDan ? " on" : ""}" id="chip-huongdan">★ Có hướng dẫn (${SO_CO_HUONG_DAN})</button>`;

  box.querySelectorAll(".chip[data-he]").forEach(btn => {
    btn.addEventListener("click", () => {
      heSelected = btn.dataset.he;
      renderChips();
      renderGrid();
    });
  });
  $("chip-huongdan").addEventListener("click", () => {
    chiHuongDan = !chiHuongDan;
    renderChips();
    renderGrid();
  });
}

function renderGrid() {
  const box = $("grid");
  const ds = locTuong();
  $("dem-tuong").textContent = `${ds.length} tướng`;
  if (!ds.length) {
    box.innerHTML = `<p class="empty">Không tìm thấy tướng phù hợp</p>`;
    return;
  }
  box.innerHTML = ds.map(h => `
    <div class="hero-card" data-id="${h.id}">
      <div class="avatar" style="background:${MAU_HE[h.he]}">${h.icon || ""}<img src="${h.img}" alt="" onerror="this.remove()"></div>
      <div class="ten">${h.ten}${h.coHuongDan ? ' <span class="sao" title="Có hướng dẫn chi tiết">★</span>' : ""}</div>
      <div class="danh-hieu">${h.danhHieu || h.vaiTro[0]}</div>
    </div>
  `).join("");
  box.querySelectorAll(".hero-card").forEach(card => {
    card.addEventListener("click", () => moChiTiet(card.dataset.id));
  });
}

function dongChiTiet() {
  const backdrop = $("sheet-backdrop");
  if (backdrop) backdrop.remove();
}

function moChiTiet(id) {
  const h = DS_TUONG.find(x => x.id === id);
  if (!h) return;

  const thongSo = `
    <div class="thongso">
      <div class="ts"><span class="ts-nhan">Hệ</span><span class="ts-gt">${NHAN_HE[h.he]}</span></div>
      <div class="ts"><span class="ts-nhan">Kiểu đánh</span><span class="ts-gt">${h.danhKieu}</span></div>
      <div class="ts"><span class="ts-nhan">Tầm đánh</span><span class="ts-gt">${h.tam}</span></div>
      <div class="ts"><span class="ts-nhan">Độ khó</span><span class="ts-gt">${h.doKho}</span></div>
    </div>`;

  let phanHuongDan;
  if (h.coHuongDan) {
    const skillsHtml = h.skills.map(s => `
      <div class="skill-row">
        <div class="skill-key">${s.phim}</div>
        <div class="skill-body">
          <div class="ten">${s.ten}</div>
          <div class="mota">${s.mota}</div>
        </div>
      </div>
    `).join("");

    const buildTier = (nhan, items) => `
      <div class="build-tier">
        <div class="nhan">${nhan}</div>
        ${items.map(it => `
          <div class="item-row">
            <span class="item-icon-wrap">
              <span class="item-icon">${ITEM_ICONS[it] || "❔"}</span>
              <img src="${ITEM_IMG[it] || ""}" alt="" onerror="this.remove()">
            </span>
            <div class="item-body">
              <div class="ten-gia">
                <span class="ten">${it}</span>
                ${ITEM_PRICE[it] ? `<span class="gia"><span class="gia-mua">${ITEM_PRICE[it].mua}</span><span class="gia-ban">bán ${ITEM_PRICE[it].ban}</span></span>` : ""}
              </div>
              <div class="mota">${ITEM_DESC[it] || ""}</div>
            </div>
          </div>
        `).join("")}
      </div>
    `;

    phanHuongDan = `
      <h3>Kỹ năng</h3>
      ${skillsHtml}
      <p class="len-skill">${h.lenSkill}</p>

      <h3>Lên đồ</h3>
      ${buildTier("Khởi đầu", h.doBuild.khoiDau)}
      ${buildTier("Giai đoạn đầu", h.doBuild.giaiDoanDau)}
      ${buildTier("Đồ chính", h.doBuild.coreItem)}
      ${buildTier("Đồ xa xỉ", h.doBuild.xaXi)}

      <h3>Chiến thuật</h3>
      <ul class="tip-list">${h.chienThuat.map(t => `<li>${t}</li>`).join("")}</ul>

      <h3>Bị khắc chế bởi</h3>
      <ul class="tip-list">${h.khacChe.map(t => `<li>${t}</li>`).join("")}</ul>
    `;
  } else {
    phanHuongDan = `
      <div class="chua-co">
        <p class="chua-co-title">Chưa có hướng dẫn chi tiết</p>
        <p>Thông tin phía trên lấy nguyên từ nguồn nên chính xác. Phần kỹ năng, cách lên đồ
        và chiến thuật cho tướng này thì chưa viết — nhắn nếu anh muốn bổ sung.</p>
      </div>
    `;
  }

  const html = `
    <div class="sheet-backdrop" id="sheet-backdrop">
      <div class="sheet">
        <div class="sheet-head">
          <div class="avatar" style="background:${MAU_HE[h.he]}">${h.icon || ""}<img src="${h.img}" alt="" onerror="this.remove()"></div>
          <div>
            <h2>${h.ten}</h2>
            <div class="danh-hieu">${h.danhHieu ? h.danhHieu + " · " : ""}${NHAN_HE[h.he]}</div>
          </div>
        </div>
        <div class="tags">${h.vaiTro.map(v => `<span class="tag">${v}</span>`).join("")}</div>
        ${thongSo}
        ${phanHuongDan}
        <button type="button" class="sheet-close" id="sheet-close">Đóng</button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", html);
  $("sheet-backdrop").addEventListener("click", e => {
    if (e.target.id === "sheet-backdrop") dongChiTiet();
  });
  $("sheet-close").addEventListener("click", dongChiTiet);
}

function initTimKiem() {
  const o = $("search-input");
  o.addEventListener("input", () => {
    tuKhoa = o.value;
    renderGrid();
  });
}

renderChips();
renderGrid();
initTimKiem();
