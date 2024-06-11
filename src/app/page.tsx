"use client";
import { Button, ButtonGroup } from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect, useState } from "react";
import { fetchAllDivisions } from "../redux/features/location/location.action";
import Select from "./components/shared/Select";
import {
  setSelectedDivision,
  setSelectedDivisionName,
} from "../redux/features/location/location.slice";
import Link from "next/link";
import ButtonComponent from "./components/shared/ButtonComponent";

export default function Home() {
  const dispatch = useAppDispatch();
  const {
    divisionList,
    divisionListError,
    divisionListLoading,
    selectedDivision,
  }: any = useAppSelector((state) => state.location);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const [id, name] = selectedValue.split("-");

    dispatch(setSelectedDivision(id));
    dispatch(setSelectedDivisionName(name));
  };
  useEffect(() => {
    dispatch(fetchAllDivisions());
  }, [dispatch]);

  return (
    <div>
      <Select
        options={divisionList}
        label="Select a Division"
        handleSelectChange={handleSelectChange}
      />
      <Link href={`/district/${selectedDivision}`}>
        <ButtonComponent title="Search" className="my-3" type="button" />
      </Link>
    </div>
  );
}
