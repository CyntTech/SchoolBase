import React, { useState } from 'react';
import { ApplicantImg } from "../../../assets";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
//import ApplicantApiData from "./ApplicantApiData"

const ApplicantContact = () => {
  //<ApplicantApiData />
  const [formData, setFormData] = useState({
    email: '',
    passport: null, // For file upload
    role: 'newApplicant',
    firstName: '',
    surName: '',
    middleName: '',
    gender: '',
    password: '',
    address: '',
    phoneNumber: '',
    dateOfBirth: '',
    religion: '',
    stateOfOrigin: '',
    nationality: '',
    maritalStatus: '',
    parentName: '',
    parentOccupation: '',
    extracurricular: [],
    interests: [],
    skills: [],
    previousSchools: [],
    registeredCourses: [],
    additionalDocuments: [],
    signature: [],
    recommendationLetter: [],

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  return (
    <div className="font-manrope bg-blueBg">
      <div className="text-center text-xl border-b-4 font-extrabold py-5">
        <h1 className="">CONTACT INFORMATION</h1>
      </div>
      <div className="flex w-4/5 m-auto">
        <div className="my-9">
          <img
            className="md:block hidden lg: w-full mr-48 px-12"
            width={100}
            height={50}
            src={ApplicantImg}
            alt=""
          />
        </div>
        <form className="my-10 w-11/12">
          <div className="">
            <p className="text-sm font-semibold mb-2 text-[#4D4D4E]">
              Parent/ Guardian name
            </p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='First name' /> */}
            <TextField
              className="w-full bg-white rounded-md p-[12px] placeholder:text-base shadow-2xl outline-none"
              placeholder="Parent/ Guardian name"
              size="small"
              name="parentName"
              value={formData.parentName}
              onChange={handleInputChange}
              sx={{
                "& fieldset": { border: "none" },
              }}
            //   value={firstname}
            //   onChange={(e) => setFirstName(e.target.value)}
            // onChange={formik.handleChange}
            //   onBlur={formik.handleBlur}
            // value={formik.values.firstName}
            //   error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            //   helperText={formik.touched.firstName && formik.errors.firstName}
            //   required
            />
          </div>

          <div className="mt-2">
            <p className="text-sm font-semibold mb-2 text-[#4D4D4E]">
              Residential address
            </p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='Middle name' /> */}
            <TextField
              className="w-full bg-white rounded-md p-[12px] placeholder:text-base shadow-2xl outline-none"
              placeholder="Residential address"
              size="small"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              sx={{
                "& fieldset": { border: "none" },
              }}
            //   value={firstname}
            //   onChange={(e) => setFirstName(e.target.value)}
            // onChange={formik.handleChange}
            //   onBlur={formik.handleBlur}
            // value={formik.values.firstName}
            //   error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            //   helperText={formik.touched.firstName && formik.errors.firstName}
            //   required
            />
          </div>

          <div className="mt-2">
            <p className="text-sm font-semibold mb-2 text-[#4D4D4E]">Status</p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='Surname' /> */}
            <TextField
              className="w-full bg-white rounded-md p-[12px] placeholder:text-base shadow-2xl outline-none"
              placeholder="maritalStatus"
              size="small"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleInputChange}
              sx={{
                "& fieldset": { border: "none" },
              }}
            //   value={firstname}
            //   onChange={(e) => setFirstName(e.target.value)}
            // onChange={formik.handleChange}
            //   onBlur={formik.handleBlur}
            // value={formik.values.firstName}
            //   error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            //   helperText={formik.touched.firstName && formik.errors.firstName}
            //   required
            />
          </div>
          <div className="mt-2">
            <p className="text-sm font-semibold mb-2 text-[#4D4D4E]">
              Phone Number
            </p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='Residential Address' /> */}
            <TextField
              className="w-full bg-white rounded-md p-[12px] placeholder:text-base shadow-2xl outline-none"
              placeholder="Mobile Phone"
              size="small"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              sx={{
                "& fieldset": { border: "none" },
              }}
            //   value={firstname}
            //   onChange={(e) => setFirstName(e.target.value)}
            // onChange={formik.handleChange}
            //   onBlur={formik.handleBlur}
            // value={formik.values.firstName}
            //   error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            //   helperText={formik.touched.firstName && formik.errors.firstName}
            //   required
            />
          </div>

          <div className="mt-2">
            <p className="text-sm font-semibold mb-2 text-[#4D4D4E]">
              Email address
            </p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='Religion' /> */}
            <TextField
              className="w-full bg-white rounded-md p-[12px] placeholder:text-base shadow-2xl outline-none"
              placeholder="Email address"
              size="small"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              sx={{
                "& fieldset": { border: "none" },
              }}
            //   value={firstname}
            //   onChange={(e) => setFirstName(e.target.value)}
            // onChange={formik.handleChange}
            //   onBlur={formik.handleBlur}
            // value={formik.values.firstName}
            //   error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            //   helperText={formik.touched.firstName && formik.errors.firstName}
            //   required
            />
          </div>

          <div className="mt-2">
            <p className="text-sm font-semibold mb-2 text-[#4D4D4E]">
              Nationality
            </p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='State of Origin' /> */}
            <TextField
              className="w-full bg-white rounded-md p-[12px] placeholder:text-base shadow-2xl outline-none"
              placeholder="State of Origin"
              size="small"
              name="stateOfOrigin"
              value={formData.stateOfOrigin}
              onChange={handleInputChange}
              sx={{
                "& fieldset": { border: "none" },
              }}
            //   value={firstname}
            //   onChange={(e) => setFirstName(e.target.value)}
            // onChange={formik.handleChange}
            //   onBlur={formik.handleBlur}
            // value={formik.values.firstName}
            //   error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            //   helperText={formik.touched.firstName && formik.errors.firstName}
            //   required
            />
          </div>
          <div className="flex mt-7 justify-between">
            <Link to="/get-started/applicant/signup">
              <div className="">
                <button className="border hover:bg-[#3D5EE1] hover:text-white bg-[white] text-[#3D5EE1] rounded-md h-10 w-36 cursor-pointer my-2">
                  Back
                </button>
              </div>
            </Link>
            <Link to="/get-started/applicantacademiainfo">
              <div className="">
                <button className="border hover:bg-white hover:text-[#3D5EE1] bg-[#3D5EE1] text-white rounded-md h-10 w-36 cursor-pointer my-2">
                  Continue
                </button>
              </div>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicantContact;
