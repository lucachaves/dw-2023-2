# Instalação do JSON-Server

Criar o arquivo `package.json`:

```json
{}
```

Criar o arquivo `db.json`:

```json
{
  "posts": [
    {
      "id": 1,
      "title": "json-server",
      "author": "typicode"
    }
  ],
  "comments": [
    {
      "id": 1,
      "body": "some comment",
      "postId": 1
    }
  ],
  "profile": {
    "name": "typicode"
  }
}
```

Instalar o pacote do json-server:

```bash
$ npm install json-server
```

Executar o json-server:

```bash
$ npx json-server --watch db.json

  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:3000/posts
  http://localhost:3000/comments
  http://localhost:3000/profile

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
  Watching...
```

Acesse os posts por meio da URL http://localhost:3000/posts.
