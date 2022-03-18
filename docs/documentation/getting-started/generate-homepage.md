# Generate an homepage

To create a new Homepage, you can use the `--create-home-page` command. You will be prompted for a title and also an endpoint that should host an instance of the AMI Server.

You can also choose which version of Bootstrap you would like to use by specifying the `--bootstrap-version`. (If not specified, Bootstrap 5 will be used).

For example :
```bash
./awf.py --create-home-page --bootstrap-version=4
```

If you would like to **automate** this process (to use with _Docker_ for example) you can also specify the title and the endpoint thanks to the `--home-page-title` and `--home-page-endpoint` parameters :
```bash
./awf.py --create-home-page --home-page-title=Home --home-page-endpoint=https://my-ami-url.com
```

## Command Reference
| Parameter            | Shorthand | Description                                      |
|----------------------|-----------|--------------------------------------------------|
| --create-home-page   |           | Generate a new homepage                          |
| --home-page-title    | -t        | Give a title to the homepage through the CLI     |
| --home-page-endpoint | -p        | Give an endpoint to the homepage through the CLI |
| --bootstrap-version  | -v        | Specify the bootstrap version (4/5)              |
| --verbose            |           | Make the command verbose                         |