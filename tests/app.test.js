import { waitForReact, ReactSelector } from "testcafe-react-selectors";

fixture`CRA home page`
  .page`http://localhost:3000/`.beforeEach(async t => {
 
  await waitForReact(30000, t);
});

test("should have App component", async t => {
  const appComponent = ReactSelector("App");
  await t.hover(appComponent);
  
});

test("should have  NestedApp component", async t => {
    const appComponent = ReactSelector("NestedApp");
    await t.hover(appComponent);
  });

  test("should have  PeerApp component", async t => {
    const appComponent = ReactSelector("PeerApp");
    await t.hover(appComponent);
  });