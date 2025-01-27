import { output } from "../utils/output";

export function handleSubmit(event = new Event()) {
  debugger;
  event.preventDefault();

  const inputs = event.target;
  const name = inputs[0];
  const email = inputs[1];

  output(
    `Thank you ${name.value}. Your discount code has been sent to ${email.value}.<br>
    Use code "WELCOME20" for 20% off your purchase!`
  );
}
