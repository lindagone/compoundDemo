### CompoundJS Demo###

# compound的介绍
我们寻找一个full stack的nodejs web开发框架，从compoundjs, towerjs, yeoman.io, express, geddy等中挑出一个相对来说还可以用的，就只有compoundjs了。

compound使用express做web端，jugglingdb做orm的adapter，juggling-mysql,juggling-mongodb,juggling-redis做核心处理的数据库端。

目前前端采用的是backbone+bootstrap+purchase template构成，与后端交互完全使用json传送数据方式，与resthub相比，我们同样希望达到以下目标：

 - restful的api
 - 数据库存储有ormapping，实际上，我们可以同时访问多个数据库实例
 - cas 集成
 - redis session storage
 - easy cluster
 - 安全机制，角色权限
 - etc....

##后期目标

由于nodejs的快速开发特性，我们可以方便融入对zeromq,thrift,redis等多种功能的支持，后期将用这些手段搭建一个或者多个平台级应用。

linda's home test