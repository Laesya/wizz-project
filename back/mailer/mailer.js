const nodemailer = require('nodemailer');
var ejs = require("ejs");

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.MAIL_SENDER,
        pass: process.env.MAIL_PASSWORD
    }
});

const getMailObject = (mailType) => {
    switch (mailType) {
        case 'welcome':
            return 'Bienvenue sur Wizz'
        case 'resetPassword':
            return 'Réinitialisation du mot de passe'
    }
}
const getMailContent = (mailType) => {
    switch (mailType) {
        case 'welcome':
            return "/templates/welcome_email.ejs"
        case 'resetPassword':
            return "/templates/resetPassword.ejs"
    }
}
//TODO add default values to .env
const mailer = (userDatas, recipient = 'isaure@wildcodeschool.fr', mailType = "welcome") => {
    ejs.renderFile(__dirname + getMailContent(mailType), { ...userDatas },
        function (err, data) {
            if (err) {
                //Todo manage error
                console.log(err);
            } else {
                const mailOptions = {
                    from: process.env.MAIL_SENDER,
                    to: recipient,
                    subject: getMailObject(mailType),
                    html: data
                };
                transporter.sendMail(mailOptions, function (err, info) {
                    if (err) {
                        //Todo manage error
                        console.log(err);
                    } else {
                        //Todo manage result
                        console.log('Message sent: ' + info.response);
                    }
                });
            }
        });
}


module.exports = mailer;