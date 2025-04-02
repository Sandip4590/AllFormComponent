import React from "react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";
import { cn } from "@/lib/utils";
// interface Props {
//   control: any;
//   name: string;
//   label: string;
//   placeholder: string;
//   rules: string;
//   className: string;
//   options: { value: string; text: string }[];
// }

const FormSelect = ({
  control,
  name,
  rules,
  label,
  placeholder,
  options,
  className,
}: any) => {
  return (
    <FormField
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <FormItem className={cn(className)}>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder}  />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((x) => (
                <SelectItem key={x.value} value={x.value}>
                  {x.text}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormSelect;
