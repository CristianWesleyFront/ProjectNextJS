/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ResponsibleField({ form }: any) {
  const config = {
    id: 'responsible',
    label: 'Responsible',
    placeholder: "Please select project's responsible",
    descriptionTheField: "This is project's responsible",
    options: [
      { label: "Cristian Correia", value: "Cristian Correia" },
      { label: "Rafael Soares", value: "Rafael Soares" },
      { label: "Wesley Oliveira", value: "Wesley Oliveira" },
    ]
  }

  return (
    <FormField
      control={form.control}
      name={config.id}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{config.label}</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={config.placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {
                  config.options?.map(element => (
                    <SelectItem 
                      key={element.value} 
                      value={element.value}
                    >
                      {element.label}
                    </SelectItem>
                  ))
                }
              </SelectContent>
            </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
