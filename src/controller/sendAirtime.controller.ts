const dotenv = require("dotenv");
dotenv.config();
const sendAirtime = async (req: any, res: any) => {
  interface body {
    amount: string;
    phoneNumber: string;
  }
  const apiKey = process.env.api_key;
  const username = process.env.username;

  const { amount, phoneNumber }: body = req.body;
  const credentials = {
    username: username,
    apiKey: apiKey,
  };
  const at = require("africastalking")(credentials);
  const airtime = at.AIRTIME;
  const options = {
    recipients: [
      {
        phoneNumber: phoneNumber,
        amount: amount,
        currencyCode: "KES",
      },
    ],
  };
  try {
    const response = await airtime.send(options);
    res.status(200).json({
      status: "success",
      message: "Airtime sent successfully",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Airtime not sent",
      data: error.message,
    });
  }
};

module.exports = {
  sendAirtime,
};
