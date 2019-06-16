
import Welcome from './Component/index/Welcome';
import Signup from './Component/index/Signup';
import Signin from './Component/index/Signin';
import Dashboard from './Component/index/Dashboard';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const Navigation = createStackNavigator({
  Welcome: Welcome,
  Signup:Signup,
  Signin:Signin,
  Dashboard:Dashboard
});
export default createAppContainer(Navigation)