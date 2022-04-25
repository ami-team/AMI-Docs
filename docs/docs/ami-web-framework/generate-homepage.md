# Generate a homepage

## Synopsis

To create a new Homepage, you can use the `--create-home-page` command. You will be prompted for a title and an endpoint
that should host an instance of the AMI Server.

For example :

```bash
./awf.py --create-home-page
```

If you would like to **automate** this process (to use with _Docker_ for example) you can also specify the title and
the endpoint thanks to the `--home-page-title` and `--home-page-endpoint` parameters :

```bash
./awf.py --create-home-page --home-page-title=Home --home-page-endpoint=https://my-ami-backend-url.com
```

By default, when using this command it will generate a homepage with Bootstrap 5, but you can choose which version of
Bootstrap you would like to use by specifying the `--bootstrap-version`.

For example :

```bash
./awf.py --create-home-page --bootstrap-version=4
```

## Command Reference

| Parameter            | Shorthand | Description                              |
| -------------------- | --------- | ---------------------------------------- |
| --create-home-page   |           | Generate a new homepage                  |
| --home-page-title    | -t        | Fill in the title through the CLI        |
| --home-page-endpoint | -p        | Fill in the endpoint URL through the CLI |
| --bootstrap-version  | -v        | Specify the bootstrap version (4/5)      |
| --verbose            |           | Make the command verbose                 |
