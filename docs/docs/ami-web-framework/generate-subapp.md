# Generate a subapp

## Synopsis

A subapp represents a page of your website. A subapp is often composed of different
[controls](/ami-docs/documentation/getting-started/generate-control.html/) (_web components_) embeded in a single page.

When you create a new subapp, the router will automatically take care of creating the corresponding route.
For example, if you create a subapp called "MyApp", you can access it at : `https://yourdomain.com/?subapp=MyApp`.

To get started with subapps, you can run the following command in your favorite terminal :

```bash
./awf.py --create-subapp
```

You will then be prompted to enter a title.

This command does the following :

-   Creates a new folder in the subapp folder (located in the root of your project). This new folder is named like your subapp.
-   Inside this new folder, 3 files are generated, a Javascript file and a folder asset containing a CSS file and a TWIG file.
-   Modifies the SUBAPPS.json file. (Learn more here)
-   Updates the webpack.config.js file to build the new subapp.

## Command Reference

| Parameter             | Shorthand | Description                                           |
| --------------------- | --------- | ----------------------------------------------------- |
| --create-subapp       |           | Generate a new subapp                                 |
| --bootstrap-version   | -v        | Specify the bootstrap version for your subapp (4/5)   |
| --source-code-flavour | -f        | Choose the source code flavour (legacy/module/vue-js) |
