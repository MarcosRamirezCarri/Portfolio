import style from "./style.module.css";

const BlobBG = () =>{
    return(
          <div className="absolute w-screen hidden lg:contents h-screen">
                <div className={style.shapeBlob}></div>
                <div className={style.shapeBlobOne}></div>
                <div className={style.shapeBlobTwo}></div>
                <div className={style.shapeBlobThree}></div>
                <div className={style.shapeBlobFour}></div>
                <div className={style.shapeBlobFive}></div>
              </div>
    )
}

export default BlobBG;