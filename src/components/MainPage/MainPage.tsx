import TaskList from '../TaskList/TaskList';
import TaskCounter from '../TaskCounter/TaskCounter';

import useTodoistTasks from '../../hooks/useTodoistTasks';
import { useAccessToken } from '../../hooks/AccesTokenContext';


interface MainPageProps {
    
    }

function generateState() {
    return (
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
    );
    }

const MainPage: React.FC<MainPageProps> = () => {
 
  const clientId = import.meta.env.VITE_TODOIST_CLIENT_ID as string; 
  const unique_state = generateState();
  const { accessToken } = useAccessToken();
  const { tasks, isLoading, error } = useTodoistTasks(accessToken);

  //check if accessToken is exists otherwise request for authorization
  if (!accessToken) {
    // Construct the authorization URL
    const authorizationUrl = `https://todoist.com/oauth/authorize?client_id=${clientId}&scope=data:read&state=${unique_state}`;
    
    return (
      <div className="App">
        <a href={authorizationUrl}>Authorize with Todoist</a>
      </div>
    );
  }


  if (isLoading) {
    return <div>Loading tasks...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <div className="App">
      <TaskCounter count={tasks.filter(task => !task.content.includes('@no_track')).length} />
    
      <div>
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}

export default MainPage;