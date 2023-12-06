const todos = [
    { topic: 'Doing pre-work', completed: true },
    { topic: 'Workout', completed: false },
    { topic: 'Playing computer games', completed: true },
    { topic: 'Relax', completed: false },
    { topic: 'Clean the room', completed: true }
  ];
  
  function getCompletedTodo(todos) {
    return todos.filter(todo => todo.completed === true);
  }
  
  const result = getCompletedTodo(todos);
  console.log(result)
  
  function getCompletedTodo2(todos) {
    return todos.completed === true;
  }
  const result2 = todos.filter(getCompletedTodo2);
  console.log(result2)

  /* 
      Output:
      [
          { topic: 'Doing pre-work', completed: true },
        { topic: 'Playing computer games', completed: true },
        { topic: 'Clean the room', completed: true }
      ]
  */
  