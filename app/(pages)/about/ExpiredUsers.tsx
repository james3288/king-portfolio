"use client";

import { use } from "react";
import { ExpiredUser } from "./expiredUserType";

export default function ExpiredUsers({
  expired,
}: {
  expired: Promise<ExpiredUser[]>;
}) {
  const allExpired = use(expired);

  return (
    <ul>
      {allExpired.map((user: ExpiredUser) => (
        <li key={user.id}>
          {user.usersubscription.subscription.gym_rate_desc}
        </li>
      ))}
    </ul>
  );
}
