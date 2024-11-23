import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 

const CoursesScreen = ({ meals, setMeals }) => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = () => {
    if (!dishName || !selectedCourse || !price) {
      alert("Please fill in all fields.");
      return;
    }

    // Create a new menu item object
    const newItem = {
      id: Math.random().toString(),
      name: dishName,
      description,
      course: selectedCourse,
      price: Number(price),
    };

    // Update meals state in the parent
    setMeals([...meals, newItem]);

    // Reset form fields
    setDishName('');
    setDescription('');
    setSelectedCourse('');
    setPrice('');

    alert(`Added ${dishName} to the menu!`);
  };

  const removeMenuItem = (id) => {
    setMeals(meals.filter((meal) => meal.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Courses Screen</Text>

      {/* Input Fields for Adding Menu Items */}
      <TextInput
        style={styles.input}
        value={dishName}
        onChangeText={setDishName}
        placeholder="Enter dish name"
      />

      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter dish description"
        multiline
      />

      <Picker
        selectedValue={selectedCourse}
        onValueChange={(itemValue) => setSelectedCourse(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select a Course" value="" />
        {['Mains', 'Starters', 'Desserts', 'Drinks'].map((course) => (
          <Picker.Item key={course} label={course} value={course} />
        ))}
      </Picker>

      <TextInput
        style={styles.input}
        value={price}
        onChangeText={(text) => setPrice(text.replace(/[^0-9]/g, ''))} // Allow only numbers
        placeholder="Enter price"
        keyboardType="numeric"
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Menu Item</Text>
      </TouchableOpacity>

      {/* Display Current Meals */}
      <ScrollView>
        {meals.map((meal) => (
          <View key={meal.id} style={styles.mealContainer}>
            <Text>{meal.name}</Text>
            {/* Remove Button */}
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeMenuItem(meal.id)}
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        ))}
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
  input: {
    height: 50,
    borderColor: '#6a0dad',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    borderColor: '#6a0dad',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6a0dad',
    paddingVertical: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mealContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  removeButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CoursesScreen;
