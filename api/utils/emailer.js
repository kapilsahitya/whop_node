
const AWS = require('aws-sdk');
const bodyParser = require('body-parser');

exports.sendMail = function(req, res) {

  const config = {
			    "AWS": {
			      "accessKeyId":"AKIAIG7BCZLSUWP6QEBA",
			      "secretAccessKey":"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",
			      "region":"us-east-1",
			      "SenderEmailId":"<no-reply@schoolbellq.com>"
			    },
			    "port": 587
 			 }

    AWS.config.update({
        accessKeyId: config.AWS.accessKeyId,
        secretAccessKey: config.AWS.secretAccessKey,
        region: config.AWS.region
    });
    
    const ses = new AWS.SES();
    const params = {
      Destination: {
        ToAddresses: [req.email] // Email address/addresses that you want to send your email
      },
      Message: {
        Body: {
          Html: {
            // HTML Format of the email
            Charset: "UTF-8",
            Data:
            `<html>
			    <body>
			        <div>
		            <table width='100%' border='0' cellspacing='0' cellpadding='0' class='m_-77210989867790525tableContent m_-77210989867790525bgBody' align='center'>
		                <tbody>
		                    <tr>
		                     <td>
                            <table style='border:1px solid #cdcdcd' width='600' border='0' cellspacing='0' cellpadding='0' align='center'>
                                <tbody>
                                    <tr>
                                        <td valign='top'>
                                            <div>
                                                <table width='100%' border='0' cellspacing='0' cellpadding='0' align='center' class='m_-77210989867790525bgItem'>
                                                    <tbody>
                                                        <tr>
                                                            <td style='background-color: rgba(209,209,209,0.6);'>
                                                                <table width='100%' border='0' cellspacing='0' cellpadding='0' align='center'>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td height='20' colspan='8'>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td width='22%' align='left'>
                                                                                <div>
                                                                                    <div>
                                                                                        <img src='https://hrmsapi.schoolbellq.com/uploads/logo/logo.png' alt='Sai Chayya Education & Welfare Society' height='90px' style='margin-left:20px;margin-top:20px;margin-right:10px' class='CToWUd'>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <h2 style='color:black!important;font-weight:bold!important'>
                                                                                    Sai Chayya Education & Welfare Society</h2>
                                                                                <p style='color:white!inportant;margin-top:10px!important'>
                                                                                  
                                                                                </p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td height='20' colspan='6'>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div>
                                            <table width='600' border='0' cellspacing='0' cellpadding='0' align='center' style='padding:14px'>
                                           	 <tbody>
                                            <tr>
                                            <td height='10'>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td width='300' valign='top' class ='m_-77210989867790525bgItem m_-77210989867790525bgItembox'>
                                            <p>

                                            ${req.message}
                                            
                                            <br>
                                            <br>
                                            Thank you!<br>
                                            FROM Ramagya's HR-INFINITY
                                            </td>
                                            </tr>
                                            </tbody>
                                            </table>
                                            </div>
                                            <div>
                                            <table width='600' border='0' cellspacing='0' cellpadding='0' align='center'>
                                            <tbody>
                                            <tr>
                                            <td height='10'>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td style='background-color:rgba(209,209,209,0.6)' align='center'>
                                            <table width='540' cellspacing='0' cellpadding='0' border='0'>
                                            <tbody>
                                            <tr>
                                            <td height='28'>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td width='454' valign='middle'>
                                            <div>
                                            <div>
                                            <img src='https://hrmsapi.schoolbellq.com/uploads/logo/logo.png' alt='https://hrmsapi.schoolbellq.com/uploads/logo/logo.png' height='60px' class ='CToWUd'>
                                            </div>
                                            </div>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td height='26'>
                                            </td>
                                            </tr>
                                            </tbody>
                                            </table>
                                            </td>
                                            </tr>
                                            </tbody>
                                            </table>
                                            </div>
                                            </td>
                                            </tr>
                                            </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height='55'>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class='yj6qo'>
                            </div>
                            <div class='adL'>
                            </div>
                        </div>
                    </body>
                </html>`
	          },
        //  Text: {
            // Charset: "UTF-8",
            // Data: "Thanks for reaching out"
         // }
        },
        Subject: {
          Charset: "UTF-8",
          Data: `${req.subject}`
        }
      },
      Source: "HRMS" +config.AWS.SenderEmailId,
      ReplyToAddresses: [
             'info@schoolbellq.com',
         ],
    };

    const sendEmailReceiver = ses.sendEmail(params).promise();
    
    sendEmailReceiver
      .then(data => {
      	 // res.data;
        console.log("email submitted to SES", data);
      })
      .catch(error => {
        console.log(error);
    });

    
}