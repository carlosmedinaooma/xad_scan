# XAD

### Description
access to the xad search api

### Tech

-  How to install and test it:
```sh
$ rm -rf node_modules
$ npm install
$ node xad.js
```

-  How to deploy:
First you have to install capistrano/npm
gem install capistrano-npm
Then you can continue with the deployment

Now the deployment is pointed to 10.66.12.193 server it will restart the app as cluster of 2
```sh
$ cap staging deploy --trace
```

-  How to start,stop, restart, delete,show logs, flush logs with capistrano:
To start it 
```sh
$ cap staging deploy:start
```

To stop it 
```sh
$ cap staging deploy:stop
```
To restart it 
```sh
$ cap staging deploy:restart
```

To restart it as cluster of 2
```sh
$ cap staging deploy:restart_cluster
```


To delete it 
```sh
$ cap staging deploy:delete
```

To show logs it 
```sh
$ cap staging deploy:show_log
```

To flush logs it 
```sh
$ cap staging deploy:flush_logs
```

To list app it 
```sh
$ cap staging deploy:list

-  Some examples:
http://localhost:8955/xad?keyword=adt&loc=san%20francisco,ca
http://localhost:8955/xad?keyword=adt&loc=77494




