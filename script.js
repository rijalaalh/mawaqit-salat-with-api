/** @format */
const arabCountries = [
  { name_ar: 'تونس', iso: 'TN' },
  { name_ar: 'الجزائر', iso: 'DZ' },
  { name_ar: 'المغرب', iso: 'MA' },
  { name_ar: 'ليبيا', iso: 'LY' },
  { name_ar: 'مصر', iso: 'EG' },
  { name_ar: 'السعودية', iso: 'SA' },
  { name_ar: 'الإمارات العربية المتحدة', iso: 'AE' },
  { name_ar: 'قطر', iso: 'QA' },
  { name_ar: 'الكويت', iso: 'KW' },
  { name_ar: 'البحرين', iso: 'BH' },
  { name_ar: 'عُمان', iso: 'OM' },
  { name_ar: 'الأردن', iso: 'JO' },
  { name_ar: 'لبنان', iso: 'LB' },
  { name_ar: 'سوريا', iso: 'SY' },
  { name_ar: 'العراق', iso: 'IQ' },
  { name_ar: 'فلسطين', iso: 'PS' },
  { name_ar: 'اليمن', iso: 'YE' },
  { name_ar: 'السودان', iso: 'SD' },
  { name_ar: 'موريتانيا', iso: 'MR' },
  { name_ar: 'الصومال', iso: 'SO' },
  { name_ar: 'جيبوتي', iso: 'DJ' },
  { name_ar: 'جزر القمر', iso: 'KM' },
];
const arabCities = {
  TN: {
    country_ar: 'تونس',
    cities: [
      { city_ar: 'تونس', city_code: 'TN-TUN' },
      { city_ar: 'صفاقس', city_code: 'TN-SFA' },
      { city_ar: 'سوسة', city_code: 'TN-SUS' },
    ],
  },

  DZ: {
    country_ar: 'الجزائر',
    cities: [
      { city_ar: 'الجزائر', city_code: 'DZ-ALG' },
      { city_ar: 'وهران', city_code: 'DZ-ORN' },
      { city_ar: 'قسنطينة', city_code: 'DZ-CON' },
    ],
  },

  MA: {
    country_ar: 'المغرب',
    cities: [
      { city_ar: 'الرباط', city_code: 'MA-RBA' },
      { city_ar: 'الدار البيضاء', city_code: 'MA-CAS' },
      { city_ar: 'مراكش', city_code: 'MA-MRK' },
    ],
  },

  LY: {
    country_ar: 'ليبيا',
    cities: [
      { city_ar: 'طرابلس', city_code: 'LY-TRI' },
      { city_ar: 'بنغازي', city_code: 'LY-BEN' },
      { city_ar: 'مصراتة', city_code: 'LY-MIS' },
    ],
  },

  EG: {
    country_ar: 'مصر',
    cities: [
      { city_ar: 'القاهرة', city_code: 'EG-CAI' },
      { city_ar: 'الإسكندرية', city_code: 'EG-ALE' },
      { city_ar: 'الجيزة', city_code: 'EG-GIZ' },
    ],
  },

  SA: {
    country_ar: 'السعودية',
    cities: [
      { city_ar: 'الرياض', city_code: 'SA-RYD' },
      { city_ar: 'جدة', city_code: 'SA-JED' },
      { city_ar: 'مكة', city_code: 'SA-MAK' },
    ],
  },

  AE: {
    country_ar: 'الإمارات العربية المتحدة',
    cities: [
      { city_ar: 'أبو ظبي', city_code: 'AE-AUH' },
      { city_ar: 'دبي', city_code: 'AE-DXB' },
      { city_ar: 'الشارقة', city_code: 'AE-SHJ' },
    ],
  },

  QA: {
    country_ar: 'قطر',
    cities: [{ city_ar: 'الدوحة', city_code: 'QA-DOH' }],
  },

  KW: {
    country_ar: 'الكويت',
    cities: [{ city_ar: 'الكويت', city_code: 'KW-KWI' }],
  },

  BH: {
    country_ar: 'البحرين',
    cities: [{ city_ar: 'المنامة', city_code: 'BH-MAN' }],
  },

  OM: {
    country_ar: 'عُمان',
    cities: [
      { city_ar: 'مسقط', city_code: 'OM-MCT' },
      { city_ar: 'صلالة', city_code: 'OM-SLL' },
    ],
  },

  JO: {
    country_ar: 'الأردن',
    cities: [
      { city_ar: 'عمّان', city_code: 'JO-AMM' },
      { city_ar: 'إربد', city_code: 'JO-IRB' },
    ],
  },

  LB: {
    country_ar: 'لبنان',
    cities: [
      { city_ar: 'بيروت', city_code: 'LB-BEY' },
      { city_ar: 'طرابلس', city_code: 'LB-TRI' },
    ],
  },

  SY: {
    country_ar: 'سوريا',
    cities: [
      { city_ar: 'دمشق', city_code: 'SY-DAM' },
      { city_ar: 'حلب', city_code: 'SY-ALE' },
    ],
  },

  IQ: {
    country_ar: 'العراق',
    cities: [
      { city_ar: 'بغداد', city_code: 'IQ-BAG' },
      { city_ar: 'البصرة', city_code: 'IQ-BAS' },
    ],
  },

  PS: {
    country_ar: 'فلسطين',
    cities: [
      { city_ar: 'القدس', city_code: 'PS-JER' },
      { city_ar: 'غزة', city_code: 'PS-GZA' },
    ],
  },

  YE: {
    country_ar: 'اليمن',
    cities: [
      { city_ar: 'صنعاء', city_code: 'YE-SAN' },
      { city_ar: 'عدن', city_code: 'YE-ADN' },
    ],
  },

  SD: {
    country_ar: 'السودان',
    cities: [
      { city_ar: 'الخرطوم', city_code: 'SD-KRT' },
      { city_ar: 'أم درمان', city_code: 'SD-OMD' },
    ],
  },

  MR: {
    country_ar: 'موريتانيا',
    cities: [{ city_ar: 'نواكشوط', city_code: 'MR-NKC' }],
  },

  SO: {
    country_ar: 'الصومال',
    cities: [{ city_ar: 'مقديشو', city_code: 'SO-MOG' }],
  },

  DJ: {
    country_ar: 'جيبوتي',
    cities: [{ city_ar: 'جيبوتي', city_code: 'DJ-JIB' }],
  },

  KM: {
    country_ar: 'جزر القمر',
    cities: [{ city_ar: 'موروني', city_code: 'KM-MOR' }],
  },
};

