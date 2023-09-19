import { FormControl, FormField, FormItem, FormMessage } from '../shadcn/form';
import { Input } from '../shadcn/input';
import { Control } from 'react-hook-form';
import { Icon } from 'react-feather';

interface InputFieldProps {
  control: Control<any>;
  PlaceholderIcon: Icon;
  placeholder: string;
  name: string;
  tabIndex: -1 | 0;
}

export default function InputField({
  control,
  PlaceholderIcon,
  placeholder,
  name,
  tabIndex: tabindex
}: InputFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              tabIndex={tabindex}
              PlaceholderIcon={PlaceholderIcon}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
