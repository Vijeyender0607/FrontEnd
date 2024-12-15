import axios from 'axios';

const sendMessage = async () => {
    const url = 'https://graph.facebook.com/v21.0/489631117569171/messages';
    const data = {
        messaging_product: 'whatsapp',
        to: '919952316734',
        type: 'template',
        template: {
            name: 'hello_world',
            language: {
                code: 'en_US'
            }
        }
    };
    const config = {
        headers: {
            'Authorization': 'Bearer EAAOBJEGgsqIBO7oC95fZCHjopZB7pNOb0ZCvRZCosVX8OSQRuzaG3XUfnPwkZAC847y84ZAjnQaFNT5KKF8EyLIRvZBShYacCmmaoh3ps2W2wgTWkJeu9ACq0CLX7asJ8UandP6nQ33V7KLEPaUlZBV3ce8ZCWgaPdUSIbNFIshZBlGb34YLeYYPWBlN4RQO7Tpy8KjFIxekvX90wmlAElZCVOEzobBUvA5oZCDhZCCMZD',
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await axios.post(url, data, config);
        console.log('Message sent successfully:', response.data);
    } catch (error) {
        console.error('Error sending message:', error);
    }
};

export default sendMessage;
