## Terribly Tiny Tales Assignment - Chandrasheel Prasad

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

