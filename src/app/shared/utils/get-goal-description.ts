import { FitnessGoals } from '../../core/models/enums/fitness-goals';

export function getGoalDescription(goal: FitnessGoals): string {
  switch (goal) {
    case FitnessGoals.WeightLoss:
      return 'Focus on reducing body weight through calorie control and exercise.';
    case FitnessGoals.MuscleGain:
      return 'Aim to increase muscle mass with strength training and nutrition.';
    case FitnessGoals.Endurance:
      return 'Build stamina and improve your ability to sustain physical activity.';
    case FitnessGoals.Flexibility:
      return 'Enhance your range of motion through stretching and mobility exercises.';
    case FitnessGoals.GeneralHealth:
      return 'Maintain overall health and wellness through balanced fitness routines.';
    case FitnessGoals.StressRelief:
      return 'Reduce stress and improve mental well-being through physical activity.';
    case FitnessGoals.CardiovascularFitness:
      return 'Strengthen your heart and lungs with aerobic exercises.';
    case FitnessGoals.ImprovedEnergy:
      return 'Boost your daily energy levels with consistent exercise.';
    case FitnessGoals.BetterPosture:
      return 'Work on posture improvement through core and back strengthening exercises.';
    case FitnessGoals.InjuryRecovery:
      return 'Focus on rehabilitation and regaining strength after an injury.';
    case FitnessGoals.SportSpecific:
      return 'Train for a specific sport or athletic event.';
    case FitnessGoals.BalanceAndCoordination:
      return 'Improve your stability and coordination through targeted exercises.';
    case FitnessGoals.ImprovedMobility:
      return 'Increase your ability to move freely and easily.';
    case FitnessGoals.MentalWellness:
      return 'Support your mental health through regular physical activity.';
    case FitnessGoals.CommunityEngagement:
      return 'Engage with others through group fitness activities or challenges.';
    case FitnessGoals.WeightMaintenance:
      return 'Maintain your current weight through balanced diet and exercise.';
    case FitnessGoals.BoneStrength:
      return 'Strengthen your bones with weight-bearing and resistance exercises.';
    case FitnessGoals.LowerCholesterol:
      return 'Work to lower cholesterol levels through fitness and healthy eating.';
    case FitnessGoals.LowerBloodPressure:
      return 'Use exercise to manage and reduce high blood pressure.';
    case FitnessGoals.DiabetesManagement:
      return 'Incorporate fitness to help control blood sugar levels.';
    default:
      return 'Unspecified goal.';
  }
}
