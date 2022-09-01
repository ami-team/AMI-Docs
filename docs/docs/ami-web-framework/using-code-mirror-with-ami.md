# Using Code Mirror with AMI

By default AMI ships with [Code Mirror 6](https://codemirror.net/) integrated in it's core, this allows you to quickly create code instances in
your application.

## Create a new code editor

In order to create a new code editor on your web page you simply have to create a new textarea with a special class called "form-editor".

AMI will transform all textarea with this class to CodeMirror editors.

Basic example :

```html
<textarea class="form-editor"></textarea>
```

## Attributes Reference

| Attribute             | Description                                           |
| --------------------- | ----------------------------------------------------- |
| data-lang             | Specify the language used in your editor              |
| --bootstrap-version   | Specify the bootstrap version for your subapp (4/5)   |
| --source-code-flavour | Choose the source code flavour (legacy/module/vue-js) |
