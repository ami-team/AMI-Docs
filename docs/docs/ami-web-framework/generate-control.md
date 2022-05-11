# Generate a control

## Synopsis

A control (commonly called a component) is a set of reusable custom elements.
(It's the same concept as the [Web Component](https://developer.mozilla.org/en-US/docs/Web/Web_Components)).

To get started with controls, run the following command in your terminal :

```bash
./awf.py --create-control
```

As for the [subapps](/ami-docs/documentation/getting-started/generate-subapp.html/), you will be prompted for a title,
and the command will automatically generate necessary files for you :

-   Creates a new folder in the controls folder (located in the root of your project). This new folder is named like your control.
-   Inside this new folder, 3 files are generated, a Javascript file and a folder asset containing a CSS file and a TWIG file.
-   Modifies the CONTROLS.json file. (Learn more here)
-   Updates the webpack.config.js file to build the new subapp.

## Command Reference

| Parameter             | Shorthand | Description                                           |
| --------------------- | --------- | ----------------------------------------------------- |
| --create-control      |           | Generate a new control                                |
| --bootstrap-version   | -v        | Specify the bootstrap version for your subapp (4/5)   |
| --source-code-flavour | -f        | Choose the source code flavour (legacy/module/vue-js) |
