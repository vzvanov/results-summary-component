import styles from "./pixelperfect.module.css";
import mobile from '../../assets/images/design/mobile-design.jpg';
import desktop from '../../assets/images/design/desktop-design.jpg';
import { ReactElement, useState } from "react";

type ImgElement = {
  mobile: ReactElement
  desktop: ReactElement;
}

function PixelPerfect() {
  const [isPixelPerfect, setPixelPerfect] = useState(false);
  const [imgMode, setImgMode] = useState('mobile');
  const imgs: ImgElement = {
    mobile: <img className={styles.image} src={mobile} alt="" />,
    desktop: <img className={styles.image} src={desktop} alt="" />,
  }

  const handlePixelPerfect = () => {
    setPixelPerfect(!isPixelPerfect);
  }

  const handleImgMode = () => {
    const mode = imgModeMap().get(imgMode);
    setImgMode(mode);
  }

  const imgModeMap = () => {
    const imgModeMap = new Map();
    imgModeMap.set('mobile', 'desktop');
    imgModeMap.set('desktop', 'mobile');
    return imgModeMap
  }

  return (
    <>
      {isPixelPerfect && imgs[imgMode as keyof ImgElement]}
      <div
        className={styles.buttons}
      >
        <button
          className={styles.btn}
          onClick={handlePixelPerfect}
        >PP</button>
        <button
          className={styles.btn}
          onClick={handleImgMode}
        >IMG</button>
      </div>
    </>
  );
}

export default PixelPerfect;
