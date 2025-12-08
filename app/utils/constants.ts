export type SideBarFields = {
    logo: string,
    name: string,
    type: string
}


export const doctorFields: SideBarFields[] = [{
    logo: 'logo',
    name:'Profile',
    type: 'Doctor'
},{
    logo: 'logo',
    name:'Appointments',
    type: 'Doctor'
},{
    logo: 'logo',
    name:'Patients',
    type: 'Doctor'
},
{
    logo:'logo',
    name:"AddPrescription",
    type: 'Doctor'
}]


export const receptionistFields: SideBarFields[] = [{
    logo: 'logo',
    name:'Profile',
    type:'Receptionist'
},{
    logo: 'logo',
    name:'Patients',
    type:'Receptionist'
},{
    logo: 'logo',
    name:'AddPatient',
    type:'Receptionist'
},{
    logo: 'logo',
    name:'Appointments',
    type:'Receptionist'
},{
    logo: 'logo',
    name:'AddAppointments',
    type:'Receptionist'
}]


export const pharmacistFields: SideBarFields[] = [{
    logo:'logo',
    name:'Profile',
    type:'Pharmacist'
},{
    logo:'logo',
    name:'Patients',
    type:'Pharmacist'
},{
    logo:'logo',
    name:'Invoice',
    type:'Pharmacist'
}]


export const adminFields: SideBarFields[] = [{
    logo:'logo',
    name:'Profile',
    type:'Admin'
},{
    logo:'logo',
    name:'Doctor',
    type:'Admin'
},{
    logo:'logo',
    name:'Pharmacist',
    type:'Admin'
},{
    logo:'logo',
    name:'Receptionist',
    type:'Pharmacist'
},{
    logo:'logo',
    name:'Admins',
    type:'Admin'
}]