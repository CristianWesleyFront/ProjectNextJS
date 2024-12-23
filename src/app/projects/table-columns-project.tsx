"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ChevronDown, FilterX, Files, ArrowRight, Pencil, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Project } from "@/types";
import { Progress } from "@/components/ui/progress";
import { UpdateProject } from "./update-project";
import { DialogTrigger } from "@/components/ui/dialog";
import { DeleteProject } from "./delete-project";
import { AlertDialogTrigger } from "@/components/ui/alert-dialog";
import Link from "next/link";
import { StatusActive } from "@/components/StatusActive";
import { DataTableColumnHeader } from "@/components/data-table-column-header";

export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Project Name" />
    ),
  },
  {
    accessorKey: "responsible",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Responsible" />
    ),
  },
  {
    accessorKey: "startDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Start Date" />
    ),
    cell: ({ cell }) => {
      const date = new Date(cell.getValue() as Date);
      return date.toLocaleDateString();
    },
  },
  {
    accessorKey: "endDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="End Date" />
    ),
    cell: ({ cell }) => {
      const date = new Date(cell.getValue() as Date);
      return date.toLocaleDateString();
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ cell }) => {
      const status = cell.getValue() as string;
      return <StatusActive status={status} />
    }
  },
  {
    accessorKey: "progress",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Progress" />
    ),
    cell: ({ cell }) => {
      const progressPercentage = cell.getValue() as number;
      return (
        <div className="w-20 flex items-end justify-end flex-col">
          <Progress value={progressPercentage} max={100} indicatorColor={progressPercentage === 100 ? "bg-green-400" : ''}/>
          <p className="text-xs text-muted-foreground mt-1">{progressPercentage}/100%</p>
        </div>
      )
    },
  },
  {
    id: "actions",
    header: ({ table }) => {
      return (
        <div className="flex justify-end">
          <Button
            variant="ghost"
            onClick={() => {
              table.resetColumnOrder()
              table.resetGlobalFilter()
              table.resetColumnFilters()
              table.resetColumnSizing()
              table.resetColumnVisibility()
              table.resetSorting()
            }}
          >
            <FilterX />
            Reset Filters
          </Button>
        </div>

      )
    },
    cell: ({ row }) => {
      const project = row.original;
      return (
        <UpdateProject project={project}>
          <DeleteProject projectId={project.id}>
            <div className="flex justify-end">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="h-8 w-24 p-0">
                    <span className="sr-only">Open menu</span>
                    Actions
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem
                    onClick={() => navigator.clipboard.writeText(project.id)}
                  >
                    <Files />
                    Copy Project ID
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <Link href={`/projects/${project.id}`} >
                    <DropdownMenuItem>
                      <ArrowRight />
                      View Details
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem>
                    <Pencil />
                    <DialogTrigger>Edit Project</DialogTrigger>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Trash />
                    <AlertDialogTrigger>Delete Project</AlertDialogTrigger>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </DeleteProject>
        </UpdateProject>
      );
    },
  },
];
