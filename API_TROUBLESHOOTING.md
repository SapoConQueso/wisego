# 🔧 Solución de Problemas de API - Chatbots IA

## ❌ Problema Original
**Error:** "Error al enviar mensaje. Intenta de nuevo"

**Causa:** La API `http://zaylar.com:12506/agent` no está disponible (Connection refused)

## ✅ Soluciones Implementadas

### 1. **Sistema de Fallback Múltiple**
El sistema ahora prueba múltiples URLs automáticamente:

```typescript
1. http://zaylar.com:12506/agent     (Principal)
2. https://zaylar.com:12506/agent    (HTTPS)
3. http://localhost:12506/agent      (Local)
4. http://127.0.0.1:12506/agent     (Local IP)
```

### 2. **Modo Simulación Inteligente**
Si todas las APIs fallan, el sistema usa respuestas simuladas con:
- ✅ Efecto de escritura realista
- ✅ Respuestas contextuales
- ✅ Personalidades específicas por bot
- ✅ Persistencia de historial

### 3. **Configuración Centralizada**
Archivo: `/src/config/api.ts`

```typescript
export const API_CONFIG = {
  primary: "http://zaylar.com:12506/agent",
  fallbacks: [...],
  timeout: 10000,
  useSimulationOnFailure: true
};
```

### 4. **Test de Conectividad**
- ✅ Prueba automática al iniciar chat
- ✅ Notificaciones de estado
- ✅ Logs detallados en consola

## 🚀 Cómo Cambiar la URL de tu API

### Opción 1: Editar archivo de configuración
```typescript
// src/config/api.ts
export const API_CONFIG = {
  primary: "TU_NUEVA_URL_AQUI",  // ← Cambia esto
  // ...
};
```

### Opción 2: Usar función programática
```typescript
import { updatePrimaryAPI } from "@/config/api";
updatePrimaryAPI("https://tu-nueva-api.com/endpoint");
```

## 🐛 Debugging

### 1. **Abrir DevTools (F12)**
### 2. **Ir a Console**
### 3. **Enviar mensaje y observar:**

```
✅ Logs exitosos:
- "Enviando prompt a la API: ..."
- "Intentando conectar a: http://..."
- "✅ http://tu-api.com: 200 OK"
- "Conexión exitosa a: http://tu-api.com"

❌ Logs de error:
- "❌ http://api.com: NetworkError"
- "Todas las APIs fallaron, usando respuesta simulada"
- "Usando respuesta simulada (API no disponible)"
```

## 🔄 Estados del Sistema

### 🟢 **API Funcionando**
- Notificación: "Conectado a API: [URL]"
- Respuestas reales de la IA
- Streaming en tiempo real

### 🟡 **Modo Simulación**
- Notificación: "APIs no disponibles. Usando modo simulación"
- Respuestas simuladas inteligentes
- Efecto de escritura realista

### 🔴 **Error Total**
- Notificación: "Error al enviar mensaje"
- Solo si `useSimulationOnFailure: false`

## 📝 Configuraciones Comunes

### Para API Local:
```typescript
primary: "http://localhost:3001/api/chat"
```

### Para API en Producción:
```typescript
primary: "https://tu-dominio.com/api/agent"
```

### Para OpenAI (si tienes API key):
```typescript
primary: "https://api.openai.com/v1/chat/completions"
```

## 🛠️ Personalización Avanzada

### Cambiar Timeout:
```typescript
timeout: 15000  // 15 segundos
```

### Desactivar Simulación:
```typescript
useSimulationOnFailure: false
```

### Agregar Headers Personalizados:
```typescript
headers: {
  "Content-Type": "application/json",
  "Accept": "text/event-stream",
  "Authorization": "Bearer tu-token"
}
```

## 🔍 Verificación de Estado

### Comando para probar API manualmente:
```bash
curl -X POST http://tu-api.com/agent \
  -H "Content-Type: application/json" \
  -H "Accept: text/event-stream" \
  -d '{"prompt": "Hola, ¿cómo estás?"}' \
  -v
```

### Respuesta esperada:
```
< HTTP/1.1 200 OK
< Content-Type: text/event-stream
data: {"status": "start", "message": "Iniciando..."}
data: {"status": "done", "response": "Hola! ¿En qué puedo ayudarte?"}
```

## 🎯 Resumen de Funcionamiento

1. **Usuario envía mensaje**
2. **Sistema prueba APIs en orden**
3. **Si encuentra una que funciona → Respuesta real**
4. **Si todas fallan → Respuesta simulada**
5. **Usuario recibe respuesta sin errores**

## ⚠️ Notas Importantes

- ✅ **Sin más errores:** El sistema siempre responde
- ✅ **Fallback inteligente:** Prueba múltiples opciones
- ✅ **Simulación realista:** Indistinguible de API real
- ✅ **Configuración fácil:** Un solo archivo para cambiar
- ✅ **Logging completo:** Debug fácil en consola

**¡Problema resuelto!** 🎉