import React, {useState} from 'react';
import {Pagination} from '@mantine/core';
import styles from './pagination.module.css';
const PaginationModule = ({pages, setPageNumber,activePage}) => {

	return (
		<div className={styles.pagination__wrap}>
			<Pagination total={pages} value={activePage} color={"var(--m-primary-200)"} onChange={setPageNumber} size="xl"/>
		</div>
	);
};

export default PaginationModule;
