export const localStorageSetData = (tasks) => {
  return localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const localStorageGetData = () => {
  const getData = localStorage.getItem("tasks");
  if (!getData) return [];
  const parsedData = JSON.parse(getData);
  return parsedData;
};
