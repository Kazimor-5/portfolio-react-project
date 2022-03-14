import { data } from './data';

const Image = () => {
  return data.map((item) => {
    const { id, name, text, gitlink, link, img } = item;
    return (
      <div className='cell' key={id}>
        <h5 className='title'>{name}</h5>
        <p className='text-project'>{text}</p>
        <img src={img} alt={name} className='img' />
        <div className='link-container'>
          <a
            href={gitlink}
            target='_blank'
            className='tile-image'
            rel='noreferrer'
          >
            Lien GitHub
          </a>
          {link ? (
            <a
              href={link}
              target='_blank'
              className='tile-image'
              rel='noreferrer'
            >
              Lien du site
            </a>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  });
};

export default Image;
