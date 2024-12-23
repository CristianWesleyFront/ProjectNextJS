'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import Form, { formProjectSchema } from "./(form)"
import { useProjects } from "@/context/project-context"
import { z } from "zod"
import React, { ReactNode, useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { format } from "date-fns"
import { Project } from "@/types"

interface IUpdateProject {
  project: Project
  children: ReactNode
}

export function UpdateProject({ project, children }: IUpdateProject) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast()
  const { updateProject } = useProjects()
  const handleSubmit = (values: z.infer<typeof formProjectSchema>) => {
    updateProject(project.id, {
      name: values.name,
      description: values.description || "",
      responsible: values.responsible,
      startDate: values.startEndDate.from,
      endDate: values.startEndDate.to
    })
    setOpen(false)
    toast({
      title: "Project edited successfully",
      description: format(new Date(), "LLLL dd, y HH:mm:ss"),
      duration: 3
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {children}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit project: {project.id}</DialogTitle>
          <DialogDescription>
            Edit project information
          </DialogDescription>
        </DialogHeader>
        <Form handleSubmit={handleSubmit} initialValues={project} />
      </DialogContent>
    </Dialog>
  )
}
