const Loading = ({ loading }) => {
  document.querySelector('html').setAttribute('loading', loading);
  return (
    <img
      className='Loading'
      src='https://knightsmsk.github.io/HomePetResource/index%20img/loading.gif'
      alt=''
    />
  );
};

export default Loading;
