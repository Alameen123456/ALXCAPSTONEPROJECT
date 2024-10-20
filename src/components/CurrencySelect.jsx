const currencyCodes = [
  'AED',
  'AFN',
  'ALL',
  'AMD',
  'BAM',
  'BBD',
  'BDT',
  'BGN',
  'BSD',
  'BTN',
  'BWP',
  'BYN',
  'COP',
  'CRC',
  'CUP',
  'CVE',
  'ERN',
  'ETB',
  'EUR',
  'FJD',
  'GIP',
  'GMD',
  'GNF',
  'GTQ',
  'IDR',
  'ILS',
  'IMP',
  'INR',
  'JPY',
  'KES',
  'KGS',
  'KHR',
  'LAK',
  'LBP',
  'LKR',
  'LRD',
  'MMK',
  'MNT',
  'MOP',
  'MRU',
  'NAD',
  'NGN',
  'NIO',
  'NOK',
  'PHP',
  'PKR',
  'PLN',
  'PYG',
  'SBD',
  'SCR',
  'SDG',
  'SEK',
  'SSP',
  'STN',
  'SYP',
  'SZL',
  'TTD',
  'TVD',
  'TWD',
  'TZS',
  'VND',
  'VUV',
  'ZWL',
  'WST',
  'XAF',
  'ANG',
  'BHD',
  'BZD',
  'CZK',
  'FKP',
  'GYD',
  'IQD',
  'KID',
  'LSL',
  'MUR',
  'NPR',
  'QAR',
  'SGD',
  'THB',
  'UAH',
  'XCD',
  'AOA',
  'BIF',
  'CAD',
  'DJF',
  'FOK',
  'HKD',
  'IRR',
  'KMF',
  'LYD',
  'MVR',
  'NZD',
  'RON',
  'SHP',
  'TOS',
  'UGX',
  'XOF',
  'ARS',
  'BMD',
  'CDF',
  'DKK',
  'GBP',
  'HNL',
  'ISK',
  'KRW',
  'MAD',
  'MWK',
  'OMR',
  'RSD',
  'SLE',
  'TMT',
  'USD',
  'XPF',
  'AUD',
  'AWG',
  'BND',
  'CHF',
  'BOB',
  'CLP',
  'DOP',
  'DZD',
  'GEL',
  'GGP',
  'HRK',
  'HTG',
  'JEP',
  'JMD',
  'KWD',
  'KYD',
  'MDL',
  'MGA',
  'MXN',
  'MYR',
  'PAB',
  'PEN',
  'RUB',
  'RWF',
  'SLL',
  'SOS',
  'TND',
  'TOP',
  'UYU',
  'UZS',
  'YER',
  'ZAR',
  'AZN',
  'BRL',
  'CNY',
  'EGP',
  'GHS',
  'HUF',
  'JOD',
  'KZT',
  'MKD',
  'MZN',
  'PGK',
  'SAR',
  'SRD',
  'TRY',
  'VES',
  'ZMW',
];

const CurrencySelect = ({ selectedCurrency, handleCurrency }) => {
  // Extracting the country code from the selected currency code
  const countryCode = selectedCurrency.substring(0, 2);

  return (
    <div className="currency-select">
      {/* Display flag */}
      <img
        src={`https://flagsapi.com/${countryCode}/flat/64.png`}
        alt="Flag"
        onError={(e) => (e.target.src = 'https://flagsapi.com/US/flat/64.png')}
      />

      {/* Currency dropdown */}
      <select
        onChange={handleCurrency}
        className="currency-dropdown"
        value={selectedCurrency}
      >
        {/* Mapping through currency codes */}
        {currencyCodes.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelect;