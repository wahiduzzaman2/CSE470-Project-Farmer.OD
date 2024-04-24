

const FoodCard = ({food}) => {
    return (
        <div className={`card bg-base-200 shadow-xl ${food.QuantityAvailable<1 && 'bg-red-200'}`}>
        <figure><img src={food.Image} alt={food.Name}/></figure>
        <div className={`card-body`}>
            <h2 className="card-title">{food.Name}</h2>
            <p>Category: {food.Category}</p>
            <p>Price: {food.Price}</p>
            <p>{food.Description}</p>
            {
                food.QuantityAvailable>1 &&
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-warning">ADD TO CART</button>
                </div>}
            {
               food.QuantityAvailable<1 &&
               <div className="card-actions justify-end">
                    <p className="text-red-500 font-bold text-right">OUT OF STOCK</p>

                </div>
            }
        </div>
    </div>
    );
};

export default FoodCard;