import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/"
});

const apis = {
  readTask: id => api.get("tasks/" + id),
  loadTasks: () => api.get("tasks"),
  removeTask: id => api.delete("tasks/" + id),
  createTask: task => api.post("tasks", task),
  editeTask: task => api.put("tasks/" + task.id, task),
  createList: list => api.post("lists", list),
  loadLists: task => api.get("lists?task_id=" + task),
  loadColor: () => api.get("colors")
};

export default apis;