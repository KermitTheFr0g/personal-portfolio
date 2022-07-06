---
slug: how-to-use-nextjs-tailwindcss
title: How to use NextJS and TailwindCSS
image_url: /blog-images/tailwind-css-nextjs.png
description: This is an introduction on how to use NextJS and the CSS framework called TailwindCSS
date: 28-06-2022
status: posted
tags:
  - blog
  - youtube
---

# Using NextJS and TailwindCSS

Welcome to my first tutorial, in this blog I am going to be going over how to setup a NextJS project and TailwindCSS.

## What is NextJS?

NextJS is a JavaScript framework built by Zeit. Allowing the developer to build server-side rendering and static web applications using React. With just some basic knowledge of ReactJS you can jump straight into NextJS. 

After installing NextJS a simple `npm run dev` and your web application is up and running. 

## What is TailwindCSS?

TailwindCSS is a CSS framework that helps to build website faster and more easily. You can use classes to build custom designs instead of the traditional way of writing CSS. This makes writing CSS much faster and we don't need to come up with name for our CSS classes because the CSS is writen straight into the `className`. It is also very easy to make the website responsive using TailwindCSS.

## Setting up a NextJS Project

Firstly we need to create the next app. We use this command to create the NextJS project and then cd into the directory.

``` sh
$ npx create-next-app project-name
$ cd project-name
```

Now that we are inside of our working directory for the project we can install tailwindcss. The command for this is:

``` sh
$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p
```

We now have TailwindCSS installd on our NextJS project and just need to config the tailwindcss file to work on the chosen content. The inside of the `tailwind.config.js` that has just appeared needs to look like this:

``` js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Finally we need to add some code to the `globals.css` file. We simply need to ammend this code to to our `globals.css` file:

``` css
@tailwind base;
@tailwind components;
@taildinw utilities;
```

To test that our new project is working let's change the default `Home` page for our NextJS project. To do this we need to remove the existing code in the `index.js` file and add some tailwindcss syntax into the `className`, like this:

``` js
export default function Home() {
  return (
    <h1 className="text-4xl underline">
      Hello Blog!
    </h1>
  )
}
```

Our NextJS project is going to use the CSS settings inside fo the `className`.

## Conclusion
Look out for future blogs and YouTube tutorials on how to write an entire web application with NextJS and TailwindCSS.