"use client";
import { Button } from "@material-tailwind/react";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  fetchAllDistrict,
  fetchAllDivisions,
} from "../../../redux/features/location/location.action";
import Select from "../../components/shared/Select";
import {
  setSelectedDistrict,
  setSelectedDistrictName,
} from "../../../redux/features/location/location.slice";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ButtonComponent from "../../components/shared/ButtonComponent";

export default function District({
  params,
}: {
  params: { divisionId: string };
}) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    districtList,
    districtListError,
    districtListLoading,
    selectedDistrict,
  } = useAppSelector((state) => state.location);
  console.log("🚀 ~ selectedDistrict:", selectedDistrict);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const [id, name] = selectedValue.split("-");
    console.log("🚀 ~ handleSelectChange ~ id:", id);
    dispatch(setSelectedDistrict(id));
    dispatch(setSelectedDistrictName(name));
  };
  useEffect(() => {
    dispatch(fetchAllDistrict(params?.divisionId));
  }, [dispatch, params]);

  return (
    <div>
      <Select
        options={districtList}
        label="Select a District"
        handleSelectChange={handleSelectChange}
      />
      <Link href={`/upazilla/${selectedDistrict}`}>
        <ButtonComponent title="Search" className="my-3" type="button" />
      </Link>
    </div>
  );
}
