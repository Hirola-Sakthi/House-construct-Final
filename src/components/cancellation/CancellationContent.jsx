import React from "react";

const CancellationContent = () => {
  return (
    <div className="cancellation-policy-parent">
      <div className="container">
        <h3 className="subtitle">OUR CANCELLATION POLICY</h3>
        <h6>CANCELLATION POLICY & REFUNDS</h6>
        <ul>
          <li>
            House-Construct takes pride in the process of providing transparent
            and trustful construction services. Tremendous amounts of efforts
            are being put by House-Construct in understanding the customer’s
            requirement and/or providing designs and other documents/details. We
            endeavour to help customers discover and select an SP based on
            characteristics that matter most to them.
          </li>
          <li>
            In the unlikely event that the customer decides to cancel the
            project after paying any portion of the booking amount, the customer
            shall inform House-Construct (from the e-mail address provided to
            House-Construct) in writing, via an e-mail to
            support@houseconstruct.in (or such other e-mail address provided
            from time to time) or registered post with acknowledgement due,
            mentioning the reason(s) for cancelation. House-Construct on receipt
            of such e-mail or registered post, shall proceed to examine the
            cancellation on a case-to-case basis and shall follow the following
            principles in terms of cancellation.
          </li>
        </ul>
        <p>All cancellations made beyond 48 hours from payment of the booking amount will be subject to a non-refundable cancellation fee equal to 1% of the project value. Further, for any cancellations beyond the 48 hours as aforementioned, House-Construct shall be entitled to collect the amounts shown below based on the stage of the project and the work done for such project.</p>
        <div className="row">
        <div className="col-8">
            <table>
                <tr>
                    <th>Stage</th>
                </tr>
                <tr>
                    <td>Primary design – floor plans finalised (after determination of floor plan )</td>
                </tr>
                <tr>
                    <td>Project kickoff (any resource mobilization or any small work done at the project site even before the start of the project. In case the contract has not been executed, 6% of the project value as per the final quotation approved by the customer)</td>
                </tr>
            </table>
        </div>
        <div className="col-4">
            <table>
                <tr>
                  <th>Cancellation Fee</th>
                </tr>
                <tr>
                  <td>1% of non-discounted project value</td>
                </tr>
                <tr>
                  <td>6% of non-discounted project value</td>
                </tr>
            </table>
        </div>
        </div>
        <p>For any cancellations subsequent to the start of the project, such cancellation amounts will be deducted as per the terms of the contract between House-Construct and the customer. All these deductions are inclusive of Taxes.</p>
        <p>*It is to be noted that all deductions shall be on the total non- discounted value of the project as per the corresponding documents as stated above. All cancelation fee(s) shall be adjusted against the amount(s) paid by the customer.</p>
        <p>Where any architectural / structural designs are completed or where data is collected like digital survey or where a soil test is conducted, such information / final documentation shall be shared if applicable and subject to such amounts payable for the documents as communicated by House-Construct to the customer.</p>
        <ul>
          <li>In the event the costs incurred by House-Construct for the afore-mentioned services exceeds the amounts paid by the customer, the customer shall be liable to pay such excess to House-Construct or to such other persons as referred by House-Construct, in writing, 15 (fifteen) working days of House-Construct issuing a written notice informing of the same.</li>
          <li>House-Construct shall transfer the refund amount, if any, payable to the customer after making suitable deductions and adjustments by House-Construct in the manner as provided for above, to the bank account provided by the customer, within 40 (forty) business days from the date House-Construct and the customer mutually agree on the final value of the refund amounts.</li>
        </ul>
      </div>
    </div>
  );
};

export default CancellationContent;
