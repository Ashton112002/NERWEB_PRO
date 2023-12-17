const userModel = require('../models/users');
const bcrypt = require('bcryptjs');


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

class User {
  async getAllUser(req, res) {
    try {
      let Users = await userModel
        .find({})
        .populate('allProduct.id', 'pName pImages pPrice')
        .populate('user', 'name email')
        .sort({ _id: -1 });
      if (Users) {
        return res.json({ Users });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async getSingleUser(req, res) {
    let { uId } = req.body;
    if (!uId) {
      return res.json({ error: 'All filled must be required' });
    } else {
      try {
        let User = await userModel
          .findById(uId)
          .select('name email phoneNumber userImage updatedAt createdAt');
        if (User) {
          return res.json({ User });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  async postAddUser(req, res) {
    let { allProduct, user, amount, transactionId, address, phone } = req.body;
    let dpImage = req.files;
    if (
      !allProduct ||
      !user ||
      !amount ||
      !transactionId ||
      !address ||
      !phone
    ) {
      return res.json({ message: 'All filled must be required' });
    } else {
      user.userRole = 0;
      try {
        let newUser = new userModel({
          allProduct,
          user,
          amount,
          transactionId,
          address,
          phone
        });
        let save = await newUser.save();
        if (save) {
          return res.json({ success: 'User created successfully' });
        }
      } catch (err) {
        return res.json({ error: error });
      }
    }
  }
  
  async postEditUser(req, res) {
    let { uId, name, phoneNumber, address } = req.body;
    let uImage = req.files;
    let base64Image = await processImage(uImage, 150, 150);

    if (!uId || !name || !phoneNumber || !address) {
      return res.json({ message: 'All filled must be required' });
    } else {
      let currentUser = userModel.findByIdAndUpdate(uId, {
        name: name,
        phoneNumber: phoneNumber,
        updatedAt: Date.now(),
        address: address,
        userImage: base64Image
      });
      currentUser.exec((err, result) => {
        if (err) console.log(err);
        return res.json({ success: 'User updated successfully' });
        
      });
    }
  }

  async getDeleteUser(req, res) {
    let { oId, status } = req.body;
    if (!oId || !status) {
      return res.json({ message: 'All filled must be required' });
    } else {
      let currentUser = userModel.findByIdAndUpdate(oId, {
        status: status,
        updatedAt: Date.now()
      });
      currentUser.exec((err, result) => {
        if (err) console.log(err);
        return res.json({ success: 'User updated successfully' });
      });
    }
  }

  async changePassword(req, res) {
    let { uId, oldPassword, newPassword } = req.body;
    if (!uId || !oldPassword || !newPassword) {
      return res.json({ message: 'All filled must be required' });
    } else {
      const data = await userModel.findOne({ _id: uId });
      if (!data) {
        return res.json({
          error: 'Invalid user'
        });
      } else {
        const oldPassCheck = await bcrypt.compare(oldPassword, data.password);
        if (oldPassCheck) {
          newPassword = bcrypt.hashSync(newPassword, 10);
          let passChange = userModel.findByIdAndUpdate(uId, {
            password: newPassword
          });
          passChange.exec((err, result) => {
            if (err) console.log(err);
            return res.json({ success: 'Password updated successfully' });
          });
        } else {
          return res.json({
            error: 'Your old password is wrong!!'
          });
        }
      }
    }
  }
  async allUsers(req, res) {
    // Keyword contains search results

    console.log({ Dex: req.query.search });
    const keyword = req.query.search
      ? {
          $or: [
            { name: { $regex: req.query.search, $options: 'i' } },
            { email: { $regex: req.query.search, $options: 'i' } }
          ]
        }
      : {};

    // Find and return users except current user
    const userExists = await userModel
      .find(keyword)
      // .find({ _id: { $ne: req.user._id } })
      .exec();

    return res.status(200).json(userExists);
  }
}

const ordersController = new User();
module.exports = ordersController;
