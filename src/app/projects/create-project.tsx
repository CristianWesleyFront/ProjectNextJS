'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Form, { formProjectSchema } from "./(form)"
import { useProjects } from "@/context/project-context"
import { z } from "zod"
import React, { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { format } from "date-fns"

export function CreateProject() {
  const [open, setOpen] = useState(false);
  const { toast } = useToast()
  const { addProject } = useProjects()
  const handleSubmit = (values: z.infer<typeof formProjectSchema>) => {
    addProject({
      name: values.name,
      description: values.description || "",
      responsible: values.responsible,
      startDate: values.startEndDate.from,
      endDate: values.startEndDate.to
    })
    setOpen(false)
    toast({
      title: "Project created successfully",
      description: format(new Date(), "LLLL dd, y HH:mm:ss"),
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create Project</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create new project</DialogTitle>
          <DialogDescription>
            Fill in the fields below to create a new project and manage its tasks and deadlines effectively.
          </DialogDescription>
        </DialogHeader>
        <Form handleSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  )
}
