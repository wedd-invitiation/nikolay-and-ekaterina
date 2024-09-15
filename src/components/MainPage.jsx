import React from "react";
import { Names } from "./Names/Names";
import "./mainPage.scss";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ReactComponent as Heart } from "../images/heart.svg";
import { ReactComponent as Gift } from "../images/gift.svg";
import { ReactComponent as Divider } from "../images/divider.svg";
import { ReactComponent as Bus } from "../images/bus.svg";
import { CountDown } from "./CountDown/CountDown";

const FlexCenter = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const month = [
  [" ", 1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12, 13],
  [14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27],
  [28, 29, 30, 31],
];

const titleVariants = {
  offscreen: {
    opacity: 0,
    transform: "scale(0.9)",
  },
  onscreen: {
    opacity: 1,
    transform: "scale(1)",
    transition: {
      delay: 0.3,
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const locationVariants = {
  offscreen: {
    opacity: 0,
    y: -50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const textVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 1,
    },
  },
};

const busVariants = {
  offscreen: {
    x: "100%",
  },
  onscreen: {
    x: "0%",
    transition: {
      delay: 0.3,
      duration: 1,
    },
  },
};

export const MainPage = () => {
  const handleClickLocation = () => {
    window.open(
      "https://yandex.ru/maps/195/ulyanovsk/house/ulitsa_gimova_3/YEEYcgdkSUwEQFtufX9wdnhjYg==/?ll=48.404093%2C54.317406&z=16"
    );
  };

  const handleClickLocationRes = () => {
    window.open(
      "https://yandex.ru/maps/org/gallery/162277338764/?ll=48.399239%2C54.320517&z=16"
    );
  };

  return (
    <div className="main">
      <div className="main_start">
        <div className="invitation">приглашение на свадьбу</div>
        <Names />
        <div className="date">24.10.2024</div>
        <FlexCenter
          className="arrow"
          initial={{ opacity: 0 }}
          animate={{ y: [0, 20, 0], opacity: 1 }}
          transition={{
            delay: 1.5,
            duration: 4,
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
        >
          <img
            alt="nikolay-and-ekaterina"
            width="48px"
            height="32px"
            src="https://static.tildacdn.com/tild3764-3337-4432-b961-316366353332/Frame_1123.png"
          />
        </FlexCenter>
      </div>

      <div className="main_all">
        <motion.div
          variants={textVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1 }}
          className="text"
        >
          «Счастье – это когда ты нашел того, кто искал тебя».
        </motion.div>
        <motion.div
          variants={textVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1 }}
          className="text"
        >
          Этот день станет началом нашей долгой и счастливой семейной жизни.
          <br /> Мы приглашаем Вас на торжество, посвященное нашей свадьбе.
        </motion.div>
        <div className="month">Октябрь</div>
        <div className="month_container">
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1.4 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5,
            }}
            style={{ position: "absolute", top: "132px", left: "127px" }}
          >
            <Heart />
          </motion.div>

          {month.map((week) => (
            <div className="week_container">
              {week.map((day) => (
                <div style={{ width: "28px", textAlign: "center" }}>{day}</div>
              ))}
            </div>
          ))}
        </div>
        <Divider className="divider" />
        <motion.div
          variants={titleVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
          className="title"
        >
          Место проведения
        </motion.div>
        <motion.div
          variants={textVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1 }}
          className="text"
        >
          <span style={{ fontWeight: 700, lineHeight: "36px" }}>
            Церемония регистрации
          </span>
          <br /> состоится во Дворце Бракосочетания по адресу улица Гимова 3
        </motion.div>

        <div className="text" style={{ padding: "6px" }}>
          СБОР ГОСТЕЙ
        </div>
        <div
          className="text"
          style={{
            fontWeight: 700,
            fontSize: "32px",
            textDecoration: "underline",
            padding: "12px",
          }}
        >
          14:45
        </div>

        <button className="button_location" onClick={handleClickLocation}>
          Как добраться?
        </button>

        <motion.div
          variants={textVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1 }}
          className="text"
          style={{ marginTop: "16px" }}
        >
          <span style={{ fontWeight: 700, lineHeight: "36px" }}>
            Свадебное торжество
          </span>
          <br /> будет проходить в ресторане Gallery по адресу улица Гончарова
          25
        </motion.div>

        <div className="text" style={{ padding: "6px" }}>
          СБОР ГОСТЕЙ
        </div>
        <div
          className="text"
          style={{
            fontWeight: 700,
            fontSize: "32px",
            textDecoration: "underline",
            padding: "12px",
          }}
        >
          17:00
        </div>

        <button className="button_location" onClick={handleClickLocationRes}>
          Как добраться?
        </button>
        <motion.div
          variants={busVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1 }}
          style={{ width: "80px", marginLeft: "0px" }}
        >
          <Bus style={{ marginTop: "30px", width: "86px" }} />
        </motion.div>
        <motion.div
          variants={textVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1 }}
          className="text"
        >
          Нам очень важно, чтобы каждый чувствовал себя комфортно,
          <br />
          поэтому в конце торжества Вас будет ждать трансфер (время и место
          сбора сообщим дополнительно)
        </motion.div>
        <CountDown date={new Date("Thu, 24 Oct 2024 15:00:00")} />
        <motion.div
          variants={titleVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
          className="title"
        >
          Дресс-код
        </motion.div>
        <motion.div
          variants={textVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1 }}
          className="text"
        >
          Надевайте всё самое нарядное и красивое и обязательно берите с собой
          хорошее настроение!
        </motion.div>
        <Gift style={{ marginTop: "20px" }} />
        <motion.div
          variants={textVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
          className="text"
        >
          Мы очень ценим Вашу заботу, внимание и будем рады любому подарку!{" "}
          <br /> И не важно, в какой конверт Вы его упакуете :)
        </motion.div>

        <motion.div
          variants={titleVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1 }}
          className="title"
        >
          Детали
        </motion.div>
        <motion.div
          variants={titleVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1 }}
          className="text"
        >
          Мы очень старались сделать праздник незабываемым, поэтому будем рады,
          <br />
          если Вы подтвердите свое присутствие до 01.10.2024
        </motion.div>
        <motion.div
          variants={titleVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1 }}
          className="text"
        >
          Сменную обувь для торжественного вечера можно будет переобуть внутри
          помещения.
        </motion.div>
        <Divider className="divider" />

        <motion.div
          variants={locationVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1 }}
          className="title"
          style={{ marginBottom: "60px" }}
        >
          С любовью, <br /> Николай и Екатерина
        </motion.div>
      </div>
    </div>
  );
};
