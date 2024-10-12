import React from "react";
import Home from "./components/Home";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Community from "./components/Commuinity";
import Promotion from "./components/Promotion";
import Success from "./components/Success";
import Failure from "./components/Failure";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Token from "./components/Token";
import AdvertisersAndCommuinity from "./components/AdvertisersAndCommuinity";
import Advertiser from "./components/Advertiser";
import CommunitySignUp from "./components/CommunitySignUp";
import CommunityLEDToken from "./components/CommunityLEDToken";
import PumpOwnBags from "./components/PumpOwnBags";
import ConnectedWallet from "./components/ConnectedWallet";
import PumpMyBag from "./components/PumpMyBag";
import AddsToPump from "./components/AddsToPump";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <>
      {/* <Home /> 
      <AdvertisersAndCommuinity /> 
      <Advertiser />
      <CommunitySignUp />
      <CommunityLEDToken />
      <PumpOwnBags />
      <ConnectedWallet />
      <PumpMyBag />
      <Success />
      <Failure />
      <Token />
      <AddsToPump /> */}
      <BrowserRouter>
        <Routes>        
          <Route path="/" element={<LandingPage />} />          
          <Route path="/communityLEDToken" element={<CommunityLEDToken />} />
          <Route path="/advertisersAndCommuinity" element={<AdvertisersAndCommuinity />} />
          <Route path="/advertiser" element={<Advertiser />} />
          <Route path="/communitySignUp" element={<CommunitySignUp />} />
          <Route path="/pumpOwnBags" element={<PumpOwnBags />} />
          <Route path="/connectedWallet" element={<ConnectedWallet />} />
          <Route path="/pumpMyBag" element={<PumpMyBag />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failure" element={<Failure />} />
          <Route path="/token" element={<Token />} />
          <Route path="/addsToPump" element={<AddsToPump />} />
          <Route path="/home" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
