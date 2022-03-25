// ! FILES
import { data } from '../data';
import { useState, useEffect } from 'react';
// ! COMPONENTS
import Slide from './Slide';
import Button from './Button';

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index > data.length - 1) {
      setIndex(0);
    }

    if (index < 0) {
      setIndex(data.length - 1);
    }
  }, [index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);

    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className='project-slider' id='project'>
      <h3 className='title about-project'>mes projets</h3>
      <div className='title-underline'></div>
      <article className='slides-container'>
        {data.map((item, i) => {
          let position = 'next-slide';

          if (i === index) {
            position = 'active-slide';
          }

          if (i === index - 1 || (index === 0 && i === data.length - 1)) {
            position = 'prev-slide';
          }

          return <Slide key={item.id} data={item} position={position} />;
        })}
        <Button setIndex={setIndex} />
      </article>
    </section>
  );
};

export default Slider;
