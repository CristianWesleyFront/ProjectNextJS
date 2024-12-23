/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Table } from "@tanstack/react-table"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DataTableViewOptions } from "@/components/data-table-view-options"

import { DataTableFacetedFilter } from "@/components/data-table-faceted-filter"

import {
  CheckCircle,
  Circle,
  CircleOff, PersonStanding
} from "lucide-react"

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
]

export const statuses = [
  {
    value: "active",
    label: "Active",
    icon: Circle,
  },
  {
    value: "delayed",
    label: "Delayed",
    icon: CircleOff,
  },
  {
    value: "completed",
    label: "Completed",
    icon: CheckCircle,
  }
]

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  data: any;
}

export function DataTableProjectToolbar<TData>({
  table, data
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between space-y-8">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter project..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn("responsible") && (
          <DataTableFacetedFilter
            column={table.getColumn("responsible")}
            title="Responsible"
            options={data?.map((e:any) => ({
              label: e.responsible, value: e.responsible, icon: PersonStanding
            }))}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
