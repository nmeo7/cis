I don't have any particular love for web. It's just that there is a huge need that no one else is solving. It's not about cool technology, but the unmet demand. We don't need bleeding edge tech just for the sake of it - we need to solve problems.

Never under any circumstances do react native, angular or flutter, and don't do docker and kubernetes any time soon.

install my ui library
npm link ./path/to/my/app/node_modules/react


# PWA:
npx create-react-app my-app --template cra-template-pwa
then change registration inside src/index.js: change _unregister_ to _register_.


# using firebase:

firebase cli:
npm install firebase-tools -g
firebase login|init|emulators:start|deploy|etc


# misc

you may just want to use only context instead of redux

make sure there is some kind of loading before the main content shows:
https://stackoverflow.com/questions/40987309/react-display-loading-screen-while-dom-is-rendering


make sure to separate UI from logic
make sure each component does exactly one thing

array.sort ((a,b) => a.key < b.key)


# to build:

npm run build
npm install -g serve
serve -s build or npx serve -s build