export default function Sidemenu({ label, activeTab, setActiveTab }) {
  const isActive = activeTab === label;
  return (
    <div className="flex flex-col">
      <button
        className={`relative text-lg text-left font-bold border-none transition-colors duration-200 focus:outline-none h-[55px] w-[220px] ${
          activeTab === label
            ? 'text-white bg-[#1d1e1e]'
            : 'text-gray-600 bg-transparent'
        }`}
        onClick={() => setActiveTab(label)}
      >
        {label}
      </button>
    </div>
  );
}
