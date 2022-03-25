const Slide = ({ data, position }) => {
  const { name, id, text, img, link, gitlink } = data;

  return (
    <div key={id} className={`slide ${position}`}>
      <h3 className='title name-project'>{name}</h3>
      <img src={img} alt={name} className='img' />
      <p className='text-project'>{text}</p>
      <div className='link-container'>
        {gitlink ? (
          <a
            href={gitlink}
            rel='noreferrer'
            target={'_blank'}
            className='link-project'
          >
            Lien GitHub
          </a>
        ) : (
          ''
        )}
        {link ? (
          <a
            href={link}
            rel={'noreferrer'}
            target={'_blank'}
            className='link-project'
          >
            Lien du site
          </a>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Slide;
