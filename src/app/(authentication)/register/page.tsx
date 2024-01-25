'use client';
import Link from 'next/link';
import styles from "./page.module.css";
import React, { useReducer, useState } from 'react'
import { useRouter } from 'next/navigation';

// Components
import FormInputs from '@/components/authentication/FormInputs/FormInputs';
import FormSelect from '@/components/authentication/FormSelect/FormSelect';

// Types & Data
import { RegistrationDetailsAction, RegistrationDetailsType } from '@/types';
import { govtHealthSchemes, medicalSpecialities, privateHealthSchemes } from '@/data';

// React Icons
import { FiUploadCloud } from "react-icons/fi";

const Register = () => {

  const [currentRegisterSlide, setCurrentRegisterSlide] = useState< 1 | 2 | 3 | 4 | 5 >(1);

  const [registrationState, dispatch] = useReducer((currentState: RegistrationDetailsType, action: RegistrationDetailsAction): RegistrationDetailsType => {

    switch (action.type) {
      case 'CHANGE_INPUT_VALUE':
        return { ...currentState, [action.payload.target.name]: action.payload.target.value }
      
      case 'MEDICAL_SPECIALITIES_OPTIONS': 
        return { ...currentState, medicalSpecialities: action.payload }

      case 'GOVT_HEALTH_SCHEMES':
        return { ...currentState, govtHealthSchemes: action.payload }

      case 'PVT_HEALTH_SCHEMES':
        return { ...currentState, privateHealthSchemes: action.payload }

      case 'HOSP_CERTIFICATE_UPLOAD':
        return { ...currentState, hospitalIncorporationCertificate: action.payload }
    }

  }, {
    hospitalName: '',
    hospitalEmail: '',
    hospitalRegId: '',
    hospitalPassword: '',
    
    medicalSpecialities: [],

    hospitalContactNumber: '',

    relevantPersonName: '',
    relevantPersonContact: '',

    address: {
      latitude: '',
      longitude: '',
      streetAddress: ''
    },

    totalNumberOfBeds: '',

    onlineAppointmentBookingAvailability : '',
    onlineAppointmentBookingWebURL: '',

    emergencyServices: '',
    ambulanceServices: '',
    ambulanceCompanyName: '',
    numberOfALSAmbulances: '',
    numberOfBLSAmbulances: '',
    numberOfPTAAmbulances: '',
    numberOfMortuaryAmbulances: '',

    govtHealthSchemes: [],
    privateHealthSchemes: [],

    hospitalIncorporationCertificate: null,

    termsAndConditions: 'Disagree'
  });
 
  // Trigger Input Change Event

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => dispatch({ type : 'CHANGE_INPUT_VALUE', payload : e })

  const handleSelectOptions = (dispatchType: 'MEDICAL_SPECIALITIES_OPTIONS' | 'GOVT_HEALTH_SCHEMES' | 'PVT_HEALTH_SCHEMES', dispatchPayload: string[]) => dispatch({ type: dispatchType, payload: dispatchPayload })

  const router = useRouter();

  const finalRegistrationSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    // Here we have to send all this registered to an API and then redirect to a wait screen to users. For as of now directly redirecting to that screen

    setCurrentRegisterSlide(5);

    router.push('/register/thankyou');

  }

  return (
    <section className={styles.app__register}>

      <div className={styles.login__hint}>
        <p>Already have an account? <Link href="/">Login</Link></p>
      </div>

      <div className={styles.register__progress}>
        {
          Array.from({length: 5}).map((_, index) => { 
            return <span className={`${currentRegisterSlide >= index + 2 && styles.done__slide}`} key={index}>{index + 1}</span>
          })
        }
      </div>
      
      {/* Now we have to display those forms each in a slide according to slide number. */}

      <div className={styles.register__form}>

        {
          currentRegisterSlide === 1 && (
            <form className={styles.form} onSubmit={(e) => {
              e.preventDefault();
              setCurrentRegisterSlide(2)
            }}>
              <h2>Create Account</h2>
              <p>Signup now and start exploring our app has to offer you. We&#39;re excited to welcome you to our community.</p>
              <FormInputs inputLabel='Hospital Name' inputUsingFor='normal' inputType='text' uniqueId='hospitalName' placeholder='Enter hospital name' inputName='hospitalName' inputTitle='Enter Hospital Name' inputValue={registrationState.hospitalName} inputValueChange={handleInputChange} />
              <FormInputs inputLabel='Email Address' inputUsingFor='normal' inputType='email' uniqueId='hospitalEmail' placeholder='Enter email address' inputName='hospitalEmail' inputTitle='Provide a valid email address' inputValue={registrationState.hospitalEmail} inputValueChange={handleInputChange}  />
              <FormInputs inputLabel='Create a Password' inputUsingFor='password' inputType='password' uniqueId='hospitalPassword' placeholder='Create a Password' inputName='hospitalPassword' inputTitle='Password hide/show' fieldTitle="Password should be 6-24 long containing atleat 1 Uppercase, 1 Lowercase, 1 Numeric & a special symbol." inputPattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,24}' inputValue={registrationState.hospitalPassword}  inputValueChange={handleInputChange} />
              <FormSelect selectLabel='Medical Specialities Offered' dispatchType="MEDICAL_SPECIALITIES_OPTIONS" dropOptions={medicalSpecialities} handleSelectOptions={handleSelectOptions} />
              <button type='submit'>Next</button>
            </form>
          )
        }

        {
          currentRegisterSlide === 2 && (
            <form className={styles.form} onSubmit={(e) => {
              e.preventDefault();
              setCurrentRegisterSlide(3)
            }}>
              <h2>Contact Information</h2>
              <p>Signup now and start exploring our app has to offer you. We&#39;re excited to welcome you to our community.</p>
              <FormInputs inputLabel='Primary Contact Number' inputUsingFor='normal' inputType='text' uniqueId='hospitalContact' placeholder='Enter primary contact number' inputName='hospitalContactNumber' inputTitle='Enter Primary Contact Number (Provide a valid contact number)' inputPattern='^[0-9+\s]*$' inputValue={registrationState.hospitalContactNumber} inputValueChange={handleInputChange} />

              <div className={styles.with__helpertext}>
                <div className={styles.helper__head}>
                  <h3>Relevant Person Details</h3>
                  <p>Add Name and contact number for the contact person</p>
                </div>
                <FormInputs inputLabel='Person&#39; Name' inputUsingFor='normal' inputType='text' uniqueId='relevantPersonName' placeholder='Enter Person&#39;s Name' inputName='relevantPersonName' inputTitle='Enter Person&#39;s Name' inputValue={registrationState.relevantPersonName} inputValueChange={handleInputChange} />
                <FormInputs inputLabel="Person&#39;s Contact" inputUsingFor='normal' inputType='text' uniqueId='relevantPersonContact' placeholder="Enter Person&#39;s Contact" inputName='relevantPersonContact' inputTitle='Enter Person&#39;s Contact Number (Provide a valid contact number)' inputPattern='^[0-9+\s]*$' inputValue={registrationState.relevantPersonContact} inputValueChange={handleInputChange} />
              </div>

              <FormInputs inputLabel='Total beds available' inputUsingFor='normal' inputType='text' uniqueId='totalBedsAvailable' placeholder='Total beds available in hospital' inputName='totalNumberOfBeds' inputTitle='Total beds available in hospital (Only positive numeric allowed)' inputPattern='[0-9]+' inputValue={registrationState.totalNumberOfBeds} inputValueChange={handleInputChange} />

              <div className={styles.form__radio}>
                <h3>Website for Online Appointment Booking</h3>
                <div className={styles.multi__part}>
                  <div className={styles.radio__input}>
                    <input required type="radio" onChange={(e) => {handleInputChange(e)}} value="Available" id='webForURLAvailable' name='onlineAppointmentBookingAvailability' />
                    <label htmlFor="webForURLAvailable">Available</label>
                  </div>
                  <div className={styles.radio__input}>
                    <input required type="radio" onChange={(e) => {handleInputChange(e)}} value="Not Available" id='webForURLNotAvailable' name='onlineAppointmentBookingAvailability' />
                    <label htmlFor="webForURLNotAvailable">Not Available</label>
                  </div>
                </div>
                {
                  registrationState.onlineAppointmentBookingAvailability === 'Available' && (
                    <FormInputs inputLabel='Website URL' inputUsingFor='normal' inputType='text' uniqueId='onlineBookingURL' placeholder='Enter Web URL of online booking application' inputName='onlineAppointmentBookingWebURL' inputTitle='Provide a valid URL' inputValue={registrationState.onlineAppointmentBookingWebURL} inputValueChange={handleInputChange} inputPattern='https://.+' />
                  )
                }
              </div>
              
              <div className={styles.multi__part}>
                <button type='button' onClick={() => {
                  setCurrentRegisterSlide(currentRegisterSlide - 1 as 1 | 2 | 3 | 4 | 5);
                }}>Back</button>
                <button type='submit'>Next</button>
              </div>

            </form>
          )
        }

        {
          currentRegisterSlide === 3 && (
            <form className={styles.form} onSubmit={(e) => {
              e.preventDefault();
              setCurrentRegisterSlide(4)
            }}>
              <h2>Emergency and Ambulance Services</h2>
              <p>Signup now and start exploring our app has to offer you. We&#39;re excited to welcome you to our community.</p>

              <div className={styles.form__radio}>
                <h3>Emergency Services</h3>
                <div className={styles.multi__part}>
                  <div className={styles.radio__input}>
                    <input required type="radio" onChange={(e) => {handleInputChange(e)}} value="Available" id='emergencyServicesAvailable' name='emergencyServices' />
                    <label htmlFor="emergencyServicesAvailable">Available</label>
                  </div>
                  <div className={styles.radio__input}>
                    <input required type="radio" onChange={(e) => {handleInputChange(e)}} value="Not Available" id='emergencyServicesNotAvailable' name='emergencyServices' />
                    <label htmlFor="emergencyServicesNotAvailable">Not Available</label>
                  </div>
                </div>
                {
                  registrationState.emergencyServices === 'Available' && (
                    <div className={styles.form__radio}>
                      <h3>Ambulance Services</h3>
                      <div className={styles.multi__part}>
                        <div className={styles.radio__input}>
                          <input required type="radio" onChange={(e) => {handleInputChange(e)}} value="Owned" id='ambulanceServicesOwned' name='ambulanceServices' />
                          <label htmlFor="ambulanceServicesOwned">Owned</label>
                        </div>
                        <div className={styles.radio__input}>
                          <input required type="radio" onChange={(e) => {handleInputChange(e)}} value="Outsourced" id='ambulanceServicesOutsourced' name='ambulanceServices' />
                          <label htmlFor="ambulanceServicesOutsourced">Outsourced</label>
                        </div>
                        <div className={styles.radio__input}>
                          <input required type="radio" onChange={(e) => {handleInputChange(e)}} value="None" id='ambulanceServicesNone' name='ambulanceServices' />
                          <label htmlFor="ambulanceServicesNone">None</label>
                        </div>
                      </div>
                      {
                        (registrationState.ambulanceServices === 'Owned' || registrationState.ambulanceServices === 'Outsourced') && (
                          <>
                            {
                              registrationState.ambulanceServices === 'Outsourced' && (
                                <FormInputs inputLabel='Enter Company Name' inputUsingFor='normal' inputType='text' uniqueId='ambulaceCompany' placeholder='Enter company name of ambulance outsourced' inputName='ambulanceCompanyName' inputTitle='Enter Company Name' inputValue={registrationState.ambulanceCompanyName} inputValueChange={handleInputChange} />
                              )
                            }
                            <FormInputs inputLabel='Number of ALS Ambulances Available' inputUsingFor='normal' inputType='text' uniqueId='ambulaceALS' placeholder='Enter ALS Number' inputName='numberOfALSAmbulances' inputTitle='Only positive numerics are allowed' inputValue={registrationState.numberOfALSAmbulances} inputValueChange={handleInputChange} inputPattern='[0-9]+' />
                            <FormInputs inputLabel='Number of BLS Ambulances Available' inputUsingFor='normal' inputType='text' uniqueId='ambulaceBLS' placeholder='Enter BLS Number' inputName='numberOfBLSAmbulances' inputTitle='Only positive numerics are allowed' inputValue={registrationState.numberOfBLSAmbulances} inputValueChange={handleInputChange} inputPattern='[0-9]+' />
                            <FormInputs inputLabel='Number of PTA Ambulances Available' inputUsingFor='normal' inputType='text' uniqueId='ambulacePTA' placeholder='Enter PTA Number' inputName='numberOfPTAAmbulances' inputTitle='Only positive numerics are allowed' inputValue={registrationState.numberOfPTAAmbulances} inputValueChange={handleInputChange} inputPattern='[0-9]+' />
                            <FormInputs inputLabel='Number of Mortuary Ambulances Available' inputUsingFor='normal' inputType='text' uniqueId='ambulaceMortuary' placeholder='Enter Mortuary Number' inputName='numberOfMortuaryAmbulances' inputTitle='Only positive numerics are allowed' inputValue={registrationState.numberOfMortuaryAmbulances} inputValueChange={handleInputChange} inputPattern='[0-9]+' />
                          </>
                        )
                      }
                    </div>
                  )
                }
              </div>

              <div className={styles.multi__part}>
                <button type='button' onClick={() => {
                  setCurrentRegisterSlide(currentRegisterSlide - 1 as 1 | 2 | 3 | 4 | 5);
                }}>Back</button>
                <button type='submit'>Next</button>
              </div>
              
            </form>
          )
        }

        {
          currentRegisterSlide === 4 && (
            <form className={styles.form} onSubmit={(e) => {
              e.preventDefault();
              setCurrentRegisterSlide(5)
            }}>
              <h2>Insurance and Payment Information</h2>
              <p>Signup now and start exploring our app has to offer you. We&#39;re excited to welcome you to our community.</p>

              <FormSelect selectLabel='Accepted Govt. Health Schemes' dispatchType='GOVT_HEALTH_SCHEMES' handleSelectOptions={handleSelectOptions} dropOptions={govtHealthSchemes} />

              <FormSelect selectLabel='Accepted Govt. Health Schemes' dispatchType='PVT_HEALTH_SCHEMES' handleSelectOptions={handleSelectOptions} dropOptions={privateHealthSchemes} />

              <div className={styles.multi__part}>
                <button type='button' onClick={() => {
                  setCurrentRegisterSlide(currentRegisterSlide - 1 as 1 | 2 | 3 | 4 | 5);
                }}>Back</button>
                <button type='submit'>Next</button>
              </div>

            </form>
          )
        }

        {
          currentRegisterSlide === 5 && (
            <form className={styles.form} onSubmit={(e) => {finalRegistrationSubmit(e)}}>
              <h2>Certifications</h2>
              <p>Signup now and start exploring our app has to offer you. We&#39;re excited to welcome you to our community.</p>

              <FormInputs inputLabel='Hospital Reg Id' inputUsingFor='normal' inputType='text' uniqueId='hospitalRegId' placeholder='Enter hospital Registration Id' inputName='hospitalRegId' inputTitle='Provide hospitals Registration Id' inputValue={registrationState.hospitalRegId} inputValueChange={handleInputChange}/>

              <div className={styles.form__upload}>
                <p>Hospital Incorporation Certificate</p>
                <label htmlFor="hospitalCertificate">
                  <p>Click to select file</p>
                  <FiUploadCloud fontSize={48} color='#335EE9'/>
                  <p>Only JPG, PNG, SVG are allowed.</p>
                  {
                    registrationState.hospitalIncorporationCertificate && <span>1 File Selected. ({registrationState.hospitalIncorporationCertificate.name})</span>
                  }
                </label>
                <input type="file" id='hospitalCertificate' name='hospitalIncorporationCertificate' accept=".jpg, .png, .jpeg" style={{ display: 'none' }} onChange={(e) => {
                  e.target.files && dispatch({ type:'HOSP_CERTIFICATE_UPLOAD', payload: e.target.files[0] })
                }}/>
              </div>

              <div className={styles.form__radio}>
                <h3>Website for Online Appointment Booking</h3>
                <div className={styles.multi__part}>
                  <div className={styles.radio__input}>
                    <input required type="radio" onChange={(e) => {handleInputChange(e)}} value="Agree" id='termsAgree' name='termsAndConditions' />
                    <label htmlFor="termsAgree">Agree</label>
                  </div>
                  <div className={styles.radio__input}>
                    <input required type="radio" onChange={(e) => {handleInputChange(e)}} value="Disagree" id='termsDontAgree' name='termsAndConditions' />
                    <label htmlFor="termsDontAgree">I don&#39;t Agree</label>
                  </div>
                </div>
              </div>

              <div className={styles.multi__part}>
                <button type='button' onClick={() => {
                  setCurrentRegisterSlide(currentRegisterSlide - 1 as 1 | 2 | 3 | 4 | 5);
                }}>Back</button>
                <button type='submit' disabled={registrationState.termsAndConditions === 'Agree' ? false : true} >Register</button>
              </div>

            </form>
          )
        }

      </div>

    </section>
  )
}

export default Register;