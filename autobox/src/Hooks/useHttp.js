// import { useEffect, useState } from "react";

// const useHttp = (databaseLink, propertyObject) => {
//     const [loader, setLoader] = useState(false);
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoader(true);
//             try {
//                 const options = {
//                     method: propertyObject.method,
//                     headers: propertyObject.headers || {},
//                     mode: propertyObject.mode || "cors",
//                     credentials: propertyObject.credentials || "same-origin",
//                     cache: propertyObject.cache || "default",
//                 };

//                 if (propertyObject.method !== 'GET' && propertyObject.method !== 'HEAD') {
//                     options.body = propertyObject.body || "";
//                 }

//                 const response = await fetch(databaseLink, options);

//                 if (!response.ok) {
//                     throw new Error(response.statusText || 'Unknown error occurred');
//                 }

//                 const data = await response.json();
//                 setData(data);
//             } catch (error) {
//                 setError(error.message);
//             } finally {
//                 setLoader(false);
//             }
//         };

//         fetchData();
//     }, []);

//     return { data, loader, error };
// };

// export default useHttp;

import { useEffect, useState } from "react";
import { auth, signInAnonymouslyHandler} from "../Auth/firebaseConfig";

const useHttp = (databaseLink, propertyObject) => {
    const [loader, setLoader] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoader(true);
            try {
                let token = null;

                // Проверяем, есть ли текущий пользователь
                if (auth.currentUser) {
                    token = await auth.currentUser.getIdToken();
                } else {
                    // Если нет, выполняем анонимную авторизацию
                    token = await signInAnonymouslyHandler();
                }

                const options = {
                    method: propertyObject.method,
                    headers: {
                        ...propertyObject.headers,
                        Authorization: `Bearer ${token}`, // Добавляем токен в заголовок
                    },
                    mode: propertyObject.mode || "cors",
                    credentials: propertyObject.credentials || "same-origin",
                    cache: propertyObject.cache || "default",
                };

                if (propertyObject.method !== 'GET' && propertyObject.method !== 'HEAD') {
                    options.body = propertyObject.body || "";
                }

                const response = await fetch(databaseLink, options);

                if (!response.ok) {
                    throw new Error(response.statusText || 'Unknown error occurred');
                }

                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoader(false);
            }
        };

        fetchData();
    }, [databaseLink, propertyObject]);

    return { data, loader, error };
};

export default useHttp;
