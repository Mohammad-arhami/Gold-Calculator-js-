// /* ============================================================
//    ماشین حساب طلا - منطق برنامه
//    ============================================================ */

// /* --- انتخاب سریع عناصر با id --- */
// const $ = (id) => document.getElementById(id);


// /* ============================================================
//    ۱) پر کردن dropdown با گزینه‌های سفارشی
//    ============================================================
//    گزینه‌ها:
//    - 0
//    - 1
//    - 1.1, 1.2, 1.3, ..., 1.9
//    - 2
//    - 2.1, 2.2, ..., 2.9
//    - ...
//    - 9
//    - 9.1, 9.2, ..., 9.9
//    - 10
//    ============================================================ */
// function fillPercentDropdown(selectEl, defaultValue) {
//   // پاک کردن گزینه‌های قبلی
//   selectEl.innerHTML = '';

//   // گزینه‌ی 0
//   addOption(selectEl, '0', defaultValue);

//   // حلقه از 1 تا 10
//   for (let n = 1; n <= 10; n++) {
//     // عدد صحیح (1, 2, 3, ..., 10)
//     addOption(selectEl, String(n), defaultValue);

//     // اعداد اعشاری (فقط اگه n < 10 باشه)
//     // مثلاً برای n=1 → 1.1, 1.2, ..., 1.9
//     if (n < 10) {
//       for (let d = 1; d <= 9; d++) {
//         addOption(selectEl, `${n}.${d}`, defaultValue);
//       }
//     }
//   }
// }

// /* --- ساخت یه option و اضافه کردنش --- */
// function addOption(selectEl, value, defaultValue) {
//   const option = document.createElement('option');
//   option.value = value;

//   // تبدیل اعداد لاتین به فارسی + ممیز فارسی
//   // 0    → ۰
//   // 1.5  → ۱٫۵
//   // 10   → ۱۰
//   const persianValue = value
//     .replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d])   // 0-9 → ۰-۹
//     .replace('.', '٫');                       // . → ٫

//   option.textContent = persianValue + '٪';

//   // اگه مقدار پیش‌فرض بود، انتخابش کن
//   if (value === defaultValue) option.selected = true;

//   selectEl.appendChild(option);
// }

// // سود فروشنده → پیش‌فرض 7
// fillPercentDropdown($('profitPercent'), '7');

// // مالیات بر ارزش افزوده → پیش‌فرض 9
// fillPercentDropdown($('taxPercent'), '10');


// /* ============================================================
//    ۲) فرمت کاما موقع تایپ روی فیلد قیمت
//    ============================================================ */
// function formatWithCommas(value) {
//   const digits = value.replace(/\D/g, '');
//   if (!digits) return '';
//   return Number(digits).toLocaleString('en-US');
// }

// const goldPriceInput = $('goldPrice');
// goldPriceInput.addEventListener('input', (e) => {
//   const caretAtEnd = e.target.selectionStart === e.target.value.length;
//   e.target.value = formatWithCommas(e.target.value);
//   if (caretAtEnd) {
//     e.target.selectionStart = e.target.selectionEnd = e.target.value.length;
//   }
// });


// /* ============================================================
//    ۳) تبدیل ورودی به عدد خالص
//    ============================================================ */
// function parseNumber(value) {
//   if (!value) return 0;

//   const cleaned = value
//     .replace(/,/g, '')                                       // حذف کاما
//     .replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))         // فارسی → انگلیسی
//     .replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));        // عربی → انگلیسی

//   const n = parseFloat(cleaned);
//   return isNaN(n) ? 0 : n;
// }


// /* ============================================================
//    ۴) فرمت خروجی
//    ============================================================ */
// function formatResult(n) {
//   return Math.round(n).toLocaleString('en-US') + ' تومان';
// }


// /* ============================================================
//    ۵) محاسبه اصلی
//    ============================================================ */
// function calculate() {
//   const goldPrice = parseNumber(goldPriceInput.value);
//   const weight    = parseNumber($('weight').value);

//   if (!goldPrice || !weight) {
//     alert('لطفاً نرخ روز طلا و وزن رو وارد کن');
//     return;
//   }

//   const wagePercent   = parseNumber($('wagePercent').value);      // اجرت
//   const profitPercent = parseNumber($('profitPercent').value);    // سود فروشنده
//   const taxPercent    = parseNumber($('taxPercent').value);       // مالیات

//   const goldTotal = goldPrice * weight;
//   const wage      = goldTotal * (wagePercent / 100);
//   const profit    = (goldTotal + wage) * (profitPercent / 100);
//   const tax       = (profit + wage) * (taxPercent / 100);
//   const total     = goldTotal + wage + profit + tax;

//   $('rGold').textContent   = formatResult(goldTotal);
//   $('rWage').textContent   = formatResult(wage);
//   $('rProfit').textContent = formatResult(profit);
//   $('rTax').textContent    = formatResult(tax);
//   $('rTotal').textContent  = formatResult(total);

//   $('placeholder').hidden = true;
//   $('result').hidden = false;
// }


// /* ============================================================
//    ۶) اتصال رویدادها
//    ============================================================ */
// $('calcBtn').addEventListener('click', calculate);


