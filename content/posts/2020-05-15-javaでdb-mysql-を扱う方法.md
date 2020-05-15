---
template: post
title: JavaでDB(MySQL)を扱う方法
slug: 2020/05/15/java-mysql
draft: true
date: 2020-05-15T06:51:35.617Z
description: JavaでDB(MySQL)を扱う方法を調べたので、まとめてみました。
category: programming
tags:
  - java
  - mysql
---
# JavaでDBを扱いたいんだけど。できないの？？

お客様、落ち着いてください。ちゃんと扱えますので。  
以下2つの方法があります。

- JDBCを利用する
- ORM利用する

上記2つの方法について、調べたのでまとめてみます。

## JDBCを利用する。

出展：[Java JDBC API - Oracle Docs](https://docs.oracle.com/javase/jp/8/docs/technotes/guides/jdbc/index.html)

略さずに言うと*The Java Database Connectivity*です。  
Javaから利用できるAPIの一種で、JDBCを利用することで、RDBやスプレッドシート等々、あらゆるデータソースにアクセスできるようになります。

JDBCを利用してJavaから特定のDBMSを参照するには、双方を仲介するドライバが必要になります。  
