import { MDCRipple } from "@material/ripple";
import { MDCSelect } from "@material/select";
import { MDCTextField } from "@material/textfield";
import { MDCCheckbox } from "@material/checkbox";

const shippingForm = document.querySelector("#crane-shipping-form");
shippingForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  alert("Success!");
});

const textFieldElements = [].slice.call(
  document.querySelectorAll(".mdc-text-field")
);
textFieldElements.forEach((textFieldEl) => {
  new MDCTextField(textFieldEl);
});

new MDCRipple(document.querySelector(".mdc-button"));
new MDCSelect(document.querySelector(".mdc-select"));
new MDCCheckbox(document.querySelector(".mdc-checkbox"));