// /* ============================================================
//    ۷) پاک کردن سریع
//    ============================================================ */
// $('resetBtn').addEventListener('click', () => {
//   goldPriceInput.value = '';
//   $('weight').value = '';
//   $('wagePercent').value = '';

//   // برگشت به پیش‌فرض
//   $('profitPercent').value = '7';
//   $('taxPercent').value = '9';

//   $('result').hidden = true;
//   $('result').style.animation = 'none';
//   $('placeholder').hidden = false;

//   goldPriceInput.focus();
// });








/* ============================================================
   ماشین حساب طلا - منطق برنامه (نسخه‌ی محاسبه‌ی زنده)
   ============================================================ */

const $ = (id) => document.getElementById(id);


/* ============================================================
   ۱) فرمت کاما موقع تایپ روی فیلد قیمت
   ============================================================ */
function formatWithCommas(value) {
  const digits = value.replace(/\D/g, '');
  if (!digits) return '';
  return Number(digits).toLocaleString('en-US');
}

const goldPriceInput = $('goldPrice');
goldPriceInput.addEventListener('input', (e) => {
  const caretAtEnd = e.target.selectionStart === e.target.value.length;
  e.target.value = formatWithCommas(e.target.value);
  if (caretAtEnd) {
    e.target.selectionStart = e.target.selectionEnd = e.target.value.length;
  }
});


/* ============================================================
   ۲) تبدیل ورودی به عدد خالص
   ============================================================ */
function parseNumber(value) {
  if (!value) return 0;

  const cleaned = value
    .replace(/,/g, '')
    .replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
    .replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))
    .replace(/٫/g, '.');

  const n = parseFloat(cleaned);
  return isNaN(n) ? 0 : n;
}


/* برای فیلدهای اعشاری — کاما و ممیز هر دو یعنی نقطه اعشار */
function parseDecimal(value) {
  if (!value) return 0;
  const cleaned = String(value)
    // تبدیل اعداد فارسی/عربی
    .replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
    .replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))
    // تبدیل همه‌ی ممیزها (کاما، ممیز فارسی، ...) به نقطه
    .replace(/[٫٬،,]/g, '.')
    // حذف کاراکترهای غیرمجاز
    .replace(/[^0-9.\-]/g, '');
  const n = parseFloat(cleaned);
  return isNaN(n) ? 0 : n;
}




/* ============================================================
   ۳) فرمت خروجی
   ============================================================ */
function formatResult(n) {
  return Math.round(n).toLocaleString('en-US') + ' تومان';
}


/* ============================================================
   ۴) محاسبه‌ی زنده
   ============================================================ */
function calculate() {
  const goldPriceRaw = goldPriceInput.value.trim();
  const weightRaw    = $('weight').value.trim();

  if (!goldPriceRaw || !weightRaw) {
    showPlaceholder();
    return;
  }

  const goldPrice = parseNumber(goldPriceRaw);
  const weight    = parseDecimal(weightRaw);

  if (!goldPrice || !weight) {
    showPlaceholder();
    return;
  }

  const wagePercent   = parseDecimal($('wagePercent').value);   // خالی → 0 
  const profitPercent = parseDecimal($('profitPercent').value); // خالی → 0 
  const taxPercent    = parseDecimal($('taxPercent').value);    // خالی → 0 

  const goldTotal = goldPrice * weight;
  const wage      = goldTotal * (wagePercent / 100);
  const profit    = (goldTotal + wage) * (profitPercent / 100);
  const tax       = (profit + wage) * (taxPercent / 100);
  const total     = goldTotal + wage + profit + tax;

  $('rGold').textContent   = formatResult(goldTotal);
  $('rWage').textContent   = formatResult(wage);
  $('rProfit').textContent = formatResult(profit);
  $('rTax').textContent    = formatResult(tax);
  $('rTotal').textContent  = formatResult(total);

  $('placeholder').hidden = true;
  $('result').hidden = false;
  $('result').style.animation = 'fadeIn 0.25s ease';
}


/* ============================================================
   ۵) برگشت به حالت placeholder
   ============================================================ */
function showPlaceholder() {
  // مخفی کردن نتیجه
  $('result').hidden = true;
  $('result').style.animation = 'none';

  // پاک کردن محتوای نتیجه (برگشت به —)
  $('rGold').textContent   = '—';
  $('rWage').textContent   = '—';
  $('rProfit').textContent = '—';
  $('rTax').textContent    = '—';
  $('rTotal').textContent  = '—';

  // نمایش placeholder
  $('placeholder').hidden = false;
}

/* ============================================================
   ۶) اتصال رویدادها
   ============================================================ */
$('calcBtn').addEventListener('click', calculate);

const liveInputs = [
  'goldPrice',
  'weight',
  'wagePercent',
  'profitPercent',
  'taxPercent'
];

liveInputs.forEach(id => {
  $(id).addEventListener('input', calculate);
});


/* ============================================================
   ۷) پاک کردن سریع
   ============================================================ */
$('resetBtn').addEventListener('click', () => {
  goldPriceInput.value = '';
  $('weight').value = '';
  $('wagePercent').value = '';

  $('profitPercent').value = '7';
  $('taxPercent').value = '10';

  showPlaceholder();

});


