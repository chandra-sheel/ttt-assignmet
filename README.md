## Terribly Tiny Tales Assignment - Chandrasheel Prasad

#### Live Link for my assignment : https://chandra-assignment.netlify.app/

This React application fetches the contents of a text file from `https://www.terriblytinytales.com/test.txt`, calculates the frequency of occurrence of each word in the file, and generates a histogram of the 20 most occurring words. The application also provides the functionality to export the histogram data as a CSV file.

### Components

The application consists of the following components:

- **App.js**: The main component that renders the submit button, histogram chart, and export buttons. It fetches the text file, calculates word frequency, and updates the state accordingly.
- **App.css**: The CSS file that provides styling for the application.

### Libraries and Plugins Used

The application utilizes the following libraries and plugins:

- **React**: A JavaScript library for building user interfaces.
- **Papa Parse**: A powerful CSV parsing and manipulation library for JavaScript.
- **axios**: A popular library for making HTTP requests.
- **recharts**: A charting library for React that provides the BarChart component used for visualizing the histogram data.

### Usage

To use the application:

1. Clone the repository from GitHub.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the development server.
4. Open the application in your browser at `http://localhost:3000`.
5. Click the "Submit" button to fetch the text file and generate the histogram.
6. Once the histogram is generated, you can click the "Export CSV" button to download the histogram data as a CSV file.
7. If the text file is available, you can also click the "Export Text File" button to download the imported text file.

![image](https://github.com/chandra-sheel/ttt-assignmet/assets/101087013/d4edb1b3-ea8c-4ee0-b788-ed7a5fc8787a)

![image](https://github.com/chandra-sheel/ttt-assignmet/assets/101087013/627cf1fe-d84e-4e02-a3f0-efeba1fb7fea)

![image](https://github.com/chandra-sheel/ttt-assignmet/assets/101087013/1e7090af-49fc-4a0d-ad85-6c20ba61a098)

![image](https://github.com/chandra-sheel/ttt-assignmet/assets/101087013/80d573d7-163f-42b3-8531-674f0e6afd3b)


