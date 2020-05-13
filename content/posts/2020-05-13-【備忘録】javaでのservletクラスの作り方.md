---
template: post
title: 【備忘録】JavaでのServletクラスの作り方
slug: java-create-servlet-class
draft: true
date: 2020-05-13T06:54:50.310Z
description: JavaでServletクラスどうすんだっけってのをまとめました。
category: programming
tags:
  - java
  - servlet
---
# 新規クラスを作成する

任意の名前で作成して。

```java
package com.db.java;

public class ManGenerater {
}
```

# `HttpServlet`を継承させる

```java
package com.db.java;

import javax.servlet.http.HttpServlet;

public class ManGenerater extends HttpServlet {
}
```

# `doHoge`メソッドを作る

```java
package com.db.java;

import javax.servlet.http.HttpServlet;

public class ManGenerater extends HttpServlet {
	protected void doPost() {
		
	}
}
```

# 引数を設定する

何も考えずに`HttpServletRequest request`と`HttpServletResponse response`を引数にしよう。

```java
package com.db.java;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ManGenerater extends HttpServlet {
	protected void doPost(
                          HttpServletRequest request,
                          HttpServletResponse response
                          ) {
		
	}
}
```

# 例外を投げる
何も考えずに`ServletException`と`IOException`を投げよう。

```java
package com.db.java;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ManGenerater extends HttpServlet {
	protected void doPost(
                          HttpServletRequest request,
                          HttpServletResponse response
                          )
                          throws
				ServletException,
				IOException
        {  
		
	}
}
```

# アノテーションを付ける

```java
package com.db.java;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/ManGenerater")
public class ManGenerater extends HttpServlet {
	protected void doPost(
							HttpServletRequest request,
							HttpServletResponse response
						)
						throws
							ServletException,
							IOException
	{
		
	}
}
```

# 文字コードを`UTF-8`に設定する

```java
package com.db.java;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/ManGenerater")
public class ManGenerater extends HttpServlet {
	protected void doPost(
							HttpServletRequest request,
							HttpServletResponse response
						)
						throws
							ServletException,
							IOException
	{
		request.setCharacterEncoding("UTF-8");

	}
}
```

# 受け取るパラメータを書く

```java
package com.db.java;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/ManGenerater")
public class ManGenerater extends HttpServlet {
	protected void doPost(
							HttpServletRequest request,
							HttpServletResponse response
						)
						throws
							ServletException,
							IOException
	{
		request.setCharacterEncoding("UTF-8");
		String name = request.getParameter("name");
		String age = request.getParameter("age");

	}
}
```

# Attributeにセットする

```java
package com.db.java;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/ManGenerater")
public class ManGenerater extends HttpServlet {
	protected void doPost(
							HttpServletRequest request,
							HttpServletResponse response
						)
						throws
							ServletException,
							IOException
	{
		request.setCharacterEncoding("UTF-8");
		String name = request.getParameter("name");
		String age = request.getParameter("age");

		request.setAttribute("name", name);
		request.setAttribute("age", age);
	}
}
```

# `RequestDispatcher`に渡す

```java
package com.db.java;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/ManGenerater")
public class ManGenerater extends HttpServlet {
	protected void doPost(
							HttpServletRequest request,
							HttpServletResponse response
						)
						throws
							ServletException,
							IOException
	{
		request.setCharacterEncoding("UTF-8");
		String name = request.getParameter("name");
		String age = request.getParameter("age");

		request.setAttribute("name", name);
		request.setAttribute("age", age);

		RequestDispatcher rd = request.getRequestDispatcher("output.jsp");
		rd.forward(request, response);

	}
}
```

# おしまい。
おしまい。
