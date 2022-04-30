const sendmail = require('sendmail')({ silent: true });

class MailerService {
    constructor() {
        this.sendmail = sendmail;
    }

    sendEmail(email, subject, text) {
        this.sendmail({
            from: 'no-reply.tukki@gmail.com',
            to: email,
            subject: subject,
            html: text
        }, function(err, reply) {
            console.log(err && err.stack);
            console.dir(reply);
        });
    }
}

module.exports = {
    MailerService
};