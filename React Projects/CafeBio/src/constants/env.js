export const API_URL = "https://us-central1-tapmein-3b357.cloudfunctions.net";

export const LOCAL_URL ="https://localhost:5000/api/v1"
export const ENV = "production";
export const  BASE_URL = ENV === "production" ? API_URL : LOCAL_URL;