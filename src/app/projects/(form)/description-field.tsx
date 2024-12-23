/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea";

export default function DescriptionField({ form }: any) {
  const config = {
    id: 'description',
    label: 'Description',
    placeholder: "Please write project's description",
    descriptionTheField: "This is project's description"
  }

  return (
    <FormField
      control={form.control}
      name={config.id}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{config.label}</FormLabel>
          <FormControl>
            <Textarea 
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