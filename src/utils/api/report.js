import axios from "../axios";

async function get_orders_in_current_month() {
  try {
    const response = await axios.get("/orders/current-month");

    if (!response) {
      return {
        error: "Failed to get orders in current month",
      };
    }

    return response.data.data;
  } catch (error) {
    console.log(error);
  }
}

// Get orders ordered by years
async function get_orders_by_years() {
  try {
    const response = await axios.get(
      "/orders/reports/orders-through-the-years"
    );

    if (!response) {
      return {
        error: "Failed to get orders in current month",
      };
    }

    return response.data.data;
  } catch (error) {
    console.log(error);
  }
}

export { get_orders_in_current_month, get_orders_by_years };
