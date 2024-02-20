import React, { useState } from "react";
import styles from "./Value.module.scss";
import classname from "classnames/bind";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemState,
} from "react-accessible-accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion";

import valueImg from "../../assets/images/value.png";

const cx = classname.bind(styles);

const Value = () => {
    return (
        <section className={cx("value-wrapper")} id="value">
            <div
                className={cx(
                    "value-container",
                    "paddings",
                    "inner-width",
                    "flex-center"
                )}
            >
                {/* Left side */}
                <div className={cx("value__left", "flex-center")}>
                    <div className={cx("value__img-container")}>
                        <img
                            src={valueImg}
                            alt=""
                            className={cx("value-img")}
                        />
                    </div>
                </div>

                {/* Right side */}
                <div className={cx("value__right", "flex-col-start")}>
                    <p className={cx("value__text", "orange-text")}>
                        Our Value
                    </p>
                    <h2 className={cx("value__title", "primary-text")}>
                        Value We Give to You
                    </h2>
                    <p className={cx("value__des", "secondary-text")}>
                        We always ready to help by providijng the best services
                        for you.
                        <br />
                        We beleive a good blace to live can make your life
                        better
                    </p>

                    <Accordion
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                        className={cx("accordion")}
                    >
                        {data.map((item, index) => {
                            const [classname, setClassName] = useState();
                            return (
                                <AccordionItem
                                    className={cx(
                                        "accordion__item",
                                        `${classname}`
                                    )}
                                    key={index}
                                    uuid={index}
                                >
                                    <AccordionItemHeading>
                                        <AccordionItemButton
                                            className={cx(
                                                "accordion__button",
                                                "flex-center"
                                            )}
                                        >
                                            <AccordionItemState>
                                                {({ expanded }) =>
                                                    expanded
                                                        ? setClassName(
                                                              "expanded"
                                                          )
                                                        : setClassName(
                                                              "collapsed"
                                                          )
                                                }
                                            </AccordionItemState>

                                            <div
                                                className={cx(
                                                    "accordion__item-icon",
                                                    "flex-center"
                                                )}
                                            >
                                                {item.icon}
                                            </div>
                                            <span
                                                className={cx(
                                                    "accordion__item-heading",
                                                    "primary-text"
                                                )}
                                            >
                                                {item.heading}
                                            </span>
                                            <div
                                                className={cx(
                                                    "accordion__item-icon",
                                                    "flex-center"
                                                )}
                                            >
                                                <MdOutlineArrowDropDown
                                                    size={20}
                                                />
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel
                                        className={cx("accordion__panel")}
                                    >
                                        <p
                                            className={cx(
                                                "secondary-text",
                                                "accordion__detail"
                                            )}
                                        >
                                            {item.detail}
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default Value;
