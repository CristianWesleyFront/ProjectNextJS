'use client'
import { startOfMonth, endOfMonth, format } from "date-fns"
import { utils, writeFile } from "xlsx";
import { Button } from "@/components/ui/button"
import { CalendarDateRangePicker } from "@/components/date-range-picker"

import { CreateProject } from "../projects/create-project"
import Statics from "./statics"
import ProjectList from "./project-list"
import OverViewChart from "./overView-chart"
import { useProjects } from "@/context/project-context"
import { useEffect, useState } from "react"
import { DateRange } from "react-day-picker"
import { Project } from "@/types"

export default function DashboardPage() {
  const { projects } = useProjects();
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: startOfMonth(new Date('01-01-2023')),
    to: endOfMonth(new Date()),
  })
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (dateRange) {
      const filtered = projects?.filter((project) => {
        const startDate = new Date(project.startDate);
        if (dateRange.from && dateRange.to) {
          return startDate >= dateRange.from && startDate <= dateRange.to;
        }
      });
      setFilteredProjects(filtered);
    } else {
      setFilteredProjects(projects);
    }
  }, [dateRange, projects]);

  const handleDownload = () => {
    const worksheet = utils.json_to_sheet(filteredProjects);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Projects");
    writeFile(workbook, `filtered_projects-${format(new Date(), 'mm-dd-yyyy')}.xlsx`);
  };

  return (
    <div className="hidden flex-col md:flex">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2 mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <CalendarDateRangePicker
              handleChange={(range) => setDateRange(range)}
              initValue={dateRange}
            />
            <CreateProject />
            <Button onClick={handleDownload}>Download</Button>
          </div>
        </div>
        <Statics projects={filteredProjects} />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <OverViewChart projects={filteredProjects} />
          <ProjectList projects={filteredProjects} />
        </div>
      </div>
    </div>
  );
}
