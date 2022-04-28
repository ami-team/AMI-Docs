# Introduction

**AMI** which stands for **A**TLAS **M**etadata **I**nterface is a lightweight Javascript frontend library, designed to help
developers create user interfaces easily.

Originally developed for the ATLAS experiment at the CERN Large Hadron Collider
(LHC), ATLAS Metadata Interface (**AMI**) is a generic ecosystem for metadata aggregation,
transformation and database storing. Benefiting from about 20 years of feedback, it
provides a wide array of tools (command line tools, lightweight clients) and Web interfaces
for searching data by metadata criteria.

## AMI Ecosystem

**AMI** is an ecosystem of pieces of software dedicated to metadata in a big data context. It consists
of:

-   **AMI Java Core**: the server-side core library. It contains high-level primitives for
    aggregating, processing and storing metadata and for searching data by metadata
    criteria.

-   **AMI Web Core**: based on **AMI** Java Core and Java servlet, it provides a
    proprietary HTTP service and an alternative REST API for accessing the whole
    AMIcontent.

-   **AMI Task Server**: a handy scheduler for running metadata aggregation /
    processing tasks from heterogeneous primary data sources in a distributed way.

-   **AMI Web Framework**: a Web framework for developing metadata-oriented
    applications. It is designed to be used with the **AMI** Web Core or in a standalone
    way.

-   A set of lightweight clients for accessing the **AMI** HTTP service from anywhere
    (C, C++, Java, JavaScript, Python..)

## Prerequisites for AMI Web Framework

-   [NPM](https://nodejs.org/en/) (> version 6)
-   [Git](https://git-scm.com/)
-   [Python 2](https://www.python.org/) (Python 3 is prefered)
