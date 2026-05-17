`## webpack [`bundler`]

- npm init -y
- npm webpack webpack-cli --save-dev

- src
  - index.jsx

- dist
  - index.html
    - inside body tag you have to implement `<script src="./main.js"><script/>`

- package.json
  - inside "script"

          "script":{
            "build":"webpack"
          }
