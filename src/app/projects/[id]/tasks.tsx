"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useProjects } from "@/context/project-context";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TaskTable({ projectId }: { projectId: string }) {
  const { addTask, deleteTask, toggleTaskCompletion, projects } = useProjects()
  const [newTask, setNewTask] = useState<string>("");

  const project = projects?.find(project => project.id === projectId);

  if (!project) return <div className="flex flex-1 justify-center align-center">Not Found Project</div>

  const handleSubmit = () => {
    addTask(project.id, {
      name: newTask,
    })
    setNewTask('')
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-8 space-y-4">
          <div className="flex items-center space-x-2">
            <Input
              className="w-64"
              type="text"
              placeholder="Add a new task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <Button onClick={handleSubmit}>Add Task</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-10"></TableHead>
                <TableHead>Task</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {project?.tasks?.reverse()?.map((Task) => (
                <TableRow key={Task.id}>
                  <TableCell>
                    <Checkbox
                      checked={Task.completed || false}
                      onCheckedChange={() => toggleTaskCompletion(project.id,Task.id)}
                    />
                  </TableCell>
                  <TableCell className={Task.completed ? "line-through text-muted-foreground" : ""}>
                    {Task.name}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => deleteTask(project.id,Task.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
