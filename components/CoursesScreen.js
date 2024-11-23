import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 

<<<<<<< HEAD
const CoursesScreen = ({ selectedMeals, setSelectedMeals }) => {
=======
const CoursesScreen = ({ meals, setMeals }) => {
>>>>>>> 60bd1bca239e7bbec998086747c5e26a68849b00
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [price, setPrice] = useState('');

<<<<<<< HEAD
  // Data for meals with prices
  const [meals, setMeals] = useState([
    { id: 1, name: 'Steak', course: 'Mains', price: 250 },
    { id: 2, name: 'Caesar Salad', course: 'Starters', price: 100 },
    { id: 3, name: 'Chocolate Cake', course: 'Desserts', price: 80 },
    { id: 4, name: 'Lemonade', course: 'Drinks', price: 50 },
  ]);

=======
>>>>>>> 60bd1bca239e7bbec998086747c5e26a68849b00
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
<<<<<<< HEAD
      price: parseFloat(price),
    };

    // Update meals with new item
=======
      price: Number(price),
    };

    // Update meals state in the parent
>>>>>>> 60bd1bca239e7bbec998086747c5e26a68849b00
    setMeals([...meals, newItem]);

    // Reset form fields
    setDishName('');
    setDescription('');
    setSelectedCourse('');
    setPrice('');

    alert(`Added ${dishName} to the menu!`);
  };

  const removeMenuItem = (id) => {
<<<<<<< HEAD
    setMeals(meals.filter(meal => meal.id !== id));
=======
    setMeals(meals.filter((meal) => meal.id !== id));
>>>>>>> 60bd1bca239e7bbec998086747c5e26a68849b00
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Courses Screen</Text>

      {/* Input Fields for Adding Menu Items */}
<<<<<<< HEAD
      <Text style={styles.label}>Dish Name:</Text>
=======
>>>>>>> 60bd1bca239e7bbec998086747c5e26a68849b00
      <TextInput
        style={styles.input}
        value={dishName}
        onChangeText={setDishName}
        placeholder="Enter dish name"
      />

<<<<<<< HEAD
      <Text style={styles.label}>Description:</Text>
=======
>>>>>>> 60bd1bca239e7bbec998086747c5e26a68849b00
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter dish description"
        multiline
      />

<<<<<<< HEAD
      <Text style={styles.label}>Select Course:</Text>
=======
>>>>>>> 60bd1bca239e7bbec998086747c5e26a68849b00
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

<<<<<<< HEAD
      <Text style={styles.label}>Price:</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
=======
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={(text) => setPrice(text.replace(/[^0-9]/g, ''))} // Allow only numbers
>>>>>>> 60bd1bca239e7bbec998086747c5e26a68849b00
        placeholder="Enter price"
        keyboardType="numeric"
      />

      {/* Submit Button */}
<<<<<<< HEAD
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
=======
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
>>>>>>> 60bd1bca239e7bbec998086747c5e26a68849b00
        <Text style={styles.buttonText}>Add Menu Item</Text>
      </TouchableOpacity>

      {/* Display Current Meals */}
      <ScrollView>
<<<<<<< HEAD
        {meals.map(meal => (
          <View key={meal.id} style={styles.mealContainer}>
            <Text style={styles.mealTitle}>{meal.name}</Text>
            <Text>{meal.description}</Text>
            <Text>{meal.course}</Text>
            <Text>R{meal.price}</Text>
=======
        {meals.map((meal) => (
          <View key={meal.id} style={styles.mealContainer}>
            <Text>{meal.name}</Text>
>>>>>>> 60bd1bca239e7bbec998086747c5e26a68849b00
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
<<<<<<< HEAD

=======
>>>>>>> 60bd1bca239e7bbec998086747c5e26a68849b00
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
<<<<<<< HEAD
  label: {
    fontSize: 18,
    marginVertical: 10,
    color: '#6a0dad',
  },
=======
>>>>>>> 60bd1bca239e7bbec998086747c5e26a68849b00
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
<<<<<<< HEAD
    color:'#fff',
    fontSize :18 ,
    fontWeight :'bold'
  },
  mealContainer:{
    paddingVertical:'10%',
    borderBottomWidth :1 , 
    borderBottomColor:'#ccc'
  },
  mealTitle:{
    fontSize :18 ,
    fontWeight :'bold'
  },
  removeButton:{
	 backgroundColor:'#ff4d4d',
	 paddingVertical :10 ,
	 borderRadius :5 ,
	 alignItems :'center' ,
	 marginTop :10 
   },
   removeButtonText:{
     color:'#fff' ,
     fontWeight:'bold'
   }
});

export default CoursesScreen;
=======
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
>>>>>>> 60bd1bca239e7bbec998086747c5e26a68849b00
