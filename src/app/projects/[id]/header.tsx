'use client'
import { useProjects } from "@/context/project-context";
import { UpdateProject } from "../update-project";
import { DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";
import { DeleteProject } from "../delete-project";
import { AlertDialogTrigger } from "@/components/ui/alert-dialog";

export default function HeaderProjectDetails({ projectId }: { projectId: string }) {
  const { projects } = useProjects();

  const project = projects?.find(project => project.id === projectId);

  if (!project) return <div className="flex flex-1 justify-center align-center">Not Found Project</div>

  return (
    <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{project.name}</h1>
        <div className="flex items-center space-x-2">
          <UpdateProject project={project}>
            <DialogTrigger asChild>
              <Button variant="outline" onClick={() => console.log(`/projects/edit/${project.id}`)}>
                <Pencil />
                Edit
              </Button>
            </DialogTrigger>
          </UpdateProject>
          <DeleteProject projectId={project.id}>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">
                <Trash />
                Delete
              </Button>
            </AlertDialogTrigger>
          </DeleteProject>
        </div>
      </div>
  )
}
