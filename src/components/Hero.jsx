import React from 'react';
import InputBox from './InputBox';
import bgImage from '../assets/bg.png';

function Hero({ amount, fromCurrency, toCurrency, onAmountChange, onFromCurrencyChange, onToCurrencyChange, onSwap, onConvert, currencyInfo, options }) {
  return (
    <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/80 to-indigo-900/80"></div>
      <div className="relative max-w-7xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Convert Currencies with
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Precision</span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
            Get real-time currency exchange rates and convert between 150+ currencies instantly.
            Fast, reliable, and accurate conversions for your business and personal needs.
          </p>
        </div>

        {/* Currency Converter */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Currency Converter</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onConvert();
              }}
            >
              <div className="space-y-6">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => onFromCurrencyChange(currency)}
                  selectedCurrency={fromCurrency}
                  onAmountChange={(amount) => onAmountChange(amount)}
                />
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110"
                    onClick={onSwap}
                  >
                    ⇅
                  </button>
                </div>
                <InputBox
                  label="To"
                  amount={amount * (currencyInfo[toCurrency] || 0)}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => onToCurrencyChange(currency)}
                  selectedCurrency={toCurrency}
                  amountDisabled
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-lg"
                >
                  Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;