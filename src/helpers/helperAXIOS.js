import axios from 'axios';

export const helperAXIOS = () => {

    const customAxios = axios.create({
        timeout: 3000, // 3 segundos de timeout
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });

    const customRequest = async (url, method = 'GET', data = null, token = null) => {
        // console.log("Helper:"+data)
        try {
            const config = {
                method,
                url,
                headers: {
                    'Authorization': token ? `Bearer ${token}` : '',
                    'Content-Type': data instanceof FormData ? 'multipart/form-data' : 'application/json',
                },
                data: data instanceof FormData ? data : JSON.stringify(data),
            };

            const response = await customAxios(config);
            // console.log(response)
            return {
                data: response.data,
                status: response.status,
                statusText: response.statusText,
            };
        } catch (error) {
            if (error.response) {
                // La solicitud fue hecha, pero el servidor respondió con un código de estado que no está en el rango de 2xx
                return {
                    err: true,
                    status: error.response.status || '00',
                    statusText: error.response.statusText || 'Ocurrió un error',
                };
            } else if (error.request) {
                // La solicitud fue hecha, pero no se recibió ninguna respuesta
                return {
                    err: true,
                    status: '00',
                    statusText: 'No se recibió respuesta del servidor',
                };
            } else {
                // Algo sucedió en la configuración de la solicitud que desencadenó un error
                return {
                    err: true,
                    status: '00',
                    statusText: 'Error en la configuración de la solicitud',
                };
            }
        }
    };

    const get = (url, data = null, token = null) => customRequest(url, 'GET', data, token);

    const post = (url, data = null, token = null) => customRequest(url, 'POST', data, token);

    const put = (url, data = null, token = null) => customRequest(url, 'PUT', data, token);

    const patch = (url, data = null, token = null) => customRequest(url, 'PATCH', data, token);

    const del = (url, token = null) => customRequest(url, 'DELETE', null, token);

    return {
        get,
        post,
        put,
        patch,
        del
    };
};
