# Getting started

## How to install AMI Web Framework

First, create a new directory that will contain your future project : 
```bash
mkdir myproject && cd myproject
```

Then, we will need to get the AMI Setup file, to do this, run : 
```bash
curl -L https://raw.githubusercontent.com/ami-team/awfwebpack/tools/awf_stub.py > awf.py
```
This curl command should download for you a little script that will help us with the generation of your application.

::: tip Information
Depending on your system, it may be necessary to grant more rights to the script you just downloaded. To do this you can run the following command:
```bash
chmod +x awf.py
```
:::
The second command is making sure you have the correct right to execute the script.

Now you should be able to run the script by running this command in your terminal.
```bash
./awf.py
```

If you get welcomed by an AMI ascii art, you are ready to go !

## Generate an homepage

```bash
./awf.py --create-home-page
```