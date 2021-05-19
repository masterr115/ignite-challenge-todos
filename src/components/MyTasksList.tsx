import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';

interface FlatListHeaderProps{
  theme: string;
}

function FlatListHeaderComponent({theme} : FlatListHeaderProps) {
  return (
    <View>
      <Text style={[
        styles.header, 
        theme == 'White' ? { color: '#3D3D4D' } : { color: '#67E480' }]}
      >
        Minhas tasks
      </Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  theme: string;
}

export function MyTasksList({ tasks, theme, onLongPress, onPress }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)} 
            style={[item.done ? [ theme == 'White' ? styles.taskButtonDone : [styles.taskButtonDone, { backgroundColor: '#1D1B28' }] ] : [ theme == 'White' ? styles.taskButton : [styles.taskButton, { backgroundColor: '#191622' }] ]]}
          >
            <View 
              testID={`marker-${index}`}
              style={[item.done ? [ theme == 'White' ? styles.taskMarkerDone : [styles.taskMarkerDone, { backgroundColor: '#67E480' }] ] : [ theme == 'White' ? styles.taskMarker : [styles.taskMarker, { borderColor: '#67E480' }] ]]}
            />
            <Text 
              style={[item.done ? [ theme == 'White' ? styles.taskTextDone : [styles.taskTextDone, { color: '#E1E1E6' }] ] : [ theme == 'White' ? styles.taskText : [styles.taskText, { color: '#67E480' }] ]]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent theme={theme} />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  }
})