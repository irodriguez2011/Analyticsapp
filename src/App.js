import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import WebsiteVisitors from './components/website-visitors';
import Review from "./components/reviews";
import AverageRatings from "./components/averageratings";
import SentimentalAnalysis from "./components/sentimental_analysis"

function App() {
  return (
    <div className="mainContainer"> 
      <h1> Analytics Dashboard</h1>
    <div className="containerBGcolor"> 
    <div className="grid-container">
      <WebsiteVisitors webVisitors='821' />
      <Sidebar />
      <Review reviewsnum = '1281'/>
      <AverageRatings ratings='4.6'/>
      <SentimentalAnalysis analysis = '960' analysis2='122' analysis3="321" />
    
    </div>
    </div>
    </div> 
  );
}

export default App;
