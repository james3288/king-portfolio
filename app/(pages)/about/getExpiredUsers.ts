import { ExpiredUser } from "./expiredUserType";

export async function getExpiredUsers(): Promise<ExpiredUser[]> {
  const res = await fetch(
    "http://127.0.0.1:8000/api/get_all_expired_users_today/",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch expired users");
  }

  return res.json();
}
