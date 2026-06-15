
function Card(props) {
  let cardTitle = props.title;
  let cardDescription = props.description;
  let cardLocation = props.location;
  let cardPrice = props.price;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-green-200"> 
      <div className="h-48 bg-green-50 flex items-center justify-center"> 
        <span className="text-4xl">🏡🌳</span> 
      </div>

      <div className="p-6"> 
        <h3 className="text-xl font-bold mb-2 text-green-800">{cardTitle}</h3> 
        <p className="text-gray-600 mb-2">{cardDescription}</p>
        {cardPrice && (
          <p className="text-lg font-semibold text-green-700 mb-2">{cardPrice}</p>
        )}
        {cardLocation && (
          <p className="text-sm text-green-600 flex items-center gap-1">
            <span>📍</span> {cardLocation}
          </p>
        )}
      </div>

    </div>
  );
}

export default Card;
