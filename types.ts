import Stripe from "stripe";

export interface IUserDetails {
  id: string;
  first_name: string;
  last_name: string;
  full_name?: string;
  avatar_url?: string;
  billing_address?: Stripe.Address;
  payment_address?: Stripe.PaymentMethod[Stripe.PaymentMethod.Type];
}

export interface IProduct {
  id: string;
  active?: boolean;
  name?: string;
  description?: string;
  image?: string;
  metadata?: Stripe.Metadata;
}

export interface IPrice {
  id: string;
  product_id?: string;
  active?: string;
  description?: string;
  unit_amount?: string;
  currency?: string;
  type?: Stripe.Price.Type;
  interval?: Stripe.Price.Recurring.Interval;
  interval_count?: number;
  trail_period_days?: number | null;
  metadata?: Stripe.Metadata;
  products?: IProduct;
}

export interface ISubscription {
  id: string;
  user_id: string;
  status?: Stripe.Subscription.Status;
  metadata?: Stripe.Metadata;
  price_id?: string;
  quantity?: string;
  cancel_at_period_end?: string;
  created: string;
  current_period_start: string;
  current_period_end: string;
  ended_at?: string;
  cancel_at?: string;
  canceled_at?: string;
  trail_start?: string;
  trail_end?: string;
  prices?: IPrice;
}
