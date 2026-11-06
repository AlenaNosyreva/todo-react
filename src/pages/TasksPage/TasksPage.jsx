import {TasksProvider} from "@/entities/todo"
import Todo from "@/widgets/Todo"

const TasksPage = () => {
  return (
    <div>
      <TasksProvider>
        <Todo />
      </TasksProvider>
    </div>
  )
}

export default TasksPage