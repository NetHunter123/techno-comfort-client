import React from 'react';
import {ActionIcon, Button, Drawer} from "@mantine/core";
import {useDisclosure, useMediaQuery} from "@mantine/hooks";
import {BsCart2} from "react-icons/bs";
import styles from "./shopping-cart.module.css";
import Link from "next/link";
import {SlLogin} from "react-icons/sl";
import {IoIosArrowRoundForward} from "react-icons/io";
import CartItem from "@/components/elements/CartItem/CartItem";

const ShoppingCart = () => {
	const isMedia768 = useMediaQuery('(min-width: 768px)');
	const [opened, {open, close}] = useDisclosure(false);
	const cartIcon = <BsCart2 size={"20px"}/>

	const products = [{
		"id": 1,
		"producerId": 8,
		"categoryId": 1,
		"product_name": "HP Pavilion Gaming Desktop",
		"vendor_code": 14803,
		"description": "HP Pavilion Gaming Desktop - це потужний настільний комп'ютер для геймерів з вражаючою графікою і високою продуктивністю. Завдяки процесору Intel Core i5 і відеокарті NVIDIA GeForce GTX 1650, він готовий до найвимогливіших ігор.",
		"product_characteristics": "[{\"field\":\"Процесор\",\"fieldKey\":\"processor\",\"value\":\"Intel Core i5-11400F\"},{\"field\":\"Оперативна пам'ять\",\"fieldKey\":\"ram\",\"value\":\"8GB\"},{\"field\":\"Тип пам'яті\",\"fieldKey\":\"ram_type\",\"value\":\"DDR4\"},{\"field\":\"Накопичувач\",\"fieldKey\":\"storage\",\"value\":\"512GB\"},{\"field\":\"Тип накопичувача\",\"fieldKey\":\"storage_type\",\"value\":\"SSD\"},{\"field\":\"Відеокарта\",\"fieldKey\":\"video_card\",\"value\":\"NVIDIA GeForce GTX 1650\"},{\"field\":\"Порти\",\"fieldKey\":\"ports\",\"value\":\"4x USB-A, 1x USB-C, 1x HDMI, 1x DisplayPort\"}]",
		"images": "[\"https://loremflickr.com/640/480/gadgets?lock=6365134744190976?random=5616648493603\",\"https://loremflickr.com/640/480/gadgets?lock=1313163509235712?random=60401428\",\"https://loremflickr.com/640/480/gadgets?lock=742878892523520?random=26850986488949\",\"https://loremflickr.com/640/480/gadgets?lock=7926011089911808?random=64019567910477\",\"https://loremflickr.com/640/480/gadgets?lock=823317510488064?random=50499\",\"https://loremflickr.com/640/480/gadgets?lock=5715036917989376?random=52210\",\"https://loremflickr.com/640/480/gadgets?lock=2096370632622080?random=936168\"]",
		"bestseller": false,
		"new": false,
		"price": "68307.00",
		"in_stock": 83,
		"createdAt": "2024-05-12T20:38:10.000Z",
		"updatedAt": "2024-05-12T20:38:10.000Z",
		"producer": {
			"id": 8,
			"producer_name": "Redmi",
			"createdAt": "2024-05-12T20:38:08.000Z",
			"updatedAt": "2024-05-12T20:38:08.000Z"
		},
		"category": {
			"id": 1,
			"category_name": "Комп'ютери",
			"category_value": "computers",
			"description": "Категорія Комп'ютери пропонує різноманітні комп'ютерні системи, які задовольнять потреби користувачів з різних сфер життя та роботи. Від потужних ігрових систем до надійних робочих станцій і компактних неттопів, тут представлені рішення для кожного. Геймерам можуть сподобатися високопродуктивні системи з потужними графічними картами і швидкими процесорами, які забезпечують плавний геймплей та високу якість зображення. Для бізнесу і творчості доступні робочі станції з потужними процесорами та великим обсягом оперативної та накопичувальної пам'яті, що дозволяє швидко та ефективно виконувати складні завдання. Користувачі, які цінують мобільність, можуть вибрати ноутбуки або нетбуки з різними характеристиками і функціональністю для роботи в дорозі або вдома. Крім того, тут можна знайти комп'ютери для дому і офісу з простими та надійними конфігураціями, які відповідають основним потребам користувачів.",
			"filters": "[{\"field\":\"Процесор\",\"fieldKey\":\"processor\",\"values\":[\"Intel Core i5-11400F\",\"Intel Core i7-11700F\",\"Intel Core i3-10100\"]},{\"field\":\"Оперативна пам'ять\",\"fieldKey\":\"ram\",\"values\":[\"8GB\",\"16GB\",\"12GB\"]},{\"field\":\"Тип пам'яті\",\"fieldKey\":\"ram_type\",\"values\":[\"DDR4\"]},{\"field\":\"Накопичувач\",\"fieldKey\":\"storage\",\"values\":[\"512GB\",\"1TB\",\"256GB + 1TB\"]},{\"field\":\"Тип накопичувача\",\"fieldKey\":\"storage_type\",\"values\":[\"SSD\",\"SSD + HDD\"]},{\"field\":\"Відеокарта\",\"fieldKey\":\"video_card\",\"values\":[\"NVIDIA GeForce GTX 1650\",\"Intel UHD Graphics 630\"]},{\"field\":\"Порти\",\"fieldKey\":\"ports\",\"values\":[\"4x USB-A, 1x USB-C, 1x HDMI, 1x DisplayPort\",\"3x USB-A, 2x USB-C, 1x HDMI, 1x DisplayPort\"]}]",
			"createdAt": "2024-05-12T20:38:10.000Z",
			"updatedAt": "2024-05-12T20:38:10.000Z"
		}
	},
		{
			"id": 2,
			"producerId": 10,
			"categoryId": 1,
			"product_name": "Dell XPS Tower Special Edition",
			"vendor_code": 76420,
			"description": "Dell XPS Tower Special Edition - це високопродуктивний настільний комп'ютер з елегантним дизайном та потужними характеристиками. Завдяки процесору Intel Core i7 і відеокарті NVIDIA GeForce GTX 1660 Ti, він ідеально підходить для роботи та гри.",
			"product_characteristics": "[{\"field\":\"Процесор\",\"fieldKey\":\"processor\",\"value\":\"Intel Core i7-11700F\"},{\"field\":\"Оперативна пам'ять\",\"fieldKey\":\"ram\",\"value\":\"16GB\"},{\"field\":\"Тип пам'яті\",\"fieldKey\":\"ram_type\",\"value\":\"DDR4\"},{\"field\":\"Накопичувач\",\"fieldKey\":\"storage\",\"value\":\"1TB\"},{\"field\":\"Тип накопичувача\",\"fieldKey\":\"storage_type\",\"value\":\"SSD\"},{\"field\":\"Відеокарта\",\"fieldKey\":\"video_card\",\"value\":\"NVIDIA GeForce GTX 1650\"},{\"field\":\"Порти\",\"fieldKey\":\"ports\",\"value\":\"3x USB-A, 2x USB-C, 1x HDMI, 1x DisplayPort\"}]",
			"images": "[\"https://loremflickr.com/640/480/gadgets?lock=8207359914541056?random=934156530453431\",\"https://loremflickr.com/640/480/gadgets?lock=3370133619736576?random=591786\",\"https://loremflickr.com/640/480/gadgets?lock=4250882761818112?random=7428611\",\"https://loremflickr.com/640/480/gadgets?lock=6939089469177856?random=769842\",\"https://loremflickr.com/640/480/gadgets?lock=7014331516452864?random=296706640516432\",\"https://loremflickr.com/640/480/gadgets?lock=3800406184427520?random=2651743218\",\"https://loremflickr.com/640/480/gadgets?lock=4007928163991552?random=1049652\"]",
			"bestseller": false,
			"new": false,
			"price": "242.00",
			"in_stock": 37,
			"createdAt": "2024-05-12T20:38:10.000Z",
			"updatedAt": "2024-05-12T20:38:10.000Z",
			"producer": {
				"id": 10,
				"producer_name": "Dell",
				"createdAt": "2024-05-12T20:38:08.000Z",
				"updatedAt": "2024-05-12T20:38:08.000Z"
			},
			"category": {
				"id": 1,
				"category_name": "Комп'ютери",
				"category_value": "computers",
				"description": "Категорія Комп'ютери пропонує різноманітні комп'ютерні системи, які задовольнять потреби користувачів з різних сфер життя та роботи. Від потужних ігрових систем до надійних робочих станцій і компактних неттопів, тут представлені рішення для кожного. Геймерам можуть сподобатися високопродуктивні системи з потужними графічними картами і швидкими процесорами, які забезпечують плавний геймплей та високу якість зображення. Для бізнесу і творчості доступні робочі станції з потужними процесорами та великим обсягом оперативної та накопичувальної пам'яті, що дозволяє швидко та ефективно виконувати складні завдання. Користувачі, які цінують мобільність, можуть вибрати ноутбуки або нетбуки з різними характеристиками і функціональністю для роботи в дорозі або вдома. Крім того, тут можна знайти комп'ютери для дому і офісу з простими та надійними конфігураціями, які відповідають основним потребам користувачів.",
				"filters": "[{\"field\":\"Процесор\",\"fieldKey\":\"processor\",\"values\":[\"Intel Core i5-11400F\",\"Intel Core i7-11700F\",\"Intel Core i3-10100\"]},{\"field\":\"Оперативна пам'ять\",\"fieldKey\":\"ram\",\"values\":[\"8GB\",\"16GB\",\"12GB\"]},{\"field\":\"Тип пам'яті\",\"fieldKey\":\"ram_type\",\"values\":[\"DDR4\"]},{\"field\":\"Накопичувач\",\"fieldKey\":\"storage\",\"values\":[\"512GB\",\"1TB\",\"256GB + 1TB\"]},{\"field\":\"Тип накопичувача\",\"fieldKey\":\"storage_type\",\"values\":[\"SSD\",\"SSD + HDD\"]},{\"field\":\"Відеокарта\",\"fieldKey\":\"video_card\",\"values\":[\"NVIDIA GeForce GTX 1650\",\"Intel UHD Graphics 630\"]},{\"field\":\"Порти\",\"fieldKey\":\"ports\",\"values\":[\"4x USB-A, 1x USB-C, 1x HDMI, 1x DisplayPort\",\"3x USB-A, 2x USB-C, 1x HDMI, 1x DisplayPort\"]}]",
				"createdAt": "2024-05-12T20:38:10.000Z",
				"updatedAt": "2024-05-12T20:38:10.000Z"
			}
		},
		{
			"id": 3,
			"producerId": 6,
			"categoryId": 1,
			"product_name": "Acer Aspire TC",
			"vendor_code": 94973,
			"description": "Acer Aspire TC - це доступний настільний комп'ютер для щоденного використання з вражаючими можливостями. Завдяки процесору Intel Core i3 і великому обсягу оперативної пам'яті, він забезпечує швидку роботу та відмінну продуктивність.",
			"product_characteristics": "[{\"field\":\"Процесор\",\"fieldKey\":\"processor\",\"value\":\"Intel Core i3-10100\"},{\"field\":\"Оперативна пам'ять\",\"fieldKey\":\"ram\",\"value\":\"12GB\"},{\"field\":\"Тип пам'яті\",\"fieldKey\":\"ram_type\",\"value\":\"DDR4\"},{\"field\":\"Накопичувач\",\"fieldKey\":\"storage\",\"value\":\"256GB + 1TB\"},{\"field\":\"Тип накопичувача\",\"fieldKey\":\"storage_type\",\"value\":\"SSD + HDD\"},{\"field\":\"Відеокарта\",\"fieldKey\":\"video_card\",\"value\":\"Intel UHD Graphics 630\"}]",
			"images": "[\"https://loremflickr.com/640/480/gadgets?lock=355147259576320?random=5750914\",\"https://loremflickr.com/640/480/gadgets?lock=6904559536439296?random=557664662085\",\"https://loremflickr.com/640/480/gadgets?lock=8668590347649024?random=27877\",\"https://loremflickr.com/640/480/gadgets?lock=6505351669088256?random=13232390973\",\"https://loremflickr.com/640/480/gadgets?lock=8318518873292800?random=593222185766037\",\"https://loremflickr.com/640/480/gadgets?lock=4273535159631872?random=34883383480513\",\"https://loremflickr.com/640/480/gadgets?lock=6239897163661312?random=49291631025542\"]",
			"bestseller": false,
			"new": true,
			"price": "2821.00",
			"in_stock": 99,
			"createdAt": "2024-05-12T20:38:10.000Z",
			"updatedAt": "2024-05-12T20:38:10.000Z",
			"producer": {
				"id": 6,
				"producer_name": "Acer",
				"createdAt": "2024-05-12T20:38:08.000Z",
				"updatedAt": "2024-05-12T20:38:08.000Z"
			},
			"category": {
				"id": 1,
				"category_name": "Комп'ютери",
				"category_value": "computers",
				"description": "Категорія Комп'ютери пропонує різноманітні комп'ютерні системи, які задовольнять потреби користувачів з різних сфер життя та роботи. Від потужних ігрових систем до надійних робочих станцій і компактних неттопів, тут представлені рішення для кожного. Геймерам можуть сподобатися високопродуктивні системи з потужними графічними картами і швидкими процесорами, які забезпечують плавний геймплей та високу якість зображення. Для бізнесу і творчості доступні робочі станції з потужними процесорами та великим обсягом оперативної та накопичувальної пам'яті, що дозволяє швидко та ефективно виконувати складні завдання. Користувачі, які цінують мобільність, можуть вибрати ноутбуки або нетбуки з різними характеристиками і функціональністю для роботи в дорозі або вдома. Крім того, тут можна знайти комп'ютери для дому і офісу з простими та надійними конфігураціями, які відповідають основним потребам користувачів.",
				"filters": "[{\"field\":\"Процесор\",\"fieldKey\":\"processor\",\"values\":[\"Intel Core i5-11400F\",\"Intel Core i7-11700F\",\"Intel Core i3-10100\"]},{\"field\":\"Оперативна пам'ять\",\"fieldKey\":\"ram\",\"values\":[\"8GB\",\"16GB\",\"12GB\"]},{\"field\":\"Тип пам'яті\",\"fieldKey\":\"ram_type\",\"values\":[\"DDR4\"]},{\"field\":\"Накопичувач\",\"fieldKey\":\"storage\",\"values\":[\"512GB\",\"1TB\",\"256GB + 1TB\"]},{\"field\":\"Тип накопичувача\",\"fieldKey\":\"storage_type\",\"values\":[\"SSD\",\"SSD + HDD\"]},{\"field\":\"Відеокарта\",\"fieldKey\":\"video_card\",\"values\":[\"NVIDIA GeForce GTX 1650\",\"Intel UHD Graphics 630\"]},{\"field\":\"Порти\",\"fieldKey\":\"ports\",\"values\":[\"4x USB-A, 1x USB-C, 1x HDMI, 1x DisplayPort\",\"3x USB-A, 2x USB-C, 1x HDMI, 1x DisplayPort\"]}]",
				"createdAt": "2024-05-12T20:38:10.000Z",
				"updatedAt": "2024-05-12T20:38:10.000Z"
			}
		}]

	const content = products
		.map(( product) =><CartItem product={product} />);




	return (
		<>
			<Drawer
				className={styles.cart__drawer}
				opened={opened}
				onClose={close}
				size="md"
				position="right"
				title="Корзина"
				styles={{
					header: {
						color: "var(--m-accent-400)",
					},
					title: {
						fontSize: '24px',
						textAlign: 'center',
					},
					body: {
						height:"calc(100% - 60px)",
						padding:"0 0 15px 5px",
						// overflow: 'hidden',
						// backgroundColor: "aqua",
					},
					content: {
						padding:"0px",
						// height:"100%",
						// overflow: 'hidden',
						// backgroundColor: "red",
					}
				}}
				transitionProps={{transition: 'fade-left', duration: 200, timingFunction: 'easy-in-out'}}
			>
				<div className={styles.cart__content}>
				{content}
				</div>
				<div className={styles.cart__footer}>
					<Button
						component={Link}
						href="/"
						className={styles.signin__button}
						variant="light"
						color="var(--m-accent-400)"
						rightSection={<IoIosArrowRoundForward  size={"18px"}/>}
						aria-label="sign-in"
						styles={{
							border:"1px solid var(--m-accent-400)"
						}}
					>
						Оформити замовлення
					</Button>
				</div>
			</Drawer>

			{/*{isMedia960 ?*/}
			<Button
				className={styles.cart__button}
				onClick={open}
				variant="light"
				color="var(--m-accent-400)"
				leftSection={isMedia768 && cartIcon}
				rightSection={true ? "3" : ""}
				aria-label="cart"
				// rightSection={<IconArrowRight size={14} />}
			>
				{isMedia768 ? "Корзина" : cartIcon}
			</Button>
		</>
	);
};

export default ShoppingCart;
