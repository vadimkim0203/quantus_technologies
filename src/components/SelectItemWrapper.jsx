import { Select } from 'radix-ui';

export default function SelectItemWrapper({ children, style, ...props }) {
  return (
    <div style={style}>
      <Select.Item {...props}>{children}</Select.Item>
    </div>
  );
}
