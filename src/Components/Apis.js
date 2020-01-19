import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/"
});

export const apis = {
  loadTask: id => api.get("tasks/" + id),
  loadAllTasks: () => api.get("tasks?_embed=lists"),
  loadTasks: () => api.get("tasks"),
  removeTask: id => api.delete("tasks/" + id),
  createTask: task => api.post("tasks", task),
  editeTask: task => api.put("tasks/" + task.id, task),
  createList: list => api.post("lists", list),
  loadLists: task => api.get("lists?taskId=" + task),
  loadColor: (color) => api.get("colors?id=" + color),
  loadColors: () => api.get('colors')
};

export default apis;