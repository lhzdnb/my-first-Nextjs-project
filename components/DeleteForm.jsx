"use client";

import { deleteTask } from "@/utils/actions";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-xs btn-error" type="submit" disabled={pending}>
      {pending && <span className="loading"></span>}
      {pending ? "Deleting..." : "DELETE"}
    </button>
  );
}

const initialState = {
  message: null,
};

function DeleteForm({ id }) {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <SubmitButton />
    </form>
  );
}

export default DeleteForm;
