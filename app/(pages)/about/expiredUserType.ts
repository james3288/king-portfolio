export interface Agreement {
  id: number;
  agreement_desc: string;
}

export interface Per {
  id: number;
  per: string; // "month", "day", etc.
}

export interface Subscription {
  id: number;
  gym_rate_desc: string;
  rate: number;
  personal_training_session: number;
  per: Per;
  packages_details: unknown[]; // adjust if you know the shape
}

export interface FlexProUser {
  id: number;
  name: string;
  weights: number;
  contact_number: string;
  contact_number_ioe: string;
  user: number | null;
  aggrement: Agreement[];
}

export interface UserSubscription {
  id: number;
  sub_session_days: number;
  trainer_date_started: string;
  date_subscribed: string;
  session_days: number;
  subscription: Subscription;
  flexprouser: FlexProUser;
  trainer: null; // or Trainer | null if you add it later
}

export interface ExpiredUser {
  id: number;
  status: "expired" | "active"; // union is better than string
  usersubscription: UserSubscription;
}
