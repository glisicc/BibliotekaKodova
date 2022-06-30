import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-fb647-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );
      if (!response.ok) {
        throw new Error("Could not fetch data");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNoti({
          status: "error",
          title: "Error",
          message: error.message,
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  //this f return new async function which eventualy return the action
  //Thunk function
  return async (dispatch) => {
    dispatch(
      uiActions.showNoti({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-fb647-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) } //put request will overide existing data, POST request only add to existing data
      );
      if (!response.ok) {
        dispatch(
          uiActions.showNoti({
            status: "error",
            title: "Error",
            message: "Sending cart data unsuccessfully",
          })
        );
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNoti({
          status: "success",
          title: "Success",
          message: "Sending cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNoti({
          status: "error",
          title: "Error",
          message: "Sending cart data unsuccessfully",
        })
      );
    }
  };
};
