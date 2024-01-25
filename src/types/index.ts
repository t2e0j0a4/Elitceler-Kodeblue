type RegistrationDetailsType = {
    hospitalName: string,
    hospitalEmail: string,
    hospitalRegId: string,
    hospitalPassword: string,
    
    medicalSpecialities: string[],

    hospitalContactNumber: string,

    relevantPersonName: string,
    relevantPersonContact: string,

    address: {
        latitude: string,
        longitude: string,
        streetAddress: string
    },

    totalNumberOfBeds: string,

    onlineAppointmentBookingAvailability : 'Available' | 'Not Available' | '',
    onlineAppointmentBookingWebURL: string,

    emergencyServices: 'Available' | 'Not Available' | '',
    ambulanceServices: 'Owned' | 'Outsourced' | 'None' | '',
    ambulanceCompanyName: string, // only for outsourced ambulances...
    numberOfALSAmbulances: string,
    numberOfBLSAmbulances: string,
    numberOfPTAAmbulances: string,
    numberOfMortuaryAmbulances: string,

    govtHealthSchemes: string[],
    privateHealthSchemes: string[],

    hospitalIncorporationCertificate: File | null,

    termsAndConditions: 'Agree' | 'Disagree'
}

type RegistrationDetailsAction = { type: 'CHANGE_INPUT_VALUE', payload: React.ChangeEvent<HTMLInputElement> } | { type: 'MEDICAL_SPECIALITIES_OPTIONS', payload: string[] } | { type: 'GOVT_HEALTH_SCHEMES', payload: string[] } | { type: 'PVT_HEALTH_SCHEMES', payload: string[] } | { type: 'HOSP_CERTIFICATE_UPLOAD', payload: File }

export type { RegistrationDetailsType, RegistrationDetailsAction };