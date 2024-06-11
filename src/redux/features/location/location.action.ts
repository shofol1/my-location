import {
  GetAllDistrictApi,
  GetAllLocationApi,
  GetAllUnionsApi,
  GetAllUpazilaApi,
} from "../../../services/api/apiEndPoint";
import { AppDispatch } from "../../store";
import {
  setDistrictList,
  setDivisionList,
  setDivisionListError,
  setUnionList,
  setUpazillaList,
} from "./location.slice";

const fetchAllDivisions = () => async (dispatch: AppDispatch) => {
  const result = await GetAllLocationApi();

  if (result?.data.length > 0) {
    dispatch(
      setDivisionList({
        list: result?.data,
      })
    );
  } else {
    dispatch(
      setDivisionList({
        list: [],
      })
    );
  }
};
const fetchAllDistrict = (id: string) => async (dispatch: AppDispatch) => {
  const result = await GetAllDistrictApi(id);

  if (result?.data.length > 0) {
    dispatch(
      setDistrictList({
        list: result?.data,
      })
    );
  } else {
    dispatch(
      setDistrictList({
        list: [],
      })
    );
  }
};
const fetchAllUpazila = (id: string) => async (dispatch: AppDispatch) => {
  const result = await GetAllUpazilaApi(id);

  if (result?.data.length > 0) {
    dispatch(
      setUpazillaList({
        list: result?.data,
      })
    );
  } else {
    dispatch(
      setUpazillaList({
        list: [],
      })
    );
  }
};
const fetchAllUnion = (id: string) => async (dispatch: AppDispatch) => {
  const result = await GetAllUnionsApi(id);

  if (result?.data.length > 0) {
    dispatch(
      setUnionList({
        list: result?.data,
      })
    );
  } else {
    dispatch(
      setUnionList({
        list: [],
      })
    );
  }
};

export { fetchAllDivisions, fetchAllDistrict, fetchAllUpazila, fetchAllUnion };
