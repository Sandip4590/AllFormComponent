import React from "react";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../form";
import { cn } from "@/lib/utils";

const FormFileUpload = ({ control, name, rules, label, className, labelClassName, ...props }: any) => {
  return (
    <FormField
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value, ...fieldProps } }) => (
        <FormItem className={cn(className)}>
          <FormLabel className={cn("text-violet-950 uppercase text-xs", labelClassName)}>
            {label}
          </FormLabel>
          <FormControl>
            <input
              type="file"
              onChange={(e) => onChange(e.target.files[0])}
              className="border border-gray-300 p-2 rounded-md w-full file:bg-violet-700 file:text-white file:px-4 file:py-2 file:border-none file:rounded-md"
              {...fieldProps}
              {...props}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFileUpload;