import React from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

const FormRadio = ({ control, name, label, options, rules,className }: any) => {
  return (
    <FormField
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <FormItem className={cn("space-y-1",className)}>
          <FormLabel>{label}</FormLabel>
          <FormControl >
            <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
              {options.map((option: any) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <label htmlFor={option.value} className="text-sm  font-medium">
                    {option.text}
                  </label>
                </div>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormRadio;
