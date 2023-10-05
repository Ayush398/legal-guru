import "./sub.css";


const subscription = () => {
   
    return (
      <>
     <section className="ptbm pricingPaid">
      <div className="container">
        <div className="row">
          {/* Pricing Grid for Basic */}
          <div className="col-xs-12 col-md-3 col-sm-6">
            <div className="panel pricingGrid pricingBasic">
              <div className="panel-heading">
                <h3>Basic</h3>
              </div>
              <div className="panel-body">
                <p>Features Include</p>
                <ul>
                  <li><strong>2</strong> Users</li>
                  <li><strong>2</strong> Service Workflows</li>
                  <li>Unlimited Invoice</li>
                </ul>
              </div>
              <div className="panel-footer">
                {/* Pricing Rates */}
                <div className="pricingRate">
                  <div className="priceAnnual">
                    <span className="price"><sup>$</sup>50<small>/month</small></span>
                    <span className="pricePlans">Save $120 Annually</span>
                  </div>
                  <div className="priceMonthly">
                    <span className="price priceMonthly"><sup>$</sup>60<small>/month</small></span>
                    <span className="pricePlans">$50 when paid annually</span>
                  </div>
                </div>
                {/* Pricing Buttons */}
                <div className="pricingButton">
                  <a href="register?plan=basic_annual" className="btn btnAnnually btnPrimary">Get Started</a>
                  <a href="register?plan=basic_monthly" className="btn btnMonthly btnPrimary">Get Started</a>
                </div>
              </div>
            </div>
          </div>

          {/* Continue to define similar pricing grids for other plans */}
          {/* ... */}
        </div>

        {/* Pricing View Toggler */}
        <div className="pricingViewToggler">
          <span className="active annual">Annual</span>
          <div className="toggle-button"><button></button></div>
          <p><span className="monthly">Monthly</span></p>
        </div>
      </div>
      </section>
      </>
    );
  };
  
  export default subscription;