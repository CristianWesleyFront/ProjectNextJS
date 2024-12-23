"use client"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Project } from "@/types";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

interface IChartData {
  name: string;
  total: number
}

interface IOverViewChart {
  projects: Project[]
}

export default function OverViewChart({ projects }: IOverViewChart) {
  const data: IChartData[] = projects?.filter(e => e.status !== "completed")?.map(e => ({
    name: e.name,
    total: e.progress
  }))

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Overview project&apos;s progress</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Bar
              dataKey="total"
              fill="currentColor"
              radius={[4, 4, 0, 0]}
              className="fill-primary"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
