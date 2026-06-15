
function Card(props) {
  // props = info we give this component!
  let cardTitle = props.title;
  let cardDescription = props.description;
  let cardLocation = props.location;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-green-200"> 
      {/* Green border to match theme! */}

      <div className="h-48 bg-green-50 flex items-center justify-center"> 
        {/* Light green background! */}
        <span className="text-4xl">🏡🌳</span> 
        {/* Eco-home emojis! */}
      </div>

      <div className="p-6"> 
        <h3 className="text-xl font-bold mb-2 text-green-800">{cardTitle}</h3> 
        {/* Green title text! */}
        <p className="text-gray-600 mb-2">{cardDescription}</p>
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
