
Setup steps:

npm install @optimizely/cms-sdk
npm install -D @optimizely/cms-cli

git submodule add https://github.com/evest/optimizely-cms-typegen.git optimizely-cms-typegen

update submodule package.json -- add script:
    "prepare": "npm run build",

edit package.json -- add devDependency:
	"optimizely-cms-typegen": "file:./optimizely-cms-typegen",

npm install

add .env

pull types from the CMS:
	npx @optimizely/cms-cli config pull --output types.json

scaffolding of types:
	npx optimizely-cms-typegen --input ./types.json --output ./src/cms/content-types.ts --with-registry

update layout.tsx

update page.tsx

run the site
	npm run dev

