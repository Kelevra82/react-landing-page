import React from "react";
import { handleSubmit } from "../controllers/handleSubmit";
import { Video } from "./Video";

export function LandingPage() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col">
            <h1>Transform Your Home with AI</h1>
            <p>
              Experience the future of smart living with our advanced AI-powered
              home assistant. Control your entire home with just your voice.
            </p>
            <Video />
          </div>
          <div class="col">
            <h2>Get 20% Off Today!</h2>
            <form onSubmit={handleSubmit}>
              <label>Name:</label>
              <br />
              <input
                required
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
              <br />
              <label>Email:</label>
              <br />
              <input
                required
                type="email"
                id="email"
                placeholder="example@email.com"
              />
              <br />
              <input type="submit" value="Get Your Discount" />
              <br />
            </form>
            <output id="outputTag"></output>
          </div>
        </div>
        <div class="row mb-5">
          <h2 class="text-center mb-4">Key Features</h2>
          <div class="col">
            <h3>Voice Control</h3>
            <p>
              Control lights, temperature, and appliances with natural voice
              commands.
            </p>
          </div>
          <div class="col">
            <h3>Energy Optimization</h3>
            <p>
              Save up to 30% on energy bills with AI-powered usage optimization.
            </p>
          </div>
          <div class="col">
            <h3>Smart Security</h3>
            <p>
              24/7 monitoring and instant alerts for complete peace of mind.
            </p>
          </div>
        </div>
        <div class="row mb-5">
          <h2 class="text-center mb-4">Pricing</h2>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Starter</h5>
                <h6 class="mb-2">$299</h6>
                <p>Basic home automation features</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Pro</h5>
                <h6 class="mb-2">$499</h6>
                <p>Advanced features + security system</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Ultimate</h5>
                <h6 class="mb-2">$799</h6>
                <p>Full home automation + premium support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
