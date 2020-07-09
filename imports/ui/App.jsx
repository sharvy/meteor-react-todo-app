import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Task } from "./Task";
import { TasksCollection } from "/imports/api/tasks";

export const App = () => {
  const tasks = useTracker(() => TasksCollection.find().fetch());

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </ul>
    </div>
  );
};
