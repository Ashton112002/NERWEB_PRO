import {
  getUserById,
  updatePersonalInformationFetch,
  getOrderByUser,
  updatePassword
} from './FetchApi';

export const logout = () => {
  localStorage.removeItem('jwt');
  localStorage.removeItem('cart');
  localStorage.removeItem('wishList');
  window.location.href = '/';
};

export const fetchData = async dispatch => {
  dispatch({ type: 'loading', payload: true });
  let userId = JSON.parse(localStorage.getItem('jwt'))
    ? JSON.parse(localStorage.getItem('jwt')).user._id
    : '';
  try {
    let responseData = await getUserById(userId);
    setTimeout(() => {
      if (responseData && responseData.User) {
        dispatch({ type: 'userDetails', payload: responseData.User });
        dispatch({ type: 'loading', payload: false });
      }
    }, 500);
  } catch (error) {
    console.log(error);
  }
};

export const fetchOrderByUser = async dispatch => {
  dispatch({ type: 'loading', payload: true });
  let userId = JSON.parse(localStorage.getItem('jwt'))
    ? JSON.parse(localStorage.getItem('jwt')).user._id
    : '';
  try {
    let responseData = await getOrderByUser(userId);
    setTimeout(() => {
      if (responseData && responseData.Order) {
        console.log(responseData);
        dispatch({ type: 'OrderByUser', payload: responseData.Order });
        dispatch({ type: 'loading', payload: false });
      }
    }, 500);
  } catch (error) {
    console.log(error);
  }
};

export const updatePersonalInformationAction = async (dispatch, fData) => {
  dispatch({ type: 'loading', payload: true });


  const resizeImage = (img, maxWidth, maxHeight) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    let width = img.width;
    let height = img.height;
    if (width > height) {
      if (width > maxWidth) {
        height *= maxWidth / width;
        width = maxWidth;
      }
    } else {
      if (height > maxHeight) {
        width *= maxHeight / height;
        height = maxHeight;
      }
    }
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(img, 0, 0, width, height);
    return canvas.toDataURL("image/jpeg"); // Adjust format as needed
  };

  const processImage = async (file, maxWidth, maxHeight) => {
    return new Promise((resolve, reject) => {
      if (!(file instanceof Blob) || !(file instanceof File)) {
        reject(new Error("Invalid file object"));
        return;
      }
  
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const resizedBase64String = resizeImage(img, maxWidth, maxHeight);
          resolve(resizedBase64String);
        };
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  };
  
  
  try {
    let base64String = await processImage(fData.selectedFile, 150, 150);

    const formData = {
      uId: fData.id,
      name: fData.name,
      phoneNumber: fData.phone,
      address: fData.address,
      uImage: base64String
    }
    let responseData = await updatePersonalInformationFetch(formData);
    setTimeout(() => {
      if (responseData && responseData.success) {
        dispatch({ type: 'loading', payload: false });
        fetchData(dispatch);
      }
    }, 500);
  } catch (error) {
    console.log(error);
  }
};

export const handleChangePassword = async (fData, setFdata, dispatch) => {
  if (!fData.newPassword || !fData.oldPassword || !fData.confirmPassword) {
    setFdata({
      ...fData,
      error: 'Please provide your all password and a new password'
    });
  } else if (fData.newPassword !== fData.confirmPassword) {
    setFdata({ ...fData, error: "Password does't match" });
  } else {
    const formData = {
      uId: JSON.parse(localStorage.getItem('jwt')).user._id,
      oldPassword: fData.oldPassword,
      newPassword: fData.newPassword
    };
    dispatch({ type: 'loading', payload: true });
    try {
      let responseData = await updatePassword(formData);
      if (responseData && responseData.success) {
        setFdata({
          ...fData,
          success: responseData.success,
          error: '',
          oldPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
        dispatch({ type: 'loading', payload: false });
      } else if (responseData.error) {
        dispatch({ type: 'loading', payload: false });
        setFdata({
          ...fData,
          error: responseData.error,
          success: '',
          oldPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
};
