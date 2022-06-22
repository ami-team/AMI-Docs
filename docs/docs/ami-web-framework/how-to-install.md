# How to install AMI Web Framework

::: warning
If you haven't set up yet a backend server with AMI, you should probably take a look at this documentation.
:::

First, create a new directory that will contain your future project :

```bash
mkdir myproject && cd myproject
```

Then, you will need to get the AMI Setup file, to do this, run :

```bash
curl -L https://raw.githubusercontent.com/ami-team/awfwebpack/master/tools/awf_stub.py > awf.py
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

If you get welcomed by an AMI ascii art, you are **ready** to go !
