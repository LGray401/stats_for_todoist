import { useEffect, useState } from 'react';

interface Project {
  id: number;
  name: string;
}

const useProjects = (accessToken: string|null) => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('https://api.todoist.com/sync/v9/sync', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        'sync_token': '*',
        'resource_types': '["projects"]'
      })
    })
    .then(response => response.json())
    .then(data => setProjects(data.projects))
    .catch(error => console.error(error));
  }, [accessToken]);

  return projects;
};

export default useProjects;