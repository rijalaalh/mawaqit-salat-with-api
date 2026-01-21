/** @format */

// ================== DATA ==================
const arabCountries = [
  { name_ar: 'تونس', iso: 'TN', name_en: 'Tunisia' },
  { name_ar: 'الجزائر', iso: 'DZ', name_en: 'Algeria' },
  { name_ar: 'المغرب', iso: 'MA', name_en: 'Morocco' },
  { name_ar: 'ليبيا', iso: 'LY', name_en: 'Libya' },
  { name_ar: 'مصر', iso: 'EG', name_en: 'Egypt' },
];

const arabCities = {
  TN: [
    { city_ar: 'تونس', city_en: 'Tunis' },
    { city_ar: 'صفاقس', city_en: 'Sfax' },
    { city_ar: 'سوسة', city_en: 'Sousse' },
  ],
  DZ: [
    { city_ar: 'الجزائر', city_en: 'Algiers' },
    { city_ar: 'وهران', city_en: 'Oran' },
    { city_ar: 'قسنطينة', city_en: 'Constantine' },
  ],
  MA: [
    { city_ar: 'الرباط', city_en: 'Rabat' },
    { city_ar: 'الدار البيضاء', city_en: 'Casablanca' },
    { city_ar: 'مراكش', city_en: 'Marrakesh' },
  ],
  LY: [
    { city_ar: 'طرابلس', city_en: 'Tripoli' },
    { city_ar: 'بنغازي', city_en: 'Benghazi' },
  ],
  EG: [
    { city_ar: 'القاهرة', city_en: 'Cairo' },
    { city_ar: 'الإسكندرية', city_en: 'Alexandria' },
  ],
};

// ================== ELEMENTS ==================
const countrySelect = document.getElementById('country');
const citySelect = document.getElementById('city-select');

// ================== INIT ==================
arabCountries.forEach((c) => {
  countrySelect.innerHTML += `<option value="${c.iso}">${c.name_ar}</option>`;
});

updateCities('TN');
fetchPrayerTimes('Tunisia', 'Tunis');

// ================== FUNCTIONS ==================
function updateCities(countryISO) {
  citySelect.innerHTML = '';
  arabCities[countryISO].forEach((c) => {
    citySelect.innerHTML += `<option value="${c.city_en}">${c.city_ar}</option>`;
  });
}

function fetchPrayerTimes(countryName, cityName) {
  axios
    .get(
      `https://api.aladhan.com/v1/timingsByCity?country=${countryName}&city=${cityName}`,
    )
    .then((res) => {
      const t = res.data.data.timings;

      document.getElementById('fajar').innerText = t.Fajr;
      document.getElementById('sunrise').innerText = t.Sunrise;
      document.getElementById('dhouhor').innerText = t.Dhuhr;
      document.getElementById('aseer').innerText = t.Asr;
      document.getElementById('maghreb').innerText = t.Maghrib;
      document.getElementById('ishaa').innerText = t.Isha;

      const hijri = res.data.data.date.hijri;
      document.getElementById('date-of-this-day').innerText =
        `${hijri.weekday.ar} ${hijri.day} ${hijri.month.ar}`;
    })
    .catch(() => {
      alert('خطأ في جلب أوقات الصلاة');
    });
}

// ================== EVENTS ==================
countrySelect.addEventListener('change', function () {
  const countryISO = this.value;
  const countryName = arabCountries.find((c) => c.iso === countryISO).name_en;

  updateCities(countryISO);
  fetchPrayerTimes(countryName, citySelect.value);
});

citySelect.addEventListener('change', function () {
  const countryISO = countrySelect.value;
  const countryName = arabCountries.find((c) => c.iso === countryISO).name_en;

  fetchPrayerTimes(countryName, this.value);
  document.getElementById('city-name').innerText =
    this.options[this.selectedIndex].text;
});
