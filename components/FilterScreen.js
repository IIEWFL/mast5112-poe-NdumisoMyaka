import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 

const FilterScreen = ({ meals, setFilteredMeals }) => {
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleFilterChange = (course) => {
    setSelectedCourse(course);
    if (course) {
      const filtered = meals.filter(meal => meal.course === course);
      setFilteredMeals(filtered);
    } else {
      setFilteredMeals(meals); // Reset to all meals if no course is selected
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Menu Items</Text>

      <Picker
        selectedValue={selectedCourse}
        onValueChange={(itemValue) => handleFilterChange(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="All Courses" value="" />
        {['Mains', 'Starters', 'Desserts', 'Drinks'].map((course) => (
          <Picker.Item key={course} label={course} value={course} />
        ))}
      </Picker>

      {/* Clear Filter Button */}
      <TouchableOpacity
        style={styles.clearButton}
        onPress={() => handleFilterChange('')}
      >
        <Text style={styles.clearButtonText}>Clear Filter</Text>
      </TouchableOpacity>

      {/* Display Filtered Meals */}
      <ScrollView style={styles.mealsContainer}>
        {selectedCourse ? (
          meals.filter(meal => meal.course === selectedCourse).map(meal => (
            <View key={meal.id} style={styles.mealItem}>
              <Image source={meal.image} style={styles.mealImage} />
              <View style={styles.mealInfo}>
                <Text style={styles.mealName}>{meal.name}</Text>
                <Text>R{meal.price}</Text>
              </View>
            </View>
          ))
        ) : (
          meals.map(meal => (
            <View key={meal.id} style={styles.mealItem}>
              <Image source={meal.image} style={styles.mealImage} />
              <View style={styles.mealInfo}>
                <Text style={styles.mealName}>{meal.name}</Text>
                <Text>R{meal.price}</Text>
              </View>
            </View>
          ))
        )}
      </ScrollView>
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
    color: '#6a0dad',
  },
  picker: {
    height: 50,
    width: '100%',
    borderColor: '#6a0dad',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  clearButton: {
    backgroundColor: '#6a0dad',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  mealsContainer: {
    marginTop: 20,
  },
  mealItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  mealImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  mealInfo: {
    flexGrow: 1,
  },
  mealName:{
    fontWeight :'bold' ,
    fontSize :18 ,
  },
});

export default FilterScreen;