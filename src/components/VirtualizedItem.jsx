import { Select } from 'radix-ui';
import SelectItemWrapper from './SelectItemWrapper';

const VirtualizedItem = ({ index, style, data }) => {
  const filteredItems = data;
  const item = filteredItems[index];

  if (!item) return null;
  return (
    <SelectItemWrapper value={item.value} key={item.value} style={style}>
      <Select.ItemText>{item.label}</Select.ItemText>
      <Select.ItemIndicator>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
        </svg>
      </Select.ItemIndicator>
    </SelectItemWrapper>
  );
};

export default VirtualizedItem;
