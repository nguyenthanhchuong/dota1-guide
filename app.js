const $ = id => document.getElementById(id);

let heSelected = "all";
let tuKhoa = "";

function locTuong() {
  return HEROES.filter(h => {
    if (heSelected !== "all" && h.he !== heSelected) return false;
    if (!tuKhoa) return true;
    const gop = (h.ten + " " + h.danhHieu + " " + h.vaiTro.join(" ")).toLowerCase();
    return gop.includes(tuKhoa.toLowerCase());
  });
}

function renderChips() {
  const box = $("filter-chips");
  const dsHe = [["all", "Tất cả"], ["str", "Sức mạnh"], ["agi", "Nhanh nhẹn"], ["int", "Phép thuật"]];
  box.innerHTML = dsHe.map(([key, nhan]) =>
    `<button type="button" class="chip${key === heSelected ? " on" : ""}" data-he="${key}">${nhan}</button>`
  ).join("");
  box.querySelectorAll(".chip").forEach(btn => {
    btn.addEventListener("click", () => {
      heSelected = btn.dataset.he;
      renderChips();
      renderGrid();
    });
  });
}

function renderGrid() {
  const box = $("grid");
  const ds = locTuong();
  if (!ds.length) {
    box.innerHTML = `<p class="empty">Không tìm thấy tướng phù hợp</p>`;
    return;
  }
  box.innerHTML = ds.map(h => `
    <div class="hero-card" data-id="${h.id}">
      <div class="avatar" style="background:${MAU_HE[h.he]}">${h.icon}<img src="${h.img}" alt="" onerror="this.remove()"></div>
      <div class="ten">${h.ten}</div>
      <div class="danh-hieu">${h.danhHieu}</div>
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
  const h = HEROES.find(x => x.id === id);
  if (!h) return;

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
            <div class="ten">${it}</div>
            <div class="mota">${ITEM_DESC[it] || ""}</div>
          </div>
        </div>
      `).join("")}
    </div>
  `;

  const html = `
    <div class="sheet-backdrop" id="sheet-backdrop">
      <div class="sheet">
        <div class="sheet-head">
          <div class="avatar" style="background:${MAU_HE[h.he]}">${h.icon}<img src="${h.img}" alt="" onerror="this.remove()"></div>
          <div>
            <h2>${h.ten}</h2>
            <div class="danh-hieu">${h.danhHieu} · ${NHAN_HE[h.he]}</div>
          </div>
        </div>
        <div class="tags">${h.vaiTro.map(v => `<span class="tag">${v}</span>`).join("")}</div>

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
