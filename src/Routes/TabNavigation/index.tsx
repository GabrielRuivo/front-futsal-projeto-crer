import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { CallingScreen } from '../../Pages/CallingScreen';
import { CategoriesScreen } from '../../Pages/CategoriesScreen';
import { CoachesScreen } from '../../Pages/CoachesScreen';
import { RegisterScreen } from '../../Pages/RegisterScreen';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const icons = {
            Cadastro: focused ? 'add-circle' : 'add-circle-outline',
            Categorias: focused ? 'list' : 'list-outline',
            Chamada: focused ? 'calendar' : 'calendar-outline',
            Treinadores: focused ? 'people' : 'people-outline',
          };
          
          const iconName = icons[route.name];
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Cadastro" component={RegisterScreen} />
      <Tab.Screen name="Categorias" component={CategoriesScreen} />
      <Tab.Screen name="Chamada" component={CallingScreen} />
      <Tab.Screen name="Treinadores" component={CoachesScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}