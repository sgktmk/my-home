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
- ORMを利用する

上記2つの方法について、調べたのでまとめてみます。

## JDBC を利用する

参考：[Java JDBC API - Oracle Docs](https://docs.oracle.com/javase/jp/8/docs/technotes/guides/jdbc/index.html)

略さずに言うと*The Java Database Connectivity*です。
 Javaから利用できるAPIの一種で、JDBCを利用することで、RDBやスプレッドシート等々、あらゆるデータソースにアクセスできるようになります。

JDBCを利用してJavaから特定のDBMSを参照するには、双方を仲介するドライバが必要になります。  

例えば、MySQLをJavaで扱う際には、[MySQLのWebサイト](https://www.mysql.com/products/connector/)から*JDBC Driver for MySQL (Connector/J)*を持ってきます。

![img](blob:https://sgktmk.com/1274dd9b-a538-4099-ae7a-1035ffc92f9f)

ここから先は、[君の眼で確かめて](https://docs.oracle.com/javase/tutorial/jdbc/basics/gettingstarted.html)くれ。

## ORMを利用する

ORMは、[Wikipediaさんによると](https://ja.wikipedia.org/wiki/%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E9%96%A2%E4%BF%82%E3%83%9E%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0)、

> オブジェクト関係マッピング（英: Object-relational mapping、O/RM、ORM）とは、
データベースとオブジェクト指向プログラミング言語の間の非互換なデータを変換するプログラミング技法である。
オブジェクト関連マッピングとも呼ぶ。実際には、オブジェクト指向言語から使える「仮想」オブジェクトデータベースを構築する手法である。
オブジェクト関係マッピングを行うソフトウェアパッケージは商用のものもフリーなものもあるが、場合によっては独自に開発することもある。

ということらしい。

つまり、オブジェクト指向言語であるJavaとRDBMSを相互に、いい感じに変換してくれる仕組みのようです。  
*SQLとかそういう難しいことは考えたくない、君が考えてくれたまえORMくん*、みたいな感じでしょうか。  
ORMくんがオブジェクト指向くんとRDBMSくんの間に入って、橋渡しをしてくれる役割ということ？でしょうか。  
実はよくわかりまてん。

### なぜそんなことをするのか
そもそもの両者の設計思想が違うからです。  
ここでは詳しく~~触れられません~~触れませんが、オブジェクト指向と関係モデルはみんな違ってみんな良いけど、考え方が全然違うから仲裁役にその溝を埋めてもらおうという試みですな。（そうなの？）

### ORMの例
参考：[ORM論](https://qiita.com/akiraabe/items/e422997102ae825f4989)
#### MyBatis
ToDo：後で読む  
[MyBatisのドキュメント](http://www.mybatis.org/mybatis-3/ja/sqlmap-xml.html)
#### Doma
#### JPA
ToDo：後で読む  
[JPAのドキュメント](http://enterprisegeeks.hatenablog.com/entry/2015/02/16/080922)
[その２](https://qiita.com/tkxlab/items/11bd9bd93fc0636ee8e8)
#### Hibernate