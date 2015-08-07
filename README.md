# Xad Scanner

### Description
access to the xad search api

### Tech

-  How to install and test it:
```sh
$ rm -rf node_modules
$ npm install
$ node xad.js
```

-  How to use it:
Search by an specific Zipcode:
```sh
$ node xad.js adt 77494
```

Search by an specific State:
```sh
$ node xad.js adt CA
```

Search by an specific city and State:
```sh
$ node xad.js adt Houston TX
```

Search by all States:
```sh
$ node xad.js adt all
```

Send the results to a file
```sh
$ node xad.js "T Mobile" all > result.file
```

```sh
$ node xad.js adt Houston TX > result.file
```