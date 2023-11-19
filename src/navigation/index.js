import * as React from 'react';
import { Home, Search, Library } from "../pages";
import Icon from '../components/atoms/icon';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const generateTabBarIcon = (name, focused, color, size) => {
  let iconName;

  switch (name) {
    case 'Home':
      iconName = focused ? 'home' : 'home-outline';
      break;
    case 'Search':
      iconName = focused ? 'search' : 'search-outline';
      break;
    case 'Library':
      iconName = focused ? 'library' : 'library-outline';
      break;
    default:
      iconName = '';
  }

  return <Icon name={iconName} size={size} color={color} />;
}

const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Library"
      screenOptions={({ route: { name } }) => ({
        tabBarIcon: ({ focused, color, size }) => generateTabBarIcon(name, focused, color, size)
      })}
      tabBarOptions={{
        activeTintColor: '#eaeaea',
        inactiveTintColor: '#8c8c8c',
        activeBackgroundColor: '#272727',
        inactiveBackgroundColor: '#272727'
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Library" component={Library} />
    </Tab.Navigator>
  );
}

export default Navigation;