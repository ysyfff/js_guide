js_guide
========
作者
--------
作者：ysyfff(JChen)<br/>
日期：2013-5-23

书
--------
《JavaScript》权威指南<br/>
淘宝前端团队译<br/>
机械工业出版社

章节
--------
ch01------>JS概述<br/>
ch02------>词法结构<br/>
ch03------>类型、值和变量<br/>
ch04------>表达式和运算符<br/>
ch05------>语句<br/>
ch06------>对象<br/>
ch07------>数组<br/>
ch08------>函数<br/>
ch09------>类和模块<br/>

摘要
--------
###ch03: 
    JS的数据类型分为两类：原始数据类型和对象类型。
    原始类型包括：数字、字符串和布尔值。
    两个特殊的原始值：null 和 undefined
    除了那5个就是对象了，其中包括：数组类、函数类、日期类、正则类和错误类。
    
    原始值(undefined、null、布尔值、数字和字符串)是不可改变的；
    对象(数组和函数)是可以改变的。
###ch06:
    对象是动态的－－可以新增属性也可以删除属性－－但是它们常用来模拟静态对象
    以及静类型语言中的“结构体”。有时它们做字符串的集合。
    
    对象的包含属性的特点是：
        可写
        可枚举
        可配置
    除了包含属性，每个对象还拥有三个相关的对象特性：
        对象的原型 (指向另一个对象，本对象的属性继承自它的原型对象)
        对象的类 (标识对象类型的字符串)
        对象的扩展标记 (指明了是否可以向该对象添加新属性)
###ch07:    
    js数组是无类型的：数组元素可以是任意类型，同一个数组中的不同元素
    也可以有不同的类型。数组的元素甚至也可以是对象或者其他数组，这允许
    创建复杂的数据结构，如对象的数据和数组的数组。
###ch08:
    如果函数挂载到一个对象上，作为对象的一个属性，就承他为对象的方法。
    当通过这个对象来调用函数时，该对象就是此次函数调用的上下文，也就是该函数的this的值。
    
    JS的函数可以嵌套在其他函数中定义，这样他们就可以访问他们被定义时所处的作用域中的任何变量。
    这意味着JS函数构成了一个闭包，他给JS带来了强劲的编程能力。
###ch09:
    在JS中，类的实现是基于原型继承机制的。如果两个实例都是从同一个原型对象上继承了属性，
    我们说他们是同一个类的实例。
    构造函数是类的公共标识符，而原型是类的唯一标识符。
    
