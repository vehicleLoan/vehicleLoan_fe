export class Customer{
    
    //Personal Details
    custId:number;
    custFirstName:string;
    custLastName:string;
    email:string;
    phone:string;
    address:string;
    state:string;
    city:string;
    pinCode:string;
    password:string;
    gender:string;
    dateOfBirth:string;
    
    //Employment Details
    empType:string; 
    workExp:number;
    salary:number;
    profession:string;
    companyName:string;
    companyAddress:string;
    companyCity:string;
    companyState:string;
    annualSal:number;
    //income:number;
    //annualPension:string;

    //Loan Details
    loanId:number;
    rateOfInterest:number;
    tenure:number;
    loanAmount:number;
    status:string;
    //Existing Loan Details
    existingloan:string;
    existingLoanBank:string;
    existingLoanAmount:string;
    existingEmi:string;

    //Bank Details 
    accountId:number;
    accountNumber:string;
    branchName:string;
    bankName:string;
    ifsc:string;
    
    //Document Details
    docId:number;
    panCard:string;
    aadharCard:string;
    paySlip:string;

    //Vehicle Details
    vehicleId:number;
    vehicleType:string;
	vehicleMake:string;
	vehicleModel:string;
	vehicleState:string;
	vehicleCity:string;

}