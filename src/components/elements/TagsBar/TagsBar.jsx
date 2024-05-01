import React from 'react';
import styles from './TagsBar.module.scss';

const Tag = () => {
	return <div className={styles.tags_bar__tag}></div>
}

const TagsBar = ({bestseller, newProduct}) => {
	return (
		<div className={styles.tags_bar__wrap}>
			{bestseller && <>
			<Tag variant={"bestseller"} title={"топ продаж"} />
			</>}
			{newProduct && <>
				<Tag variant={"new"} title={"новинка"} />
			</>}
		</div>
	);
};

export default TagsBar;
