import { useEffect, useState } from 'react';

const useServiceInventory = (serviceId) => {
    const [service, setService] = useState();

    useEffect(() => {
        fetch(`services.json`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId]);

    return [service];
};

export default useServiceInventory;