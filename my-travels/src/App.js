import './App.css';
import Profile from './component/profile';
import travelData from './component/travelData';

// const profile = {
//         id: "1",
//         title: "San Fernando Hill",
//         location: "San Fernando",
//         googleMapsURL: "https://goo.gl/maps/vMu2nJtJ9LaeWfyH8?coh=178573&entry=tt",
//         startDate: "13th August 2019",
//         endDate: "17th August 2019",
//         description: "This hill is in my home town. My family frequently picnic here. It is very scenic and peaceful. The venue can host weddings and concerts. It is a must see if visiting South Trinidad.",
//         imageURL: "san-fernando-hill.jpg"
// };



function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="head-img">
          <img  src={process.env.PUBLIC_URL + '/static/images/TnT-silhou.png'}  
            alt="Trinidad Colors Splash" width="50px" />
        </div>
        <div className="head-data">
          <h1>My Travels</h1>
        </div>
      </header>
      <section className="App-main">
        <Profile data={travelData}/>
      </section>
      <footer className="App-footer">
        <div className="footer-info">
          Powered by React! 
        </div>
      </footer>
    </div>
  );
}

export default App;
