/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
 */

module.exports.custom = {

  /***************************************************************************
  *                                                                          *
  * Any other custom config this Sails app should use during development.    *
  *                                                                          *
  ***************************************************************************/
  // mailgunDomain: 'transactional-mail.example.com',
  // mailgunSecret: 'key-testkeyb183848139913858e8abd9a3',
  // stripeSecret: 'sk_test_Zzd814nldl91104qor5911gjald',
  // …
  BACKEND: {
    //Alwas SETTING URL = window.location.pathname to MATCH on frontend (main.js)
    ACTIVE: {
      ID: 'publish',
      URL: '?status=1'
    },
    DRAFT: {
      ID: 'draft',
      URL: '?status=0'
    },
    TRASH: {
      ID: 'trash',
      URL: '?status=3'
    },
  },
  STATUS: {
    ALL: -1,
    DRAFT: 0,
    ACTIVE: 1,
    SCHEDULE: 2,
    TRASH: 3,
    DONE: 4
  },
  UPLOAD: {
    EXTENSION: ['.png', '.jpg', '.jpeg', '.gif', '.heic'],
    AVATAR: {
      width: 215,
      height: 310,
      name: 'avatar'
    },
    SIZES: [
      {
        width: 1280, height: 'auto',
        name: 'origin',
        type: 'origin'
      },
      {
        width: 150, height: 150,
        name: '150x150',
        type: 'thumbnail'
      },
      // {
      //   width: 240, height: 135,
      //   name: '240x135',
      //   type: 'medium'
      // },
      // {
      //   width: 400, height: 270,
      //   name: '400x270',
      //   type: 'medium_large'
      // }
    ],
    PATH_FOLDER: process.env.PATH_FOLDER || '/HK1Nam4/TLCN/EstorePro/'
  }
};
