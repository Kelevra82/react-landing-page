import React from "react";
import { handleSubmit } from "../controllers/handleSubmit";

export function LandingPage() {
  return (
    <>
      <h2>Get 20% Off Today!</h2>
      <form onSubmit={handleSubmit}>
        <label for="name">Name:</label>
        <br />
        <input
          required
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
        />
        <br />
        <label for="email">Email:</label>
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
    </>
  );
}
