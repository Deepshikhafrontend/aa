
// import './App.css';
// import First from './Components/First';
// import SignIn from './Components/SignIn'
// function App() {
//   return (
//     <div className="App">
//       <First />
//       <SignIn />
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import First from './Components/First';
// import SignIn from './Components/SignIn';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<First />} />
//         <Route path="/signin" element={<SignIn />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Xperiento from './Components/Xperiento';
import SignIn from './Components/SignIn';
import CreateAccount from './Components/CreateAccount';
import NextPage from './Components/NextPage';

import XperientoInsights from './Components/XperientoInsights';

import InsightsDashboard from './Components/InsightsDashboard';
import Dashboard from './Components/Dashboard';
import AllInsightsPage from './Components/AllInsightsPage';
const App = () => {
  return (

    
    <Router>
      
      <Routes>
      <Route path="/" element={<Xperiento />} />
      <Route path="/signin" element={<SignIn />} />
        <Route path="/create-account" element={<CreateAccount />} />
        {/* <Route path="/next-page" element={<NextPage />} /> */}
        {/* <Route path="/insights" element={<Insights />} /> */}

        <Route path="/InsightsDashboard" element={<InsightsDashboard />} />
        <Route path="/all-insights" element={<AllInsightsPage />} />
      </Routes>
      <NextPage />
     

       <XperientoInsights />

        {/* <InsightsDashboard /> */}
      {/* <Dashboard /> */}
       
    </Router> 


  );
};

export default App;
