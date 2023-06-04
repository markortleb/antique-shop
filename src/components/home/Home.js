import '../../styles/app/Home.css';

const Home = () => {
  return (
      <div className='Home'>
          <div className="TopBar">
            <h1>Mark's Antique Shop</h1>
            <h2>Where the past comes to life</h2>
          </div>
          <a href="./cart">Cart</a>
      </div>
  );
};

export default Home;
