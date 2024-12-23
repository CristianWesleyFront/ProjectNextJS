"use client";

import { useParams } from "next/navigation";
import Comments from "./comments";
import ProjectDetails from "./details";
import HeaderProjectDetails from "./header";
import TaskTable from "./tasks";

export default function Page() {
  const params = useParams<{ id: string}>();

  if (!params?.id) {
    return (
      <div className="flex flex-1 justify-center items-center">
        Not Found Project
      </div>
    );
  }

  return (
    <div className="p-8 space-y-6">
      <HeaderProjectDetails projectId={params?.id} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectDetails projectId={params?.id} />
        <Comments projectId={params?.id} />
      </div>
        <TaskTable projectId={params?.id} />
    </div>
  );
}
