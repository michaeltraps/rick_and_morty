# Clover Web App Team Take-Home Assignment

## RICK AND MORTY PORTAL

<img width="500px" src="https://static.wikia.nocookie.net/logopedia/images/f/f6/Rick_and_Morty_logo.svg/revision/latest?cb=20210611111743" alt='rick and morty in front of portal with logo'/>

<br/>
Rick and Morty Portal utilizes the publicly-available Rick and Morty API to gather twenty random characters from the Rick and Morty universe. Character cards can be selected for additional location information.

<br/>

<img width="500px" src='https://lh3.googleusercontent.com/Lp-ZeSadb8R691M4I9EEPeay5vQDQFWUgTTwG6RtE1PWc0494f54R1i6Np8yrijjUQC04Xzp5e6ooS4DoavJZ9OhWYE0R8fg-ie5NZPjjEhMKNiaSz-g5JajNUToHzzDcQY3Lt-vDKTkx_bp8Y0OkWRoO5dZsOupGBLI0jS4TEDvfWd_JMz63DS2H6keMEg7VDSUmpIUdxVw_Avy3wZpknoXoDFJsCPYInk6xKk6SNw80Yt_ZzH2re3-DxPQBsaHShBgRpN_krPBChWnZtMEJeR_219_LEOsW2-TJJ34PYTjhq9fWY4jdfNyArPYRpPOyxvnZI4qnDQJMvMYBUIXe6BQvSAPWMoaZqp96g_gme1hPzrXwIqimR8LJ8xJVNarAZY_0fC0YzmkAmDbGXR4Si83UJyoptNiLC0hwYkc9Vpn-2W4ZEL4U5bQWc4Y8lSFyCmQxZqscQ7_0VbgHNvIH1EUO1gSX46Ga83M2y0gZouMF1_EbmZp9NRxOi1QTwnY6xt5Qk0g39j58RbjdKin-7EEOKLK3bXpmWQ9lBmMMMdRP7f7436sVMJJcQKTXKQi-jLBnQssQKBV-6hCe3JFPezFd2X_o_QuYwJzzXThA4Tjcf2cjASiknEm87qgw1kUkd5UlaiyYgk2M2ETn96S8cKloNxXsjK8T9OVjLDtQCW6uarda3onyCK-YvgUzW2ce9Owbchvc5UtnJh9jVQsQmIH3rt9-jrz0l72PKzJLZTNvYYzLgJroYk1LLNBux6PdB39oPLwCw83YJatDzlDUKOLhrMsGUYJ=w597-h411-no?authuser=1' alt='Rick and Morty portal demo'/>

<br/>

### PROJECT SETUP

Required software for setting up this application:

- [NPM](https://www.npmjs.com/)

1. Clone the repo.
   ```sh
   git clone https://github.com/michaeltraps/clover_takehome.git
   cd clover_takehome
   ```
2. Install the package dependencies.
   ```sh
   npm install
   ```
3. The application can be run by running the following command and going to http://localhost:3000/ on your browser.

   ```sh
   npm start
   ```

4. Unit testing can be run by the following command:

   ```sh
   npm test
   ```

## BUILT WITH

Ricky and Morty Portal was built using the following:

- [ReactJS](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Prettier](https://prettier.io/)
- [Rick and Morty API](https://rickandmortyapi.com/documentation)

## QUESTIONS

**What architectural decisions did you make and why? Elaborate on strengths and weaknesses.**

The assignment guidelines required using React with either JavaScript or TypeScript. Since I have been actively working to improve skills, I opted to build the app using TypeScript. This allowed me to build out the codebase in a more structured and foolproof way, as TypeScript continued to keep track of static typing and make the code more readable for review. Of course, TypeScript can take longer to write in since you must also be mindful of your code. The benefits outweighed the negatives here.

I opted to structure my file system into two React categories: components and contianers. This allowed me to keep track of which components would have child components, and pass down props accordingly. I also chose to create index.ts files to consolidate my component exports in both the componets and containers files. While this takes some time to set up, I think it makes importing components much easier in the long run.

For the Rick and Morty API, I opted to use fetch requests rather than install the JavaScript client that the maintainer of the API had developed. I am already familiar with fetch requests to API endpoints, and didn't want to spend my limited time potentially learning a new technology. Though, in the future, I would like to learn how to properly utilize this shortcut.

The portal character results were builting using a responsive layout, with additional media screen settings included in the css files for tablet and phoen screens. Further bug testing would be needed to ensure seamless experience across all devices.

I kept accessibility in mind as well, and have included alt text for all images rendered. In addition, the portal image button (to fetch new characters) and each displayed character card are tabbable and selectable via the 'Enter' key.

**How did you handle error cases? Eg: botched response, no response, etc.**

I included .catch responses in my fetch requests that would log errors to the console within the Chrome browser when building out the code. Since this project did not require a more robust backend architecture, I believed this would suffice given the timeframe.

Additionally, I created user-facing onscreen errors if less than 20 characters are fetched from the API for any reason. The error message reads differently if no characters are fetched from the API. This was helpful, since during my project development time, the API went down briefly and I was intiially unsure if it was my code or the API.

**How did you test the app?**

Given the shorter timeframe, I was only able to write some simple component render tests for the header and footer components. During the project phase, I peppered my code with console.logs to determine how data was being received from the API, which (paired with the Rick and Morty API's robust documentation), I was able to wrap my head around fairly quickly.

**What third party libraries/ external code snippets did you use, if any?**

I opted not to use any third-party libraries for this project, though I had briefly considered using Material-UI given the short time frame. However, I thought it was more important to showcase my vanilla CSS skills, so I decided against it. As mentioned previously, I also did not utilize the Rick and Morty API JavaScript client.

**If you had more time, what would you have done differently?**

With additional time, I would have built out more testing, and spent more time refactoring my code for easier future readability. It would have also been fun to create additional portals that would fetch either location and/or episode information, rather than just the characters. With even more time, full API searched would also be fun to add. More bug testing would also be needed to ensure a more seamless application flow.
