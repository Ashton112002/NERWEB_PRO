import React, { Fragment, useContext, useState, useEffect } from 'react';
import Layout from './Layout';
import { DashboardUserContext } from './Layout';
import { updatePersonalInformationAction } from './Action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const apiURL = process.env.REACT_APP_API_URL;
const ProfileComponent = () => {
  const { data, dispatch } = useContext(DashboardUserContext);
  const userDetails = data.userDetails !== null ? data.userDetails : '';

  const [fData, setFdata] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    success: false,
    userImage: ''
  });
  const handleFileChange = (e) => {
    // Use only the first file if you don't support multiple files
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFdata({
          ...fData,
          userImage: reader.result,
          selectedFile: selectedFile,
        });
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  useEffect(() => {
    setFdata({
      ...fData,
      id: userDetails._id,
      name: userDetails.name,
      email: userDetails.email,
      phone: userDetails.phoneNumber,
      address: userDetails.address,
      userImage: userDetails.userImage || null,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetails]);

  const handleSubmit = () => {
    if (!fData.phone) {
      toast.error('Phone Number is required', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      });
      return;
    } else if (!fData.address){
      toast.error('Address is required', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      });
      return;
    }
    updatePersonalInformationAction(dispatch, fData);
  };

  if (data.loading) {
    return (
      <div className="w-full md:w-9/12 flex items-center justify-center ">
        <svg
          className="w-12 h-12 animate-spin text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
      </div>
    );
  }
  return (
    <Fragment>
      <div className="flex flex-col w-full my-4 md:my-0 md:w-9/12 md:px-8">
        <div className="shadow-lg border">
          <div className="py-4 px-4 text-lg font-semibold border-t-2 border-yellow-700">
            Personal Information
          </div>
          <hr />
          <div className="py-4 px-4 md:px-8 lg:px-16 flex flex-col space-y-4">
            {fData.success ? (
              <div className="bg-green-200 px-4 py-2 rounded">
                {fData.success}
              </div>
            ) : (
              ''
            )}
            <div className="flex flex-col space-y-2">
              <label htmlFor="name">Name</label>
              <input
                onChange={e => setFdata({ ...fData, name: e.target.value })}
                value={fData.name}
                type="text"
                id="name"
                className="border px-4 py-2 w-full focus:outline-none"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="email">Email</label>
              <input
                value={fData.email}
                readOnly
                type="email"
                id="email"
                className="cursor-not-allowed border px-4 py-2 bg-gray-200 w-full focus:outline-none focus:cursor-not-allowed"
              />
              <span className="text-xs text-gray-500">
                You can't change your email
              </span>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
                <label htmlFor="image">Profile Picture</label>
                <input
                  onChange={handleFileChange}
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  className="px-4 py-2 border focus:outline-none"
                  id="image"
                  multiple
                />
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <img
                  className="w-20 h-20 object-cover object-center"
                  src={fData.userImage}
                  alt="pic"
                />
              </div>
            </div>
            <div className="flex flex-col mt-4"></div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="number">Phone Number</label>
              <input
                onChange={e => setFdata({ ...fData, phone: e.target.value })}
                value={fData.phone}
                type="number"
                id="number"
                className="border px-4 py-2 w-full focus:outline-none"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="address">Address</label>
              <input
                onChange={e => setFdata({ ...fData, address: e.target.value })}
                value={fData.address}
                type="text"
                id="address"
                className="border px-4 py-2 w-full focus:outline-none"
                required
              />
            </div>
            <div
              onClick={e => handleSubmit()}
              style={{ background: '#679641' }}
              className="w-full text-center cursor-pointer px-4 py-2 text-gray-100">
              Update Information
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

const UserProfile = props => {
  return (
    <Fragment>
      <Layout children={<ProfileComponent />} />
    </Fragment>
  );
};

export default UserProfile;
