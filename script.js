// const $ = (id) => document.getElementById(id);

// function formatNumber(n) {
//   return Math.round(n).toLocaleString('fa-IR') + ' تومان';
// }

// function calculate() {
//   const goldPrice = parseFloat($('goldPrice').value) || 0;
//   const weight    = parseFloat($('weight').value) || 0;

//   // اجرت و سود پیش‌فرض دارن، ولی کاربر میتونه تغییرشون بده
//   const wagePercent   = parseFloat($('wagePercent').value);
//   const profitPercent = parseFloat($('profitPercent').value);

//   // مالیات: اگه خالی بود → ۹٪ | اگه ۰ بود → ۰ | اگه عدد بود → همون
//   const taxRaw = $('taxPercent').value.trim();
//   const taxPercent = taxRaw === '' ? 9 : parseFloat(taxRaw) || 0;

//   if (!goldPrice || !weight) {
//     alert('لطفاً نرخ روز طلا و وزن رو وارد کن');
//     return;
//   }

//   // ۱) قیمت طلا
//   const goldTotal = goldPrice * weight;

//   // ۲) اجرت ساخت = قیمت طلا × درصد اجرت
//   const wage = goldTotal * (wagePercent / 100);

//   // ۳) سود فروشنده = (قیمت طلا + اجرت) × درصد سود
//   const profit = (goldTotal + wage) * (profitPercent / 100);

//   // ۴) مالیات = (سود + اجرت) × درصد مالیات
//   const tax = (profit + wage) * (taxPercent / 100);

//   // ۵) مبلغ نهایی
//   const total = goldTotal + wage + profit + tax;

//   // نمایش
//   $('rGold').textContent   = formatNumber(goldTotal);
//   $('rWage').textContent   = formatNumber(wage);
//   $('rProfit').textContent = formatNumber(profit);
//   $('rTax').textContent    = formatNumber(tax);
//   $('rTotal').textContent  = formatNumber(total);

//   $('result').hidden = false;
// }

// $('calcBtn').addEventListener('click', calculate);

// $('resetBtn').addEventListener('click', () => {
//   $('goldPrice').value = '';
//   $('weight').value = '';
//   $('wagePercent').value = 5;
//   $('profitPercent').value = 7;
//   $('taxPercent').value = '';
//   $('result').hidden = true;
// });






// ! ========================== Version 2

const $ = (id) => document.getElementById(id);

/* ---------- فرمت عدد با کاما ---------- */
function formatWithCommas(value) {
  // فقط رقم نگه می‌داره
  const digits = value.replace(/\D/g, '');
  if (!digits) return '';
  return Number(digits).toLocaleString('en-US'); // 24,000,000
}

/* ---------- تبدیل ورودی به عدد خالص ---------- */
function parseNumber(value) {
  if (!value) return 0;
  // حذف کاما و تبدیل اعداد فارسی/عربی به انگلیسی
  const cleaned = value
    .replace(/,/g, '')
    .replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
    .replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));
  const n = parseFloat(cleaned);
  return isNaN(n) ? 0 : n;
}

/* ---------- اعمال کاما روی فیلد قیمت ---------- */
const goldPriceInput = $('goldPrice');
goldPriceInput.addEventListener('input', (e) => {
  const caretAtEnd = e.target.selectionStart === e.target.value.length;
  e.target.value = formatWithCommas(e.target.value);
  if (caretAtEnd) {
    e.target.selectionStart = e.target.selectionEnd = e.target.value.length;
  }
});

/* ---------- فرمت خروجی ---------- */
function formatResult(n) {
  return Math.round(n).toLocaleString('en-US') + ' تومان';
}

/* ---------- محاسبه ---------- */
function calculate() {
  const goldPrice = parseNumber(goldPriceInput.value);
  const weight    = parseNumber($('weight').value);

  if (!goldPrice || !weight) {
    alert('لطفاً نرخ روز طلا و وزن رو وارد کن');
    return;
  }

  // اجرت و سود: اگه خالی بود → 0
  const wagePercent   = parseNumber($('wagePercent').value);
  const profitPercent = parseNumber($('profitPercent').value);

  // مالیات: اگه خالی بود → 9 | عدد بود → همون
  const taxRaw = $('taxPercent').value.trim();
  const taxPercent = taxRaw === '' ? 9 : parseNumber(taxRaw);

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
}

$('calcBtn').addEventListener('click', calculate);

/* ---------- پاک کردن سریع ---------- */
$('resetBtn').addEventListener('click', () => {
  goldPriceInput.value = '';
  $('weight').value = '';
  $('wagePercent').value = '';
  $('profitPercent').value = '';
  $('taxPercent').value = '9';

  // مخفی کردن فوری نتیجه (بدون انیمیشن تأخیری)
  $('result').hidden = true;
  $('result').style.animation = 'none';
  $('placeholder').hidden = false;

  // فوکوس روی فیلد اول
  goldPriceInput.focus();
});