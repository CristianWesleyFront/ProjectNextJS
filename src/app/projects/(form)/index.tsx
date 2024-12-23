"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { DialogFooter } from "@/components/ui/dialog"
import NameField from "./name-field"
import DescriptionField from "./description-field"
import RangeField from "./rangerDate-field"
import ResponsibleField from "./responsible-field"
import { Project } from "@/types"

export const formProjectSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().nullable(),
  startEndDate: z.object({
    from: z.date(),
    to:  z.date(),
  }),
  responsible:  z.string().min(1, {
    message: "Responsible is required"
  })
})

type IProps = {
  initialValues?: Project
  handleSubmit: (values: z.infer<typeof formProjectSchema>) => void
}

export default function FormComponent({ initialValues, handleSubmit }: IProps) {
    const form = useForm<z.infer<typeof formProjectSchema>>({
      resolver: zodResolver(formProjectSchema),
      defaultValues: {
        name: initialValues?.name || "",
        description: initialValues?.description || "",
        startEndDate: {
          from: initialValues?.startDate ? new Date(initialValues?.startDate) : new Date(),
          to:  initialValues?.endDate ? new Date(initialValues?.endDate) : new Date(),
        },
        responsible: initialValues?.responsible || ""
      },
    })

    function onSubmit(values: z.infer<typeof formProjectSchema>) {
      handleSubmit(values)
    }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <NameField form={form} />
        <DescriptionField form={form} />
        <RangeField form={form} />
        <ResponsibleField form={form} />
        <DialogFooter>
          <Button type="submit">{initialValues ? 'Save Changes' : 'Create'}</Button>
        </DialogFooter>
      </form>
    </Form>
  )
}
