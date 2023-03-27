import { useRouter } from 'next/router';
import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import style from './Main_banner.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ImageLoaderProps } from 'next/image';
import { imgLoader } from '../../utils/imgLoader';
import axios from 'axios';
import { login } from '../../../store/user/userSlice';
import { RootState } from "../../../store/store";

const Main_banner = () => { 
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    autoplay: true,
    autoplaySpeed: 3000
  }
  const router = useRouter();
  const goBegginer = () =>  {
    router.push("/theme/begginer");
  }

  const goSpring = () => {
    router.push("/theme/spring");
  }

  const goSummer = () => {
    router.push("/theme/summer");
  }

  const router2 = useRouter();
  const accessToken = router.query.accessToken as string;
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(login(accessToken));
  },);

  const result = useSelector(
    (state: RootState) => state.user.accessToken
  );

  console.log("나는 토큰이야", result);
  

  const onLogoutHandler = () => { 
      const logout:any = axios.get('/api/oauth/kakao/logout', {
        headers: {
          Authorization:accessToken,
        }
      })
    
    console.log(logout);
  }

  const onQuitHandler = () => { 
    const result:any = axios.delete('/api/oauth/kakao/delete',{
        headers: {
          Authorization:accessToken,
        }
    })
    console.log(result.data.message);
  }

  const onViewHandler = () => { 
    const result:any = axios.get('/api/oauth/users',{
        headers: {
          Authorization:accessToken,
        }
    })
    console.log(result);
  }

  return (
    <div className={ style.mainBanner}>
        <Slider {...settings}>
          <div className={style.mainBanner_black}>
            <Image
                  loader={({ src, width, quality }: ImageLoaderProps) => imgLoader({ src, width, quality })}
                  src="/assets/image/mainbanner.png"
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center" />
            <div className={style.mainHeader}>
              <Link href="/cocktail-worldcup">칵테일 월드컵</Link>
              <Link href="/search">칵테일 검색</Link>
              {accessToken ? (<Link href="https://j8b208.p.ssafy.io/api/oauth/kakao/login">로그인</Link>):(<button onClick={onLogoutHandler}>로그아웃</button>)}
            </div>
            <div className={style.mainTitle}>
              <h1>MASIDA,</h1>
              <h3>당신의 취향을 그대로 담은 칵테일을 <br/> 집에서도 손쉽게</h3>
            </div>
          </div>
          <div className={style.mainBanner_white}>
            <Image
                loader={({ src, width, quality }: ImageLoaderProps) => imgLoader({ src, width, quality })}
                src="/assets/image/banner_begginer.png"
                alt="image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                onClick={goBegginer}
            />
            <div className={style.mainHeader}>
              <Link href="/cocktail-worldcup">칵테일 월드컵</Link>
              <Link href="/search">칵테일 검색</Link>
              {accessToken ? (<Link href="https://j8b208.p.ssafy.io/api/oauth/kakao/login">로그인</Link>):(<button onClick={onLogoutHandler}>로그아웃</button>)}
            </div>
            <div className={style.mainTitle2} onClick={goBegginer}>
              <h1><strong>맛과 향, </strong>모두 즐기는 칵테일의 <br/>매력을 느껴보세요.</h1>
              <h3>칵테일 입문자를 위한 다양한 칵테일을 추천해드립니다.</h3>
            </div>
          </div>
          <div className={style.mainBanner_white}>
          <Image
            loader={({ src, width, quality }: ImageLoaderProps) => imgLoader({ src, width, quality })}
            src="/assets/image/banner_spring.png"
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  onClick={goSpring}/>
            <div className={style.mainHeader}>
              <Link href="/cocktail-worldcup">칵테일 월드컵</Link>
              <Link href="/search">칵테일 검색</Link>
              <Link href="">로그인</Link>
            </div>
            <div className={style.mainTitle3} onClick={goSpring}>
              <h1>봄의 느낌을 담은 칵테일,<br/> 궁금하지 않으신가요?</h1>
              <h3>봄에 어울리는 칵테일을 추천해드립니다.</h3>
            </div>
          </div>
          <div className={style.mainBanner_white}>
          <Image
            loader={({ src, width, quality }: ImageLoaderProps) => imgLoader({ src, width, quality })}
            src="/assets/image/banner_summer.png"
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center" 
                  onClick = {goSummer}/>
            <div className={style.mainHeader}>
              <Link href="/cocktail-worldcup">칵테일 월드컵</Link>
              <Link href="/search">칵테일 검색</Link>
              {accessToken ? (<Link href="https://j8b208.p.ssafy.io/api/oauth/kakao/login">로그인</Link>):(<button onClick={onLogoutHandler}>로그아웃</button>)}
            </div>
            <div className={style.mainTitle4} onClick = {goSummer}>
              <h1>여름 햇살 아래 즐기는 칵테일, 궁금하신가요?</h1>
              <h3>여름에 어울리는 다양한 칵테일을 추천해드립니다.</h3>
            </div>
          </div>
        </Slider>
      </div>
  );
};
 


export default Main_banner;

