import apiClient from "../interceptor/interceptor";

export const getTimeLine = () => {
    return apiClient.get("Schedual/GetAdminScheduals");
};

export const createTimeLine = (data) => {
    return apiClient.post("Schedual/AddSchedualSingle", data);
};

export const editTimeLineStatus = (id, active) => {
    console.log(active)
    return apiClient.put("Schedual/LockToRiase",  {
       id: id,
       active: active, 
    });
};