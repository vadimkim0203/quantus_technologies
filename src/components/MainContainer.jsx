import { useState, useEffect } from 'react';
import BacktestForm from './FormsContainer';

export default function MainContainer() {
  const getTabFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('type') || 'stock';
  };
  const [selectedTab, setSelectedTab] = useState(getTabFromUrl());

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set('type', selectedTab);
    window.history.pushState({}, '', `?${params.toString()}`);
  }, [selectedTab]);

  return (
    <div className="flex flex-col gap-8 p-8 px-20 pt-11">
      <div className="flex gap-4">
        <h1
          onClick={() => setSelectedTab('stock')}
          className={`font-extrabold transition-all duration-300 cursor-pointer ${
            selectedTab === 'stock'
              ? 'text-white text-2xl'
              : 'text-gray-600 text-xl'
          }`}
        >
          주식 퀀트
        </h1>
        <h1
          onClick={() => setSelectedTab('coin')}
          className={`font-bold transition-all duration-300 cursor-pointer ${
            selectedTab === 'coin'
              ? 'text-white text-2xl'
              : 'text-gray-600 text-xl'
          }`}
        >
          코인 퀀트
        </h1>
      </div>
      <BacktestForm />
    </div>
  );
}
