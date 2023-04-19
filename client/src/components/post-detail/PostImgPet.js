import { useState, useRef, useEffect } from 'react';

const PostImgPet = (props) => {
  const [selectImg, setSelectedImg] = useState(0);
  const [slideRange, setSlideRange] = useState(0);
  const [limitPicture, setLimitPicture] = useState(0);
  const [counterSlide, setCounterSlide] = useState(0);
  const SlideElement = useRef();
  const PictureElement = useRef();
  const nextSlide = useRef();
  const prevSlide = useRef();

  const image = props.image;

  useEffect(() => {
    setLimitPicture(
      Math.floor(
        SlideElement?.current?.offsetWidth /
          PictureElement?.current?.offsetWidth
      )
    );
    // eslint-disable-next-line
  }, []);

  const handleShowImage = (e, index) => {
    const imgActive = document.querySelector('.img-select.active');

    if (imgActive !== e?.currentTarget) {
      e?.currentTarget?.classList?.add('active');
      imgActive?.classList?.remove('active');
    }
  };

  const handleSlide = (counter, element) => {
    if (counter + limitPicture <= image.length && counter >= 0) {
      setCounterSlide(counter);

      setSlideRange(-(PictureElement.current.offsetWidth + 8) * counter);
    }
  };

  return (
    <div className='pet-image'>
      <div className='AllImg-container'>
        {image.length > 5 && (
          <>
            <div
              ref={prevSlide}
              className={counterSlide - 1 < 0 ? 'prev off' : 'prev'}
              onClick={(e) => {
                handleSlide(counterSlide - 1, e.currentTarget);
              }}
            >
              <i className='icon-left-open'></i>
            </div>
            <div
              ref={nextSlide}
              className={
                counterSlide + 1 + limitPicture > image.length
                  ? 'next off'
                  : 'next'
              }
              onClick={(e) => {
                handleSlide(counterSlide + 1, e.currentTarget);
              }}
            >
              <i className='icon-right-open'></i>
            </div>
          </>
        )}
        <div className='AllImgSlide'>
          <div
            className='AllImg'
            ref={SlideElement}
            style={{ transform: `translateX(${slideRange}px)` }}
          >
            {image.map((url, index) => {
              return (
                <div
                  key={index}
                  ref={PictureElement}
                  className={index === 0 ? 'img-select active' : 'img-select'}
                  onClick={(e) => {
                    setSelectedImg(index);
                    handleShowImage(e, index);
                  }}
                >
                  <img src={url} alt='' />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className='img-show show'>
        <img src={image[selectImg]} alt='' />
      </div>
    </div>
  );
};

export default PostImgPet;
