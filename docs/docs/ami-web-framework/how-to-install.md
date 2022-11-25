# Bootstraping a project

## Setting up the utilitary

::: warning
If you haven't set up yet a backend server with AMI, you should probably [start here]().

Note that you can also use our [All in One starter with Docker](), which might be easier and faster !
:::

First, create a new directory that will contain your future project :

```bash
mkdir myproject && cd myproject
```

Then, you will need to get the AMI Setup file, to do this, run :

```bash
curl -L https://raw.githubusercontent.com/ami-team/AMIWebFramework/master/tools/awf_stub.py > awf.py
```

This curl command should download for you a little script that will help you with the generation of your application.

::: tip Information
Depending on your system, it may be necessary to grant more rights to the script you just downloaded. To do this you can run the following command:

```bash
chmod +x awf.py
```

:::

Now you should be able to run the script by running this command in your terminal.

```bash
python ./awf.py
```

(On UNIX system you can just do ./awf.py)

If you get welcomed by an AMI ascii art, you are now **ready** to create your project ! :tada:

## Creating the project

Now that you have setup our utility, you can bootstrap your project by typing the following command

```bash
python ./awf.py --update-prod
```

This command will download the last update of the AMI Web Framework (note that Git should be installed) and create the necessary files and folders in your project.

Once this command is finished you should have the following file structure :

```
ami-sample
│── awf.py
│── favicon.ico
│── package.json
│── webpack.config.js
└───controls
│   │── Accordion
│   │── Bookmark
│   │── ...
└───subapps
│   │── ResetPassword
│   │── TaskMonitoring
│   │── ...
│── twig
│── docs
│── js
```

Your project now have 5 folders :

-   **controls** : This folder contains default controls (components) created by the AMI Team, but you can also create your own controls, [more information here](./generate-control.md)
-   **subapps** : This folder contains default subapps, a _route_ corresponding to the name of the file is automatically created, [find more here](./generate-control.md)
-   **twig** : Contains default files for AMI, themes, lockers..
-   **docs** : This folder contains default web pages, for example 404 page..
-   **js** : Commonly called _dist_ or _build_, this folder will contains your minified and transpiled files.

Now that your project is generated, you just need to create an homepage with the following command, more on that subject in the [next section](./generate-homepage.md)

```bash
./awf.py --create-home-page
```

This will create an index.html file and fill it with your values.

You can then start your application with the following command :

```bash
python awf.py --run
```

This should automatically create a web server and open a webpage on **http://localhost:8000/**.

If you correctly configured the endpoint of your AMI Server, you should see your new homepage, otherwise you might see a toast alert saying "resource temporarily unreachable".

If that's the case you can head to the documentation of the [AMI Server](../ami-server/README.md) to learn how to set it up.

::: tip Information
Note that you can modify the endpoint whenever you want by going in the index.html file and by modifying the **endpoint_url** in the options of the _amiWebApp.start_ function.
:::
