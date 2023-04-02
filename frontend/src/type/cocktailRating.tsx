// 마이페이지 별점 분포 (베이스)
export type cocktailBaseRating = {
  whisky: number,
  tequila: number,
  vodka: number,
  mezcal: number,
  spirits: number,
  rum: number,
  liqueur: number,
  brandy: number,
  rating_score: number,
  jin: number,
  beer: number,
  wine: number
}

// 마이페이지 별점 분포 결과(베이스)
export type cocktailBase_props = {
  rating_average: number,
	rating_count: number,
	rating_max: number,
	rating_max_base: string
  data: cocktailBaseRating[];
}

// 마이페이지에서 별점 분포(색상)
export type cocktailColorRating = {
  red: number,
  orange: number,
  pink: number,
  green: number,
  blue: number,
  white: number,
  navy: number,
  yellow: number,
  purple: number,
  brown: number,
  rating_score: number
}

// 마이페이지 별점 분포 결과(색상)
export type cocktailColor_props = {
  rating_average: number,
	rating_count: number,
	rating_max: number,
	rating_max_color: string
  data: cocktailColorRating[];
}