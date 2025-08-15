export default function FilterButton({ label, activeTab, setActiveTab }) {
  const isActive = activeTab === label;
  return (
    <button
      className={`relative text-lg font-bold bg-transparent border-none transition-colors duration-200 focus:outline-none px-0 ${
        activeTab === label ? 'text-white bg-[#1d1e1e]' : 'text-gray-600'
      }`}
      onClick={() => setActiveTab(label)}
    >
      {label}
      {activeTab === label && (
        <span
          className="absolute left-0 right-0 h-[2px] bg-white"
          style={{ bottom: '-16px' }}
        />
      )}
    </button>
  );
}
