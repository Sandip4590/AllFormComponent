import React from "react";

import { Input } from "../input";
import { FormControl, FormField, FormItem, FormLabel, FormMessage} from "../form";
import { cn } from "@/lib/utils";


type Props = {};

const FormInput = ({ control, name, rules, label,className ,labelClassName, ...props }: any) => {
  return (
    <FormField
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <FormItem className={cn(className)}>
          <FormLabel className={cn(" ",labelClassName)}>{label}</FormLabel>
          <FormControl>
            <Input {...field} {...props} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
