'use client'
import { utils, writeFile } from "xlsx"
import { columns } from "./table-columns-project"
import { DataTable } from "./table-project"
import { useProjects } from "@/context/project-context"
import { Button } from "@/components/ui/button"
import { CreateProject } from "./create-project"
import { format } from "date-fns"
import { LoaderCircle } from "lucide-react"
import { redirect } from "next/navigation"
import { useSession } from "next-auth/react"

export default function ProjectPage() {
  const session = useSession();
  const { projects } =  useProjects()

  const handleDownload = () => {
    const worksheet = utils.json_to_sheet(projects);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Projects");
    writeFile(workbook, `projects-${format(new Date(), 'mm-dd-yyyy')}.xlsx`);
  };


  if (session.status === 'loading') {
    return (
      <div className="flex flex-1 flex-col justify-center align-center h-max w-max">
        <LoaderCircle />
        Loading...
      </div>
    )
  }

  if (session.status === "unauthenticated") {
    redirect("/login");
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between space-y-2 mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <div className="flex items-center space-x-2">
            <CreateProject />
            <Button onClick={handleDownload}>Download</Button>
          </div>
        </div>
      <DataTable columns={columns} data={projects} />
    </div>
  )
}

