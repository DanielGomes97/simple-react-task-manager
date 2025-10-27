# Projeto feito para fins de estudo

Esse projeto foi desenvolvido junto com a fullstack club, com o Felipe Rocha, intuito é aprender o react pra iniciar projeto com next.js

# Instalação/Configuração no projeto

## React + Vite : https://vite.dev/guide/

React com vite para iniciar o projeto.

Install: npm create vite@latest

## Tailwind: https://tailwindcss.com/docs/installation/using-vite

Tailwind é um css pronto para estilizar o site todo.

Install: npm install tailwindcss @tailwindcss/vite

vite.config.ts

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
plugins: [
tailwindcss(),
],
})
=
CSS
@import "tailwindcss";

## Lucide: https://lucide.dev/guide/packages/lucide-react

Obter icones para aplicação.

Install: npm install lucide-react

ex use: return <Camera color="red" size={48} />;

## UUIID : https://www.npmjs.com/package/uuid

Gerador de IDs aleatorio

install: npm install uuid
use: import { v4 } from 'uuid';
v4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

## React Router Dom : https://www.npmjs.com/package/react-router-dom

Consegue criar novas rotas na url ex: site.com/NOVO-CAMINHO...

install: npm install react-router-dom

use: main.jsx:
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskPage from "./pages/TaskPage.jsx";

const router = createBrowserRouter([
{
path: "/",
element: <App />,
},
{
path: "/task",
element: <TaskPage />,
},
]);

createRoot(document.getElementById("root")).render(
<StrictMode>
<RouterProvider router={router} />
</StrictMode>
);
