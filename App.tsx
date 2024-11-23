import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import CoursesScreen from './components/CoursesScreen';
import AboutUsScreen from './components/AboutUsScreen';
import FilterScreen from './components/FilterScreen'; // Import FilterScreen

const Stack = createNativeStackNavigator();

const App = () => {
  const [meals, setMeals] = useState([
    { id: 1, name: 'Steak', course: 'Mains', price: 250, image: require('./assets/Image 1.jpg') },
    { id: 2, name: 'Caesar Salad', course: 'Starters', price: 100, image: require('./assets/Image 2.jpg') },
    { id: 3, name: 'Chocolate Cake', course: 'Desserts', price: 80, image: require('./assets/Image 3.jpg') },
    { id: 4, name: 'Red Wine', course: 'Drinks', price: 50, image: require('./assets/Image 4.jpg') },
  ]);

  const [selectedMeals, setSelectedMeals] = useState([]);

  // State for filtered meals
  const [filteredMeals, setFilteredMeals] = useState(meals);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen
              {...props}
              meals={filteredMeals} // Pass filtered meals to HomeScreen
              selectedMeals={selectedMeals}
              setSelectedMeals={setSelectedMeals}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Courses">
          {(props) => (
            <CoursesScreen
              {...props}
              meals={meals} // Pass meals from parent
              setMeals={setMeals} // Pass setMeals to update state
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="AboutUs" component={AboutUsScreen} />
        <Stack.Screen name="Filter">
          {(props) => (
            <FilterScreen
              {...props}
              meals={meals} // Pass all meals to FilterScreen
              setFilteredMeals={setFilteredMeals} // Function to update filtered meals
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;