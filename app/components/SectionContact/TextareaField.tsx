import React from 'react';
import { FormField, FormItem, FormControl, FormMessage } from '../shadcn/form';
import { Icon } from 'react-feather';
import { Control } from 'react-hook-form';
import { Textarea } from '../shadcn/textarea';

interface TextarefFieldProps {
  control: Control<any>;
  PlaceholderIcon: Icon;
  placeholder: string;
  name: string;
}

export default function TextareaField({
  control,
  PlaceholderIcon,
  placeholder,
  name,
}: TextarefFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Textarea
            className='resize-none'
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
