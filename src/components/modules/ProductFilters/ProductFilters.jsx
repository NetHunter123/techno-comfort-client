import React from 'react';
import styles from './product-filters.module.css';
import {Accordion, Checkbox, Text} from "@mantine/core";
import CheckBoxFilter from "@/components/elements/CheckBoxFilter/checkBoxFilter";

const ProductFilters = ({filtersJson, handleFilterChange}) => {
	const filters = filtersJson
	console.log("Filters all in filter component", filters);
	
	
	
	const filtersItems = filters.map((filter) => (
		<Accordion.Item className={styles.filters__item} value={filter.fieldKey} key={filter.fieldKey}>
			<Accordion.Control className={styles.filters__control}>
				{/*<AccordionLabel {...filter} />*/}
				{filter.field}
			</Accordion.Control>
			<Accordion.Panel className={styles.filters__panel}>
				{/*<Text size="sm">{filter.fieldKey}</Text>*/}
				<div className={styles.filters__panel_inner}>
					{filter.values.map((value, index) => {
						return (
							<CheckBoxFilter fieldKey={filter.fieldKey} value={value} key={value}
							                handleFilterChange={handleFilterChange}/>
						)
					})}
				</div>
			</Accordion.Panel>
		</Accordion.Item>
	));
	
	return (
		<div>
			<h3 className={styles.filters__title}>Фільтри</h3>
			<Accordion chevronPosition="right" multiple variant="contained"
			           styles={{content: {padding: '5px'}}}
			>
				{filtersItems}
			</Accordion>
		</div>
	);
};

export default ProductFilters;
