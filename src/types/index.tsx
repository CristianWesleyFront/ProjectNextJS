// types.ts

// Interface para o Projeto
export interface Project {
  id: string; // Identificador único
  name: string; // Nome do projeto
  description: string; // Descrição do projeto
  startDate: Date; // Data de início
  endDate: Date; // Data de término
  status:  IProjectStatus;// Status do projeto
  progress: number; // Progresso do projeto (0 a 100)
  responsible: string; // Responsável pelo projeto
  tasks: Task[]; // Lista de tarefas associadas
  comments: Comment[]; // Lista de comentários
}

export type IProjectStatus = "active" | "delayed" | "completed";

// Interface para as Tarefas do Projeto
export interface Task {
  id: string; // Identificador único da tarefa
  name: string; // Nome da tarefa
  completed: boolean; // Status de conclusão
  projectId: string; // Identificador do projeto ao qual pertence
}

// Interface para os Comentários
export interface Comment {
  id: string; // Identificador único do comentário
  content: string; // Texto do comentário
  author: string; // Autor do comentário
  createdAt: Date; // Data de criação
  projectId: string; // Identificador do projeto ao qual pertence
}

// Interface para os Dados da Página Inicial
export interface HomePageData {
  activeProjectsCount: number; // Número de projetos ativos
  completedProjectsCount: number; // Número de projetos concluídos
  progressData: ChartData[]; // Dados para os gráficos
}

// Interface para Dados de Gráficos
export interface ChartData {
  label: string; // Rótulo do dado (ex.: nome do projeto)
  value: number; // Valor associado (ex.: porcentagem de progresso)
}

// Interface para os Dados do Modal de Criação de Projeto
export interface ProjectFormData {
  name: string; // Nome do projeto
  description: string; // Descrição do projeto
  startDate: Date; // Data de início
  endDate: Date; // Data de término
  responsible: string; // Responsável pelo projeto
}

// Interface para o Usuário (autenticação)
export interface User {
  id: string; // Identificador único do usuário
  name: string; // Nome do usuário
  email: string; // Email do usuário
  avatarUrl?: string; // URL opcional para o avatar
}

// Interface para Configurações do Tema
export interface ThemeSettings {
  darkModeEnabled: boolean; // Indica se o modo escuro está ativo
}
