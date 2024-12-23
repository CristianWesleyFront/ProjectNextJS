/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { createContext, useContext, useState, useCallback } from "react";
import { Project, Task, ProjectFormData } from "@/types";
import { getRandomNumber } from "@/lib/utils";
import mock from './mock.json'

interface ProjectContextType {
  projects: Project[];
  addProject: (data: ProjectFormData) => void;
  updateProject: (projectId: string, updatedData: Partial<Project>) => void;
  deleteProject: (projectId: string) => void;
  addTask: (projectId: string, task: Partial<Task>) => void;
  updateTask: (projectId: string, taskId: string, updatedData: Partial<Task>) => void;
  deleteTask: (projectId: string, taskId: string) => void;
  toggleTaskCompletion: (projectId: string, taskId: string) => void;
  addComment: (projectId: string, comment: string) => void;
  updateComment: (projectId: string, commentId: string, updatedContent: string) => void;
  deleteComment: (projectId: string, commentId: string) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>(() => {

    const mockData: any[] = mock.map((e: any) => ({
      ...e,
      startDate: new Date(e.startDate),
      endDate: new Date(e.endDate),
    }))

    return mockData
  });

  const calculateProgress = (tasks: Task[]): number => {
    if (!tasks.length) return 0;
    const completedTasks = tasks.filter((task) => task.completed).length;
    return Math.round((completedTasks / tasks.length) * 100);
  };

  const addProject = useCallback((data: ProjectFormData) => {
    const newProject: Project = {
      id: crypto.randomUUID(),
      ...data,
      status: "active",
      progress: 0 + getRandomNumber(),
      tasks: [],
      comments: [],
    };
    setProjects((prev) => [...prev, newProject]);
  }, []);

  const updateProject = useCallback((projectId: string, updatedData: Partial<Project>) => {
    setProjects((prev) =>
      prev.map((project) => (project.id === projectId ? { ...project, ...updatedData } : project))
    );
  }, []);

  const deleteProject = useCallback((projectId: string) => {
    setProjects((prev) => prev.filter((project) => project.id !== projectId));
  }, []);

  const addTask = useCallback((projectId: string, task: Partial<Task>) => {
    const newTask = {
      id: crypto.randomUUID(),
      name: task.name || "",
      completed: false,
      projectId,
    }
    setProjects((prev) =>
      prev.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: [...project.tasks, newTask],
              progress: calculateProgress([...project.tasks, newTask]),
              status:  calculateProgress([...project.tasks, newTask]) === 100 ? 'complete' : 'active' as any,
            }
          : project
      )
    );
  }, []);

  const updateTask = useCallback((projectId: string, taskId: string, updatedData: Partial<Task>) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: project.tasks.map((task) =>
                task.id === taskId ? { ...task, ...updatedData } : task
              ),
            }
          : project
      )
    );
  }, []);

  const deleteTask = useCallback((projectId: string, taskId: string) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === projectId
          ? { ...project, tasks: project.tasks.filter((task) => task.id !== taskId) }
          : project
      )
    );
  }, []);

  const toggleTaskCompletion = useCallback(
    (projectId: string, taskId: string) => {
      setProjects((prev) =>
        prev.map((project) =>
          project.id === projectId
            ? {
                ...project,
                tasks: project.tasks.map((task) =>
                  task.id === taskId ? { ...task, completed: !task.completed } : task
                ),
                progress: calculateProgress(
                  project.tasks.map((task) =>
                    task.id === taskId ? { ...task, completed: !task.completed } : task
                  )
                ),
                status: calculateProgress(
                  project.tasks.map((task) =>
                    task.id === taskId ? { ...task, completed: !task.completed } : task
                  )) === 100 ? 'complete' : 'active' as any,
              }
            : project
        )
      );
    },
    []
  );

  const addComment = useCallback((projectId: string, comment: string) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === projectId
          ? { ...project, comments: [...project.comments, {
            id: crypto.randomUUID(),
            author: 'Cristian  Correia',
            content: comment,
            createdAt: new Date(),
            projectId: projectId
          }] }
          : project
      )
    );
  }, []);

  const updateComment = useCallback((projectId: string, commentId: string, updatedContent: string) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === projectId
          ? {
              ...project,
              comments: project.comments.map((comment) =>
                comment.id === commentId ? { ...comment, content: updatedContent } : comment
              ),
            }
          : project
      )
    );
  }, []);

  const deleteComment = useCallback((projectId: string, commentId: string) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === projectId
          ? { ...project, comments: project.comments.filter((comment) => comment.id !== commentId) }
          : project
      )
    );
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        addProject,
        updateProject,
        deleteProject,
        addTask,
        updateTask,
        deleteTask,
        toggleTaskCompletion,
        addComment,
        updateComment,
        deleteComment,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

// Hook para consumir o contexto
export const useProjects = (): ProjectContextType => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectProvider");
  }
  return context;
};
