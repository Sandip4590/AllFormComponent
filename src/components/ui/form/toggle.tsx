  import React from "react";
  import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../form";
  import { Switch } from "@/components/ui/switch";
  import { cn } from "@/lib/utils";

  const FormToggle = ({className, control, name, label, rules }: any) => {
    return (
      <FormField
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <FormItem className={cn("flex items-center justify-between" , className)}>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Switch checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  };

  export default FormToggle;
