# Effect_typewriter
Effect_typewriter for javaScript ES5

### Вы можете скачать  Effect_typewriter Zip архивом.
[![download Effect_typewriter](https://a.radikal.ru/a34/1802/4b/b81ed6707937.gif)](https://github.com/AndreiKaragayr/Effect_typewriter.git)

---

![preview Effect_typewriter](preview.gif "One slide")

***
### Про библиотеку
Эффект печатной машинки для любых слов или предложений.

***
### Как с этим работать:
1) Задать блоку класс `class="kai-typewriter"`
2) Написать в блоке с классом `kai-typewriter` **(без тега)** вводное предложение. Например "Привет".
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
 на,
 ```
 var kaiString = ["Дамы", "Гостода", "Звери"];
 ```
   + слова должны ббыть внутки `[]` скобках, разделены `,` и взяты в кавычки `""`
