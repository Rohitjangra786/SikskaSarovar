import { Course } from '../types';
import DmpOverview from '../components/courses/DMP/Overview.png';

export const COLLEGE_COURSES: Course[] = [
    {
        id: 'dmp',
        title: 'Disaster Management',
        category: 'College Subjects',
        icon: 'brain',
        level: 'Intermediate',
        progress: 0,
        lessons: [
            {
                id: 'dmp-u1-overview',
                title: 'Unit 1: Overview',
                content: `  Unit 1: Introduction to Disaster Management  

This module provides a comprehensive overview of Disaster Management, covering basic concepts, classifications, and the management cycle.

  Visual Overview:  
Below is the visual overview of Unit 1. Please refer to this for a structural understanding before proceeding to the detailed modules.`,
                image: DmpOverview,
                codeSnippet: undefined,
                isCompleted: false
            },
            {
                id: 'dmp-u1-concepts',
                title: 'Concept & Definitions of Disaster',
                content: `  1. Introduction  
A disaster is a serious disruption of the normal functioning of a community or society, causing widespread human, material, economic, or environmental losses that exceed the ability of the affected community to cope using its own resources. Disasters can occur due to natural causes, human activities, or a combination of both.

  2. Definition of Disaster  
      General Definition:   A disaster is a sudden or progressive event that causes significant damage, destruction, and human suffering.
      UN Definition:   A disaster is a serious disruption of the functioning of a community or society involving widespread losses and impacts, exceeding the affected community’s capacity to cope.

  3. Key Characteristics of a Disaster  
    Sudden or slow onset (earthquake is sudden, drought is slow)
    Large-scale impact on people and property
    Disruption of normal life
    Beyond local coping capacity
    Requires external assistance

  4. Disaster vs Hazard vs Risk  
      Hazard:   A potentially dangerous event or phenomenon (e.g., earthquake, flood).
      Risk:   Probability of loss due to a hazard.
      Disaster:   Actual occurrence causing serious damage and loss.

 Example: 
    Earthquake (Hazard)
    Earthquake in a crowded city (Risk)
    Earthquake causing deaths and damage (Disaster)

  5. Types of Disasters  
      Natural Disasters:   Earthquakes, Floods, Cyclones, Droughts, Landslides, Tsunamis, Volcanic eruptions.
      Man-Made Disasters:   Industrial accidents, Chemical leaks, Nuclear disasters, Fire accidents, Transportation accidents, War and terrorism.

  6. Impact of Disasters  
      Human Impact:   Loss of life, injuries, psychological trauma.
      Economic Impact:   Damage to infrastructure, industries, agriculture.
      Environmental Impact:   Soil erosion, water pollution, deforestation.
      Social Impact:   Displacement of people, disruption of education and health services.

  7. Disaster Management (Brief Concept)  
Disaster Management refers to organized efforts to: Prevent, Prepare, Respond, and Recover. This is commonly known as the   Disaster Management Cycle  .

  8. Importance of Studying Disaster Management  
    Reduces loss of life and property
    Enhances preparedness and awareness
    Promotes sustainable development
    Helps in quick response and recovery

  9. Summary  
    A disaster is a major disruption beyond coping capacity.
    Disasters can be natural or man-made.
    Understanding disaster concepts helps in effective planning and response.`,
                isCompleted: false
            },
            {
                id: 'dmp-u1-hvr',
                title: 'Hazard, Vulnerability, and Risk',
                content: `  1. Introduction  
In Disaster Management, Hazard, Vulnerability, and Risk are three core concepts. A disaster occurs not only because a hazard exists, but because people and systems are vulnerable to it, creating risk.

  2. Hazard  
  Definition:   A hazard is a potentially damaging physical event, phenomenon, or human activity that may cause loss of life, injury, property damage, social and economic disruption, or environmental degradation.
    Hazards may be natural or man-made.
    A hazard does not automatically cause a disaster.
    It becomes dangerous when it affects vulnerable people or systems.

 Types of Hazards: 
      Natural:   Earthquake, Flood, Cyclone, Drought, Landslide.
      Man-Made:   Industrial accidents, Chemical spills, Nuclear accidents, Fires.

  3. Vulnerability  
  Definition:   Vulnerability refers to the degree to which individuals, communities, or systems are likely to be affected by a hazard due to physical, social, economic, or environmental factors.
      Physical Vulnerability:   Weak buildings, poor infrastructure.
      Social Vulnerability:   Poverty, illiteracy, age (children, elderly).
      Economic Vulnerability:   Low income, dependence on agriculture.
      Environmental Vulnerability:   Deforestation, living near rivers.

  4. Risk  
  Definition:   Risk is the probability or likelihood of harmful consequences resulting from the interaction between a hazard and vulnerability.

  Risk Formula:  
Risk = Hazard × Vulnerability

    If either hazard or vulnerability is zero, risk is minimal.
    High hazard + high vulnerability = high risk.
    Risk can be assessed, managed, and reduced.

  5. Relationship between Hazard, Vulnerability, and Risk  
      Hazard:   Potentially dangerous event (Usually cannot be reduced).
      Vulnerability:   Susceptibility to harm (Can be reduced).
      Risk:   Chance of loss (Can be reduced).

  Disaster occurs when a hazard affects a vulnerable population, creating high risk.  

  6. Importance  
    Helps identify high-risk areas.
    Assists in planning and mitigation.
    Reduces loss of life and property.`,
                codeSnippet: '// Risk Calculation\nRisk = Hazard   Vulnerability\n// If Vulnerability is 0, Risk is 0.',
                isCompleted: false
            },
            {
                id: 'dmp-u1-capacity',
                title: 'Capacity & Development',
                content: `  1. Introduction  
Capacity plays a crucial role in reducing disaster impacts. While hazards and vulnerability increase disaster risk, capacity helps individuals, communities, and institutions prepare for, respond to, and recover from disasters.

  2. Capacity  
  Definition:   Capacity refers to the strengths, resources, skills, knowledge, and abilities available within a community, organization, or system that can be used to anticipate, cope with, resist, and recover from the impacts of disasters.
      Types of Capacity:  
          Physical:   Strong buildings, roads, hospitals.
          Social:   Community cooperation, volunteer networks.
          Economic:   Financial resources, insurance.
          Institutional:   Disaster response agencies, early warning systems.
          Technological:   Communication systems, forecasting tools.

  3. Relationship between Capacity, Hazard, Vulnerability, and Risk  
  Formula:   Disaster Risk = (Hazard × Vulnerability) ÷ Capacity
    Higher capacity → Lower disaster risk
    Lower capacity → Higher disaster risk

  4. Disaster and Development  
Disaster and development are interrelated.
      Poor Development Increases Disasters:   Unplanned urbanization, poor housing, environmental degradation.
      Good Development Reduces Impact:   Strong infrastructure, education, poverty reduction.
      Disaster–Development Cycle:   Disasters damage development; poor development increases losses; sustainable development breaks this cycle.

  5. Disaster Management & Phases  
  Definition:   Organized process to reduce disaster impacts.
  Phases:  
1.    Prevention & Mitigation:   Risk assessment, building codes.
2.    Preparedness:   Training, drills, early warning.
3.    Response:   Search and rescue, medical aid.
4.    Recovery:   Rehabilitation, reconstruction.

  6. Role of Capacity  
    Improves preparedness and response.
    Speeds up recovery.
    Promotes self-reliance.

  7. Summary  
    Capacity is the ability to manage disasters effectively.
    Higher capacity reduces disaster risk.
    Capacity building is essential for sustainable societies.`,
                codeSnippet: '// Improved Risk Formula\nDisasterRisk = (Hazard   Vulnerability) / Capacity\n\n// Increase Capacity to Decrease Risk!',
                isCompleted: false
            }
        ]
    }
];
