export interface Institution {
  address_line: string;
  contact_phones: string;
  description: string;
  lat: number;
  lon: number;
  name: string;
  photo: string;
  institution_key: string;
  pickup_end_hours: string;
  pickup_start_hours: string;
  rating: string;
  tags: string[];
  type: string;
  weekends_closing_hours: string;
  weekends_opening_hours: string;
  working_days_closing_hours: string;
  working_days_opening_hours: string;
  dish_count: number;
  dishes?: Dish[];
}
export interface Dish {
  name: string;
  active_count: number;
  actual_price: number;
  create_time: string;
  description: string;
  id: number;
  institution_key: string;
  is_lobobox: boolean;
  original_price: number;
  photo?: string;
  tags: string[];
}
export interface OrderOne {
  dishes_count: number;
  name: string;
  photo: string;
  price: number;
}
export interface Order {
  order_status: string;
  institution_rating: number;
  pickup_start_hours: string;
  pickup_end_hours: string;
  institution_name: string;
  lat: number;
  lon: number;
  order_key: string;
  address_line: string;
  data: OrderOne[];
}