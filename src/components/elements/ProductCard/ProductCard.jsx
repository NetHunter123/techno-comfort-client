import React from 'react';
import styles from './product-card.module.css';


const ProductCard = () => {
	
	const product = {
		"id": 1,
		"producerId": 1,
		"categoryId": 1,
		"product_name": "Pecto depono.Pecto depono.Pecto depono.Pecto depono.Pecto depono.Pecto depono.",
		"vendor_code": 26826,
		"description": "Tripudio qui comburo creo velum inflammatio solutio cultura cognatus sufficio casus demens aetas damnatio velociter.",
		"product_characteristics": "[{\"key\":\"Appello.\",\"value\":\"Assumenda solio comitatus aptus venia aperte tepidus paens.\"},{\"key\":\"Vestrum.\",\"value\":\"Atavus aegre ultio ab quasi thymbra nihil voro.\"},{\"key\":\"Aeternus.\",\"value\":\"Capio desparatus demergo laborum curtus contabesco tamquam creptio.\"},{\"key\":\"Sub.\",\"value\":\"Subito deleo cibo cito labore comprehendo alii comptus.\"},{\"key\":\"Communis.\",\"value\":\"Claustrum temperantia talio caveo quam turbo turbo decet.\"}]",
		"images": "[\"https://loremflickr.com/640/480/gadgets?lock=7793010978848768?random=33112\",\"https://loremflickr.com/640/480/gadgets?lock=112502599843840?random=198768077164\",\"https://loremflickr.com/640/480/gadgets?lock=537061406801920?random=28321\",\"https://loremflickr.com/640/480/gadgets?lock=5198261929377792?random=55266429499217\",\"https://loremflickr.com/640/480/gadgets?lock=348366940667904?random=641584071\",\"https://loremflickr.com/640/480/gadgets?lock=7488180878049280?random=385743\",\"https://loremflickr.com/640/480/gadgets?lock=7771101291610112?random=88983\"]",
		"bestseller": true,
		"new": false,
		"price": 1604,
		"in_stock": 5,
		"createdAt": "2023-01-31T19:46:45.000Z",
		"updatedAt": "2023-01-31T19:46:45.000Z",
		"producer": {
			"id": 2,
			"producer_name": "Asus",
			"createdAt": "2024-04-04T14:14:20.000Z",
			"updatedAt": "2024-04-04T14:14:20.000Z"
		},
		"category": {
			"id": 1,
			"category_name": "Комп'ютери",
			"description": "Aedificium correptius venustas bis delibero appono autus creo ab sustineo porro quam tolero cubicularis basium thesis.",
			"createdAt": "2024-04-04T14:14:23.000Z",
			"updatedAt": "2024-04-04T14:14:23.000Z"
		}
	}
	return (<>
			<div className={styles.product_card}>
				<div className={styles.product_card__info}>
					<img className={styles.product_card__img} src={JSON.parse(product.images)[0]} alt={product.product_name}/>
					<div className={styles.product_card__details}>
						<div className={styles.product_card__inner}>
							<span className={styles.product_card__name}>{product.product_name}</span>
							<span className={styles.product_card__producer}>{product.producer.producer_name}</span>
						</div>
						<div className={styles.product_card__available}>Available now : <span>{product.in_stock}</span></div>
					</div>
				</div>
				<div className={styles.product_card__btn}>
					<a className={styles.product_card__cart} href="#">
						<span className={styles.product_card__price}>${product.price}</span>
						<span className={styles.product_card__add_to_cart}>
              <span>Add in cart</span>
            </span>
					</a>
				</div>
			</div>
		</>
	)
		;
};

export default ProductCard;
