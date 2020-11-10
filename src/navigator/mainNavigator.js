import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings31170468Navigator from '../features/Settings31170468/navigator';
import NotificationList32170467Navigator from '../features/NotificationList32170467/navigator';
import Feed34170466Navigator from '../features/Feed34170466/navigator';
import Settings170424Navigator from '../features/Settings170424/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings31170468: { screen: Settings31170468Navigator },
NotificationList32170467: { screen: NotificationList32170467Navigator },
Feed34170466: { screen: Feed34170466Navigator },
Settings170424: { screen: Settings170424Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
