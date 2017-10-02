# Scream Machine

> Scream at your machine!

## Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)
    1. [Node Server](#node-server)
    1. [HTTPS](#https)
    1. [PostgreSQL](#postgresql)
    1. [Installing Dependencies](#installing-dependencies)

## Requirements

- Node 6.10.^
- Postgresql 9.1.x
- React
- Webpack

## Development

### Node Server

This project requires an environment running Node Js 6.10 or higher in order to successfully run project project dependencies.

This project has been tested in an environment running the Ubuntu 16.04, Node 6.10, and PostgreSQL 9.5.8.
To access the application, Node requires access to port 3000 and pSQL to port 5432 respectively. You may have to
configure your firewall in order to allow access to these ports.

If you are using an environment such as AWS, you will need to configure the ufw to allow these ports.

### HTTPS

Due to security concerns, the p5 library requires data to be handled by a secure origin, i.e. transfer over a
secure protocol (https).

There are a few ways to accomplish this but we recommend running an NGINX webserver in order to serve as a
reverse proxy to seamlessly handle requests from port 80 and port 443 and forward them to port 3000.
You may want to view additional documentation:

Getting started with nginx:
https://www.nginx.com/blog/setting-up-nginx/

Installing certbot on Ubuntu 16.04: https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04

After this, you may install a self-signed SSL certificate or a certificate from another Certificate Authority (CA).
We recommend using a certificate issues by www.letsencrypt.com and allowing the automated Certbot tool to configure
your NGINX server. NOTE: letsencrypt.com will not issue certificates for certain domains (ie. example.aws.com)
for security reasons. In this case, you will need to purchase a domain name that you have control over.

You may also choose to use a different web server such as Apache, or configure your certificate directly using node.
Depending on your deployment platform, there may be easier ways to issue a certificate.

### PostgreSQL

[PostgreSQL Installation for Ubuntu](https://help.ubuntu.com/community/PostgreSQL)
* Useful for deploying on AWS
* Only used sections titled, "Installation" and "Basic Server Setup"
```
sudo apt-get install postgresql
// install PostgreSQL as root/admin

sudo -u postgres psql postgres
//launch PostgreSQL as user postgres

\password postgres
// Set a password for user postgres

sudo -u postgres createdb screams
// Create a database called screams to hold our tables

sudo -u postgres psql < ./ScreamMachine/server/db/pgschema.sql
// -> run pgschema.sql
```

### Installing Dependencies

From within the root directory:

```sh
npm install
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
