// Service worker: giữ toàn bộ cẩm nang trong máy để tra cứu được cả khi mất mạng.
//
// Chiến lược: ƯU TIÊN MẠNG (network-first), cache chỉ là phương án dự phòng.
//
// Không dùng cache-first, dù trang này thuần tĩnh nên nghe có vẻ hợp. Bài học
// từ app chi tiêu: máy đã lưu index.html thì vĩnh viễn chạy bản cũ, mọi bản sửa
// đẩy lên đều không tới được người dùng — và rất khó nhận ra vì trang vẫn chạy
// bình thường. Trang này còn hay bổ sung tướng mới nên càng phải ưu tiên mạng.
const CACHE_VERSION = "dota1-guide-v2";

// Cache trọn bộ: cả cẩm nang chỉ có 7 file tĩnh nên tải hết một lần là dùng
// offline được đầy đủ, không phải chọn lọc.
const SHELL = [
  "./",
  "./index.html",
  "./style.css?v=12",
  "./heroes-base.js?v=12",
  "./items.js?v=12",
  "./data.js?v=12",
  "./heroes-them.js?v=12",
  "./app.js?v=12",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET" || !req.url.startsWith(self.location.origin)) return;

  event.respondWith(
    fetch(req)
      .then(res => {
        // Tải được thì cập nhật lại bản dự phòng cho lần mất mạng sau.
        const copy = res.clone();
        caches.open(CACHE_VERSION).then(c => c.put(req, copy)).catch(() => {});
        return res;
      })
      .catch(() =>
        // Mất mạng: dùng bản đã lưu, không có thì trả trang chính.
        caches.match(req).then(hit => hit || caches.match("./index.html"))
      )
  );
});
