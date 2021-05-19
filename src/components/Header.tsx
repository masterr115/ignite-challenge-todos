import React from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface HeaderTheme{
  theme: string;
}

export function Header({ theme }: HeaderTheme) {
  return (

    <View style={[
      styles.header, 
      theme == 'White' ? {backgroundColor: '#273FAD'} : {backgroundColor: '#483C67'}]}
    >
      <Text style={[
        styles.headerText, 
        theme == 'White' ? {color: '#FFF'} : {color: '#E1E1E6'}]}
      >
        to.
      </Text>
      <Text style={[
        styles.headerText, 
        { fontFamily: 'Poppins-SemiBold' }, 
        theme == 'White' ? {color: '#FFF'} : {color: '#E1E1E6'}]}
      >
        do
      </Text>
    </View>

)
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  headerText: {
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
    marginTop: 40,
  }
});
