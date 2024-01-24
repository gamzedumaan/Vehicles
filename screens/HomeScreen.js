import { Feather, EvilIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import data from '../dataset/vehicles.json';

export default function HomeScreen({ navigation }) {
  const image1 = require('../assets/image/car1.png');
  const image2 = require('../assets/image/car2.png');
  const image3 = require('../assets/image/car3.png');
  const image4 = require('../assets/image/car3.png');

  const getImage = (id) => {
    if (id == 1) return image1;
    if (id == 2) return image2;
    if (id == 3) return image3;
    if (id == 3) return image4;
  };

  const [vehicles, setVehicles] = useState(data.vehicles);
  const [filteredVehicles, setFilteredVehicles] = useState(data.vehicles);

  const searchVehicles = (keyword) => {
    const lowercasedKeyword = keyword.toLowerCase();

    //filter
    const results = vehicles.filter((vehicle) => {
      return vehicle.make.toLowerCase().includes(lowercasedKeyword);
    });

    setFilteredVehicles(results);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <Feather name="menu" size={24} color="black" />
          <Image style={styles.image} source={require('./../assets/image/person.png')} />
        </View>
        <View style={styles.titleSection}>
          <Text style={styles.title}>Rent a Car</Text>
        </View>
        <View style={styles.searchSection}>
          <View style={styles.searchPallet}>
            <TextInput
              placeholder="Search a Car"
              style={styles.searchInput}
              onChangeText={(text) => searchVehicles(text)}
            />
            <View style={styles.searchIconArea}>
              <EvilIcons name="search" size={24} color="black" />
            </View>
          </View>
        </View>
        <View style={styles.typesSection}>
          <Text style={styles.typesTextActive}>All</Text>
          <Text style={styles.typesText}>Suv</Text>
          <Text style={styles.typesText}>Sedan</Text>
          <Text style={styles.typesText}>Mpv</Text>
          <Text style={styles.typesText}>Hatchback</Text>
        </View>
        <View style={styles.listSection}>
          <Text style={styles.headText}>Most Rented</Text>
          <ScrollView style={styles.elementPallet}>
            {filteredVehicles.map((vehicle) => {
              return (
                <TouchableOpacity
                  style={styles.element}
                  onPress={() => navigation.navigate('Info',{id: vehicle.id})}>
                  <View style={styles.infoArea} key={vehicle.id}>
                    <Text style={styles.infoTitle}>
                      {vehicle.make} {vehicle.model}
                    </Text>
                    <Text style={styles.infoSub}>
                      {vehicle.type}-{vehicle.transmission}
                    </Text>
                    <Text style={styles.infoPrice}>
                      <Text style={styles.infoAmount}>${vehicle.price_per_day} </Text>/day
                    </Text>
                    <View style={styles.imageArea}>
                      <Image
                        source={getImage(vehicle.id)}
                        resizeMode="contain"
                        style={styles.vehicleImage}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#e7e7e7',
  },
  container: {
    flex: 1,
    paddingRight: 35,
    paddingLeft: 35,
  },

  headerSection: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  titleSection: {
    marginTop: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
  },
  searchSection: {
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
  },

  searchPallet: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    borderRadius: 8,
    width: '100%',
    height: 30,
    backgroundColor: 'white',
  },
  searchInput: {
    width: 245,
    height: 30,
    backgroundColor: 'white',
  },
  searchIconArea: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
  },
  typesSection: {
    marginTop: 15,
    flexDirection: 'row',
  },
  typesTextActive: {
    fontSize: 15,
    marginRight: 34,
    fontWeight: 'bold',
    color: 'black',
  },
  typesText: {
    fontSize: 15,
    marginRight: 33,
    fontWeight: '500',
    color: '#696969',
  },
  listSection: {
    marginTop: 25,
  },
  headText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  element: {
    height: 100,
    padding: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginBottom: 13,
    borderRadius: 10,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  infoAmount: {
    fontSize: 13,
    fontWeight: '700',
  },
  imageArea: {
    flex: 1,
  },
  vehicleImage: {
    height: 100,
    width: 200,
    position: 'absolute',
    bottom: -3,
    left: 90,
  },
  infoPrice: {
    marginTop: 20,
  },
  elementPallet: {
    marginLeft: -15,
    paddingLeft: 15,
    paddingRight: 15,
    width: "110%",
    height: 450,
  },
});
