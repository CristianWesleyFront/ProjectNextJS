'use client'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area"
import { useProjects } from "@/context/project-context";
import { format } from "date-fns"
import { useState } from "react";
import { Button } from "@/components/ui/button";


export default function Comments({ projectId }: { projectId: string }) {
  const [newComment, setNewComment] = useState<string>("");

  const { projects, addComment } = useProjects();

  const project = projects?.find(project => project.id === projectId);

  if (!project) return <div className="flex flex-1 justify-center align-center">Not Found Project</div>


  const handleSubmit = () => {
    addComment(project.id, newComment)
    setNewComment('')
  };


  return (
    <Card>
      <CardHeader>
        <CardTitle>Comentários</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-8 space-y-4">
          <ScrollArea className="h-[150px]">
            <ul className="space-y-4">
              {project?.comments.map((comment) => (
                <li key={comment.id}>
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback>{comment.author[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{comment.author}</span>
                    <span className="text-sm text-muted-foreground">{format(comment.createdAt, "LLLL dd, y")}</span>
                  </div>
                  <p className="text-sm">{comment.content}</p>
                </li>
              ))}
            </ul>
          </ScrollArea>
          <div className="flex flex-col items-center">
            <Input
              type="text"
              placeholder="Add a new task..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <div className="flex w-[100%] mt-2 justify-end align-bottom">
              <Button onClick={handleSubmit}>Add Comment</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
