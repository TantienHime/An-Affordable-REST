import React, {Component} from 'react';
// import {Link} from 'react-router';

class Contact extends Component {
     render(){
          return(
               // <!--THIS IS THE ONLY SECTION THAT I AM GOING TO USE FROM THIS PAGE. Still need to align the form and text the submission.-->
     //  <!-- Begin MailChimp Signup Form -->
     //  <!--<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">-->
     //  <!--<style type="text/css">
     //    #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
        /* Add your own MailChimp form style overrides in your site stylesheet or in this style block.
          We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
     //  </style>-->
               <div classId="mc_embed_signup" className="inner cover">
                    <form action="//about.us4.list-manage.com/subscribe/post?u=9c9a0b01bba895bd85cfa0a1e&amp;id=c1d1c2ec0c" method="post" classId="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                         <div classId="mc_embed_signup_scroll">
                              <h2>Interested in Hiring Me?</h2>
                              <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                              <div className="mc-field-group">
                                   <label for="mce-EMAIL">Email Address  <span className="asterisk">*</span></label>
                                   <input type="email" value="" name="EMAIL" className="required email" classId="mce-EMAIL" />
                              </div>
                              <div className="mc-field-group">
                                   <label for="mce-FNAME">First Name </label>
                                   <input type="text" value="" name="FNAME" className="" classId="mce-FNAME" />
                              </div>
                              <div className="mc-field-group">
                                   <label for="mce-LNAME">Last Name </label>
                                   <input type="text" value="" name="LNAME" className="" classId="mce-LNAME" />
                              </div>
                              <div classId="mce-responses" className="clear">
                                   <div className="response" classId="mce-error-response" style="display:none"></div>
                                   <div className="response" classId="mce-success-response" style="display:none"></div>
                              </div>    

{/*<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->*/}
                              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_9c9a0b01bba895bd85cfa0a1e_c1d1c2ec0c" tabindex="-1" value="" /></div>
                              <div className="clear"><input type="submit" value="Subscribe" name="subscribe" classId="mc-embedded-subscribe" className="button btn btn-lg btn-default" /></div>
                         </div>
                    </form>
               </div>
               
     //  {/*<!--End mc_embed_signup-->*/}
          )
     }
}