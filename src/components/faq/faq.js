import './faq.css';
import React from 'react';

export default function Faq() {
  return (
    <div className='container'>
      <section class="bsb-accordion-6 py-3 py-md-5 py-xl-8">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="accordion" id="accordionExample">
                
                {/* Question 1 */}
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button fs-5 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <strong>Q. </strong> How can I take appointments for doctors in Satyak Healthcare Clinic?
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      You can take <a href="https://www.practo.com/delhi/clinic/satyak-healthcare-clinic-paschim-vihar-2">appointments for doctors</a> who practice in Satyak Healthcare Clinic online on Practo.
                    </div>
                  </div>
                </div>

                {/* Question 2 */}
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button fs-5 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <strong>Q. </strong> What do doctors who practice in Satyak Healthcare Clinic specialise in?
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      Currently, 3 doctors practice at Satyak Healthcare Clinic who specialise as general physician, spine surgeon, and psychiatrist.
                    </div>
                  </div>
                </div>

                {/* Question 3 */}
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button fs-5 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <strong>Q. </strong> What are the Satyak Healthcare Clinic timings?
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      Clinic is usually open during Monday - Saturday 10:30 AM - 2:00 PM and 6:00 PM - 9:00 PM Sunday 10:00 AM to 2:00 PM
                    </div>
                  </div>
                </div>

                {/* Question 4 */}
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button fs-5 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      <strong>Q. </strong> Where is Satyak Healthcare Clinic located?
                    </button>
                  </h2>
                  <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      Satyak Healthcare Clinic is located at 124-A, MaaShakti Apartments, A1 Block, Paschim Vihar, New Delhi-110063 You can view more details about the clinic and book doctors on Practo.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
