import { useState } from 'react';
import CurrencySelect from './CurrencySelect';

const ConverterForm = () => {
  const [fromCurrency, setFromCurrency] = useState('NGN');
  const [toCurrency, setToCurrency] = useState('INR');
  const [amount, setAmount] = useState(1); // State for amount input
  const [exchangeRate, setExchangeRate] = useState(null); // State for exchange rate

  // Swap the values of fromCurrency and toCurrency
  const handleSwapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  // Function to fetch the exchange rate and update the result
  const getExchangeRate = async () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;

    try {
      const response = await fetch(API_URL); // Corrected to use API_URL
      if (!response.ok) throw new Error('Something went wrong!');

      const data = await response.json();
      setExchangeRate(data.conversion_rate); // Update state with the conversion rate
    } catch (error) {
      console.error(error);
    }
  };

  // Handling form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    getExchangeRate();
  };

  return (
    <form className="converter-form" onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label className="form-label">Enter Amount</label>
        <input
          type="number"
          className="form-input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)} // Handling amount input
          required
        />
      </div>

      <div className="form-group form-currency-group">
        <div className="form-selection">
          <label className="form-label">From</label>
          <CurrencySelect
            selectedCurrency={fromCurrency}
            handleCurrency={(event) => setFromCurrency(event.target.value)}
          />
        </div>

        <div className="swap-icon" onClick={handleSwapCurrencies}>
          <svg
            width="16"
            viewBox="0 0 20 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.13 11.66H0.22a0.22 0.22 0 0 0-0.22 0.22v1.62a0.22 0.22 0 0 0 0.22 0.22h16.45l-3.92 4.94a0.22 0.22 0 0 0 0.17 0.35h1.97c0.13 0 0.25-0.06 0.33-0.16l4.59-5.78a0.9 0.9 0 0 0-0.7-1.43z M19.78 5.29H3.34L7.26 0.35a0.22 0.22 0 0 0-0.17-0.35H5.12a0.22 0.22 0 0 0-0.34 0.16l-4.59 5.94a0.9 0.9 0 0 0 0.68 1.4h18.91a0.22 0.22 0 0 0 0.22-0.22V5.51a0.22 0.22 0 0 0-0.22-0.22z"
              fill="#fff"
            />
          </svg>
        </div>

        <div className="form-selection">
          <label className="form-label">To</label>
          <CurrencySelect
            selectedCurrency={toCurrency}
            handleCurrency={(event) => setToCurrency(event.target.value)}
          />
        </div>
      </div>

      <button type="submit" className="submit-button">
        Get Exchange Rate
      </button>

      {/* Conditionally render exchange rate result */}
      <p className="exchange-rate-result">
        {exchangeRate
          ? `${amount} ${fromCurrency} = ${(exchangeRate * amount).toFixed(
              2
            )} ${toCurrency}`
          : 'Exchange rate will appear here'}
      </p>
    </form>
  );
};

export default ConverterForm;
