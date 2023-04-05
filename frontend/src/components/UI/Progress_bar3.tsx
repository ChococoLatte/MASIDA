import {cocktailIngredient } from '../../type/cocktailPreference';
import style from './Progress_bar.module.scss';

const Progress_bar3 = (props: cocktailIngredient[]) => {
  const style_bar_1 = {
    backgroundColor: "#f4e77e",
    width: `${props[0].ingredient_ratio}%`,
  };

  const style_bar_2 = {
    backgroundColor: "#f79d8e",
    width: `${props[1].ingredient_ratio}%`,
  };

  const style_bar_3 = {
    backgroundColor: "#e8a93b",
    width: `${props[2].ingredient_ratio}%`,
  };

  const style_bar_4 = {
    backgroundColor: "#e8c1a0",
    width: `${props[3].ingredient_ratio}%`,
  };

  const style_bar_5 = {
    backgroundColor: "#61cdbb",
    width: `${props[4].ingredient_ratio}%`,
  };
  return (
    <>
      <div className={style.progressBar}>
        <h3>선호하는 재료</h3>
        <div className={ style.progressBar_content}>
          <div className={style.progressBar_content_first}>
            <div className={ style.progressBar_content_desc}>
              <p>1. { props[0].ingredient_name}</p>
              <p>{props[0].ingredient_ratio}%({ props[0].ingredient_count}건)</p>
            </div>
            <div className={style.progressBar_gauge_layer}>
              <div className={style.progressBar_gauge}>
                <div style={style_bar_1}> &nbsp;</div>
              </div>
            </div>
          </div>
          <div className={style.progressBar_content_first}>
            <div className={ style.progressBar_content_desc}>
              <p>2. { props[1].ingredient_name}</p>
              <p>{props[1].ingredient_ratio}%({ props[1].ingredient_count}건)</p>
            </div>
            <div className={style.progressBar_gauge_layer}>
              <div className={style.progressBar_gauge}>
                <div style={style_bar_2}> &nbsp;</div>
              </div>
            </div>
          </div>
          <div className={style.progressBar_content_first}>
           <div className={ style.progressBar_content_desc}>
              <p>3. { props[2].ingredient_name}</p>
              <p>{props[2].ingredient_ratio}%({ props[2].ingredient_count}건)</p>
            </div>
            <div className={style.progressBar_gauge_layer}>
              <div className={style.progressBar_gauge}>
                <div style={style_bar_3}> &nbsp;</div>
              </div>
            </div>
          </div>
          <div className={style.progressBar_content_first}>
            <div className={ style.progressBar_content_desc}>
              <p>4. { props[3].ingredient_name}</p>
              <p>{props[3].ingredient_ratio}%({ props[3].ingredient_count}건)</p>
            </div>
            <div className={style.progressBar_gauge_layer}>
              <div className={style.progressBar_gauge}>
                <div style={style_bar_4}> &nbsp;</div>
              </div>
            </div>
          </div>
          <div className={style.progressBar_content_first}>
            <div className={ style.progressBar_content_desc}>
              <p>5. { props[4].ingredient_name}</p>
              <p>{props[4].ingredient_ratio}%({props[4].ingredient_count}건)</p>
            </div>
            <div className={style.progressBar_gauge_layer}>
              <div className={style.progressBar_gauge}>
                <div style={style_bar_5}> &nbsp;</div>
              </div>
            </div>
          </div>
        </div> 6
      </div>
    </>
    )
};

export default Progress_bar3;