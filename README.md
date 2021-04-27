# hello_beauty_frontend

# Link to backend 

https://github.com/elizparisi/hello_beauty_backend


# Table of Contents

    About the Project
    Built With
    Getting Started
    Prerequisites
    Installation
    Usage
    Contributing
    License
    Contact
    Acknowledgements

# About The Project

This is a single page application ("SPA") for sharing your favorite dupe beauty product pairs. I love beauty products but don't love some of their price tags, so I'm always looking for affordable alternatives. Hopefully you are too! 

# Built With

This application was built with a Rails backend and Javascript frontend.

    Ruby-on-Rails
    byebug
    Javascript

# Getting Started

To get the application started you must have ruby and postgresql installed on your computer.

# Prerequisites

Other than the gems listed in this app's Gemfile, you will need to have Ruby and Rails installed on your local machine as well as the ability to install Ruby gems.

Before running your server, you will need to install the gems and add content to your database manually or you can use the seeds file:

To install the gems first cd into hello_beauty_backend and run the following:

bundle install

To run your migrations and update your db/schema.rb file to match the structure of the database, run the following:

rails db:create

rails db:migrate

To create data in the database, run the following:

rails db:seed

rails s

and then go to your favorite browser and visit this webpage "http://localhost:3000/api/v1/products"

# Installation

    clone the repo

    cd into backend and install the gemfile packages

    bundle install

    Run rails s
    
    cd into frontend and open index.html


# Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.


# License

Distributed under the MIT License. See LICENSE for more information.
