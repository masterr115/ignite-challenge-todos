import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

interface HeaderTheme{
  theme: string;
}

export function Header({ theme }: HeaderTheme) {
  return (
    <SafeAreaView style={theme == 'White' ? {backgroundColor: '#273FAD'} : {backgroundColor: '#483C67'}}>
      <View style={[styles.header, 
        theme == 'White' ? {backgroundColor: '#273FAD'} : {backgroundColor: '#483C67'}]}
      >
        <Text style={[
          styles.headerText, 
          theme == 'White' ? {color: '#FFF'} : {color: '#E1E1E6'}]}
        >
          to.
        </Text>
        <Text style={[styles.headerText, 
          { fontFamily: 'Poppins-SemiBold' }, 
          theme == 'White' ? {color: '#FFF'} : {color: '#E1E1E6'}]}
        >
          do
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingBottom: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  }
});
