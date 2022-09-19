const Card = ({rent, name, address, beds, bathrooms, area}) => {
  return (
    <div className="card card-compact w-80 bg-base-100 shadow-xl rounded-lg gap-0 mb-9">
      <figure>
        <img src="https://placeimg.com/400/200/arch" alt="estate" />
      </figure>
      <div className="card-body">
        <h1 className="card-title text-violet-500 text-2xl font-bold relative">${rent}<span className="text-gray-400 font-medium text-sm absolute bottom-1 left-16 ml-2">/month</span></h1>
        <h1 className="card-title text-2xl font-bold">{name}</h1>
        <p>{address}</p>
        <div className="divider m-0"></div> 
        <div className="flex justify-between items-center">
            <p>{beds} Beds</p>
            <p>{bathrooms} Bathrooms</p>
            <p>{area} m2</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
