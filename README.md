# RN-Tracks

Aplicación de prueba desarrollada en React Native haciendo uso de las siguientes librerías:

-react-navigation (para la navegación)
-react-native-async-storage (para la persistencia)
-axios (para las request usando su interceptor ya que también usamos JWT)
-JWT (en el backend)
-expo-location (para acceder a la API de localización del dispositivo)
-rneui (react-native-elements para algunos componentes ya estilados)
-react-native-safe-area-context (para dejar los espacios necesarios en las pantallas de los dispositivos)

La aplicación es capaz de marcar el recorrido realizado por el usuario y guardarlo (las pruebas han sido realizadas con un mock, pero sería cuestión de levantar el backend). Lo que estaría faltando es poder visualizar los distintos recorridos ya guardados en base de datos, característica que implementaré en algún futuro.
