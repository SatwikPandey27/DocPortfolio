import './treatment.css'
import React from 'react'
import { FaBrain, FaHeartbeat, FaBaby, FaWalking, FaStethoscope, FaLungs } from 'react-icons/fa'
import { GiJoint } from 'react-icons/gi'

export default function Treatment() {
  return (
    <div className='container'>
      {/* Background Circle Images */}
      <div className='circle-image circle-1'></div>
      <div className='circle-image circle-2'></div>
      <div className='circle-image circle-3'></div>
      <div className='circle-image circle-4'></div>
      <div className='circle-image circle-5'></div>
      <div className='circle-image circle-6'></div>
      <div className='circle-image circle-7'></div>
      <div className='circle-image circle-8'></div>

      {/* Row 1 */}
      <div className="row">
        {/* Mental Health Section */}
        <div className="col border border-2 rounded hover-anim m-2 p-3">
          <FaBrain size={30} className="me-2" />
          <h5>Mental Health & Disorders</h5>
          <ul>
            <li>Anxiety & Depressive Disorders</li>
            <li>Grief and Loss</li>
            <li>OCD & Eating Disorders</li>
            <li>Trauma Related Disorders</li>
            <li>Stress Management</li>
            <li>Sleep Disorders</li>
            <li>Sexual Dysfunction</li>
          </ul>
        </div>

        {/* Women’s Health */}
        <div className="col border border-2 rounded hover-anim m-2 p-3">
          <FaBaby size={30} className="me-2" />
          <h5>Women's & Postpartum Mental Health</h5>
          <ul>
            <li>Mental Health Concerns Related to Pregnancy</li>
            <li>Postpartum & Fertility Concerns</li>
            <li>Women’s Mental Health</li>
          </ul>
        </div>

        {/* Geriatric Health */}
        <div className="col border border-2 rounded hover-anim m-2 p-3">
          <FaHeartbeat size={30} className="me-2" />
          <h5>Geriatric Mental Health</h5>
          <ul>
            <li>Geriatric Mental Health</li>
            <li>Stress Related Disorders</li>
          </ul>
          <div id='Ghealth'></div>
        </div>
      </div>
      {/* Row 2 */}
      <div className="row">
        {/* General Health Issues */}
        <div className="col border border-2 rounded hover-anim m-2 p-3">
          <FaStethoscope size={30} className="me-2" />
          <h5>General Health Issues</h5>
          <ul>
            <li>Fever</li>
            <li>Diabetes</li>
            <li>Hypertension</li>
            <li>GIT Problems</li>
          </ul>
        </div>

        {/* Respiratory and Liver/Kidney Conditions */}
        <div className="col border border-2 rounded hover-anim m-2 p-3">
          <FaLungs size={30} className="me-2" />
          <h5>Respiratory, Liver, & Kidney Conditions</h5>
          <ul>
            <div id='Spine'></div>
            <li>Asthma & COPD</li>
            <li>Liver Diseases</li>
            <li>Kidney Disease</li>
          </ul>
        </div>
      </div>

      {/* Row 3 */}
      <div className="row">
        {/* Spine & Skeletal Disorders */}
        <div className="col border border-2 rounded hover-anim m-2 p-3">
          <FaWalking size={30} className="me-2" />
          <h5>Spine Surgery & Endoscopic Procedures</h5>
          <ul>
            <li>Scoliosis & Kyphosis</li>
            <li>Myelopathy</li>
            <li>Disc Prolapse & Spinal Stenosis</li>
            <li>Endoscopy</li>
            <li>Occipital Cervical Junction</li>
          </ul>
        </div>
        {/* Joint and Musculoskeletal Pain */}
        <div className="col border border-2 rounded hover-anim m-2 p-3">
          <GiJoint size={30} className="me-2" />
          <h5>Joint & Musculoskeletal Pain</h5>
          <ul>
            <li>Joint Pains</li>
          </ul>
        </div>
      </div>
    </div>
  )
}



// import './treatment.css'
// import React from 'react'
// import { FaBrain, FaHeartbeat, FaBaby, FaWalking, FaStethoscope, FaLungs } from 'react-icons/fa'
// import { GiJoint } from 'react-icons/gi'

// export default function Treatment() {
//   return (
//     <div className='container'>
//       {/* Row 1 */}
//       <div className="row">
//         {/* Mental Health Section */}
//         <div className="col border border-2 rounded hover-anim m-2 p-3">
//           <FaBrain size={30} className="me-2" />
//           <h5>Mental Health & Disorders</h5>
//           <ul>
//             <li>Anxiety & Depressive Disorders</li>
//             <li>Grief and Loss</li>
//             <li>OCD & Eating Disorders</li>
//             <li>Trauma Related Disorders</li>
//             <li>Stress Management</li>
//             <li>Sleep Disorders</li>
//             <li>Sexual Dysfunction</li>
//           </ul>
//         </div>

//         {/* Women’s Health */}
//         <div className="col border border-2 rounded hover-anim m-2 p-3">
//           <FaBaby size={30} className="me-2" />
//           <h5>Women's & Postpartum Mental Health</h5>
//           <ul>
//             <li>Mental Health Concerns Related to Pregnancy</li>
//             <li>Postpartum & Fertility Concerns</li>
//             <li>Women’s Mental Health</li>
//           </ul>
//         </div>

//         {/* Geriatric Health */}
//         <div className="col border border-2 rounded hover-anim m-2 p-3">
//           <FaHeartbeat size={30} className="me-2" />
//           <h5>Geriatric Mental Health</h5>
//           <ul>
//             <li>Geriatric Mental Health</li>
//             <li>Stress Related Disorders</li>
//           </ul>
//         </div>
//       </div>

//       {/* Row 2 */}
//       <div className="row">
//         {/* General Health Issues */}
//         <div className="col border border-2 rounded hover-anim m-2 p-3">
//           <FaStethoscope size={30} className="me-2" />
//           <h5>General Health Issues</h5>
//           <ul>
//             <li>Fever</li>
//             <li>Diabetes</li>
//             <li>Hypertension</li>
//             <li>GIT Problems</li>
//           </ul>
//         </div>

//         {/* Respiratory and Liver/Kidney Conditions */}
//         <div className="col border border-2 rounded hover-anim m-2 p-3">
//           <FaLungs size={30} className="me-2" />
//           <h5>Respiratory, Liver, & Kidney Conditions</h5>
//           <ul>
//             <li>Asthma & COPD</li>
//             <li>Liver Diseases</li>
//             <li>Kidney Disease</li>
//           </ul>
//         </div>
//       </div>
//       {/* Row 3: New General Health Section */}
//       <div className="row">
//         {/* Spine & Skeletal Disorders */}
//         <div className="col border border-2 rounded hover-anim m-2 p-3">
//           <FaWalking size={30} className="me-2" />
//           <h5>Spine Surgery & Endoscopic Procedures</h5>
//           <ul>
//             <li>Scoliosis & Kyphosis</li>
//             <li>Myelopathy</li>
//             <li>Disc Prolapse & Spinal Stenosis</li>
//             <li>Endoscopy</li>
//             <li>Occipital Cervical Junction</li>
//           </ul>
//         </div>
//                 {/* Joint and Musculoskeletal Pain */}
//                 <div className="col border border-2 rounded hover-anim m-2 p-3">
//           <GiJoint size={30} className="me-2" />
//           <h5>Joint & Musculoskeletal Pain</h5>
//           <ul>
//             <li>Joint Pains</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }