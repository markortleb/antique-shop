import '../../styles/app/Home.css';
import TopBar from "../common/TopBar";

const Home = () => {
  return (
      <div className='Home'>
          <TopBar />
          <a href="./cart">Cart</a>
      </div>
  );
};

export default Home;
