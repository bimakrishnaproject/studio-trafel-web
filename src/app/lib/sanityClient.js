// sanityClient.js
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "auihjk0g", // Ganti dengan ID project Sanity kamu
  dataset: "production", // Ganti dengan dataset kamu, misalnya 'production'
  useCdn: false, // Gunakan CDN untuk response yang lebih cepat
  apiVersion: "2024-10-10", // Versi API yang akan digunakan
});

export default client;
