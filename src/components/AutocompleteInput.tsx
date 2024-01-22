/*
 * SPDX-FileCopyrightText: 2024 Eric Le Bihan
 *
 * SPDX-License-Identifier: MIT
 */

import {
  forwardRef,
  useState,
  useEffect,
  useImperativeHandle,
  Ref,
} from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

type valueHandler = (_value: string) => void;

export interface AutocompleteInputProps {
  defaultValue: string;
  storageKey: string;
  storageCapacity: string;
  onChange: valueHandler;
}

export interface RefAutocompleteInput {
  storeValues: () => void;
}

export const AutocompleteInput = forwardRef(
  (props: AutocompleteInputProps, ref: Ref<RefAutocompleteInput>) => {
    const { defaultValue, storageKey, storageCapacity, onChange } = props;
    const [inputValue, setInputValue] = useState<string | null>(defaultValue);
    const [previousValues, setPreviousValues] = useState<string[]>([]);

    useEffect(() => {
      const storedValues =
        JSON.parse(localStorage.getItem(storageKey) || "[]") || [];
      setPreviousValues(storedValues);
    }, []);

    const storeValues = () => {
      const currentValue = inputValue!;
      if (currentValue && !previousValues.includes(currentValue)) {
        const updatedValues = [...previousValues, currentValue];

        if (updatedValues.length > parseInt(storageCapacity)) {
          updatedValues.shift();
        }

        setPreviousValues(updatedValues);

        localStorage.setItem(storageKey, JSON.stringify(updatedValues));
      }
    };

    useImperativeHandle(ref, () => ({ storeValues }));

    return (
      <Autocomplete
        freeSolo
        value={inputValue}
        onChange={(_e, value: string | null) => {
          const trimmedValue = value!.trim();
          setInputValue(trimmedValue);
          onChange(trimmedValue);
        }}
        options={previousValues}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="URL" />}
      />
    );
  },
);
