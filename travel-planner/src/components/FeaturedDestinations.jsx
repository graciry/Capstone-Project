const FeaturedDestinations = ({ destinations }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {destinations.map((destination) => (
          <div key={destination.id} className="bg-white p-4 shadow-md rounded-md">
            <img src={destination.image_url} alt={destination.name} className="w-full h-48 object-cover rounded-md" />
            <h3 className="mt-4 text-lg font-bold">{destination.name}</h3>
            <p>{destination.country}</p>
            <p className="text-sm text-gray-600">{destination.top_attractions.join(", ")}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default FeaturedDestinations;
  