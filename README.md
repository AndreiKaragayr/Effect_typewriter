# Effect_typewriter
Effect_typewriter for javaScript ES5

### Вы можете скачать  Effect_typewriter Zip архивом.
[![download Effect_typewriter](https://a.radikal.ru/a34/1802/4b/b81ed6707937.gif)](https://github.com/AndreiKaragayr/Effect_typewriter.git)

---
[![view Effect_typewriter](http://b.radikal.ru/b15/1802/8b/dded7f7e1100.gif
)]()

![preview Effect_typewriter](![(https://a.radikal.ru/a34/1802/4b/b81ed6707937.gif)] "typewriter")

***
### Про библиотеку
Эффект печатной машинки для любых слов или предложений.

***
### Как с этим работать:
1) Задать блоку класс `class="kai-typewriter"`
2) Написать в блоке с классом `kai-typewriter` введное предложение. Например "Привет" **(без тега)**
3) Подключить стили:
```
<link rel="stylesheet" href="css/kai-typewriter.css">
```
файл css должен быть в директории css/ (или любая ваша)
4) Подключить Скрипт:
```
<script src="js/kai-typewriter.js"></script>
```
файл js должен быть в директории js/ (или любая ваша)
5) **Как поменять слова ?**
 - В файле kai-typewriter.js
 - меняем слова в массиве `kaiString`
 ```
 var kaiString = ["game?", "website?", "app for Android?","app for IOS?", "something amazing ;)"]
 ```
   + слова должны ббыть внутки `[]` скобках, разделены `,` и взяты в кавычки `""`
