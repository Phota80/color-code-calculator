This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
# Color Code Calculator

## Description
This app implements an color code calculator for registor based on the information
found [here](http://en.wikipedia.org/wiki/Electronic_color_code) on Wikipedia
and the interface provided below:

```
public interface IOhmValueCalculator

{

   /// <summary>

   /// Calculates the Ohm value of a resistor based on the band colors.

   /// </summary>

   /// <param name="bandAColor">The color of the first figure of component value band.</param>

   /// <param name="bandBColor">The color of the second significant figure band.</param>

   /// <param name="bandCColor">The color of the decimal multiplier band.</param>

   /// <param name="bandDColor">The color of the tolerance value band.</param>

   float CalculateOhmValue(int bandAColor, int bandBColor, float bandCColor, float bandDColor);

}

```
### How to run the color-code-calculator project
Step 1: Install Node.js and npm if they are not already on your machine
Step 2: Clone or download the project to your local folder
Step 3: Open the project in visual code & run npm install on the terminal window
Step 4: To build & run the project run npm start