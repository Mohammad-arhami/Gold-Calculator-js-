const CACHE_NAME = 'gold-calculator-v1';
const ASSETS = [
  '/Gold-Calculator-js-/',
  '/Gold-Calculator-js-/index.html',
  '/Gold-Calculator-js-/style.css',
  '/Gold-Calculator-js-/script.js',
  '/Gold-Calculator-js-/icon-192.png',
  '/Gold-Calculator-js-/icon-512.png',
  '/Gold-Calculator-js-/iaunchericon-512x512.png',
  '/Gold-Calculator-js-/Images/blue-icon-192x192.png',
  '/Gold-Calculator-js-/Images/blue-icon-512x512.png'
];

// نصب: کش کردن فایل‌ها
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// فعال‌سازی: پاک کردن کش‌های قدیمی
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// دریافت: از کش پاسخ بده، اگر نبود از شبکه
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});