Beginner Exercises — Learn by Doing

This file contains small, hands-on exercises you can complete to learn how the project works.

1) Change the home page title
- Open `src/App.jsx` and find `homeTitle`.
- Change the text, save, and observe the heading update in the browser.

2) Add a subtitle to the Home page
- In `src/App.jsx`, add a variable `homeSubtitle` and pass it to the `Home` route as a new prop:
  `<Route path="/" element={<Home title={homeTitle} subtitle={homeSubtitle} />} />`
- Update `src/pages/Home.jsx` to accept `subtitle` and forward it to `Hero`.

3) Modify the Navbar label
- Open `src/components/Navbar.jsx` and change the default `siteTitle` or the link text.
- Save and observe the header update.

4) Make the contact form show values on submit
- Open `src/pages/Contact.jsx` and change the `handleSubmit` to `console.log` the `name`, `email`, and `message` values.
- Open the browser console, submit the form, and verify the values appear in the console.

5) Add a new page
- Create `src/pages/FAQ.jsx` with a basic component that renders a heading.
- Add a new `<Route path="/faq" element={<FAQ title="FAQ" />} />` in `src/App.jsx` and add a link in the Navbar.

Tip: Make one change at a time, save, and observe the browser. Vite's fast refresh will show updates instantly.

If you want, I can implement one of these exercises for you now.