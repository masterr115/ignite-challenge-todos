import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

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

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}