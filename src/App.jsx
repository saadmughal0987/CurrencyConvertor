import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowToUse from "./components/HowToUse";
import Footer from "./components/Footer";
import { useCurrencyInfo } from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[toCurrency]);
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Header />
      <Hero
        amount={amount}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        convertedAmount={convertedAmount}
        onAmountChange={setAmount}
        onFromCurrencyChange={setFromCurrency}
        onToCurrencyChange={setToCurrency}
        onSwap={swap}
        onConvert={convert}
        options={options}
      />
      <Features />
      <HowToUse />
      <Footer />
    </div>
  );
}

export default App;
