import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';

interface CenterProps {}

export const Center: React.FC<CenterProps> = ({children}) => {
  return <View style={styles.center}>{children}</View>;
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
