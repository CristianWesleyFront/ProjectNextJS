'use client'
import { StatusActive } from "@/components/StatusActive";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useProjects } from "@/context/project-context";
import { format } from "date-fns";

export default function ProjectDetails({ projectId }: { projectId: string }) {
  const { projects } = useProjects();

  const project = projects?.find(project => project.id === projectId);

  if (!project) return <div className="flex flex-1 justify-center align-center">Not Found Project</div>

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Details</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium">Start Date:</p>
            <p className="text-sm text-muted-foreground">{format(project.startDate, "LLLL dd, y")}</p>
          </div>
          <div>
            <p className="text-sm font-medium">End Date:</p>
            <p className="text-sm text-muted-foreground">{format(project.endDate, "LLLL dd, y")}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Responsible:</p>
            <p className="text-sm text-muted-foreground">{project.responsible}</p>
          </div>
          <div>
            <p className="text-sm font-medium mb-1">Status:</p>
            <StatusActive status={project.status}/>
          </div>
        </div>
        <div className="w-32">
          <p className="text-sm font-medium">Progress:</p>
          <Progress value={project.progress} className="mt-2" max={100} indicatorColor={project.progress === 100 ? "bg-green-400" : ''}/>
          <p className="text-sm text-muted-foreground mt-1">{project.progress}% concluído</p>
        </div>
      </CardContent>
    </Card>
  )
}
