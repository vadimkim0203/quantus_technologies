import { useState } from 'react';
import AdditionalFilter from './AdditionalFilter';

export default function AssetAllocationTab() {
  const [additionalFilter, setAdditionalFilter] = useState(false);
  const [initialAmount, setInitialAmount] = useState('');
  const [rebalancingPeriod, setRebalancingPeriod] = useState('');
  const [selectedStrategy, setSelectedStrategy] =
    useState('전략배분 (정적자산배분)');

  function handleAdditionalFilter() {
    setAdditionalFilter(!additionalFilter);
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row gap-2">
        <h3 className="text-md text-white font-bold">{`자산군 추가`}</h3>
        <span className="text-green-500 text-md font-semibold">[필수]</span>
      </div>

      <div>
        <button
          className="text-sm font-[750] justify-center p-3 text-gray15 rounded bg-white flex items-center gap-1 py-2 pl-2 pr-[10px] label-1-normal-bold w-[93px] whitespace-nowrap focus:outline-none border-none"
          onClick={handleAdditionalFilter}
        >
          <img src="src/assets/plusIcon.svg" alt="Plus icon" />
          자산 추가
        </button>
      </div>

      {additionalFilter && (
        <div>
          <AdditionalFilter />
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label className="text-white text-sm">전략 이름을 입력해주세요.</label>
        <input
          type="text"
          className="bg-[#1d1e1e] text-white p-3 rounded-md border border-gray-800 focus:outline-none focus:border-green-600"
          placeholder="전략 이름"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h4 className="text-white text-sm">자산배분 설정</h4>
        </div>

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
          </select>
        </div>

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

        <div className="flex flex-col gap-2">
          <label className="text-white text-sm">주기 리밸런싱</label>
          <select
            value={rebalancingPeriod}
            onChange={(e) => setRebalancingPeriod(e.target.value)}
            className="bg-[#1d1e1e] text-white p-3 rounded-md border border-gray-800 focus:outline-none focus:border-green-600"
          >
            <option value="">주기 리밸런싱을 선택해주세요.</option>
          </select>
        </div>
      </div>

      <div className="flex gap-4">
        <button className="bg-white text-black px-6 py-2 rounded-md font-bold">
          백테스트
        </button>
        <button className="border border-gray-400 text-white px-6 py-2 rounded-md">
          포트 추출
        </button>
      </div>
    </div>
  );
}
