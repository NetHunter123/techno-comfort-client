import React, {useState} from 'react';
import styles from './checkbox-filter.module.css';
import {Checkbox} from "@mantine/core";

const CheckBoxFilter = ({value, handleFilterChange, fieldKey}) => {
	const [checked, setChecked] = useState(false);
	
	
	const handleChange = (event) => {
		setChecked(event.currentTarget.checked)
		handleFilterChange(fieldKey, value)
	}
	return (
		<Checkbox
			checked={checked}
			onChange={handleChange}
			label={value}
			color="var(--m-accent-200)"
			variant="outline"
		/>)
};

export default CheckBoxFilter;
