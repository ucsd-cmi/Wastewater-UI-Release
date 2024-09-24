/** 
 * Adapted and Optimized from https://github.com/ghoshnirmalya/react-search-box 
 */
import React, { 
  useRef, 
  useState, 
  FunctionComponent,
  ChangeEvent
} from "react";
import Fuse from "fuse.js";
import cn from "classnames";
import styles from "./VariantSearchBox.module.scss";
import { SearchIcon, CloseIcon } from "@icons";
import useResizeObserver from "@hooks/useResizeObserver";

interface VariantSearchBoxProps {
  placeholder?: string;
  data: string[];
  onSelect: (record: any) => void;
  onChange?: (value: string) => void;
  clearInput?: () => void;
  resetMessage?: string;
  showResetButton?: boolean;
}

type Record = { item: { key: string; value: string } };

const VariantSearchBox: FunctionComponent<VariantSearchBoxProps> = ({
  placeholder,
  data,
  onSelect,
  onChange,
  clearInput,
  resetMessage,
  showResetButton
}) => {
  const searchRef = useRef(null);
  const searchDim = useResizeObserver(searchRef);

  const [matchedRecords, setMatchedRecords] = useState<Record[]>([]);
  const [value, setValue] = useState<string>("");
  const [showDropdown, setDropdownVisibility] = useState<boolean>(false);

  const fuse = new Fuse(data.map(item => ({ key: item, value: item })), {
    minMatchCharLength: 2,
    threshold: 0.1,
    ignoreLocation: true,
    keys: ["value"]
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const matchedRecords = fuse.search(value);
    setValue(value);
    setMatchedRecords(matchedRecords);
    setDropdownVisibility(true);
    !!onChange && onChange(value);
  };

  const handleDropdownItemClick = (record: Record) => {
    setValue(record.item.value);
    !!onSelect && onSelect(record);
    setDropdownVisibility(false);
    !!onChange && onChange(record.item.value);
  };

  const selected = !!(value && data.includes(value) && !showDropdown);
  
  return (
    <div className={styles.searchDiv} ref={searchRef}>
      <span className={styles.inputContainer}>
        <input
          className={
            cn(
              (
                selected ? cn(styles.inputBox, styles.inputSelected) :
                styles.inputBox
              ),
              (
                showResetButton ? (
                  searchDim?.width! < 640 ? styles.inputAbbrReset : styles.inputReset
                ) : ""
              )
            )
          }
          type="text"
          placeholder={placeholder ? placeholder : "Search"}
          value={value}
          onChange={handleInputChange}
        />
        <span className={styles.iconContainer}>
          <SearchIcon />
        </span>
      </span>
      {
        showDropdown && 
        <div className={styles.dropdownDiv}>
          <ul>
            {matchedRecords.map((record) => {
              return (
                <li
                  key={record.item.key}
                  tabIndex={0}
                  onClick={() => handleDropdownItemClick(record)}
                >
                  {record.item.value}
                </li>
              );
            })}
          </ul>
        </div>
      }
    {
      (value && value.length > 0) && 
      <div
        className={
          showResetButton ? (
            !selected ? (
              searchDim?.width! < 640 ?
              cn(styles.closeIcon, styles.showAbbrReset) :
              cn(styles.closeIcon, styles.showReset)
            ) : 
            (
              searchDim?.width! < 640 ?
              cn(styles.closeIcon, styles.showAbbrReset, styles.closeSelected) :
              cn(styles.closeIcon, styles.showReset, styles.closeSelected)
            )
          ) : styles.closeIcon
        }
      >
        <div className={styles.searchCloseButton} onClick={() => {
          setValue("")
          setDropdownVisibility(false)
          !!clearInput && clearInput()
        }}>
          <CloseIcon />
          {
            showResetButton &&
            <div>
              {
                searchDim?.width! < 640 ? "Reset" : resetMessage
              }
            </div>
          }
        </div>
      </div>
    }
    </div>
  );
};

export default VariantSearchBox;
