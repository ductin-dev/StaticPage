# BE-ServerModule

Client: ReactJS

**Development Step**
+ Edit local config and enviroment 
variable (database, server..) at ./src/env.config.json
+ Install yarn npm i -g yarn
+ Run development enviroment
```
$ yarn install
$ yarn start
```
======================================
* Reslove error if have in first step:
+ Delete package-lock.json and node_modules
+ Re-install above steps

**Install new packages and reslove dependencies**
```
$ yarn add <package_name>
```
* Fix conflict in yarn.lock (if have)

- For update specific version use:
```
$ yarn upgrade <package_name> --latest
```

**Run the module on VM**
```
$ npm run build
```
- Above command will use in target deployment tool