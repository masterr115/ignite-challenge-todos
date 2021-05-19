import React, { useState, useEffect } from 'react';
import { Alert, Image, TouchableOpacity, View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';
import sun1 from '../assets/icons/sun1.png';
import sun2 from '../assets/icons/sun2.png';


interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [themeColor, setThemeColor] = useState('White');

  function handleAddTask(newTaskTitle: string) {
    
    if (newTaskTitle !== '') {

      const taskData = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      }

      setTasks(oldValue => [...oldValue, taskData])

    } else {

      Alert.alert("Você precisa digitar algo..", "Digite alguma task para poder ser adicionada.")

    }

  }

  function handleMarkTaskAsDone(id: number) {
    
   
    let updatedTaskList = tasks.map(task => {

      if (task.id === id) {
        return {id: task.id, title: task.title, done: !task.done}
      }
      return task;

    })

    setTasks(updatedTaskList)

  }

  function handleRemoveTask(id: number) {
    
    setTasks(oldValue => oldValue.filter(task => task.id !== id))
    
  }

  function handleThemeColor() {

    if (themeColor == 'White') {
      setThemeColor('Dark')
    } else if (themeColor == 'Dark') {
      setThemeColor('White')
    }

  }

  return (
    <>
      <Header theme={themeColor}/>

        <View>
          <TouchableOpacity 
          style={{marginTop: -80, marginLeft: 350}}
          onPress={handleThemeColor}
          >
            <Image source={themeColor == "White" ? sun1 : sun2}/>
          </TouchableOpacity>
        </View>

        <View style={{backgroundColor: themeColor == "White" ? "#FFFF" : "#191622", flex: 1}}>
        <TodoInput addTask={handleAddTask} theme={themeColor} />
          <MyTasksList
            tasks={tasks}
            theme={themeColor} 
            onPress={handleMarkTaskAsDone} 
            onLongPress={handleRemoveTask} 
          />
      </View>
    </>
  )
}