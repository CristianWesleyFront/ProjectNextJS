/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

export default function NameField({ form }: any) {
  const config = {
    id: 'name',
    label: 'Name',
    placeholder: "Please write project's name",
    descriptionTheField: "This is project's name"
  }

  return (
    <FormField
      control={form.control}
      name={config.id}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{config.label}</FormLabel>
          <FormControl>
            <Input 
              placeholder={config.placeholder} 
              {...field} 
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}