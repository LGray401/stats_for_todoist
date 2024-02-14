// hooks/useCompletedTasks.ts
import { useState, useEffect } from 'react';

interface TodoistTask {
    content: string;
    meta_data: null;
    user_id: string;
    task_id: string;
    note_count: number;
    project_id: string;
    section_id: string;
    completed_at: string;
    id: string;
}

const useCompletedTasks = (apiToken: string | undefined) => {
  const [tasks, setTasks] = useState<TodoistTask[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        let date = new Date();

        if (date.getHours() < 5) {
          date.setDate(date.getDate() - 1);
        }

        date.setHours(5,0,0,0);

        const isoDate = date.toISOString();
        const url = `https://api.todoist.com/sync/v9/completed/get_all?since=${isoDate}`;
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Error fetching tasks');
        }

        const completedTasks = await response.json();
        if (completedTasks.items.length === 0) {
          console.log("No completed tasks found.");
          setIsLoading(false);
          return;
        }

        setTasks(completedTasks.items);
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

    fetchTasks();
  }, [apiToken]);

  return { tasks, isLoading, error };
};

export default useCompletedTasks;
