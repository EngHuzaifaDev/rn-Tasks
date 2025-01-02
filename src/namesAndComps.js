import Home from './screens/Home.tsx';
import AllTasks from './root/screens/AllTasks.tsx';
import FirstTask from './tasks/first/FirstTask.tsx';
const Screens = {
  names: {
    AllTasks: 'AllTasks',
    Home: 'Home',
    FirstTask: 'FirstTask'
  },
  screens: {
    AllTasks: AllTasks,
    Home: Home,
    FirstTask: FirstTask
  },
};

export default Screens;