for (let country of arabCountries) {
  let content = `<option value="${country.iso}">${country.name_ar}</option>`;
  document.getElementById('country').innerHTML += content;
}
for (let c of arabCities['TN'].cities) {
  let content = `<option value="${c.city_code}">${c.city_ar}</option>`;
  document.getElementById('city-select').innerHTML += content;
}
document.getElementById('country').addEventListener('change', function () {
  const country_iso = this.value;
  for (let city in arabCities) {
    if (country_iso === city) {
      document.getElementById('city-select').innerHTML = '';
      for (let c of arabCities[city].cities) {
        let content = `<option value="${c.city_code}">${c.city_ar}</option>`;
        document.getElementById('city-select').innerHTML += content;
      }
    }
  }
});
const city = document.getElementById('city-select');
document.getElementById('city-select').addEventListener('change', function () {
  getPrayerTimes(city.value);
  for (let i = 0; i < city.options.length; i++) {
    if (city.options[i].selected) {
      document.getElementById('city-name').innerText = city.options[i].text;
    }
  }
});
document.getElementById('country').addEventListener('change', function () {
  getPrayerTimes(this.value, city.value);
  document.getElementById('city-name').innerText = city.options[0].text;
});
getPrayerTimes(document.getElementById('country').value, city.value);
function getPrayerTimes(country, city) {
  axios
    .get(
      `https://api.aladhan.com/v1/timingsByCity?country=${country}&city=${city}`,
    )
    .then((reponse) => {
      const data = reponse.data.data.timings;
      document.getElementById('fajar').innerText = data.Fajr;
      document.getElementById('sunrise').innerText = data.Sunrise;
      document.getElementById('dhouhor').innerText = data.Dhuhr;
      document.getElementById('aseer').innerText = data.Asr;
      document.getElementById('maghreb').innerText = data.Maghrib;
      document.getElementById('ishaa').innerText = data.Isha;
      console.log(reponse.data.data.date.hijri.month.number);
      const day = reponse.data.data.date.hijri.weekday.ar;
      const date_of_month = reponse.data.data.date.hijri.month.number;
      const month = reponse.data.data.date.hijri.month.ar;
      const date = `  ${day} ${date_of_month} ${month}`;
      document.getElementById('date-of-this-day').innerHTML = date;
    })
    .catch((error) => {
      alert("Une erreur s'est produite. Veuillez réessayer plus tard.");
    });
}
