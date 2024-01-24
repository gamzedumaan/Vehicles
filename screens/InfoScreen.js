import { AntDesign, Entypo } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import data from '../dataset/vehicles.json';
export default function InfoScreen({ navigation, route }) {
  const image1 = require('../assets/image/car1.png');
  const image2 = require('../assets/image/car2.png');
  const image3 = require('../assets/image/car3.png');
  const image4 = require('../assets/image/car4.png');

  const getImage = (id) => {
    if (id == 1) return image1;
    if (id == 2) return image2;
    if (id == 3) return image3;
    if (id == 3) return image4;
  };

  const vehicle = data.vehicles.filter((element) => element.id == route.params.id)[0];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Detail</Text>
          <Entypo name="dots-three-vertical" size={30} color="black" />
        </View>
        <View
          style={{
            flex: 1,
            paddingRight: 35,
            paddingLeft: 35,
          }}>
          <View
            style={{ width: '100%', height: 250, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={styles.vehicleImage} source={getImage(vehicle.id)} resizeMode="contain" />
          </View>
          <View style={styles.headSection}>
            <View style={styles.topTextArea}>
              <Text style={styles.makemodelText}>
                {vehicle.make} {vehicle.model}
              </Text>
              <Text style={styles.price}>
                <Text style={styles.amount}>${vehicle.price_per_day}</Text> /day
              </Text>
            </View>
            <Text style={styles.typetranText}>
              {vehicle.type}-{vehicle.transmission}
            </Text>
          </View>
          <Text style={styles.descriptionText}>{vehicle.description}</Text>
          <Text style={styles.propertiesText}>Properties</Text>

          <View style={styles.propertiesArea}>
            <View style={styles.level}>
              <Text style={styles.propertyText}>
                Motor power:
                <Text style={styles.valueText}> {vehicle.properties.motor_power_hp} hp</Text>
              </Text>
              <Text style={styles.propertyText}>
                Engine capacity:
                <Text style={styles.valueText}> {vehicle.properties.engine_capacity_cc} cc</Text>
              </Text>
            </View>
            <View style={styles.level}>
              <Text style={styles.propertyText}>
                Fuel:
                <Text style={styles.valueText}> {vehicle.properties.fuel_type}</Text>
              </Text>

              <Text style={styles.propertyText}>
                Traction:
                <Text style={styles.valueText}> {vehicle.properties.traction}</Text>
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.rentButton}>
            <Text style={styles.rentButtonText}>Rent a Car</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    paddingRight: 35,
    paddingLeft: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    flex: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
  },

  imageSection: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  vehicleImage: {
    width: 300,
    height: 300,
  },
  propertiesArea: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  level: {
    marginRight: 30,
  },
  propertyText: {
    fontSize: 12,
    color: '#696969',
  },
  valueText: {
    fontSize: 12,
    color: 'black',
  },
  topTextArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  makemodelText: {
    fontSize: 20,
    fontWeight: '500',
  },
  price: {
    fontWeight: '400',
  },
  amount: {
    fontWeight: 'bold',
  },
  typetranText: {
    marginTop: 1,
    color: '#696969',
    fontWeight: '600',
    fontSize: 12,
  },
  descriptionText: {
    marginTop: 5,
    fontSize: 14,
    letterSpacing: 0.1,
    lineHeight: 18,
    color: '#696969',
    fontWeight: '500',
  },
  propertiesText: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: '500',
  },
  rentButton: {
    marginTop: 20,
    height: 40,
    alignSelf: 'center',
    width: 250,
    backgroundColor: 'black',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rentButtonText: {
    color: 'white',
    fontWeight: '500',
  },
  headSection: {
    bottom: 20,
  },
});
