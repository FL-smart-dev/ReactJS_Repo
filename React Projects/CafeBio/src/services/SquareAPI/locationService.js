export async function fetchSquareLocations(accessToken) {
    if (!accessToken) {
        console.error('Access token is required.');
        return null;
    }

    // Check if data is cached in session storage
    const cachedData = sessionStorage.getItem(accessToken);
    if (cachedData) {
        return JSON.parse(cachedData);
    }

    try {
        const response = await fetch('https://us-central1-tapmein-3b357.cloudfunctions.net/squareGetLocationsProxy?accessToken=' + encodeURIComponent(accessToken), {
            method: 'GET', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Cache the fetched data in session storage
        sessionStorage.setItem(accessToken, JSON.stringify(data.locations));

        return data.locations;
    } catch (error) {
        console.error('Error fetching Square locations:', error);
        return null;
    }
}
