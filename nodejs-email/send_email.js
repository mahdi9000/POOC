const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'youremail@gmail.com',
        pass: 'your password'
    }
});

let mailOptions = {
    from: 'icanatawijaya@gmail.com',
    to: 'hermanthefr0g@gmail.com',
    subject: 'Sending Email using Nodejs',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log('Email sent: ' + info.response);
});