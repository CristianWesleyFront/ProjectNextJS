/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

export default function RangeField({ form }: any) {
  const config = {
    id: 'startEndDate',
    label: 'Start and End Date',
    placeholder: "Select a range date",
    descriptionTheField: "The date is used to project's deadline"
  }

  return (
    <FormField
      control={form.control}
      name={config.id}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>{config.label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[240px] pl-3 text-left font-normal",
                  !field.value && "text-muted-foreground"
                )}
              >
                {field.value?.from ? (
                  field.value.to ? (
                    <>
                      {format(field.value.from, "LLL dd, y")} -{" "}
                      {format(field.value.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(field.value.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="range"
                defaultMonth={field.value?.from}
                selected={field.value}
                onSelect={field.onChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormDescription>
            {config.descriptionTheField}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}