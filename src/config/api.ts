// Configuración de API para Chatbots
export const API_CONFIG = {
  // URL principal de tu API
  primary: "http://zaylar.com:12506/agent",
  
  // URLs de respaldo (se prueban en orden)
  fallbacks: [
    "https://zaylar.com:12506/agent",
    "http://localhost:12506/agent",
    "http://127.0.0.1:12506/agent"
  ],
  
  // Tiempo de espera en milisegundos
  timeout: 10000,
  
  // Usar simulación si todas las APIs fallan
  useSimulationOnFailure: true,
  
  // Configuración de headers
  headers: {
    "Content-Type": "application/json",
    "Accept": "text/event-stream"
  }
};

// Función para actualizar la URL principal
export const updatePrimaryAPI = (newUrl: string) => {
  API_CONFIG.primary = newUrl;
  console.log(`API principal actualizada a: ${newUrl}`);
};

// Función para agregar URLs de respaldo
export const addFallbackAPI = (url: string) => {
  if (!API_CONFIG.fallbacks.includes(url)) {
    API_CONFIG.fallbacks.push(url);
    console.log(`API de respaldo agregada: ${url}`);
  }
};

// Función para probar conectividad
export const testAPIEndpoint = async (url: string): Promise<boolean> => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const response = await fetch(url, {
      method: "POST",
      headers: API_CONFIG.headers,
      body: JSON.stringify({ prompt: "test connectivity" }),
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    return response.ok;
  } catch (error) {
    console.error(`Error testing ${url}:`, error);
    return false;
  }
};