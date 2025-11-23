import apiClient from "./apiClient";

export function getAllResources() {
  return apiClient.get("/resources");
}

export function addResource(data) {
  return apiClient.post("/resources", data);
}

export function deleteResource(id) {
  return apiClient.delete(`/resources/${id}`);
}
