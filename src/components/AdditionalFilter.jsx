import { Select } from 'radix-ui';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { FixedSizeList as List } from 'react-window';
import stocks from '../store/mockData.json';
import { useRef, useState, useMemo } from 'react';
import VirtualizedItem from './VirtualizedItem';

const ALL_FILTERS = stocks.stocks;
const ITEM_HEIGHT = 35;

export default function AdditionalFilter() {
  const [selectedValue, setSelectedValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const listRef = useRef(null);

  const filteredItems = useMemo(() => {
    if (!searchQuery) {
      return ALL_FILTERS;
    }
    const lowerCaseQuery = searchQuery.toLowerCase();
    return ALL_FILTERS.filter((item) =>
      item.label.toLowerCase().includes(lowerCaseQuery),
    );
  }, [searchQuery]);

  return (
    <div>
      <Select.Root value={selectedValue} onValueChange={setSelectedValue}>
        <Select.Trigger
          className="flex items-center justify-between w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              transition-colors duration-200"
          aria-label="Filter"
        >
          <Select.Value
            placeholder="Select a filter..."
            className="text-gray-900"
          />
          <Select.Icon className="text-gray-500">
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            className="mt-2 overflow-hidden bg-white border border-gray-300 rounded-md shadow-lg"
            position="popper"
            sideOffset={5}
            alignOffset={-5}
          >
            <div className="px-3 pt-2">
              <input
                type="text"
                placeholder="Search filters..."
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md
                    focus:outline-none focus:ring-1 focus:ring-blue-500 mb-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <List
              height={300}
              itemCount={filteredItems.length}
              itemSize={ITEM_HEIGHT}
              width="100%"
              ref={listRef}
              itemData={filteredItems}
            >
              {VirtualizedItem}
            </List>

            {filteredItems.length === 0 && (
              <div className="text-center text-gray-500 py-4 text-sm">
                No results found.
              </div>
            )}

            <Select.Arrow className="fill-white" />
          </Select.Content>
        </Select.Portal>
      </Select.Root>

      {selectedValue && (
        <div className="mt-4 p-4 text-center bg-blue-100 rounded-md text-blue-800 text-sm">
          Selected value: <span className="font-semibold">{selectedValue}</span>
        </div>
      )}
    </div>
  );
}
