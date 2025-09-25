import React from 'react';

function HowToUse() {
  return (
    <section id="how-to-use" className="py-24 bg-gradient-to-r from-gray-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How to Use</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Converting currencies has never been easier. Follow these simple steps to get started
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group text-center p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Enter Amount</h3>
            <p className="text-gray-600 text-lg leading-relaxed">Type the amount you want to convert in the "From" field with precision</p>
          </div>

          <div className="group text-center p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Select Currencies</h3>
            <p className="text-gray-600 text-lg leading-relaxed">Choose your source and target currencies from our comprehensive dropdown menus</p>
          </div>

          <div className="group text-center p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Result</h3>
            <p className="text-gray-600 text-lg leading-relaxed">Click convert to see the exchange rate and converted amount instantly</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToUse;