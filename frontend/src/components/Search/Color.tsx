import { useState, useEffect } from "react";
import style from "./Color.module.scss";
import { setSelectColor } from "../../../store/category/colorSlice";
import { useDispatch } from "react-redux";

const Color = () => {
  const [checked, isChecked] = useState<number>(0);
  const [errorMsg, isErrorMsg] = useState<boolean>(false);
  const [checkColor, setCheckColor] = useState<string[]>([]);

  const dispatch = useDispatch();

  //색상은 2개이상 선택할수 없게 만들어주게 하려함.
  const checkedColor = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLInputElement;
    if (checked > 1 && target.checked === true) {
      //만약 2개가 선택되었다면?
      if (target.checked === true) {
        target.checked = false;
      } else {
        target.checked = true;
      }
      isErrorMsg(true);
    } else {
      if (target.checked === true) {
        isChecked(checked + 1);
        setCheckColor((checkColor) => [...checkColor, target.value]);
      } else {
        isChecked(checked - 1);
        setCheckColor(checkColor.filter((color) => color !== target.value));
      }
      isErrorMsg(false);
    }
  };

  useEffect(() => {
    dispatch(setSelectColor(checkColor));
  }, [checkColor]);

  return (
    <>
      <div>
        <div className={style.color_title}>색상</div>
        <div className={style.color}>
          <div className={style.color_up}>
            <label>
              <input
                type="checkbox"
                name="color"
                value="빨간색"
                className={style.color_red}
                onClick={checkedColor}
              />
            </label>
            <label>
              <input
                type="checkbox"
                name="color"
                value="주황색"
                className={style.color_orange}
                onClick={checkedColor}
              />
            </label>
            <label>
              <input
                type="checkbox"
                name="color"
                value="노란색"
                className={style.color_yellow}
                onClick={checkedColor}
              />
            </label>
            <label>
              <input
                type="checkbox"
                name="color"
                value="초록색"
                className={style.color_green}
                onClick={checkedColor}
              />
            </label>
            <label>
              <input
                type="checkbox"
                name="color"
                value="파란색"
                className={style.color_blue}
                onClick={checkedColor}
              />
            </label>
          </div>
          <div className={style.color_down}>
            <label>
              <input
                type="checkbox"
                name="color"
                value="남색"
                className={style.color_indigo}
                onClick={checkedColor}
              />
            </label>
            <label>
              <input
                type="checkbox"
                name="color"
                value="보라색"
                className={style.color_purple}
                onClick={checkedColor}
              />
            </label>
            <label>
              <input
                type="checkbox"
                name="color"
                value="갈색"
                className={style.color_brown}
                onClick={checkedColor}
              />
            </label>
            <label>
              <input
                type="checkbox"
                name="color"
                value="분홍색"
                className={style.color_pink}
                onClick={checkedColor}
              />
            </label>
            <label>
              <input
                type="checkbox"
                name="color"
                value="하얀색"
                className={style.color_white}
                onClick={checkedColor}
              />
            </label>
          </div>
          {errorMsg ? (
            <div className={style.color_errmsg}>
              색상은 최대 2개까지 선택 가능합니다.
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Color;
