"use client";
import { Button, Card, Typography } from "@material-tailwind/react";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  fetchAllDistrict,
  fetchAllDivisions,
  fetchAllUnion,
  fetchAllUpazila,
} from "../../../redux/features/location/location.action";
import Select from "../../components/shared/Select";
import {
  setSelectedDistrict,
  setSelectedUnion,
  setSelectedUnionName,
  setSelectedUpazila,
} from "../../../redux/features/location/location.slice";
const TABLE_HEAD = ["Division", "District", "Upazila", "Union"];
export default function District({
  params,
}: {
  params: { upazilaId: string };
}) {
  const dispatch = useAppDispatch();
  const [isTableView, setIsTableView] = useState(false);

  const {
    unionList,
    unionListError,
    unionListLoading,
    selectedunionName,
    selectedDistrictName,
    selectedDivisionName,
    selectedupazillaName,
  } = useAppSelector((state) => state.location);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const [id, name] = selectedValue.split("-");
    dispatch(setSelectedUnion(id));
    dispatch(setSelectedUnionName(name));
  };
  useEffect(() => {
    dispatch(fetchAllUnion(params?.upazilaId));
  }, [dispatch, params]);

  return (
    <div>
      <Select
        options={unionList}
        label="Select a Upazila"
        handleSelectChange={handleSelectChange}
      />
      <Button
        type="button"
        className="my-3"
        onClick={() => setIsTableView(!isTableView)}
      >
        Submit
      </Button>
      {isTableView && (
        <Card className="h-full w-[500px] overflow-scroll mt-3">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <td>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {selectedDivisionName
                    ? selectedDivisionName
                    : "No Data found"}
                </Typography>
              </td>
              <td>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {selectedDistrictName
                    ? selectedDistrictName
                    : "No Data found"}
                </Typography>
              </td>
              <td>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {selectedupazillaName
                    ? selectedupazillaName
                    : "No Data found"}
                </Typography>
              </td>
              <td>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {selectedunionName ? selectedunionName : "No Data found"}
                </Typography>
              </td>
            </tbody>
          </table>
        </Card>
      )}
    </div>
  );
}
