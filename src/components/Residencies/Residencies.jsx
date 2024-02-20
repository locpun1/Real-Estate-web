import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import styles from "./Residencies.module.scss";
import classname from "classnames/bind";

import data from "../../utils/slider.js";
import { sliderSettings } from "../../utils/common";

const cx = classname.bind(styles);

const Residencies = () => {
    return (
        <section className={cx("residencies-wrapper")} id="residencies">
            <div
                className={cx(
                    "residencies-container",
                    "paddings",
                    "inner-width"
                )}
            >
                <div className={cx("residencies__head", "flex-col-start")}>
                    <h2 className={cx("orange-text")}>Best Choices</h2>
                    <h1 className={cx("primary-text")}>Popular Residencies</h1>
                </div>

                <Swiper {...sliderSettings} style={{ overflow: "visible" }}>
                    <SliderButtons />
                    {data.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className={cx("residency", "flex-col-start")}>
                                <img
                                    src={card.image}
                                    alt="residency-img"
                                    className={cx("residency-img")}
                                />
                                <div
                                    className={cx(
                                        "residency-price",
                                        "secondary-text"
                                    )}
                                >
                                    <span style={{ color: "orange" }}>$</span>
                                    <span>{card.price}</span>
                                </div>
                                <h4
                                    className={cx(
                                        "residency-name",
                                        "primary-text"
                                    )}
                                >
                                    {card.name}
                                </h4>
                                <p
                                    className={cx(
                                        "residency-detail",
                                        "secondary-text"
                                    )}
                                >
                                    {card.detail}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Residencies;

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className={cx("slider-btn", "flex-center")}>
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    );
};
