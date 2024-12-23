'use client'
import { FolderKanban, ListChecks, MessagesSquare, LaptopMinimalCheck } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Project } from '@/types';

interface StatisticCardProps {
  title: string;
  value: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export function StatisticCard({ title, value, description, Icon }: StatisticCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-6 w-6 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

interface IStatics {
  projects: Project[]
}

export default function Statics({ projects }: IStatics) {
  const statsLastMonth = {
    projects: 1,
    projectsFinished: 1,
    tasksFinished: 120,
    comments: 180
  }

  const calculateDescription = (current: number, lastMonth: number): string => {
    const percentageChange = ((current / lastMonth - 1) * 100);
    return `${percentageChange > 0 ? '+' : ''}${percentageChange.toFixed(1)}% from last month`;
  };

  const stats = [
    {
      title: "Projects",
      value: projects.length.toString(),
      description: calculateDescription(projects.length, statsLastMonth.projects),
      Icon: FolderKanban,
    },
    {
      title: "Projects Finished",
      value: projects.filter(e => e.progress === 100).length.toString(),
      description: calculateDescription(projects.filter(e => e.status === "completed").length, statsLastMonth.projectsFinished),
      Icon: LaptopMinimalCheck,
    },
    {
      title: "Tasks finished",
      value: projects
        .reduce((acc, project) => acc + project.tasks.filter((task) => task.completed).length, 0)
        .toString(),
      description: calculateDescription(
        projects.reduce((acc, project) => acc + project.tasks.filter((task) => task.completed).length, 0),
        statsLastMonth.tasksFinished
      ),
      Icon: ListChecks,
    },
    {
      title: "Comments",
      value: projects.reduce((acc, project) => acc + project.comments.length, 0).toString(),
      description: calculateDescription(
        projects.reduce((acc, project) => acc + project.comments.length, 0),
        statsLastMonth.comments
      ),
      Icon: MessagesSquare,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatisticCard
          key={index}
          title={stat.title}
          value={stat.value}
          description={stat.description}
          Icon={stat.Icon}
        />
      ))}
    </div>
  );
}
