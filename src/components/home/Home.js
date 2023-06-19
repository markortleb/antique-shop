import '../../styles/app/Home.css';
import getItemsForSale from "../../util/getItemsForSale";
import TopBar from "../common/TopBar";

const Home = (props) => {

    const itemsForSale = getItemsForSale();

    const handleClick = (event, item) => {
        console.log(props.cart);
        props.addToCart(item);
    };

    return (
      <div className='Home'>
          <TopBar />
          <div className="Content">
              <div className="DescriptionArea">
                  <span className="DescriptionHeader">Welcome!</span>
                  <span className="Description">
                      Here at Mark's Antique Shop, we pride ourselves in providing our customers with relics from the past.
                      Browse our wares and be transported back to the early 20th Century.
                      Enhance your living space with an item that will remind us all where we came from.
                      Become an antique collector today!
                  </span>
              </div>
              <ul className="ItemsForSale">
                  {itemsForSale.map(item => {
                      let formattedPrice = item.price.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD'
                      });

                      return (
                          <li key={item.id}>
                              <img src={item.image} alt=""/>
                              <span className="ItemName">{item.name}</span>
                              <span className="ItemDescription">{item.description}</span>
                              <span className="ItemPrice">{formattedPrice}</span>
                              <button onClick={event => handleClick(event, item)}>Add to Cart</button>
                          </li>
                      );
                  })}
              </ul>
          </div>
      </div>
    );
};

export default Home;
