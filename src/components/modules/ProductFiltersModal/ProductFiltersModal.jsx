import React from 'react';
import styles from './product-filters-modal.modules.css';
import {Button, Modal} from "@mantine/core";
import ProductFilters from "@/components/modules/ProductFilters/ProductFilters";
import {useDisclosure} from "@mantine/hooks";
import {CiFilter} from "react-icons/ci";
import {css, cx} from '@emotion/react'


const ProductFiltersModal = ({currCategory, handleFilterChange}) => {
	const [opened, {open, close}] = useDisclosure(false);
	
	return (
		<>
			<Modal
				data-module="filtersModal"
				styles={{
					// root: {padding: "20px 20px"}
				}}
				opened={opened} removeScrollProps={false} onClose={close} radius={"md"} centered>
				<ProductFilters filtersJson={currCategory.filters} handleFilterChange={handleFilterChange}/>
			</Modal>
			
			{/*<Button onClick={open}>Open centered Modal</Button>*/}
			<Button
				data-module="filtersModalBtn"
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
