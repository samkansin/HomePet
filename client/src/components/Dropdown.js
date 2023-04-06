const Dropdown = (info) => {
  return (
    <div className='dropdown-petType'>
      <ul>
        {info.data.map((data, key) => {
          return (
            <li
              key={key}
              dropdown-name={info.name}
              onClick={(e) => {
                info.setPetType(
                  e.currentTarget.children[1].innerHTML,
                  e.currentTarget.children[1].innerHTML
                );
              }}
            >
              <i className={`icon-${data.icon}`}></i>
              <span className='pet-text'>{data.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
