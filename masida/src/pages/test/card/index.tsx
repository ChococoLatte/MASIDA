import React, { useState } from "react";

import {
  CardComponent,
  AnalysisCardComponent,
  MyCardComponent,
  DetailCardComponent,
} from "@/components/UI/CardComponent";

import styles from "./index.module.scss";

export type CardType = {
  imgUri: string;
  name: string;
  like: number;
  ratio: number;
};

export type MyCardType = {
  imgUri: string;
  name: string;
  like: number;
  ratio: number;
};

export type AnalysisCardType = {
  imgUri: string;
  name: string;
};

export type CocktailType = {
  id: number;
  nameKor: string;
  nameEng: string;
  like: number;
  comment: number;
  ratio: number;
  isLiked: boolean;
  isBooked: boolean;
};

const main = () => {
  const [cardList, setCardList] = useState<CardType[]>([
    {
      imgUri: "../../components/UI/Orange.png",
      name: "오렌지 블라썸1",
      like: 32,
      ratio: 4.5,
    },
    {
      imgUri: "../../components/UI/Orange.png",
      name: "오렌지 블라썸2",
      like: 322,
      ratio: 4.55,
    },
    {
      imgUri: "../../components/UI/Orange.png",
      name: "오렌지 블라썸3",
      like: 322,
      ratio: 4.55,
    },
  ]);

  const [myCardList, setMyCardList] = useState<MyCardType[]>([
    {
      imgUri: "../../components/UI/Orange.png",
      name: "m오렌지 블라썸1",
      like: 32,
      ratio: 4.5,
    },
    {
      imgUri: "../../components/UI/Orange.png",
      name: "m오렌지 블라썸2",
      like: 322,
      ratio: 4.55,
    },
    {
      imgUri: "../../components/UI/Orange.png",
      name: "m오렌지 블라썸3",
      like: 322,
      ratio: 4.55,
    },
  ]);

  const [analysisCardList, setAnalysisCardList] = useState<AnalysisCardType[]>([
    {
      imgUri: "../../components/UI/Orange.png",
      name: "a오렌지 블라썸1123132231",
    },
    {
      imgUri: "../../components/UI/Orange.png",
      name: "a오렌지 블라썸2",
    },
    {
      imgUri: "../../components/UI/Orange.png",
      name: "a오렌지 블라썸3",
    },
  ]);

  const [cocktailList, setCocktailList] = useState<CocktailType[]>([
    {
      id: 1,
      nameKor: "피치 크러쉬1",
      nameEng: "Peach Crush1",
      like: 2932,
      comment: 123,
      ratio: 4.6,
      isLiked: true,
      isBooked: false,
    },
  ]);

  return (
    <>
      <div className={styles.body}>
        <div>
          {/* Loop Sample */}
          {/* {analysisCardList.map((card) => (
            <AnalysisCardComponent key={card.name} analysisCard={card} />
          ))} */}
          <DetailCardComponent cocktail={cocktailList[0]} />
        </div>
        <div>
          <h2>[MyCard] &nbsp;</h2>
          {/* Loop Sample */}
          {myCardList.map((card) => (
            <MyCardComponent key={card.name} myCard={card} />
          ))}
        </div>

        <div>
          <h2>[Card]</h2>
          {/* Loop Sample */}
          {cardList.map((card) => (
            <CardComponent key={card.name} card={card} />
          ))}
        </div>

        <div>
          <h2>[AnalysisCard] &nbsp;</h2>
          {/* Loop Sample */}
          {analysisCardList.map((card) => (
            <AnalysisCardComponent key={card.name} analysisCard={card} />
          ))}
        </div>
      </div>
    </>
  );
};
export default main;
