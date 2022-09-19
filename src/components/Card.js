const Card = ({rent, name, address, beds, bathrooms, area, tag}) => {
  return (
    <div className="card card-compact w-80 bg-base-100 shadow-xl rounded-lg gap-0 mb-9 relative">
      <figure>
        <img src="https://placeimg.com/400/200/arch" alt="estate" />
      </figure>
      {tag==="popular" && <div className="absolute w-24 rounded-md bg-violet-500 text-white h-8 text-center top-36 left-0 text-base">✨Popular</div>}
      <div className="card-body">
        <div className="flex justify-between items-center pt-3">
        <h1 className="card-title text-violet-500 text-2xl font-bold relative">${rent}<span className="text-gray-400 font-medium text-sm absolute bottom-1 left-16 ml-2">/month</span></h1>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="rgb(167 139 250)"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        </div>
        <h1 className="card-title text-2xl font-bold">{name}</h1>
        <p className="text-gray-500 font-normal">{address}</p>
        <div className="divider m-0"></div> 
        <div className="flex justify-between items-center text-gray-500">
            <p>{beds} Beds</p>
            <p>{bathrooms} Bathrooms</p>
            <p>{area} m2</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
