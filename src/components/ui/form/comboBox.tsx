import React from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../form";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Command, CommandGroup, CommandItem, CommandInput } from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ComboBox = ({ control, name, label, options, rules,className }: any) => {
  return (
    <FormField
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <FormItem className={cn(className)}>
          <FormLabel>{label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button variant="outline" className="w-full justify-start">
                  {field.value ? options.find((opt: any) => opt.value === field.value)?.text : "Select an option"}
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search..." />
                <CommandGroup>
                  {options.map((option: any) => (
                    <CommandItem
                      key={option.value}
                      onSelect={() => field.onChange(option.value)}
                    >
                      {option.text}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ComboBox;
