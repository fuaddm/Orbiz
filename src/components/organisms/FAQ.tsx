import React from "react";
import Heading from "@/components/molecules/Heading";
import SvgFAQ from "@/svg/FAQ";
import { AccordionItem } from "@/components/atoms/Accordion/AccordionItem";

const FAQ = () => {
  return (
    <div className="container py-[88px]">
      <Heading
        tagLeft={<SvgFAQ className="h-4 w-4 stroke-primary-100" />}
        tagText="FAQs"
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions and helpful information. Explore topics and solutions to guide you through any concerns you may have."
      />
      <div className="mb-14"></div>
      <div className="flex flex-col gap-4">
        <AccordionItem
          name="faq"
          title="How to Send one-time or recurring invoices to customers"
          text={`To send one-time or recurring invoices in Orbiz Billing, log in and go to the "Invoices" section. For a one-time invoice, create a new invoice, fill in customer details, and add the necessary items. Review and send it directly to the customer via email or download it. For recurring invoices, select the "Recurring Invoice" option, set the frequency (e.g., monthly or annually), enter the customer’s details, and define the services or products. Orbiz Billing will automatically send the invoice based on the schedule you set.`}
        />
        <AccordionItem
          name="faq"
          title="How to create and send an invoice using Orbiz Billing"
          text={`To create and send an invoice using Orbiz Billing, log in and go to the "Invoices" section. Select "Create New Invoice," enter client details, and add the services or products with descriptions and prices. Review the total, then send the invoice via email or download it as a PDF. It's that simple!`}
        />
        <AccordionItem
          name="faq"
          title="How to marking an Invoice Paid Out of Band"
          text={`To mark an invoice as paid out of band in Orbiz Billing, log in and locate the invoice in the "Invoices" section. Open the specific invoice and look for the option to "Mark as Paid." Select this, then choose "Out of Band" as the payment method. Confirm the details, and the invoice will be updated to reflect the payment.`}
        />
        <AccordionItem
          name="faq"
          title="How to calculating trial conversion rate in Billing"
          text={`To calculate the trial conversion rate in Orbiz Billing, log in and access your subscription analytics. Find the total number of users who started a trial and the number of those who converted to paying customers. Divide the number of conversions by the total trial users, then multiply by 100 to get the conversion rate percentage. This helps measure how many trial users become paying customers.`}
        />
      </div>
    </div>
  );
};

export default FAQ;
