import styles from "./CardComponent.module.scss";
import {
  CardType,
  MyCardType,
  AnalysisCardType,
  CocktailType,
} from "../../pages/test/card/index";

type CardProps = {
  card: CardType;
};
type MyCardProps = {
  myCard: MyCardType;
};
type AnalysisProps = {
  analysisCard: AnalysisCardType;
};

type CocktailProps = {
  cocktail : CocktailType
}

const CardComponent: React.FC<CardProps> = ({ card }: CardProps) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cocktailImg}>
          <img src="./likeImg.png" alt="" />
        </div>
        <div>
          <div className={styles.cocktailName}>{card.name}</div>
          <div className={styles.sub}>
            <div className={styles.likeImg}></div>
            <div className={styles.like}>{card.like}</div>
            <div className={styles.rateImg}></div>
            <div className={styles.rate}>{card.ratio}</div>
          </div>
        </div>
      </div>
    </>
  );
};

const MyCardComponent: React.FC<MyCardProps> = ({ myCard }: MyCardProps) => {
  return (
    <>
      <div className={styles.myCard}>
        <div className={styles.cocktailImg}></div>
        <div>
          <div className={styles.cocktailName}>{myCard.name}</div>
          <div className={styles.sub}>
            <div className={styles.likeImg}></div>
            <div className={styles.like}>{myCard.like}</div>
            <div className={styles.rateImg}></div>
            <div className={styles.rate}>{myCard.ratio}</div>
          </div>
        </div>
      </div>
    </>
  );
};

const AnalysisCardComponent: React.FC<AnalysisProps> = ({
  analysisCard,
}: AnalysisProps) => {
  return (
    <>
      <div className={styles.analysisCard}>
        <div className={styles.cocktailImg}></div>
        <div className={styles.cocktailName}>{analysisCard.name}</div>
      </div>
    </>
  );
};

const DetailCardComponent: React.FC<CocktailProps> = ({cocktail} : CocktailProps) => {
  return (
    <>
      <div className={styles.detailCard}>
        <div className={styles.cocktailKorName}>{cocktail.nameKor}</div>
        <div className={styles.cocktailEngName}>{cocktail.nameEng}</div>
        <div className={styles.cocktailImg}></div>
        <div className={styles.detailHeader}>
          <div className={styles.likeImg}></div>
          <div className={styles.like}>{cocktail.like}</div>
          <div className={styles.commentImg}></div>
          <div className={styles.comment}>{cocktail.comment}</div>
          <div className={styles.ratioImg}></div>
          <div className={styles.ratio}>{cocktail.ratio} / 5.0</div>
          <div className={styles.bookmark}></div>
        </div>
      </div>
    </>
  );
};

export {
  CardComponent,
  MyCardComponent,
  AnalysisCardComponent,
  DetailCardComponent,
};
