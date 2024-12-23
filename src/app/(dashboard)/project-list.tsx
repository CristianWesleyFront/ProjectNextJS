'use client'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { format } from "date-fns";
import { Project } from '@/types';

interface ProjectProps {
  id: string;
  name: string;
  owner: string;
  startEndDate: string;
  progressPercentage: number;
  avatarFallback: string;
}

export function RecentSale({ id, name, owner, startEndDate, progressPercentage: progressPercentage, avatarFallback }: ProjectProps) {
  return (
    <div className='space-y-8'>
      <Link href={`/projects/${id}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarFallback>{avatarFallback}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{name}</p>
              <p className="text-sm text-muted-foreground">Owner: {owner}</p>
              <p className="text-sm text-muted-foreground">{startEndDate}</p>
            </div>
          </div>
          <div className="w-40 flex items-end justify-end flex-col">
            <Progress value={progressPercentage} max={100} indicatorColor={progressPercentage === 100 ? "bg-green-400" : ''}/>
            <p className="text-sm text-muted-foreground">{progressPercentage}/100%</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

interface IProjectList{
  projects: Project[]
}

export default function ProjectList({ projects }: IProjectList) {
  const data: ProjectProps[] = projects?.map(project => (
    {
      id: project.id,
      name: project.name,
      owner: project.responsible,
      startEndDate: `${format(project.startDate, "LLL dd, y")} - ${format(project.endDate, "LLL dd, y")}`,
      progressPercentage: project.progress,
      avatarFallback: project.name.toUpperCase().split(' ').map(e => e[0]).slice(0,2).join(''),
    }
  ))

  return (
    <Card className="col-span-3">
    <CardHeader>
      <CardTitle>Recent Products</CardTitle>
      <CardDescription>
        We finish 265 projects in this month.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <ScrollArea className="h-[350px]">
        <div className="space-y-8">
          {data.map((project, index) => (
            <RecentSale key={index} {...project} />
          ))}
        </div>
      </ScrollArea>
    </CardContent>
  </Card>
  )
}
