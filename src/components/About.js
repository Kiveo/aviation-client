import React from 'react';
import { BottomBanner } from './BottomBanner';

export const About = () => (
  <div>
    <h1>About Aviation Client</h1>
    <p>Hello World, and welcome to the Aviation Client app.</p>
    <p>This app is designed to provide a template like structure to various aviation web applications.</p>
    <p>Let's list a few examples which, with minor modification, this app could be applied toward.</p>
    
    <div className="listContainer">

    <div class="cardList">
      <h2>Comparative Pricing Analytics</h2>
      <ul>
        <li>Training Costs</li>
        <li>Charter Cost Comparisons</li>
        <li>Rental Fees</li>
        <li>Purchase Costs</li>
      </ul>
    </div>

    <div class="cardList">
      <h2>Advertisement and Assessment</h2>
      <ul>
        <li>School Fleet Display</li>
        <li>Charter Fleet Display</li>
        <li>Aircraft Sales</li>
        <li>Homebuilt Showcases</li>
        <li>Instructor Portfolios</li>
        <li>Aircraft Rental Availability</li>
        <li>Aircraft Condition Reports</li>
      </ul>
    </div>

    <div class="cardList">
      <h2>Management and Recordkeeping</h2>
      <ul>
        <li>Aviation Fleet Inventory</li>
        <li>Maintenance Inspection Scheduling</li>
        <li>Aircraft Dispatch System</li>
        <li>Aircraft Location and Hours Log</li>
      </ul>
    </div>

    </div>
    <BottomBanner />
    
  </div>
)
