const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
  user: "your_hostinger_username",
  password: "your_password", // Avoid storing plaintext passwords; use environment variables.
  host: "ftp.yourwebsite.com",
  port: 21,
  localRoot: __dirname + "/build",
  remoteRoot: "/public_html/",
  include: ["*", "**/*"], // Include all files
  deleteRemote: true, // Deletes files not in the local build folder
};

ftpDeploy.deploy(config, function (err, res) {
  if (err) console.log(err);
  else console.log("Finished uploading:", res);
});
