# Local Hero

###### What is Local Hero? :us:

> Local Hero is a responsive web app that provides users with a one stop shop to find information on government officials and local representatives and provide a means to submit municipal problems all through an easy to use interface. At Local Hero we believe that by making it easier to stay informed on the decisions of our chosen officials and progress on reported issues it will not only lead to having a government that best fits it's citizens needs and views but also helps hold those elected officials accountable.:us:

## :memo: Where do I start?

### Step 1: Set-up
- [ ] `Git clone` git@github.com:wyncode/c39_state_watch.git
- [ ] `cd` into repository
- [ ] `yarn install`
- [ ] `cd client && yarn install`

:rocket: 

### Step 2: Main Dependencies

**Server Side.**

- [ ] `axios` run command `$ yarn add axios`
- [ ] `bcryptjs` run command `$ yarn add bcryptjs`
- [ ] `@sendgrid/mail` run command `$ yarn add @sendgrid/mail`
- [ ] `cloudinary` run command `$ yarn add cloudinary`
- [ ] `concurrently` run command `$ yarn add concurrently`
- [ ] `cookie-parser` run command `$ yarn add cookie-parser`
- [ ] `express` run command `$ yarn add express`
- [ ] `express-fileupload` run command `$ yarn add express-fileupload`
- [ ] `jsonwebtoken` run command `$ yarn add jsonwebtoken`
- [ ] `mongodb` run command `$ yarn add mongodb`
- [ ] `passport` run command `$ yarn add passport`
- [ ] `passport-jwt` run command `$ yarn add passport-jwt`
- [ ] `validator` run command `$ yarn add validator`


**Client Side.**

- [ ] `react-bootstrap` run command `$ yarn add react-bootstrap`
- [ ] `react-dom` run command `$ yarn add react-dom`
- [ ] `react-router-dom` run command `$ yarn add react-router-dom`
- [ ] `react-mapbox-gl` run command `$ yarn add react-mapbox-gl`
- [ ] `react-twitter-embed` run command `$ yarn add react-twitter-embed`
- [ ] `emailjs-com` run command `$ yarn add emailjs-com`
- [ ] `sweetalert` run command `$ yarn add sweetalert`


### Step 3: Available build commands

- `yarn dev`: Runs BOTH your Express.JS and React developer environment locally at the same time. Any logs coming from Express will be prefaced with `[0]`, any logs from `create-react-app` will be prefaced with `[1]`.
- `yarn server`: Runs JUST your Express.JS server.
- `yarn client`: Runs JUST your front-end React app.


### Step 4: API Keys (.env)

| Key Name                    |  Source                  | Side|
| ----------------------------|:-----------------------  |-----|
| MONGODB_URL=                | [:link:][MongoDB Atlas]  | S   |
| SENDGRID_API_KEY=           | [:link:][SendGrip]       | S   |
| FROM_EMAIL=                 | [:link:][SendGrip]       | S   |
| JWT_SECRET=                 | [:link:][JWT]            | S   |
| CLOUDINARY_URL=             | [:link:][Cloudinary]     | S   |
| APP_TOKEN=                  | [:link:][API_KEY]        | S   |
| API_KEY=                    | [:link:][API_KEY]        | S   |
| CICERO_API_KEY=             | [:link:][Cicero]         | S   |
| REACT_APP_MAPBOX_API_KEY=   | [:link:][React mapbox gl]| C   |
| REACT_APP_GOOGLEMAP_API_KEY=| [:link:][Google Maps]    | C   |

> S = Server ; C = Client

[MongoDB Atlas]: https://www.mongodb.com/cloud/atlas
[SendGrip]: https://sendgrid.com/
[JWT]: https://jwt.io/
[Cloudinary]: https://cloudinary.com/
[Cicero]: https://www.cicerodata.com/
[Share-Publish]: https://hackmd.io/c/tutorials/%2Fs%2Fhow-to-publish-note
[API_KEY]: https://dev.socrata.com/foundry/data.miamigov.com/6q9s-asrs
[Google Maps]: https://developers.google.com/maps/documentation/javascript/get-api-key?utm_source=google&utm_medium=cpc&utm_campaign=FY20-Q3-global-demandgen-displayonnetworkhouseads-cs-GMP_maps_contactsal_saf_v2&utm_content=text-ad-none-none-DEV_c-CRE_460848633595-ADGP_Hybrid%20%7C%20AW%20SEM%20%7C%20BKWS%20~%20Google%20Maps%20API-KWID_43700033921822111-kwd-299558370606-userloc_9011930&utm_term=KW_%2Bgoogle%20%2Bmaps%20%2Bapi-ST_%2Bgoogle%20%2Bmaps%20%2Bapi&gclid=Cj0KCQiAzZL-BRDnARIsAPCJs70O44cQUz41Lk2W_sgkd7rEbtzsYybl6d5trhB-NOAOOmAyOoNq988aAqQMEALw_wcB 
[React mapbox gl]: https://www.npmjs.com/package/react-mapbox-gl



## Runs on Herkoku
https://statewatch.herokuapp.com/

<img align="left" width="400" src="https://imagizer.imageshack.com/img922/5683/ogTsSI.png">




# Statewatch

Statewatch is a response web app that provides users with a one stop shop to find unbias information on government officials and local representatives and provide a means to submit municipal problems all through an easy to use interface. At Statewatch we believe that by making it easier to stay informed on the decisions of our chosen officials and progress on reported issues it will not only lead to having a government that best fits it's citizens needs and views but also help hold those elected officials accountable.

## Installation

Statewatch is a responsive web based application and will be accessed using a specified URL in any browser including mobile. Stayed tuned for official URL upon deployment.

## Usage

The site has two main workflows, one for searching government officials which provides unbiased data including voting and endorsement records, and providing several means for getting in contact with said representative including a built in email form, and the other is for looking up locally reported municipal issues based on provided zip code and being able to submit your own.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors and Acknowledgement

The dev team was made up by 4 aspiring full stack devs, Ulises Rivelo, Hugo Perez, Eugene Washington, and Gabriel Zevallos. Special thanks to all instructors that assisted in the completion of this project and to the the friends and family that supported us throughout the development of Statewatch.

## License

[MIT](https://choosealicense.com/licenses/mit/)
