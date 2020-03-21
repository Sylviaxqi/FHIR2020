import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import BloodPressureScreen from './BloodPressure';
import HeartRateScreen from './HeartRate';



const RootStack = createStackNavigator({     
  Home: HomeScreen,
  BloodPressure: BloodPressureScreen,
  HeartRate: HeartRateScreen,
});
const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export default AppContainer;