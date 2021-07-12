const nodemailer = require('nodemailer');

module.exports = {
    async sendmail (request, response) {
        const remetente = nodemailer.createTransport({
            host: "nspro30.hostgator.com.br",
            service: "nspro30.hostgator.com.br",
            port: 465,
            secure: true,
            auth: {
                user: "developer@tarefanaweb.com.br",
                pass: "JhD$RZAui4N3%uo"
            }
        })
        
        const emailASerEnviado = {
            from: "pedro.limma@live.com",
            to: "limma.pedro@gmail.com",
            subject: "Enviando e-mail com nodejs",
            text: "Texto do corpo do e-mail"
        }
        
        remetente.sendMail(emailASerEnviado, error => {
            if (error) {
                console.log("Error", error);
                return response.status(400).json({msg: `Erro ao enviar e-mail: ${error}`});
            } else {
                return response.status(200).json({msg: `E-mail enviado com sucesso!`});
            }
        });
    }
}