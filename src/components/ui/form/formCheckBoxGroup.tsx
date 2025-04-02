import React from "react";
import { Controller } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../form";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface Props {
  control: any;
  name: string;
  label: string;
  rules:string;
  options: { value: string; text: string }[];
}

const FormCheckboxGroup = ({ control, name, rules, label, options , className}: any) => {
  return (
    <FormField
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <FormItem className={cn(className)}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="space-y-2">
              {options.map((option) => (
                <label key={option.value} className="flex items-center space-x-2">
                  <Checkbox
                    checked={field.value?.includes(option.value)}
                    onCheckedChange={(checked) => {
                      const newValue = checked
                        ? [...(field.value || []), option.value]
                        : field.value.filter((v: string) => v !== option.value);
                      field.onChange(newValue);
                    }}
                  />
                  <span>{option.text}</span>
                </label>
              ))}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormCheckboxGroup;
