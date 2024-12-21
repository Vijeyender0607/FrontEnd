import axios from 'axios';

const sendMessage = async (props) => {

    
    console.log(import.meta.env.VITE_APP_YOUR_KEY)
    console.log('API URL:', import.meta.env.VITE_API_WA);
    const token=import.meta.env.VITE_APP_YOUR_KEY

    const url = 'https://graph.facebook.com/v21.0/489631117569171/messages';
    const data = {
        messaging_product: 'whatsapp',
        to: '91'+props.phone,
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
            'Authorization': 'Bearer '+token,
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
