## Deploy

This example was deploy using [ZEIT Now](https://zeit.co/now).

Link [Ingenia Contact](https://ingenia.now.sh/contact)

## How to use it?
Execute `git clone [repository]` then inside new folder with intall dependencies using [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) or [Npm](https://nodejs.org/en/) to bootstrap the example.

```
git clone https://github.com/Eric-Andrade/ingenia.git
cd ingenia
yarn or npm install
```

Run dev app:
```
yarn dev
```

Run production will use local custom server powered with http2, to run it use in command-line next command:
```
yarn runprod
```

If you want to run distribution app you would use three commands:

```
yarn build
```
```cd out``` and ```yarn serve -p 8080```

##### Note: 
Port could change for anyone you choice.

## About 
This little project is powered by [Next.js](https://nextjs.org/), [Sass](https://sass-lang.com/), [TypeScript](https://www.typescriptlang.org/), Webpack, [Google reCaptcha](https://www.google.com/recaptcha) and other usefully techs.
Boilerplate is carefully built to better performance app.

#### Good practices
React + Hooks: Using React last version for better Coder experience.
Sass: Improve styling app.
Webp: Faster load images (if browser support it).
Typescript: Minimize commons bugs coding.
Code splitting: Improve performance splitting code and use it by demand.
Google Captcha V2: Denege robots access form.

## Important

#### Next.js
Next.js by default has some problem with new route added (like this example -contact) for that you could experience some trouble. Solution: just click in your browser the route you want to go, after that you will navigate in new routes and others.

#### [Google Captcha](https://www.google.com/recaptcha) 
To use Google Captcha is neccesary add domain to Google console, all domains require a host and must not include any path, port, query or fragment. For that is not possible use Captcha in [ZEIT Now](https://zeit.co/now) deploy. If you want to use it in new domain it'll requires register in [Google Captcha](https://www.google.com/recaptcha) domains.