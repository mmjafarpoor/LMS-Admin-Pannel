import apiClient from "../interceptor/interceptor";

export const getBuildings = () => {
    return apiClient.get("Building");
};

export const createBuilding = (data) => {
    return apiClient.post("Building", data);
};

export const editBuilding = (data) => {
    return apiClient.put("Building", data);
};

export const activeBuildingById = (buildingId, active) => {
    console.log(active, buildingId)
    return apiClient.put("Building/Active", {
       id: buildingId,
       active: active, 
    });
};
