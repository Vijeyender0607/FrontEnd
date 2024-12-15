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
            'Authorization': 'Bearer EAAOBJEGgsqIBO3SMWgdX81yfDqiaHE5gqjxhpI5Jwfi6TjmhedDwDeXwpu52ZCNAfFWPZCHiNOs94Tnk9sZAfPDBXdwJLAbPeZAH1lo36rw5GHz0yACYiU4ulMPoywTopZAretnNpVP1u2I9hAqqQQRw8uZBZBnx4FaLt78vqj8S261x2PQW2CZCDmSWbRfSmnJcWAZDZD',
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
