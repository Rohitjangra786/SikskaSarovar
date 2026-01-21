
export interface Lesson {
  id: string;
  title: string;
  content: string;
  image?: string;
  mindMapImage?: string;
  codeSnippet?: string;
  isCompleted: boolean;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  icon: string;
  lessons: Lesson[];
  progress: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface Message {
  role: 'user' | 'model';
  content: string;
  timestamp: Date;
}
