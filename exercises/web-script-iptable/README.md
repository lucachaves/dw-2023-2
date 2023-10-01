# Host App

Configuração do projeto Vite com Bootstrap:

```
$ npm create vite@latest host-app -- --template vanilla
$ cd host-app
$ npm install bootstrap
$ npm run dev
```

Remover os arquivos desnecessários.

```
$ rm counter.js javascript.svg main.js public/vite.svg style.css
```

Ativar o bootstrap no arquivo `/js/main.js`:

```js
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
```

e no arquivo `/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Host App</title>
  </head>
  <body>
    <div id="app">
      <h1 class="text-center">IP Table</h1>
    </div>
    <script type="module" src="/js/main.js"></script>
  </body>
</html>
```
