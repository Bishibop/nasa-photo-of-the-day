import React from "react";
import renderer from "react-test-renderer";
import Photo from "./Photo";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Photo
        nasaData={{
          url: "www.helloworld.com",
          title: "spacejam",
          explanation: "Greatest film of all time"
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <section
      className="photo"
    >
      <img
        alt="NASA Photo of the Day"
        className="sc-AxjAm ljAAC"
        src="www.helloworld.com"
      />
      <div
        className="sc-AxirZ bvkyAU"
      >
        <h2>
          spacejam
        </h2>
        <p>
          Greatest film of all time
        </p>
      </div>
    </section>
  `);
});
