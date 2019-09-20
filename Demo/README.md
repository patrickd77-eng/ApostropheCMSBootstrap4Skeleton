# Apostrophe Boilerplate

Apostrophe Boilerplate is my minimal starting point for ApostropheCMS Projects.

It has elements already configured and uses Bootstrap4.

## You need to install MongoDB and ImageMagick.

To get started, I recommend taking a look at https://docs.apostrophecms.org/apostrophe/tutorials/howtos/windows or simply fork this repo

Once you have a local copy of this project to work from, make sure to install its dependencies (while in Demo folder) with `npm install`. With Apostrophe installed, the first thing to do create an admin user account so you're able to log into the CMS. Run the following command (this will prompt you for a password).

```bash
node app.js apostrophe-users:add admin admin
```

Now you're all set! Just run `node app.js` to start up the local server and head to `localhost:3000` in your web browser.
