import responseHandler from "../handlers/response.handler.js";
import campaignModel from "../models/campaign.model..js";

const addCampaign = async (req, res) => {
  try {

    const isCampaign = await campaignModel.findOne({
      user: req.user.address,
      title: req.body.title,
      description : req.body.description,
      image: req.body.image,
      deadline:req.body.deadline,
      amountCollected : req.body.amountCollected,
      contractAddress : req.body.contractAddress,
      approved : false
    });

    if (isCampaign) return responseHandler.ok(res, isCampaign);

    const campaign = new campaignModel({
      ...req.body,
      user: req.user.address
    });

    await campaign.save();

    responseHandler.created(res, campaign);
  } catch {
    responseHandler.error(res);
  }
};

const removeCampaign = async (req, res) => {
  try {
    const { campaignId } = req.params;

    const campaign = await campaignModel.findOne({
      user: req.user.address,
      _id: campaignId
    });

    if (!campaign) return responseHandler.notfound(res);

    await campaign.remove();

    responseHandler.ok(res);
  } catch {
    responseHandler.error(res);
  }
};

const getCampaignsOfUser = async (req, res) => {
  try {
    const campaign = await campaignModel.find({ user: req.user.address }).sort("-createdAt");
    responseHandler.ok(res, campaign);
  } catch {
    responseHandler.error(res);
  }
};

const getCampaigns = async(req,res) =>{
  try{
    const campaigns = await campaignModel.find({});
    responseHandler.ok(res,campaigns); 
  } catch{
    responseHandler.error(res);
  }
}

const getCampaignsByApproval = async(req,res) =>{
  try{
    const campaigns = await campaignModel.find({ approved : req.params.approved});
    responseHandler.ok(res,campaigns); 
  } catch {
    responseHandler.error(res);
  }
}

export default { addCampaign, removeCampaign, getCampaignsOfUser,getCampaigns,getCampaignsByApproval };