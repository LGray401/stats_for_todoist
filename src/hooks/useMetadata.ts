// hooks/useMetadata.ts
import { useState, useEffect } from 'react';

interface Project {
    color: string;
    collapsed: boolean;
    parent_id: string | null;
    is_deleted: boolean;
    id: string;
    user_id: string;
    name: string;
    child_order: number;
    is_archived: boolean;
    view_style: string;
  }
  
  interface ProjectsMetadata {
    [key: string]: Project;
  }
  

const useMetadata = (apiToken: string) => {
  const [projects, setProjects] = useState<ProjectsMetadata[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const url = `https://api.todoist.com/sync/v9/completed/get_all?since=2023-10-22T05:00`;
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Error fetching metadata');
        }

        const completedTasksMetadata = await response.json();
        setProjects(completedTasksMetadata.projects);
      } catch (e) {
        let errorMsg = "An error occurred";
        if (e instanceof Error) {
          errorMsg = e.message;
        }
        console.error(errorMsg, e);
        setError(errorMsg);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMetadata();
  }, [apiToken]);

  return { projects, isLoading, error };
};

export default useMetadata;
