import { MDCFormField } from "@material/form-field";
import { MDCRipple } from "@material/ripple";
import { MDCSelect } from "@material/select";
import { MDCTextField } from "@material/textfield";
import { MDCCheckbox } from "@material/checkbox";
import { MDCRadio } from "@material/radio";
import { MDCDialog } from "@material/dialog";
import { MDCTabBar } from "@material/tab-bar";

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
const formField = new MDCFormField(document.querySelector(".mdc-form-field"));
const radio = new MDCRadio(document.querySelector(".mdc-radio"));
formField.input = radio;
new MDCDialog(document.querySelector(".mdc-dialog"));
// new MDCTabBar(document.querySelector(".mdc-tab-bar"));
var tabBar = new MDCTabBar(document.querySelector(".mdc-tab-bar"));
var contentEls = document.querySelectorAll(".content");

tabBar.listen("MDCTabBar:activated", function (event) {
  event.preventDefault();
  // Hide currently-active content
  document
    .querySelector(".content--active")
    .classList.remove("content--active");
  // Show content for newly-activated tab
  contentEls[event.detail.index].classList.add("content--active");
});
