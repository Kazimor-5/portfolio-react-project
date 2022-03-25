// ! FILES
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { data } from '../data';

const Button = ({ setIndex }) => {
  const checkIndex = (i) => {
    if (i > data.length - 1) {
      return 0;
    }

    if (i < 0) {
      return data.length - 1;
    }

    return i;
  };

  const prevSlide = () => {
    setIndex((i) => {
      let newIndex = i - 1;
      return checkIndex(newIndex);
    });
  };

  const nextSlide = () => {
    setIndex((i) => {
      let newIndex = i + 1;
      return checkIndex(newIndex);
    });
  };

  return (
    <>
      <button className='btn prev-btn' onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button className='btn next-btn' onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </>
  );
};

export default Button;
