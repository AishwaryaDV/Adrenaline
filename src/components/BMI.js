import React from 'react';
import '../styles/bmi.css';
import Lottie from 'lottie-react';
import peopleStanding from '../assets/animations/peopleStanding.json';
import { FaLocationArrow } from "react-icons/fa6";

const BMI = () => {
  return (
    <div className="bmiSection">
        <div className="chooseUsSection">
        <div className="chooseUsLottieContainer">
            <Lottie 
                    animationData={peopleStanding}
                    loop={true}
                    autoPlay={true}
                    style={{height:'auto', width:'115%'}}
            />
        </div>
        <div className="chooseUsDescription">
            <div className="chooseUsHeader">Why choose us</div>
            <div className="chooseUsTagline">The reason why you should join us</div>
            <div className="reasonsContainer">
                <div>Experience personalised workout plans designed to match your fitness.</div>
                <div>Engage in cutting-edge fitness classes and innovative workout programs.</div>
                <div>Beat sadness, aloneness and listlessness with defined direction personalised for your goals.</div>
                <div>Benefit from the expertise of our elite trainers certified in diverse fitness disciplines.</div>
                <div>Train in a modeern, well-equipped gym featuring the latest equipment.</div>
                <div>Join a vibrant community of like-minded individuals.</div>
            </div>
        </div>
        </div>
        <div className="bmiCalculationSection">
                <div className="bmiCalculatorSection">
                    <div className="bmiHeader">Body Mass Index</div>
                    <div className="bmiTagline">Calculate your BMI</div>
                    <form>
                    <div className="bmiCalculator">
                        <div className="heightField">
                            <label className="inputFieldLabel">Height</label>
                            <input className="inputField" type="number" />
                        </div>
                        <div className="heightField">
                        <label className="inputFieldLabel">Weight</label>
                            <input className="inputField"type="number" />
                        </div>
                        <div className="heightField">
                        <label className="inputFieldLabel">Gender</label>
                            <select className="genderDropdown">
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="heightField">
                        <label className="inputFieldLabel">Age</label>
                            <input className="inputField"type="number" />
                        </div>
                        <div className="heightField">
                        <label className="inputFieldLabel">Activity factor</label>
                        <select className="activityFactorDropdown">
                                <option value="">Select</option>
                                <option value="sedentary">Sedenatary- Little or no excercise</option>
                                <option value="light">Light- Excercise/sports 1-3 days/week</option>
                                <option value="moderate">Light- Excercise/sports 3-5 days/week</option>
                                <option value="veryHard">Light- Excercise/sports 6-7 days/week</option>
                                <option value="extraHard">Light- Excercise/sports daily & physical job</option>
                            </select>
                        </div>

                        <button type="submit" className="bmiCalculatorBtn">Calculate</button>
                        <button type="reset" className="bmiResetCalculatorBtn">Reset</button>
                    </div>
                    </form>
                </div>
                <div className="bmiChartSection">
                    <table>
                        <tr>
                            <th>BMI range</th>
                            <th>Weight status</th>
                        </tr>
                        <tr>
                            <td>Under 16</td>
                            <td>Severe thinness</td>
                        </tr>
                        <tr>
                            <td>16-17</td>
                            <td>Moderate thinness</td>
                        </tr>
                        <tr>
                            <td>17-18.5</td>
                            <td>Mild thinness</td>
                        </tr>
                        <tr>
                            <td>18.5-25</td>
                            <td>Normal</td>
                        </tr>
                        <tr>
                            <td>25-30</td>
                            <td>Overweight</td>
                        </tr>
                        <tr>
                            <td>30-35</td>
                            <td>Obese class I</td>
                        </tr>
                        <tr>
                            <td>35-40</td>
                            <td>Obese class II</td>
                        </tr>
                        <tr>
                            <td>Over 40</td>
                            <td>Obese class III</td>
                        </tr>
                        <tr>
                            <td className="bmiFormula" colSpan={2}>Body Mass Index = weight (kg) / height (m)<sup>2</sup></td>
                        </tr>
                    </table>
                </div>
        </div>
    </div>
  )
}

export default BMI