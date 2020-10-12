![Hireable](https://img.shields.io/badge/Hireable-yes-success) ![](https://img.shields.io/badge/Mobile--responsive-yes-green) ![](https://img.shields.io/badge/-Microverse%20projects-blueviolet)

# Microsoft todo web app clone built with webpack, HTML and CSS in 2 days.

> The guests can create lists of todos, add/delete and edit todos based on their description/priority/due date/notes and title. The app never does a full refresh of the page and it automatically updates the DOM with every change. It is using `localStorage` for the database. <br>
> In this project, we were required to build a todo web app using Javascript`s Objects, Factory Functions, and The Module Patterns applying the concepts of Single Responsibility and Tightly Coupled Objects.

## App functionality

- Guests can create lists of todos, add/delete and edit todos based on their description/priority/due date/notes and title.

## This web app is live, you can check it here: [Live demo](https://rails-bible-talks.herokuapp.com/)

## Screenshots of the app.

![image](.github/app-screenshot.png)

## Built With

- Ruby
- Rails
- RSpec
- PostgreSQL
- Omniauth
- AWS S3 uploads for Rails Active Storage
- Bootstrap
- Fontawesome

## Prerequisities

To get this project up and running locally, you must have ruby and postgres installed on your computer.

## Getting Started

**To get this project set up on your local machine, follow these simple steps:**

**Step 1**<br>
Navigate through the local folder where you want to clone the repository and run<br>
`git@github.com:cristianCeamatu/rails-bible-talks-social-app.git`. It will clone the repo to your local folder.<br>
or with https<br>
`https://github.com/cristianCeamatu/rails-bible-talks-social-app`.<br>
**Step 2**<br>
Run `cd rails-bible-talks-social-app`<br>
**Step 3**<br>
Run `bundle install` to install the gems from the `Gemfile`.<br>
**Step 4**<br>
Run `yarn install` to install the npm packages from the `package.json` file.<br>
**Step 5**<br>
Run `bundle exec figaro install`, this will create a file called `application.yml` in the `config` folder.<br>
**Step 6**<br>
Open `config/application.yml` and add your credenatials for your postgres/[github](https://github.com/settings/applications) and [twitter](https://dev.twitter.com/apps)/[AWS S3](https://aws.amazon.com/console/) accounts like this (click on the above links to find out how to get a key):<br>
`PG_DATABASE_USER: example` <br>
`PG_DATABASE_PASSWORD: password`<br>
`GITHUB_KEY: key`<br>
`GITHUB_SECRET: key`<br>
`TWITTER_KEY: key`<br>
`TWITTER_SECRET: key`<br>
`BUCKETEER_AWS_ACCESS_KEY_ID: key`<br>
`BUCKETEER_AWS_SECRET_ACCESS_KEY: key`<br>
`BUCKETEER_AWS_REGION: key-zone`<br>
`BUCKETEER_BUCKET_NAME: key-bucket`<br>
**Step 7**<br>
Run `rails db:create` and `rails db:migrate` to create and migrate the database tabels and associations.<br>
**Step 8**<br>
Run `rails s` to start the rails server.<br>
**Step 9**<br>
You can visit the app at `http://localhost:3000`. Enjoy!<br>

## Tests

1. Open Terminal

2. Migrate the test database:

   `rails db:migrate RAILS_ENV=test`

3. Run the tests with the command:

   `rspec`

## Authors

👤 **Cristian Viorel Ceamatu**

- Github: [@cristianCeamatu](https://github.com/cristianCeamatu)
- Twitter: [@CeamatuV](https://twitter.com/CeamatuV)
- Linkedin: [Ceamatu Cristian](https://www.linkedin.com/in/ceamatu-cristian/)

## 🤝 Contributing

Our favourite contributions are those that help us improve the project, whether with a contribution, an issue, or a feature request!

## Show your support

If you've read this far....give us a ⭐️!

## 📝 License

This project is licensed by Microverse and the Odin Project

## Acknowledgement

- Design idea by [Gregoire Vella on Behance](https://www.behance.net/gregoirevella)
