import React, { Suspense } from "react";
import ExpiredUsers from "./ExpiredUsers";
import { getExpiredUsers } from "./getExpiredUsers";

const AboutPage = async () => {
  // ang purpose ani ky para magamit ang use hook sulod sa ExpiredUsers component
  const usersPromise = getExpiredUsers();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ExpiredUsers expired={usersPromise} />
    </Suspense>
  );
};

export default AboutPage;
