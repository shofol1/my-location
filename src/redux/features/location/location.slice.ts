import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  divisionList: [],
  divisionListLoading: true,
  divisionListError: "",
  selectedDivision: "1",
  selectedDivisionName: "",
  districtList: [],
  districtListLoading: true,
  districtListError: "",
  selectedDistrict: "1",
  selectedDistrictName: "",
  upazillaList: [],
  upazillaListLoading: true,
  upazillaListError: "",
  selectedupazilla: "1",
  selectedupazillaName: "",
  unionList: [],
  unionListLoading: true,
  unionListError: "",
  selectedunion: "1",
  selectedunionName: "",
};

const locationSlice = createSlice({
  name: "location",
  initialState: initialState,
  reducers: {
    //division
    setDivisionList(state, action: PayloadAction<any>) {
      state.divisionList = action.payload.list;
      state.divisionListError = "";
      state.divisionListLoading = false;
    },

    setDivisionListError(state, action: PayloadAction<any>) {
      state.divisionList = [];
      state.divisionListLoading = false;
      state.divisionListError = action.payload;
    },
    setSelectedDivision(state, action: PayloadAction<string>) {
      state.selectedDivision = action.payload;
    },
    setSelectedDivisionName(state, action: PayloadAction<string>) {
      state.selectedDivisionName = action.payload;
    },
    //district
    setDistrictList(state, action: PayloadAction<any>) {
      state.districtList = action.payload.list;
      state.districtListError = "";
      state.districtListLoading = false;
    },

    setDistrictListError(state, action: PayloadAction<any>) {
      state.districtList = [];
      state.districtListLoading = false;
      state.districtListError = action.payload;
    },
    setSelectedDistrict(state, action: PayloadAction<string>) {
      state.selectedDistrict = action.payload;
    },
    setSelectedDistrictName(state, action: PayloadAction<string>) {
      state.selectedDistrictName = action.payload;
    },
    //upazila
    setUpazillaList(state, action: PayloadAction<any>) {
      state.upazillaList = action.payload.list;
      state.upazillaListError = "";
      state.upazillaListLoading = false;
    },

    setUpazilaListError(state, action: PayloadAction<any>) {
      state.upazillaList = [];
      state.unionListLoading = false;
      state.upazillaListError = action.payload;
    },
    setSelectedUpazila(state, action: PayloadAction<string>) {
      state.selectedupazilla = action.payload;
    },
    setSelectedUpazilaName(state, action: PayloadAction<string>) {
      state.selectedupazillaName = action.payload;
    },
    //union
    setUnionList(state, action: PayloadAction<any>) {
      state.unionList = action.payload.list;
      state.unionListError = "";
      state.unionListLoading = false;
    },

    setUnionListError(state, action: PayloadAction<any>) {
      state.unionList = [];
      state.unionListLoading = false;
      state.unionListError = action.payload;
    },
    setSelectedUnion(state, action: PayloadAction<string>) {
      state.selectedunion = action.payload;
    },
    setSelectedUnionName(state, action: PayloadAction<string>) {
      state.selectedunionName = action.payload;
    },
  },
});

export const {
  setDivisionList,
  setDivisionListError,
  setSelectedDivision,
  setDistrictList,
  setDistrictListError,
  setSelectedDistrict,
  setSelectedUpazila,
  setUpazilaListError,
  setUpazillaList,
  setUnionList,
  setUnionListError,
  setSelectedUnion,
  setSelectedDivisionName,
  setSelectedDistrictName,
  setSelectedUpazilaName,
  setSelectedUnionName,
} = locationSlice.actions;
export default locationSlice.reducer;
