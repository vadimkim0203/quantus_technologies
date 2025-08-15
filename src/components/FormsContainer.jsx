import { useState } from 'react';
import FilterButton from './FilterButton';
import StrategyDesign from './StrategyDesign';
import Backtest from './Backtest';
import StatisticalAnalysis from './StatisticalAnalysis';

const FILTER_BUTTON = ['전략 설계', '백테스트', '통계 분석'];

export default function FormsContainer() {
  const [activeTab, setActiveTab] = useState('전략 설계');

  return (
    <div className="">
      <div className="flex gap-4 border-b border-gray-800 pb-4">
        {FILTER_BUTTON.map((tab) => (
          <FilterButton
            key={tab}
            label={tab}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>

      {/* Form Section */}
      <div className="flex flex-col gap-6 pt-6">
        {' '}
        {activeTab === '전략 설계' && <StrategyDesign />}
        {activeTab === '백테스트' && <Backtest />}
        {activeTab === '통계 분석' && <StatisticalAnalysis />}
      </div>
    </div>
  );
}
