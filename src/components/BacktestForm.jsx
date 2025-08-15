import { useState, useEffect } from 'react';

export default function BacktestForm() {
  const getTabFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('type') || 'stock';
  };

  const [selectedStrategy, setSelectedStrategy] =
    useState('전략배분 (정적자산배분)');
  const [initialAmount, setInitialAmount] = useState('');
  const [rebalancingPeriod, setRebalancingPeriod] = useState('');
  const [selectedTab, setSelectedTab] = useState(getTabFromUrl());

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set('type', selectedTab);
    window.history.pushState({}, '', `?${params.toString()}`);
  }, [selectedTab]);

  return (
    <div className="flex flex-col gap-8 p-8 px-20 pt-11">
      {/* Title Section */}
      <div className="flex gap-4">
        <h1
          onClick={() => setSelectedTab('stock')}
          className={`font-bold transition-all duration-300 cursor-pointer ${
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

        <div>
          {/* You can conditionally render form content */}
          {selectedTab === 'stock' ? (
            <div className="text-white">Stock Form</div>
          ) : (
            <div className="text-white">Coin Form</div>
          )}
        </div>
      </div>

      <div className="flex gap-4 border-b border-gray-800 pb-4">
        <button className="bg-transparent text-white font-medium">
          전략 설계
        </button>
        <button className="bg-transparent text-gray-600 font-medium">
          내 투자
        </button>
        <button className="bg-transparent text-gray-600 font-medium">
          전략
        </button>
      </div>

      {/* Form Section */}
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h3 className="text-white font-medium">필터 전략</h3>
          <button className="bg-green-600 px-4 py-2 rounded-md text-white text-sm">
            저장하기
          </button>
        </div>

        {/* Strategy Name Input */}
        <div className="flex flex-col gap-2">
          <label className="text-white text-sm">
            전략 이름을 입력해주세요.
          </label>
          <input
            type="text"
            className="bg-[#1d1e1e] text-white p-3 rounded-md border border-gray-800 focus:outline-none focus:border-green-600"
            placeholder="전략 이름"
          />
        </div>

        {/* Asset Distribution Section */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h4 className="text-white text-sm">자산배분 설정</h4>
            <span className="text-green-600 text-sm">[필수]</span>
          </div>

          {/* Strategy Selection */}
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm">자산배분 알고리즘</label>
            <select
              value={selectedStrategy}
              onChange={(e) => setSelectedStrategy(e.target.value)}
              className="bg-[#1d1e1e] text-white p-3 rounded-md border border-gray-800 focus:outline-none focus:border-green-600"
            >
              <option value="전략배분 (정적자산배분)">
                전략배분 (정적자산배분)
              </option>
              {/* Add other options as needed */}
            </select>
          </div>

          {/* Initial Amount Input */}
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm">초기 투자 금액</label>
            <div className="relative">
              <input
                type="number"
                value={initialAmount}
                onChange={(e) => setInitialAmount(e.target.value)}
                className="bg-[#1d1e1e] text-white p-3 rounded-md border border-gray-800 focus:outline-none focus:border-green-600 w-full"
                placeholder="초기 투자 금액을 입력해주세요."
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                만원
              </span>
            </div>
          </div>

          {/* Rebalancing Period Selection */}
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm">주기 리밸런싱</label>
            <select
              value={rebalancingPeriod}
              onChange={(e) => setRebalancingPeriod(e.target.value)}
              className="bg-[#1d1e1e] text-white p-3 rounded-md border border-gray-800 focus:outline-none focus:border-green-600"
            >
              <option value="">주기 리밸런싱을 선택해주세요.</option>
              {/* Add rebalancing period options */}
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-2 rounded-md font-bold">
            백테스트
          </button>
          <button className="border border-gray-400 text-white px-6 py-2 rounded-md">
            포트 추출
          </button>
        </div>
      </div>
    </div>
  );
}
