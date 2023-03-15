import { useRouter } from "next/router";
import style from "./index.module.scss";

import Header from "../../components/Header/Header";
import Cocktail_Info from "@/components/Detail/Cocktail_Info";
import Cocktail_recommend from "@/components/Detail/Cocktail_recommend";

import { cocktailType } from "@/type/cocktailTypes";

// 1. 칵테일 상세 조회
export type recipeType = {
  recipe_num: number;
  recipe_content: string;
};

export type ingredientType = {
  ingredient_name: string;
  ingredient_amount: string;
  ingredient_unit: string;
};

// 화면 단에서 axios 호출을 하여 결과 값을 컴포넌트에 props로 넘겨준다.
export type detail_props = {
  cocktail_id: number;
  cocktail_name_ko: string;
  cocktail_name_en: string;
  cocktail_img: string;
  cocktail_content: string;
  cocktail_difficulty: string;
  cocktail_rating: number;
  cocktail_likes: number;
  cocktail_comments: number;
  likes_checker: boolean;
  bookmark_checker: boolean;
  glass: string;
  recipe: recipeType[];
  ingredient: ingredientType[];
};

// 2. 특정 칵테일의 재료와 유사한 칵테일 상위 5개 추천 (컨텐츠 기반)

export type ingredientRecommend = {
  data: cocktailType[];
};

// 3. 특정 칵테일의 색상와 유사한 칵테일 상위 5개 추천 (컨텐츠 기반)
export type colorRecommend = {
  data: cocktailType[];
};

// 4. 2,3을 자식 컴포넌트에 전달할 type
export type recommend_props = {
  color_recommend: colorRecommend;
  ingredient_recommend: ingredientRecommend;
};

const detail = () => {
  const router = useRouter();

  // router.query.id가 undefined일 수 있기 때문에 as String을 붙혀줘서 해결한다.
  const x: string = router.query.id as string;

  const detail_props: detail_props = {
    cocktail_id: parseInt(x, 10),
    cocktail_name_ko: "피치 크러쉬",
    cocktail_name_en: "Peach Crush",
    cocktail_img: "/assets/image/cocktailSample.png",
    cocktail_content:
      "Vinious pineau des charentes and apricot notes shine in this fruity sour.Vinious pineau des charentes and apricot notes shine in this fruity sour.Vinious pineau des charentes and apricot notes shine in this fruity sour.Vinious pineau des charentes and apricot notes shine in this fruity sour.",
    cocktail_difficulty: "상",
    cocktail_rating: 3.5,
    cocktail_likes: 3212,
    cocktail_comments: 2233,
    likes_checker: true,
    bookmark_checker: true,
    glass: "동그리 동동잔",
    recipe: [
      {
        recipe_num: 1,
        recipe_content: "이거 넣고",
      },
      {
        recipe_num: 2,
        recipe_content: "저거 넣고",
      },
      {
        recipe_num: 3,
        recipe_content: "다 넣으면",
      },
      {
        recipe_num: 4,
        recipe_content: "끝입니다~",
      },
    ],
    ingredient: [
      {
        ingredient_name: "피치 리큐어",
        ingredient_amount: "1",
        ingredient_unit: "oz",
      },
      {
        ingredient_name: "스위트 & 사워 믹스",
        ingredient_amount: "20",
        ingredient_unit: "ml",
      },
      {
        ingredient_name: "크랜베리 주스",
        ingredient_amount: "25",
        ingredient_unit: "ml",
      },
      {
        ingredient_name: "잘게 갈은 얼음",
        ingredient_amount: "20",
        ingredient_unit: "ml",
      },
    ],
  };

  const recommend_props: recommend_props = {
    color_recommend: {
      data: [
        {
          cocktail_id: 1,
          cocktail_name_ko: "이지현의 땀",
          cocktail_name_en: "(orange Blossom)",
          cocktail_img: "/assets/image/cocktailSample.png",
          cocktail_likes: 292,
          cocktail_rating: 4.6,
          cocktail_difficulty: "하",
        },
        {
          cocktail_id: 2,
          cocktail_name_ko: "오렌지 블라썸c2",
          cocktail_name_en: "(orange Blossom)",
          cocktail_img: "/assets/image/cocktailSample.png",
          cocktail_likes: 292,
          cocktail_rating: 4.6,
          cocktail_difficulty: "하",
        },{
          cocktail_id: 3,
          cocktail_name_ko: "오렌지 블라썸c3",
          cocktail_name_en: "(orange Blossom)",
          cocktail_img: "/assets/image/cocktailSample.png",
          cocktail_likes: 292,
          cocktail_rating: 4.6,
          cocktail_difficulty: "하",
        },
        {
          cocktail_id: 4,
          cocktail_name_ko: "김영주의 눈물",
          cocktail_name_en: "(orange Blossom)",
          cocktail_img: "/assets/image/cocktailSample.png",
          cocktail_likes: 292,
          cocktail_rating: 4.6,
          cocktail_difficulty: "하",
        },
      ],
    },
    ingredient_recommend: {
      data: [
        {
          cocktail_id: 1,
          cocktail_name_ko: "오렌지 블라썸i1",
          cocktail_name_en: "(orange Blossom)",
          cocktail_img: "/assets/image/cocktailSample.png",
          cocktail_likes: 111,
          cocktail_rating: 4.6,
          cocktail_difficulty: "중",
        },
        {
          cocktail_id: 2,
          cocktail_name_ko: "오렌지 블라썸i2",
          cocktail_name_en: "(orange Blossom)",
          cocktail_img: "/assets/image/cocktailSample.png",
          cocktail_likes: 222,
          cocktail_rating: 4.6,
          cocktail_difficulty: "중",
        },
        {
          cocktail_id: 3,
          cocktail_name_ko: "오렌지 블라썸i3",
          cocktail_name_en: "(orange Blossom)",
          cocktail_img: "/assets/image/cocktailSample.png",
          cocktail_likes: 111,
          cocktail_rating: 4.6,
          cocktail_difficulty: "중",
        },
        {
          cocktail_id: 4,
          cocktail_name_ko: "오렌지 블라썸i4",
          cocktail_name_en: "(orange Blossom)",
          cocktail_img: "/assets/image/cocktailSample.png",
          cocktail_likes: 222,
          cocktail_rating: 4.6,
          cocktail_difficulty: "중",
        },
      ],
    },
  };

  return (
    <>
      <Header />
      <div className={style.detail_layout}>
        <div className={style.detail_layout_left}>
          <Cocktail_Info {...detail_props} />
        </div>
        <div className={style.detail_layout_right}>
          <Cocktail_recommend {...recommend_props} />
        </div>
      </div>
    </>
  );
};

export default detail;
