import { MDCRipple } from "@material/ripple";

const shippingForm = document.querySelector("#crane-shipping-form");
shippingForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  alert("Success!");
});

new MDCRipple(document.querySelector(".mdc-button"));
