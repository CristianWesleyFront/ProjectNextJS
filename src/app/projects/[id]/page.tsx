"use client";

import { redirect, useParams } from "next/navigation";
import Comments from "./comments";
import ProjectDetails from "./details";
import HeaderProjectDetails from "./header";
import TaskTable from "./tasks";
import { LoaderCircle } from "lucide-react";
import { useSession } from "next-auth/react";

export default function Page() {
  const session = useSession();
  const params = useParams<{ id: string}>();

  if (!params?.id) {
    return (
      <div className="flex flex-1 justify-center items-center">
        Not Found Project
      </div>
    );
  }

  if (session.status === 'loading') {
    return (
      <div className="flex flex-1 flex-col justify-center align-center h-max w-max">
        <LoaderCircle />
        Loading...
      </div>
    )
  }

  if (session.status === "unauthenticated") {
    redirect("/login");
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
