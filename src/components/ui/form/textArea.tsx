import React from "react";

import { Input } from "../input";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../form";
import { Textarea } from "../textarea";
import { cn } from "@/lib/utils";



const TextArea = ({className, control, name, rules, label, ...props }) => {
  return (
    <FormField
    control={control}
    name={name}
    rules={rules}
    render={({ field }) => (
      <FormItem className={cn("overflow-hidden",className)}>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Textarea
            placeholder={label}
            className="resize-none"
            {...field}
          />
        </FormControl>
        
        <FormMessage />
      </FormItem>
    )}
  />
  );
};

export default TextArea;
