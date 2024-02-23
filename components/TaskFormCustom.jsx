"use client";

import { createTaskCustom } from "@/utils/actions";
import { useFormStatus, useFormState } from "react-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";

function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending && <span className="loading"></span>}
      {pending ? "Please wait..." : "Create Task"}
    </button>
  );
}

const initialState = {
  message: null,
};

function TaskForm() {
  const [state, formAction] = useFormState(createTaskCustom, initialState);
  useEffect(() => {
    if (state.message === "error") {
      toast.error("Failed to create a task.");
    } else if (state.message) {
      toast.success("Task created.");
    }
  }, [state]);
  return (
    <form action={formAction}>
      {/*{state.message ? <p>success!</p> : null}*/}
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full focus:ring-gray-200 focus:ring-2 focus:ring-inset focus:outline-none"
          placeholder="type here"
          name="content"
          required
        />
        <SubmitBtn />
      </div>
    </form>
  );
}

export default TaskForm;
