import { useState } from 'react';
import Sidemenu from './Sidemenu';
import FactorStrategyTab from './FactorStrategyTab';
import AssetAllocationTab from './AssetAllocationTab';
import StrategyExampleTab from './StrategyExampleTab';
import PartnershipTab from './PartnershipTab';

const SIDEMENU_BUTTON = ['팩터 전략', '자산배분', '전략 예시', '파트너십'];

export default function StrategyDesign() {
  const [activeTab, setActiveTab] = useState('팩터 전략');

  return (
    <div className="flex flex-row gap-24">
      <div>
        {SIDEMENU_BUTTON.map((tab) => (
          <Sidemenu
            key={tab}
            label={tab}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>
      {/* TABS CONTAINER */}
      <div className="flex">
        {' '}
        {activeTab === '팩터 전략' && <FactorStrategyTab />}
        {activeTab === '자산배분' && <AssetAllocationTab />}
        {activeTab === '전략 예시' && <StrategyExampleTab />}
        {activeTab === '파트너십' && <PartnershipTab />}
      </div>
    </div>
  );
}
