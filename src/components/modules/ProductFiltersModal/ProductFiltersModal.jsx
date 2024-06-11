import React from 'react';
import styles from './product-filters-modal.modules.css';
import {Button, Modal} from "@mantine/core";
import ProductFilters from "@/components/modules/ProductFilters/ProductFilters";
import {useDisclosure} from "@mantine/hooks";
import {CiFilter} from "react-icons/ci";

const ProductFiltersModal = ({currCategory, handleFilterChange}) => {
	const [opened, {open, close}] = useDisclosure(false);
	
	return (
		<>
			<Modal className={styles.filter__modal}
			       // styles={{
				     //   root: ``
			       // }}
			       opened={opened} removeScrollProps={false} onClose={close} radius={"md"} centered>
				<ProductFilters filtersJson={currCategory.filters} handleFilterChange={handleFilterChange}/>
				<ProductFilters filtersJson={currCategory.filters} handleFilterChange={handleFilterChange}/>
				<ProductFilters filtersJson={currCategory.filters} handleFilterChange={handleFilterChange}/>
			</Modal>
			
			{/*<Button onClick={open}>Open centered Modal</Button>*/}
			<Button
				className={styles.filter__button}
				onClick={open}
				variant="light"
				color="var(--m-accent-400)"
				rightSection={<CiFilter size={"24px"}/>
				}
				aria-label="filters"
			>
				Фільтри
			</Button>
		</>
	);
};

export default ProductFiltersModal;
