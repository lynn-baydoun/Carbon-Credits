import userModel from "../models/user.model.js";
import jsonwebtoken from "jsonwebtoken";
import responseHandler from "../handlers/response.handler.js";

const signup = async (req, res) => {
  try {
    const { userAddress } = req.body;

    const checkUser = await userModel.findOne({ userAddress });

    if (checkUser) return responseHandler.badrequest(res, "username already used");

    const user = new userModel();

    user.address = address;

    await user.save();

    const token = jsonwebtoken.sign(
      { data: user.address },
      process.env.TOKEN_SECRET,
      { expiresIn: "24h" }
    );

    responseHandler.created(res, {
      token,
      ...user._doc,
      id: user.address
    });
  } catch {
    responseHandler.error(res);
  }
};

const signin = async (req, res) => {
  try {
    const { userAddress } = req.body;

    const user = await userModel.findOne({ userAddress }).select("user");

    if (!user) return responseHandler.badrequest(res, "User already exists");

    if (!user.validPassword(password)) return responseHandler.badrequest(res, "Wrong password");

    const token = jsonwebtoken.sign(
      { data: user.id },
      process.env.TOKEN_SECRET,
      { expiresIn: "24h" }
    );ned;

    responseHandler.created(res, {
      token,
      ...user._doc,
      id: user.address
    });
  } catch {
    responseHandler.error(res);
  }
};

export default {
  signup,
  signin
};