import { getDetailedSolution } from './carRepairDataset'; // Import the helper function

// Define the conversation flow
export const conversationFlow = {
  start: {
    message: "What can I help you with?",
    options: [
      { label: "Flat Tire", next: "flatTireFollowUp" }, // Follow-up for Flat Tire
      { label: "Brake Noise", next: "brakeNoiseFollowUp" }, // Follow-up for Brake Noise
      { label: "Engine Overheating", next: "engineOverheatingFollowUp" }, // Follow-up for Engine Overheating
      { label: "Dead Battery", next: "deadBatteryFollowUp" }, // Follow-up for Dead Battery
      { label: "Oil Leak", next: "oilLeakFollowUp" }, // Follow-up for Oil Leak
      { label: "Check Engine Light", next: "checkEngineLightFollowUp" }, // Follow-up for Check Engine Light
      { label: "Transmission Problems", next: "transmissionProblemsFollowUp" }, // Follow-up for Transmission Problems
      { label: "Suspension Issues", next: "suspensionIssuesFollowUp" }, // Follow-up for Suspension Issues
      { label: "Air Conditioning Failure", next: "airConditioningFailureFollowUp" }, // Follow-up for AC Failure
      { label: "Alternator Failure", next: "alternatorFailureFollowUp" }, // Follow-up for Alternator Failure
      { label: "Fuel System Issues", next: "fuelSystemIssuesFollowUp" }, // Follow-up for Fuel System Issues
      { label: "Exhaust System Problems", next: "exhaustSystemProblemsFollowUp" } // Follow-up for Exhaust System Problems
    ]
  },
  // Flat Tire Follow-Up
  flatTireFollowUp: {
    message: "Is your tire completely flat or just low on air?",
    options: [
      { label: "Completely Flat", next: "solutionFlatTire" },
      { label: "Low on Air", next: "solutionLowTirePressure" }
    ]
  },
  // Brake Noise Follow-Up
  brakeNoiseFollowUp: {
    message: "Do you hear squealing or grinding noise when braking?",
    options: [
      { label: "Yes", next: "solutionBrakeNoise" },
      { label: "No", next: "brakeNoiseSecondFollowUp" }
    ]
  },
  brakeNoiseSecondFollowUp: {
    message: "Do you experience vibrations or pulsations in the brake pedal when braking?",
    options: [
      { label: "Yes", next: "solutionBrakeVibration" },
      { label: "No", next: "start" }
    ]
  },
  // Engine Overheating Follow-Up
  engineOverheatingFollowUp: {
    message: "Is the temperature gauge in the red zone and do you see steam from the hood?",
    options: [
      { label: "Yes", next: "solutionEngineOverheating" },
      { label: "No", next: "engineOverheatingSecondFollowUp" }
    ]
  },
  engineOverheatingSecondFollowUp: {
    message: "Do you notice coolant leaks under your car or a sweet smell while driving?",
    options: [
      { label: "Yes", next: "solutionCoolantLeak" },
      { label: "No", next: "start" }
    ]
  },
  // Dead Battery Follow-Up
  deadBatteryFollowUp: {
    message: "Does your car not start, and do you hear a clicking sound when turning the key?",
    options: [
      { label: "Yes", next: "solutionDeadBattery" },
      { label: "No", next: "deadBatterySecondFollowUp" }
    ]
  },
  deadBatterySecondFollowUp: {
    message: "Are your headlights dimming or electrical components malfunctioning?",
    options: [
      { label: "Yes", next: "solutionAlternatorFailure" },
      { label: "No", next: "start" }
    ]
  },
  // Oil Leak Follow-Up
  oilLeakFollowUp: {
    message: "Do you notice oil spots under your car or a burning smell while driving?",
    options: [
      { label: "Yes", next: "solutionOilLeak" },
      { label: "No", next: "oilLeakSecondFollowUp" }
    ]
  },
  oilLeakSecondFollowUp: {
    message: "Is your engine making knocking noises or losing power?",
    options: [
      { label: "Yes", next: "solutionLowOilPressure" },
      { label: "No", next: "start" }
    ]
  },
  // Check Engine Light Follow-Up
  checkEngineLightFollowUp: {
    message: "Is the check engine light illuminated on your dashboard?",
    options: [
      { label: "Yes", next: "solutionCheckEngineLight" },
      { label: "No", next: "checkEngineLightSecondFollowUp" }
    ]
  },
  checkEngineLightSecondFollowUp: {
    message: "Are you experiencing poor fuel efficiency or rough idling?",
    options: [
      { label: "Yes", next: "solutionFuelSystemIssues" },
      { label: "No", next: "start" }
    ]
  },
  // Transmission Problems Follow-Up
  transmissionProblemsFollowUp: {
    message: "Are you experiencing delayed gear shifts, slipping gears, or rough shifting?",
    options: [
      { label: "Yes", next: "solutionTransmissionProblems" },
      { label: "No", next: "transmissionProblemsSecondFollowUp" }
    ]
  },
  transmissionProblemsSecondFollowUp: {
    message: "Is there a burning smell coming from your car while driving?",
    options: [
      { label: "Yes", next: "solutionTransmissionOverheating" },
      { label: "No", next: "start" }
    ]
  },
  // Suspension Issues Follow-Up
  suspensionIssuesFollowUp: {
    message: "Is your car bouncing excessively or pulling to one side while driving?",
    options: [
      { label: "Yes", next: "solutionSuspensionIssues" },
      { label: "No", next: "suspensionIssuesSecondFollowUp" }
    ]
  },
  suspensionIssuesSecondFollowUp: {
    message: "Do you hear clunking or rattling noises when going over bumps?",
    options: [
      { label: "Yes", next: "solutionSuspensionNoise" },
      { label: "No", next: "start" }
    ]
  },
  // Air Conditioning Failure Follow-Up
  airConditioningFailureFollowUp: {
    message: "Is your air conditioning blowing warm air or making unusual noises?",
    options: [
      { label: "Yes", next: "solutionAirConditioningFailure" },
      { label: "No", next: "airConditioningFailureSecondFollowUp" }
    ]
  },
  airConditioningFailureSecondFollowUp: {
    message: "Is your AC system blowing weak airflow?",
    options: [
      { label: "Yes", next: "solutionWeakACAirflow" },
      { label: "No", next: "start" }
    ]
  },
  // Alternator Failure Follow-Up
  alternatorFailureFollowUp: {
    message: "Are your headlights dimming, or are electrical components malfunctioning?",
    options: [
      { label: "Yes", next: "solutionAlternatorFailure" },
      { label: "No", next: "alternatorFailureSecondFollowUp" }
    ]
  },
  alternatorFailureSecondFollowUp: {
    message: "Does your car struggle to start after being turned off?",
    options: [
      { label: "Yes", next: "solutionWeakBattery" },
      { label: "No", next: "start" }
    ]
  },
  // Fuel System Issues Follow-Up
  fuelSystemIssuesFollowUp: {
    message: "Are you experiencing poor acceleration, stalling, or reduced fuel efficiency?",
    options: [
      { label: "Yes", next: "solutionFuelSystemIssues" },
      { label: "No", next: "fuelSystemIssuesSecondFollowUp" }
    ]
  },
  fuelSystemIssuesSecondFollowUp: {
    message: "Do you notice a strong smell of gasoline near your car?",
    options: [
      { label: "Yes", next: "solutionFuelLeak" },
      { label: "No", next: "start" }
    ]
  },
  // Exhaust System Problems Follow-Up
  exhaustSystemProblemsFollowUp: {
    message: "Do you hear loud noises or notice unusual smells coming from your exhaust?",
    options: [
      { label: "Yes", next: "solutionExhaustSystemProblems" },
      { label: "No", next: "exhaustSystemProblemsSecondFollowUp" }
    ]
  },
  exhaustSystemProblemsSecondFollowUp: {
    message: "Is your car vibrating excessively at idle or while driving?",
    options: [
      { label: "Yes", next: "solutionExhaustVibration" },
      { label: "No", next: "start" }
    ]
  },
  // Solutions for Follow-Up Questions
  solutionFlatTire: {
    message: getDetailedSolution("Flat tire"),
    options: []
  },
  solutionLowTirePressure: {
    message: getDetailedSolution("Low tire pressure"),
    options: []
  },
  solutionBrakeVibration: {
    message: getDetailedSolution("Vibrations or pulsations in the brake pedal"),
    options: []
  },
  solutionCoolantLeak: {
    message: getDetailedSolution("Coolant leaks under car, sweet smell"),
    options: []
  },
  solutionLowOilPressure: {
    message: getDetailedSolution("Engine knocking noises, loss of power"),
    options: []
  },
  solutionTransmissionOverheating: {
    message: getDetailedSolution("Burning smell from transmission"),
    options: []
  },
  solutionSuspensionNoise: {
    message: getDetailedSolution("Clunking or rattling noises over bumps"),
    options: []
  },
  solutionWeakACAirflow: {
    message: getDetailedSolution("Weak airflow from AC system"),
    options: []
  },
  solutionWeakBattery: {
    message: getDetailedSolution("Car struggles to start after being turned off"),
    options: []
  },
  solutionFuelLeak: {
    message: getDetailedSolution("Strong smell of gasoline near car"),
    options: []
  },
  solutionExhaustVibration: {
    message: getDetailedSolution("Excessive vibration at idle or while driving"),
    options: []
  }
};