import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({ meals, selectedMeals, setSelectedMeals }) => {
  const navigation = useNavigation();

  const toggleMealSelection = (meal) => {
    if (selectedMeals.includes(meal)) {
      setSelectedMeals(selectedMeals.filter(m => m !== meal));
    } else if (selectedMeals.length < 4) {
      setSelectedMeals([...selectedMeals, meal]);
    } else {
      alert("You can only select up to 4 meals.");
    }
  };

  // Calculate average price of selected meals
  const calculateAveragePrice = () => {
    if (selectedMeals.length === 0) return 0;

    const total = selectedMeals.reduce((sum, meal) => sum + meal.price, 0);
    return (total / selectedMeals.length).toFixed(2); // Return average price rounded to two decimal places
  };

  return (
    <View style={styles.container}>
      {/* Navigation Links */}
      <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Courses')}>
          <Text style={styles.navLink}>Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
          <Text style={styles.navLink}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
          <Text style={styles.navLink}>Filter Menu</Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Menu</Text>

      {/* Instruction Text */}
      <Text style={styles.instructionText}>Click on the menu items to select!</Text>

      {/* Display Average Price and Total Menu Items */}
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>Total Menu Items: {meals.length}</Text>
        <Text style={styles.statsText}>Average Price: R{calculateAveragePrice()}</Text>
      </View>

      {/* Display Menu Items */}
      <ScrollView>
        {meals.map(meal => (
          <TouchableOpacity 
            key={meal.id} 
            onPress={() => toggleMealSelection(meal)} 
            style={[styles.mealItem, selectedMeals.includes(meal) && styles.selectedMeal]}
          >
            <Image source={meal.image} style={styles.mealImage} />
            <Text style={styles.mealName}>{meal.name}</Text>
            <Text style={styles.mealCourse}>{meal.course}</Text>
            <Text style={styles.mealPrice}>R{meal.price}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Output Area for Selected Meals */}
      <View style={styles.outputContainer}>
        <Text style={styles.outputText}>Selected Meals:</Text>
        {selectedMeals.length === 0 ? (
          <Text>No meals selected yet.</Text>
        ) : (
          selectedMeals.map(meal => (
            <Text key={meal.id}>{meal.name}</Text>
          ))
        )}
      </View>

      {/* Clear Selection Button */}
      <TouchableOpacity
        style={styles.clearButton}
        onPress={() => setSelectedMeals([])}
      >
        <Text style={styles.clearButtonText}>Clear Selections</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  instructionText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
    fontStyle: 'italic',
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Center the navigation links
    alignItems: 'center', // Center vertically
    marginBottom: 20,
  },
  navLink: {
    fontSize: 18,
    color: '#1d2d57',
    marginHorizontal: 10, // Add some horizontal spacing between links
  },
  statsContainer: {
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
  },
  statsText: {
    fontSize: 16,
    color:'#333',
    marginBottom :5 ,
  },
  mealItem:{
    padding :10 ,
    borderBottomWidth :1 ,
    borderColor :'#ccc' ,
    flexDirection :'row' ,
    alignItems :'center' ,
  },
  selectedMeal:{
    backgroundColor:'#e0e0e0' , // Highlight selected meals
  },
  mealImage:{
    width :50 ,
    height :50 ,
    borderRadius :5 ,
    marginRight :10 ,
  },
  mealName:{
    fontWeight :'bold' ,
    fontSize :18 ,
    flexGrow :1 ,
  },
  mealCourse:{
    fontSize :14 ,
    color:'#666',
  },
  mealPrice:{
    fontSize :16 ,
    color:'#6a0dad'
  },
  outputContainer:{
    padding :10 ,
    borderWidth :1 ,
    borderColor :'#ccc' ,
    borderRadius :5 ,
    marginTop :20 ,
  },
  outputText:{
    fontSize :16 ,
    fontWeight :'bold'
  },
  clearButton:{
    backgroundColor:'#6a0dad' ,
    paddingVertical :15 ,
	  borderRadius :5 ,
	  alignItems :'center' ,
	  marginTop :20 ,
	},
	clearButtonText:{
	  color:'#fff' ,
	  fontSize :18 ,
	  fontWeight :'bold'
	}
});

export default HomeScreen;