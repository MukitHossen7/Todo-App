export const localStorageSetData = (tasks) => {
  return localStorage.setItem("tasks", JSON.stringify(tasks));
};
