# Lerna
- monorepo를 관리하기에 용이한 tool.

## Install

```bash
yarn add -D lerna --ignore-workspace-root-check # -W 옵션으로 대체가능.
```

## Commands

```bash
npx lerna init
yarn lerna clean
yarn lerna bootstrap --hoist

# packages의 package들에 해당하는 명렁어를 한꺼번에 실행.
yarn lerna run start
yarn lerna run test

# packages의 package들 name에 해당하는 명령어 실행.
yarn lerna run start --scope=@jangbuda-front/manager
yarn lerna run start --socpe=@jangbuda-front/member

# packages의 package들 name 목록에 해당하는 명령어 실행.
yarn lerna run start --socpe={@jangbuda-front/manager,@jangbuda-front/member}

yarn lerna diff
```


## Structure
```
 * Monorepo
│
│
│  .gitignore
│  lerna.json
│  package.json
│  README.md
│  yarn.lock
│
└─packages
    │  babel.config.json
    │  snowpack.config.js
    │
    ├─common
    │  │  .babelrc
    │  │  package.json
    │  │  snowpack.config.js
    │  │  tsconfig.json
    │  │
    │  └─src
    │      │  index.tsx
    │      │
    │      ├─components
    │      │      CommonApp.tsx
    │      │      index.tsx
    │      │
    │      └─utils
    │              index.ts
    │
    ├─manager
    │  │  package.json
    │  │  snowpack.config.js
    │  │  tsconfig.json
    │  │  yarn-error.log
    │  │
    │  ├─public
    │  │      index.html
    │  │
    │  └─src
    │          App.tsx
    │          index.tsx
    │
    ├─member
    │  │  package.json
    │  │  snowpack.config.js
    │  │  tsconfig.json
    │  │
    │  ├─public
    │  │      index.html
    │  │
    │  └─src
    │          App.tsx
    │          index.tsx
    │
    └─_root
        │  package.json
        │  snowpack.config.js
        │  tsconfig.json
        │  yarn-error.log
        │
        ├─public
        │      index.html
        │
        └─src
                index.tsx
```

## Refs
- https://www.youtube.com/watch?v=j0FiMekdeOs
- https://www.youtube.com/watch?v=p6qoJ4apCjA
