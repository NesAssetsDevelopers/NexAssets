# NexAssets

NexAssets es una plataforma innovadora que permite la tokenización de bienes raíces comerciales y propiedades de lujo, ofreciendo a los inversores la oportunidad de poseer fracciones de activos físicos a través de la tecnología blockchain. Combinamos tecnología descentralizada con mercados de inversión inmobiliaria para democratizar el acceso a activos premium, asegurando liquidez, transparencia y rentabilidad a nivel global.

## Tabla de Contenidos

- [Visión General](#visión-general)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
  - [Prerrequisitos](#prerrequisitos)
  - [Instrucciones de Instalación](#instrucciones-de-instalación)
- [Uso](#uso)
  - [Despliegue de Smart Contracts](#despliegue-de-smart-contracts)
  - [Ejecución de Pruebas](#ejecución-de-pruebas)
  - [Inicio del Backend](#inicio-del-backend)
  - [Inicio del Frontend](#inicio-del-frontend)
- [Contribución](#contribución)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Visión General

NexAssets revoluciona la inversión en bienes raíces al permitir la tokenización de propiedades premium como hoteles, edificios de oficinas, centros comerciales y casas de lujo. Cada activo se divide en tokens que representan su propiedad, y los inversores pueden comprar, vender o intercambiar estos tokens en la plataforma.

## Características

- **Tokenización de Activos Inmobiliarios**: Selección y registro de propiedades premium.
- **Mercado Descentralizado**: Plataforma para adquirir fracciones de activos inmobiliarios tokenizados.
- **Generación de Rendimientos**: Ingresos pasivos a través de dividendos de alquiler y ganancias de capital.
- **Tecnología y Seguridad**: Uso de blockchain y smart contracts auditados.
- **Cumplimiento Regulatorio**: Cumplimiento con regulaciones de identificación y estándares de tokens de valores.
- **Gobernanza y Comunidad**: Modelo DAO para la toma de decisiones clave.

## Tecnologías Utilizadas

- **Blockchain**: Ethereum, Polygon, Cosmos
- **Smart Contracts**: Solidity
- **Backend**: Node.js, Express
- **Frontend**: React
- **Pruebas**: Mocha, Chai
- **Despliegue**: Hardhat

## Instalación

### Prerrequisitos

- Node.js
- npm o yarn
- Hardhat

### Instrucciones de Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/your-repo/NexAssets.git
    cd NexAssets
    ```

2. Instala las dependencias:
    ```sh
    npm install
    ```

3. Compila los smart contracts:
    ```sh
    npx hardhat compile
    ```

4. Despliega los smart contracts:
    ```sh
    npx hardhat run scripts/deploy.js --network localhost
    ```

5. Ejecuta las pruebas:
    ```sh
    npx hardhat test
    ```

6. Inicia el servidor backend:
    ```sh
    node backend/server.js
    ```

7. Inicia el servidor de desarrollo frontend:
    ```sh
    cd frontend
    npm start
    ```

## Uso

### Despliegue de Smart Contracts

Para desplegar los smart contracts en una red de prueba como Rinkeby o Ropsten, ejecuta:
```sh
npx hardhat run scripts/deploy.js --network rinkeby
