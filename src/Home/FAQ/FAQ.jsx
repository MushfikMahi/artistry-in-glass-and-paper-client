
const Faq = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex-1">
                <img src="https://img.freepik.com/free-vector/thoughtful-woman-with-laptop-looking-big-question-mark_1150-39362.jpg?t=st=1714355619~exp=1714359219~hmac=607a71f32854b17179de922551194ca217cb2e1fb229beb78b3edb94c348415d&w=996" alt="FAQ" />
            </div>
            <div className="flex-1 space-y-5">
            
            <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" defaultChecked /> 
  <div className="collapse-title text-xl font-medium">
  How can I place an order?
  </div>
  <div className="collapse-content"> 
  <p>To place an order, go to the craft card, click the &quot;View Details&quot; button, and you&apos;ll see the owner&apos;s information for that craft. Simply email them, and they will contact you promptly.</p>
    
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  What payment methods do you accept?
  </div>
  <div className="collapse-content"> 
  <p>We accept various payment methods, including credit/debit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. You can choose your preferred payment option during checkout.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Do you offer international shipping?
  </div>
  <div className="collapse-content"> 
    <p>Yes, we offer international shipping to many countries worldwide. Shipping rates and delivery times may vary depending on your location. You can enter your address during checkout to see available shipping options.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  What is your return policy?
  </div>
  <div className="collapse-content"> 
    <p>We want you to be completely satisfied with your purchase. If you&apos;re not happy with your order for any reason, you can return it within [number of days] days of receipt for a refund or exchange. Please refer to our [link to return policy] for detailed information on our return process.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  How can I contact customer support?
  </div>
  <div className="collapse-content"> 
    <p>Our customer support team is here to help! You can reach us by email at [email address], by phone at [phone number], or by filling out the contact form on this page. We strive to respond to all inquiries within [response time] hours.</p>
  </div>
</div>
            </div>
        </div>
    );
};

export default Faq;