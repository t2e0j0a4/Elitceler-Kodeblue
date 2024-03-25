"use client";
import styles from "./FormSelect.module.css";
import React, { useState, useRef, useEffect, useMemo } from "react";

// React Icons
import { IoClose } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";

// Type
import { OptionType } from "@/data";
import { RegistrationDetailsAction } from "@/types";

type FormSelectTypes = {
  selectLabel: string,
  dispatchType: 'MEDICAL_SPECIALITIES_OPTIONS' | 'GOVT_HEALTH_SCHEMES' | 'PVT_HEALTH_SCHEMES'
  handleSelectOptions: (type: 'MEDICAL_SPECIALITIES_OPTIONS' | 'GOVT_HEALTH_SCHEMES' | 'PVT_HEALTH_SCHEMES', payload: string[]) => void,
  dropOptions: OptionType[]
};

const FormSelect = ({ selectLabel, dispatchType, dropOptions, handleSelectOptions }: FormSelectTypes) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  
  const handleOptionSelect = (option: string) => {
    setSelectedOptions((prevOptions) => {
      if (prevOptions.includes(option)) {
        return prevOptions.filter((currOptn) => currOptn !== option);
      } else {
        return [...prevOptions, option];
      }
    });
  };

  const selectRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useMemo(() => {

    handleSelectOptions(dispatchType, selectedOptions);

    // eslint-disable-next-line
  }, [selectedOptions]);

  return (
    <div className={styles.form__select} ref={selectRef}>
      <p>{selectLabel}</p>
      <div className={styles.select__display} role="button" onClick={() => setShowOptions(true)} tabIndex={0}>
        {selectedOptions.length === 0 ? (
          <span>Select multiple options</span>
        ) : (
          <div className={styles.all__options}>
            {selectedOptions.map((option, index) => (
              <span key={index}>{option} <button type="button" title="Remove" onClick={() => {
                  setShowOptions(true);
                  handleOptionSelect(option);
                }}><IoClose /></button>
              </span>
            ))}
          </div>
        )}
        <FaAngleDown />
      </div>
      {showOptions && (
        <div className={styles.select__options}>
          {
            dropOptions.map((option) => {
              return <p key={option.id} role="button" className={`${selectedOptions.includes(option.option) && styles.selected__option}`} tabIndex={0} onClick={(e) => {handleOptionSelect(option.option)}}>{option.option}</p>
            })
          }
        </div>
      )}
    </div>
  );
};

export default FormSelect;
