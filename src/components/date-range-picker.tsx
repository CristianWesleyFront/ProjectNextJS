"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface ICalendarDateRangePicker extends React.HTMLAttributes<HTMLDivElement> {
  handleChange: (range: DateRange | undefined) => void
  initValue: DateRange | undefined
}

export function CalendarDateRangePicker({
  className, handleChange, initValue
}: ICalendarDateRangePicker) {

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[260px] justify-start text-left font-normal",
              !initValue && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {initValue?.from ? (
              initValue.to ? (
                <>
                  {format(initValue.from, "LLL dd, y")} -{" "}
                  {format(initValue.to, "LLL dd, y")}
                </>
              ) : (
                format(initValue.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={initValue?.from}
            selected={initValue}
            onSelect={handleChange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
