import dotenv from "dotenv";

dotenv.config();

interface Config {
  authRequired: boolean;
  auth0Logout: boolean;
  baseURL: string;
  secret: string;
  clientID: string;
  issuerBaseURL: string;
}

const config: Config = {
  authRequired: false, // Allow public routes
  auth0Logout: true, // Use Auth0 logout endpoint
  baseURL: process.env.BASE_URL || "http://localhost:4000",
  secret: process.env.SECRET || "",
  clientID: process.env.CLIENT_ID || "",
  issuerBaseURL: process.env.ISSUER_BASE_URL || "",
};

export default config;
