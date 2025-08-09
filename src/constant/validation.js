import * as Yup from "yup";


export const validationSchema = Yup.object({
    formNo: Yup.string().required("Form No is required"),
    penNo: Yup.string().required("Pen No is required"),
    scholarNo: Yup.string().required("Scholar No is required"),
    admissionDate: Yup.string().required("Admission Date is required"),
    firstName: Yup.string().required("First Name is required"),
    middleName: Yup.string().nullable(),
    lastName: Yup.string().required("Last Name is required"),
    firstNameHindi: Yup.string().required("First Name (Hindi) is required"),
    middleNameHindi: Yup.string().nullable(),
    lastNameHindi: Yup.string().required("Last Name (Hindi) is required"),
    DOB: Yup.string().required("Date of Birth is required"),
    dobWords: Yup.string().required("DOB in words is required"),
    gender: Yup.string().required("Gender is required"),
    religion: Yup.string().required("Religion is required"),
    caste: Yup.string().required("Caste is required"),
    subCaste: Yup.string().nullable(),
    email: Yup.string().email("Invalid email").required("Email is required"),
    perAddress: Yup.string().required("Permanent Address is required"),
    currentAddress: Yup.string().required("Current Address is required"),
    aadhaar: Yup.string()
        .matches(/^[0-9]{12}$/, "Aadhaar must be 12 digits")
        .required("Aadhaar is required"),
    bloodGroup: Yup.string().required("Blood Group is required"),
    stuBankAccNo: Yup.string().required("Student Bank Account No is required"),
    ifsc: Yup.string().required("IFSC Code is required"),
    ssin: Yup.string().nullable(),
    familySsn: Yup.string().nullable(),

    // Father
    fatherName: Yup.string().required("Father's Name is required"),
    fatherQual: Yup.string().required("Father's Qualification is required"),
    fatherOcc: Yup.string().required("Father's Occupation is required"),
    fatherDesignation: Yup.string().required("Father's Designation is required"),
    fatherDepartment: Yup.string().required("Father's Department is required"),
    fatherAnnualIncome: Yup.string().required("Father's Annual Income is required"),
    fatherMobile: Yup.string()
        .matches(/^[0-9]{10}$/, "Enter valid 10 digit mobile no")
        .required("Father's Mobile No is required"),

    // Mother
    motherName: Yup.string().required("Mother's Name is required"),
    motherQual: Yup.string().required("Mother's Qualification is required"),
    motherOcc: Yup.string().required("Mother's Occupation is required"),
    motherDesignation: Yup.string().required("Mother's Designation is required"),
    motherDepartment: Yup.string().required("Mother's Department is required"),
    motherAnnualIncome: Yup.string().required("Mother's Annual Income is required"),
    motherMobile: Yup.string()
        .matches(/^[0-9]{10}$/, "Enter valid 10 digit mobile no")
        .required("Mother's Mobile No is required"),

    // Guardian — required only if fatherName & motherName are empty
    guardianName: Yup.string().when(["fatherName", "motherName"], {
        is: (fatherName, motherName) => !fatherName && !motherName,
        then: (schema) => schema.required("Guardian Name is required if Father and Mother are empty"),
        otherwise: (schema) => schema.nullable(),
    }),
    guardianQual: Yup.string().when(["fatherQual", "motherQual"], {
        is: (fatherQual, motherQual) => !fatherQual && !motherQual,
        then: (schema) => schema.required("Guardian Qualification is required"),
        otherwise: (schema) => schema.nullable(),
    }),
    guardianOcc: Yup.string().when(["fatherOcc", "motherOcc"], {
        is: (fatherOcc, motherOcc) => !fatherOcc && !motherOcc,
        then: (schema) => schema.required("Guardian Occupation is required"),
        otherwise: (schema) => schema.nullable(),
    }),
    guardianDesignation: Yup.string().when(["fatherDesignation", "motherDesignation"], {
        is: (fatherDesignation, motherDesignation) => !fatherDesignation && !motherDesignation,
        then: (schema) => schema.required("Guardian Designation is required"),
        otherwise: (schema) => schema.nullable(),
    }),
    guardianDepartment: Yup.string().when(["fatherDepartment", "motherDepartment"], {
        is: (fatherDepartment, motherDepartment) => !fatherDepartment && !motherDepartment,
        then: (schema) => schema.required("Guardian Department is required"),
        otherwise: (schema) => schema.nullable(),
    }),
    guardianAnnualIncome: Yup.string().when(["fatherAnnualIncome", "motherAnnualIncome"], {
        is: (fatherAnnualIncome, motherAnnualIncome) => !fatherAnnualIncome && !motherAnnualIncome,
        then: (schema) => schema.required("Guardian Annual Income is required"),
        otherwise: (schema) => schema.nullable(),
    }),
    guardianMobile: Yup.string().when(["fatherMobile", "motherMobile"], {
        is: (fatherMobile, motherMobile) => !fatherMobile && !motherMobile,
        then: (schema) =>
            schema.matches(/^[0-9]{10}$/, "Enter valid 10 digit mobile no")
                .required("Guardian Mobile No is required"),
        otherwise: (schema) => schema.nullable(),
    }),

    prevSchoolName: Yup.string().required("Previous School Name is required"),
    palce: Yup.string().required("Place is required"),
    lastClass: Yup.string().required("Last Class is required"),
    result: Yup.string().required("Result is required"),
    session: Yup.string().required("Session is required"),
    cbseRegNo: Yup.string().nullable(),
    hostelName: Yup.string().nullable(),
    contactNumber: Yup.string()
        .matches(/^[0-9]{10}$/, "Enter valid 10 digit contact no")
        .required("Contact Number is required"),
    nameOfBrotherORSister: Yup.string().nullable(),
    classOfBrotherORSister: Yup.string().nullable(),
    studyingINSISAOfBrotherorSister: Yup.string().nullable(),
    studyingINSISAOfBrotherorSisterClass: Yup.string().nullable(),
    parentDOB: Yup.string().required("Parent DOB is required"),
    parentSign: Yup.mixed().required("Parent Sign is required"),
    parentName: Yup.string().required("Parent Name is required"),
    relation: Yup.string().required("Relation is required"),
    signOfAccAuthority: Yup.mixed().required("Signature of Account Authority is required"),
    signOfScholAuthority: Yup.mixed().required("Signature of School Authority is required"),
    stuName: Yup.string().required("Student Name is required"),
    class: Yup.string().required("Class is required"),
    studentPhoto: Yup.mixed().required("Student Photo is required"),
    fatherPhoto: Yup.mixed().required("Father Photo is required"),
    motherPhoto: Yup.mixed().required("Mother Photo is required"),
    guardianPhoto: Yup.mixed().nullable(), // only if guardian fields filled
    formIssueDate: Yup.string().required("Form Issue Date is required"),
    authorizedSign: Yup.mixed().required("Authorized Sign is required"),

    // Docs
    slc: Yup.mixed().required("DOc required"),
    birthCertificate: Yup.mixed().required("Birth Certificate is required"),
    lastClassResult: Yup.mixed().required("Result of last class is required"),
    studentBloodGroupDoc: Yup.mixed().required("Student Blood Group document is required"),
    studentFamilySssmId: Yup.mixed().required("Student & family SSSM ID is required"),
    cbseRegClass9: Yup.mixed().required("CBSE registration of class 9th is required"),
    aadhaarAll: Yup.mixed().required("Aadhar card of Student/Father/Mother/Guardian is required"),
    shaphatPatraClass8: Yup.mixed().required("Shapath Patra (class 8th onwards) is required"),
    passportPhotos: Yup.mixed().required("5 passport photos of student + 1 of father & mother is required"),

    studentDigitalCasteCert: Yup.mixed().required("Student digital caste certificate is required"),
    parentsIncomeCert: Yup.mixed().required("Parents income certificate is required"),
    studentBankPassbook: Yup.mixed().required("Student bank account passbook is required"),
    fatherCasteCert: Yup.mixed().required("Father's caste certificate is required"),
});
