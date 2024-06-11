"use client";
import { Button } from "@material-tailwind/react";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  fetchAllDistrict,
  fetchAllDivisions,
  fetchAllUpazila,
} from "../../../redux/features/location/location.action";
import Select from "../../components/shared/Select";
import {
  setSelectedDistrict,
  setSelectedUpazila,
  setSelectedUpazilaName,
} from "../../../redux/features/location/location.slice";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function District({
  params,
}: {
  params: { districtId: string };
}) {
  const dispatch = useAppDispatch();

  const {
    upazillaList,
    upazillaListError,
    upazillaListLoading,
    selectedupazilla,
  } = useAppSelector((state) => state.location);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const [id, name] = selectedValue.split("-");
    dispatch(setSelectedUpazila(id));
    dispatch(setSelectedUpazilaName(name));
  };
  useEffect(() => {
    dispatch(fetchAllUpazila(params?.districtId));
  }, [dispatch, params]);

  return (
    <div>
      <Select
        options={upazillaList}
        label="Select a Upazila"
        handleSelectChange={handleSelectChange}
      />
      <Link href={`/union/${selectedupazilla}`}>
        <Button type="button" className="my-3">
          Search
        </Button>
      </Link>
    </div>
  );
}
