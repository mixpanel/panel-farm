# Panel Farm!

[doge]: https://github.com/tdumitrescu/panel-farm/raw/master/src/panel-farm/animal-badge/images/doge.png
![very panel!][doge]![much virtual!][doge]![so components!][doge]

This is a little demo app for playing around with Web Components and the [Panel](https://github.com/mixpanel/panel) library in a live environment with browser dev tools.

Visit the live demo at https://tdumitrescu.github.io/panel-farm/. You can get a reference to the running application with:
```js
app = document.querySelector(`panel-farm`);
```
Look at `app.state` to get an idea of what's controllable dynamically. For instance, to change the header text of the welcome screen, try:
```js
app.update({welcomeText: `Hello there!`});
```
The [Farm screen](https://tdumitrescu.github.io/panel-farm/#farm) starts out with one cute capybara and some buttons to add different animals to keep it company. Can you add another capybara?

### Local development
- Fork or clone git repo: `git clone git@github.com:tdumitrescu/panel-farm.git && cd panel-farm`
- Install dependencies: `npm install`
- Start local server: `npm start`
- Visit page at http://localhost:8080/
- Changes to app code within `src/` dir will update live in browser
