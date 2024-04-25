import React from 'react';
import Anchor from "@/components/elements/Anchor";
import EmblaCarousel from "@/components/elements/embla/EmblaCarousel";
import styles from "./main-hero.module.css"

const MainHero = () => {
	const options = {loop: true}
	const autoplayOptions = {delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true}
	
	const slides = [
		{
			background: {backgroundImage: "url(/img/banner/gaming.jpg)"},
			value: "gaming",
			title: "Найкращі ігрові рішення тільки у нашому магазині",
			desc: "За дуже привабливими цінами",
			// button: <BtnBorderHover type={"link"} href={"/courses"} title={"Обрати курс"} variant={"dark"}/>
		},
		{
			background: {backgroundImage: "url(/img/banner/computer_parts.jpg)"},
			value: "computer_parts",
			title: "Професійна збірка ПК",
			desc: "Професійно підюираємо, якісно збираємо, Комплексно тестуємо",
			// button: <BtnBorderHover type={"link"} href={"/courses"} title={"Обрати курс"} variant={"dark"}/>
		}, {
			background: {backgroundImage: "url(/img/banner/monitors.jpg)"},
			value: "monitors",
			title: "Широкий вибір різноманітних моніторів",
			desc: "Незалежно для якої цілі, в нас знайдеться підходяще вам рішення",
			// button: <BtnBorderHover type={"link"} href={"/courses"} title={"Обрати курс"} variant={"dark"}/>
		}, {
			background: {backgroundImage: "url(/img/banner/notebook.jpg)"},
			value: "notebook",
			title: "Потужні ноутбуки для роботи та геймінгу",
			desc: "Ідеальний баланс між стриманим дизайном і безмежними можливостями",
			// button: <BtnBorderHover type={"link"} href={"/courses"} title={"Обрати курс"} variant={"dark"}/>
		}
	]
	
	
	return (
		<section className={styles.mainHero__root}>
			<Anchor id={"#hero"}/>
			<div className={"main_hero_carousel__root"}>
				
				<EmblaCarousel options={options} autoplayOptions={autoplayOptions}>
					{slides.map((slide) => {
						return (
							<div className="embla__slide" key={slide.value}>
								<div className={styles.mainHero__slide} style={slide.background}>
									<div className={styles.mainHero__wrap}>
										<div className={styles.mainHero__inner}>
											<div className={styles.mainHero__title}>
												{slide.title}
											</div>
											<div className={styles.mainHero__desc}>
												<p> {slide.desc}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						
						)
					})}
				</EmblaCarousel>
			</div>
		</section>
	);
};

export default MainHero;
