import React from 'react';
import {Group, Select} from "@mantine/core";
import {IoSwapVertical} from "react-icons/io5";
import {RxTextAlignBottom} from "react-icons/rx";
import {FaCheck, FaSort, FaSortAmountDown, FaSortAmountDownAlt} from "react-icons/fa";
import {TbArrowsSort} from "react-icons/tb";
import styles from "./sort-select.module.css";

const iconProps = {
	stroke: 1.2,
	color: 'var(--m-accent-400)',
	opacity: 0.6,
	size: 16,
};

const icons = {
	auto: <FaSort  {...iconProps} />,
	cheapest: <FaSortAmountDownAlt   {...iconProps} />,
	expensive: <FaSortAmountDown  {...iconProps} />,
};


const renderSelectOption = ({option, checked}) => (
	<Group flex="1" gap="xs">
		{icons[option.value]}
		{option.label}
		{checked && <FaCheck style={{marginInlineStart: 'auto'}} {...iconProps} />}
	</Group>
);


const SortSelect = ({props,handleSortChange}) => {
	
	const orderChange = (value) => {
		handleSortChange("order",value)
	}
	
	return (
		<Select
			{...props}
			className={styles.select}
			onChange={orderChange}
			styles={{
				dropdown: {maxWidth: "240px", width:"100%",minWidth:"233px"},
				option: {padding: "16px 4px"},
				optionContent: {gap: "0px"},
				label:{textAlign: "right", width:"100%", fontSize: "14px"},
			}}
			label="Сортування"
			allowDeselect={false}
			defaultValue="auto"
			data={[
				{value: 'auto', label: 'За замовчуванням'},
				{value: 'cheapest', label: 'Від дешевих до дорогих'},
				{value: 'expensive', label: 'Від дорогих до дешевих'},
			]}
			renderOption={renderSelectOption}
		/>
	);
};

export default SortSelect;
