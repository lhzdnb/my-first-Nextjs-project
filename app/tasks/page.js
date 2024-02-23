import React from "react";
import TaskList from "@/components/TaskList";
import TaskFormCustom from "@/components/TaskFormCustom";
export const dynamic = "force-dynamic";
function TaskPage(props) {
  return (
    <div className="max-w-lg">
      <TaskFormCustom />
      <TaskList />
    </div>
  );
}

export default TaskPage;
