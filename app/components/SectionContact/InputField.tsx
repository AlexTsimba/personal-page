import { FormControl, FormField, FormItem, FormMessage } from '../shadcn/form';
import { Input } from '../shadcn/input';
import { Control } from 'react-hook-form';
import { Icon } from 'react-feather';

interface InputFieldProps {
  control: Control<any>;
  PlaceholderIcon: Icon;
  placeholder: string;
  name: string;
}

export default function InputField({
  control,
  PlaceholderIcon,
  placeholder,
  name,
}: InputFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
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
