import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import ProductNavigation from './navigation/ProductNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <ProductNavigation />
    </NavigationContainer>
  );
}
