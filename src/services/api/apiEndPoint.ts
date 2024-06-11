import { getApi } from "./request";

//Locations
export const GetAllLocationApi = async () => await getApi(`/divisions`);
export const GetAllDistrictApi = async (id: string) =>
  await getApi(`/districts/${id}`);
export const GetAllUpazilaApi = async (id: string) =>
  await getApi(`/upazillas/${id}`);
export const GetAllUnionsApi = async (id: string) =>
  await getApi(`/unions/${id}`);
