"use client";
import React, { useState, useEffect, useRef } from "react";

interface DropdownProps {
  label: string;
  items: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, items }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClickOutsideDropdown = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node) &&
      e.target !== buttonRef.current
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideDropdown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideDropdown);
    };
  }, []);

  return (
    <>
      <div className="relative">
        <button ref={buttonRef} onClick={() => setOpen(!open)}>
          {label}
        </button>
        {open && (
          <div
            ref={dropdownRef}
            className="absolute left-0 top-full border p-2 bg-slate-700 z-50"
          >
            {items.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
