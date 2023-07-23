import React from "react";
import { EPAY_URL, P_ID, SUCCESS_URL, FAIL_URL } from "./paymentSetting";

const Payment2 = () => {
  return (
    <div>
      <h2>Payment Form</h2>
      <div>
        <form action={EPAY_URL} method="POST">
          <input value="100" name="tAmt" type="hidden" />
          <input value="90" name="amt" type="hidden" />
          <input value="5" name="txAmt" type="hidden" />
          <input value="2" name="psc" type="hidden" />
          <input value="3" name="pdc" type="hidden" />
          <input value="EPAYTEST" name="scd" type="hidden" />
          <input value={P_ID} name="pid" type="hidden" />
          <input value={SUCCESS_URL} type="hidden" name="su" />
          <input value={FAIL_URL} type="hidden" name="fu" />
          <input value="Pay Now" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Payment2;

//9806800001/2/3/4/5
//Nepal@123
