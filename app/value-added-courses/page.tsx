"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import DetailDialog, { type DetailDialogData } from "@/components/detail-dialog"
import ParallaxImage from "@/components/parallax-image"

const courses = [
  {
    title: "MARITIME ENGLISH (10 Days)",
    description: "Teaches the basic vocabulary and communication skills used in ships and maritime operations. The course helps students understand common terms used on board, follow safety instructions, and communicate clearly with an international crew. It improves speaking, reading, and writing skills needed for daily ship routines, radio communication, and simple emergency situations. This training supports candidates in interacting with officers, port authorities, and other maritime professionals effectively.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F6ab1372da42b4bf2b0bdcf7d4f5582bc?format=webp&width=800"
  },
  {
    title: "FOOD SAFETY & HYGIENE (2 Days)",
    description: "Teaches the basic rules for handling, cooking, storing, and serving food safely on board ships. The course focuses on preventing contamination, keeping the galley clean, and maintaining personal hygiene as per maritime standards. It helps trainees understand how to avoid foodborne illnesses and prepares them to work safely and responsibly in ship galleys and catering areas throughout a voyage.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Fc6728884dfd94b5496d685345f689b93?format=webp&width=800"
  },
  {
    title: "SHIP COOK / MARINE CATERING (30 Days)",
    description: "Training teaches the basics of food preparation, menu planning, cooking methods, nutrition, and hygiene needed on board ships. It also covers safe use of galley equipment and proper food storage. The course helps candidates work efficiently in small ship kitchens and prepare healthy, safe meals for the crew while following maritime catering and sanitation standards.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F764080d6f82a4557b354cf1aecf5b3a8?format=webp&width=800"
  },
  {
    title: "PASSENGER SHIP FAMILIARISATION (PSF) (1 Day)",
    description: "Teaches crew how to guide and assist passengers during emergencies. It covers basic crowd management, clear communication, reducing panic, and supporting evacuation procedures. The course helps crew understand passenger behaviour under stress and prepares them to maintain order and assist safely during situations like fires or evacuation.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F97829b05c4e9465e91f30eaa45d78584?format=webp&width=800"
  },
  {
    title: "CROWD & CRISIS MANAGEMENT (3 Days)",
    description: "Training teaches crew how to guide and assist passengers during emergencies. It covers basic crowd management, clear communication, reducing panic, and supporting evacuation procedures. The course helps crew understand passenger behaviour under stress and prepares them to maintain order and assist safely during situations like fires or evacuation.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F9533a3358c204bd0b73d06fca729cc4c?format=webp&width=800"
  },
  {
    title: "HUMAN BEHAVIOUR PASSENGER SHIP SAFETY (2 Days)",
    description: "Training teaches crew how to guide and assist passengers during emergencies. It covers basic crowd management, clear communication, reducing panic, and supporting evacuation procedures. The course helps crew understand passenger behaviour under stress and prepares them to maintain order and assist safely during situations like fires or evacuation.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Fb7c9f19bf28740b381d9cd64dd658461?format=webp&width=800"
  },
  {
    title: "HAZARDS ANALYSING CRITICAL CONTROL POINT (HACCP) (3 Days)",
    description: "Training teaches the basic steps to identify food safety hazards, monitor critical points, and maintain hygienic practices. It helps ship crew follow proper food handling and storage rules, prevent contamination, and meet international maritime catering standards, ensuring safe food operations during voyages.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Fdbec3177deb64081b593dd7e94b9e2eb?format=webp&width=800"
  },
  {
    title: "FAST RESCUE CRAFT/BOAT (FRC) – COXSWAIN (5 Days)",
    description: "Fast Rescue Boat (Coxswain) training teaches the basics of launching, handling, and manoeuvring fast rescue boats during emergencies. Candidates learn simple rescue techniques, use of essential equipment, and safe recovery of persons from the water. The course also builds confidence, teamwork, and decision-making skills needed to manage rescue operations in challenging sea conditions.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Fb26214aaddb14426b407034013e327ef?format=webp&width=800"
  },
  {
    title: "CRANE OPERATOR (10 Days)",
    description: "Training teaches the basic skills for operating cranes in ports, shipyards, and offshore areas. It covers simple load handling, safety checks, communication signals, and proper lifting methods. The course focuses on accident prevention and equipment inspection, preparing candidates to work safely and efficiently in demanding industrial and maritime environments.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Fb9bee8d2a1a24ad6ba56d1215c152721?format=webp&width=800"
  },
  {
    title: "SHIPBOARD SAFETY OFFICER (3 Days)",
    description: "Training teaches the basics of enforcing safety procedures, identifying hazards, and conducting risk assessments on board. Officers learn simple accident investigation methods, how to guide the crew, and how to support safety drills. The course helps create a strong safety culture and ensures the ship operates safely and efficiently.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F7233c11e41384c13b12d7a8a93c7b47c?format=webp&width=800"
  },
  {
    title: "LASCAR – BASIC SEAMANSHIP & NAVIGATION SEAMANSHIP (30 Days)",
    description: "Lascar Training teaches basic deck skills such as rope handling, knots, mooring, steering, and simple deck maintenance. It also covers basic navigation awareness and safe working practices. The course builds discipline, teamwork, and confidence for beginners to perform essential deck duties safely and correctly.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Fc6ea347d4f694fd58e471a280f40f6f4?format=webp&width=800"
  },
  {
    title: "SERANG – SEAMANSHIP, NAVIGATION & ENGINE OPERATIONS (45 Days)",
    description: "Serang training teaches advanced deck skills, small-boat handling, basic navigation, and simple engine awareness. Candidates learn to supervise junior crew and support officers in deck operations. The course builds leadership and teamwork, preparing trainees to manage routine tasks and assist effectively during emergencies.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Fbae4b1ce487947a2bab2b19180de5669?format=webp&width=800"
  },
  {
    title: "STEWARD TRAINING (30 Days)",
    description: "Training teaches the basics of food service, cabin cleaning, table setup, and customer care on board ships. It includes hygiene practices, personal grooming, and safe use of catering equipment. The course prepares candidates to work professionally in galleys, mess rooms, and accommodation areas, ensuring good service and comfort for crew and passengers.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F29dc40ebb13e4441aec5dc94217a0930?format=webp&width=800"
  },
  {
    title: "ADVANCED FOOD SAFETY COURSE (2 Days)",
    description: "The Advanced Food Safety Course is an intensive training program designed to equip participants with in-depth knowledge of food hygiene, handling practices, and safety management systems. This course focuses on advanced concepts such as HACCP principles, contamination prevention, temperature control, personal hygiene, and regulatory compliance. Ideal for hospitality staff, catering professionals, and food industry workers, the training ensures that participants can identify risks, maintain high safety standards, and implement best practices to protect consumer health and meet industry requirements.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F119fa9aae53e4ab1b33ce2f70ba57e96?format=webp&width=800"
  },
  {
    title: "CRANE OPERATOR (5 Days)",
    description: "A Crane Operator is a trained professional responsible for safely operating different types of cranes used in construction, ports, industrial sites, and offshore environments. The role involves lifting, moving, and positioning heavy materials with precision while following strict safety procedures and load-handling guidelines. Crane operators must understand equipment controls, conduct pre-operation inspections, interpret signals from riggers, and comply with workplace safety standards. Proper training ensures efficient operations, accident prevention, and smooth workflow in any heavy-lifting environment.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F5e6efc6fcae9442e868fdfd95e3ed317?format=webp&width=800"
  },
  {
    title: "ENGINE ROOM RESOURCE MANAGEMENT (ERM) (5 Days)",
    description: "Focuses on teamwork, communication, decision-making, and safety practices in the engine room. It helps engineers coordinate tasks, manage workload, and prevent errors during machinery operations. By strengthening human-factor skills, the course improves the overall efficiency and safety of engine room operations. Trainees learn how to handle stress, maintain situational awareness, and respond quickly during machinery failures or emergencies.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Ff93874bb8ab04394bf957b0a7bd270fe?format=webp&width=800"
  },
  {
    title: "BRIDGE TEAM & RESOURCE MANAGEMENT (BTRM) (3 Days)",
    description: "Training teaches officers how to work together on the bridge through clear communication, proper watch keeping, and coordinated navigation. It focuses on safe use of bridge equipment, good decision-making, and maintaining situational awareness. The course helps officers manage routine and emergency bridge operations efficiently and prevent navigation errors.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Fe4b443b18a034d1d8478a50dc3a21056?format=webp&width=800"
  },
  {
    title: "INLAND ENGINE DRIVER (BELOW 750 KW) (30 Days)",
    description: "Training teaches the basic operation and maintenance of marine diesel engines and auxiliary systems on small inland vessels. Candidates learn simple checks, fault identification, and basic emergency repairs to keep machinery running safely. The course also covers safety rules, pollution prevention, documentation, and inland water regulations, preparing trainees to manage engine spaces on tugs, barges, and similar vessels.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F6a71382800f24d59a98915b2a7fdb2eb?format=webp&width=800"
  },
  {
    title: "INLAND NEAR COASTAL VESSEL CAPTAIN (BELOW 500 GRT) (60 Days)",
    description: "Training prepares candidates to operate and navigate small to medium inland and near-coastal vessels. It covers basic navigation, vessel handling, safety management, crew supervision, communication, and compliance with inland water regulations. The course enables trainees to command vessels safely during routine operations and emergencies.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F55cdaa4494f64ff8a7852b964ed0714b?format=webp&width=800"
  },
  {
    title: "OFFSHORE HELPER / ROUSTABOUT TRAINING (15 Days)",
    description: "Training teaches the basic skills needed to work safely on oil rigs and offshore platforms. It covers simple deck operations, equipment handling, rig housekeeping, and basic mechanical support. The course focuses strongly on safety practices, PPE use, hazard awareness, lifting safety, and emergency procedures. Trainees become job-ready to support rig crews, crane teams, and drilling operations.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Ff296c6713b31443dbd5bc8ffffed1e26?format=webp&width=800"
  },
  {
    title: "MARINE ELECTRICAL TRAINEE (30 Days)",
    description: "Training teaches the basics of shipboard electrical systems such as power generation, switchboards, motors, batteries, and control circuits. Trainees learn simple troubleshooting, preventive maintenance, and how to read electrical diagrams. The course also covers high-voltage safety, emergency power handling, and safe isolation procedures. It prepares candidates to manage electrical duties on various types of vessels in line with international standards.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F06c2b5305c6e485fac7108cc55fac3ca?format=webp&width=800"
  },
  {
    title: "OFFSHORE SUPERVISOR TRAINING (7 Days)",
    description: "Training teaches basic leadership and coordination skills for managing offshore work sites. Candidates learn simple planning, equipment allocation, workflow coordination, and permit-to-work procedures. The course also focuses on safety management, including risk assessment, hazard control, and emergency response. It prepares trainees to lead teams and ensure safe, efficient operations in offshore environments.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F43f3de7bf1494c86a08bb275e31189ad?format=webp&width=800"
  },
  {
    title: "CONTAINER LASHING / SURVEY TRAINING (3 Days)",
    description: "Training gives trainees the essential skills to secure containers safely and inspect them for any damage. They learn how to identify faults, check structural condition, read CSC plates, and verify proper lashing. The course also covers safety rules, documentation, and coordination with port and shipping staff, preparing candidates to work in ports, container yards, and logistics areas.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F9ea211ebb7a54892ba7fed0a2ed4f4a0?format=webp&width=800"
  },
  {
    title: "WIPER / ENGINE ROOM OILER (30 Days)",
    description: "Training teaches beginners how to support daily engine room operations. Trainees learn basic lubrication work, bilge handling, machinery checks, and cleaning routines, along with assisting engineers in simple maintenance. The course also covers watch keeping, safety rules, fire fighting basics, and pollution control, helping them build a foundation for future roles like Motorman or Marine Engineer.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F87fb9a891cd14175b23d1adc4a021b91?format=webp&width=800"
  },
  {
    title: "ORDINARY SEAMAN – ABLE BODIED – BOSUN (30 Days)",
    description: "This is a progressive deck-rating training pathway. Trainees start as Ordinary Seamen, learning basic seamanship like rope work, deck maintenance, and watch keeping. At the AB (Able Seaman) level, they perform advanced deck duties such as mooring, cargo operations, and lookout responsibilities. The Bosun stage prepares them for a supervisory role, leading deck crew, managing maintenance tasks, and ensuring safe deck operations.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F48baf9b103aa49a5a93f0eb50ff35070?format=webp&width=800"
  },
  {
    title: "LIGHT VESSELS / LAUNCH STEERING TEST (2 Days)",
    description: "Training teaches candidates how to steer and handle small boats and harbour launches. It covers basic navigation, simple manoeuvring, mooring, radio communication, and avoiding collisions. Trainees also learn weather awareness, use of safety equipment, and how to respond to emergencies, ensuring safe operation of small vessels in ports and coastal waters.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F695e693fd1bc4ef088af6d6b79e7251a?format=webp&width=800"
  },
  {
    title: "LIFTING & RIGGING WITH SCAFFOLDING – LEVEL 1-2 (7 Days)",
    description: "Training teaches safe use, inspection, and selection of slings, shackles, chains, and lifting tools. It includes basic load calculations, communication signals, and teamwork during lifting jobs. Trainees also learn simple scaffolding assembly, working-at-height safety, and basic banksman duties. The course builds strong safety awareness and prepares workers to handle lifting and scaffolding tasks in marine, offshore, and industrial environments.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Ff1180778a3ab4c90ae891a6579a0e28d?format=webp&width=800"
  },
  {
    title: "OFFSHORE OIL FIELD ASSISTANT TRAINING (30 Days)",
    description: "Training teaches basic skills for supporting maintenance and deck operations on oil rigs and offshore platforms. Trainees learn simple tool handling, worksite organization, and how to assist technicians and engineers. The course strongly covers safety practices, PPE use, hazard awareness, fire safety, and emergency procedures. It prepares candidates for entry-level roles in offshore rigs, subsea work, and drilling operations.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Fb1cb1d565108493d85dcd4b30f6b1fb6?format=webp&width=800"
  },
  {
    title: "FABRICATION – FITTER – WELDER (30 Days)",
    description: "Training teaches the basics of metal cutting, grinding, fitting, and simple welding tasks. Trainees learn fundamental pipe layout, joint preparation, and fitting techniques commonly used in shipyards and offshore projects. The course also includes safe tool handling, material movement, blueprint reading, and basic blasting methods. It prepares candidates to assist skilled technicians in fabrication, ship repair, and industrial maintenance.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F90353040a81c4ec6aef4d188404811d6?format=webp&width=800"
  },
  {
    title: "ENVIRONMENTAL AWARENESS – PPE (2 Days)",
    description: "Training teaches workers how to protect the environment and use Personal Protective Equipment safely. It covers pollution prevention, waste handling, safe work practices, and choosing the right PPE for different tasks. The course helps trainees work responsibly while keeping themselves and the environment safe.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Fb7bf9f4a2a5a478a98275547a6231b09?format=webp&width=800"
  },
  {
    title: "HELICOPTER LANDING TEAM MEMBER (2 Days)",
    description: "A Helicopter Landing Team Member (HLM) is a specialized crew member trained to assist in the safe landing and takeoff of helicopters on ships or offshore installations. They are responsible for coordinating between the helicopter pilot and the ship's deck crew, ensuring that landing operations are conducted efficiently and safely. Their duties include preparing and securing the landing area, signaling the pilot using approved hand or light signals, monitoring deck conditions, and managing safety equipment such as nets, fire-fighting gear, and communication devices. HLMs are also trained in emergency procedures, such as assisting in helicopter crash scenarios, handling fuel spills, and performing first aid if required. This role demands a high level of alertness, precise coordination, and familiarity with both maritime operations and aviation safety standards to minimize risks during helicopter operations at sea.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F88d2de07bb3740f08bdd277cdcdbf3e3?format=webp&width=800"
  },
  {
    title: "CV WRITING - EMIGRATION – MIGRATION - NORKA - RPSL JOB RECRUITING (RAS) STUDIES (1 Day)",
    description: "CV writing plays a crucial role in emigration, migration, and NORKA-related processes, as a well-structured resume helps candidates present their qualifications professionally for overseas opportunities. For RPSL job recruiting under the Recruitment and Placement Services (RAS) system, a proper CV is essential to meet international standards and employer expectations. Whether applying for foreign studies, skilled employment abroad, or migration support through government agencies, a strong and accurate resume increases the chances of approval and successful placement.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F23bd6ab500084753b24775f684ff9c5c?format=webp&width=800"
  },
  {
    title: "DRUG AND ALCOHOL POLICY AWARENESS COUNSELLING (120 Hrs. Online)",
    description: "Drug and Alcohol Policy Awareness Counselling is designed to educate individuals about the risks, consequences, and workplace regulations related to substance use. This counselling helps participants understand organizational policies, legal requirements, and safety standards that prohibit drug and alcohol misuse, especially in high-risk industries like marine, offshore, and industrial sectors. It promotes responsible behavior, supports a safe working environment, and guides individuals toward healthy choices while ensuring full compliance with company and government guidelines.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Fd65e6a45f44845dd8ece628f539e0102?format=webp&width=800"
  },
  {
    title: "CRUISER SERVICE SECTION (6 Months)",
    description: "This department is responsible for providing high-quality hospitality and guest services on a cruise ship. It ensures passenger comfort by handling housekeeping, food and beverage service, cabin management, guest assistance, cleanliness, and overall customer care throughout the voyage. It plays a key role in maintaining luxury service standards and ensuring a pleasant experience for all guests on board.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F54fb63fe443646f2a910fd6ca441bc0f?format=webp&width=800"
  },
  {
    title: "A CULINARY CHEF (6 Months)",
    description: "A Culinary Chef is a trained professional who prepares, cooks, and presents food in kitchens such as restaurants, hotels, and cruise ships. They plan menus, manage kitchen operations, ensure food quality, maintain hygiene standards, and create dishes with skill and creativity.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F7ef24db7f716437983a6b5173a64ea6d?format=webp&width=800"
  },
  {
    title: "ELECTRO TECHNICAL & INSTRUMENTATION OPERATOR (ETIO) (6 Month Course)",
    description: "Training candidates in the basic electrical, electronic, and instrumentation skills required on ships and offshore units. The course covers electrical safety, circuit basics, motor controls, navigation/communication equipment handling, and routine maintenance of shipboard electrical systems. After completion, candidates can work as assistants/trainees supporting marine electricians, ETOs, and technical teams on vessels and offshore installations.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F56fb51754dd748a4ab17c7db172d738f?format=webp&width=800"
  },
  {
    title: "CATERING FOOD SAFETY - COMMI SERVICE (6 Month Course)",
    description: "This course trains students in basic kitchen operations, food safety, and safe handling practices required in hotels, cruise ships, and offshore catering. It includes personal hygiene, kitchen sanitation, safe food storage, knife skills, basic cooking, serving techniques, and PPE usage. After completion, candidates can work as Commi -III / kitchen assistants in hospitality and marine catering departments.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Fd3b26b76909645daa958eea88b37d16c?format=webp&width=800"
  },
  {
    title: "LOGISTICS & SUPPLY CHAIN (6 Month Course)",
    description: "This course provides basic training in transportation, warehousing, inventory control, and cargo handling. Students learn how goods move from suppliers to customers, including packing, documentation, tracking, storage, and distribution processes. After completion, candidates can work in logistics companies, warehouses, shipping agencies, courier services, and supply chain operations as entry-level assistants.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Fe0bfc9f678b144e8aa77ed29028f2f17?format=webp&width=800"
  },
  {
    title: "SHIPPING IT COMMUNICATION (6 Month Course)",
    description: "This course provides basic skills in maritime communication systems and IT support used in shipping companies and vessels. It covers email/VSAT operations, data transfer, documentation software, E-log systems, vessel tracking tools, and on board communication protocols. After completion, candidates can assist in IT support, communication handling, and digital documentation in shipping offices and shipboard operations.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F2b6ed2a94adb4504a904da0088baa33e?format=webp&width=800"
  },
  {
    title: "ACCOUNTS & CHARTER OPERATIONS (6 Month Course)",
    description: "This course provides an introduction to shipping accounts, chartering basics, freight calculations, and vessel hire operations. Students learn documentation, invoicing, port disbursements, charter-party terms, lay time calculations, and financial procedures used in shipping companies. After completion, candidates can assist in accounts departments, charter desks, and shipping operations offices at entry level.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F9ea211ebb7a54892ba7fed0a2ed4f4a0?format=webp&width=800"
  },
  {
    title: "DIPLOMA IN NAUTICAL ENGINEERING SKILL (1 Year)",
    description: "A skill-based Diploma in Nautical Engineering trains students in the practical and technical skills required to work on ships. The course covers basic ship operations, navigation foundation, seamanship, safety procedures, marine machinery handling, engine room support, and maritime rules. It prepares candidates for entry-level roles on merchant ships, offshore vessels, and port operations with strong hands-on training and industry-focused skills.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F26de2b400cdd4ca98e3a4089c3dcdc40?format=webp&width=800"
  },
  {
    title: "MARINE ENGINEERING – ENGINE DRIVER (1 Year)",
    description: "The Engine Driver course trains candidates to operate, maintain, and troubleshoot small to medium marine engines on boats, tugs, fishing vessels, and coastal craft. It covers engine basics, fuel systems, cooling systems, safety procedures, emergency handling, and routine maintenance. This course prepares learners to work as engine operators or assistants in coastal and inland marine operations.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Fd7510a0513ca4fdc916290fc1635cce5?format=webp&width=800"
  },
  {
    title: "CABIN CREW SERVICE (1 Year)",
    description: "Cabin Crew Service trains candidates to work as flight attendants, focusing on passenger safety, in-flight service, communication skills, emergency procedures, first aid, and hospitality. The course prepares learners to maintain comfort, safety, and professional service on board commercial airlines.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Fcf4e80b0099a4ec58a3c2243e4ef1893?format=webp&width=800"
  },
  {
    title: "PORT OPERATION (1 Year)",
    description: "Port Operation trains candidates in the essential skills needed to manage cargo movement, vessel berthing, port safety, documentation, equipment handling, and coordination between ships, trucks, and warehouses. It prepares learners for entry-level roles in port logistics, terminal operations, and harbour management.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F1c6fc186b1674f409cfd97834d08829f?format=webp&width=800"
  },
  {
    title: "SAFETY & SECURITY OFFICER (1 Year)",
    description: "Safety & Security training teaches the basics of workplace protection, emergency response, hazard prevention, access control, surveillance, and safe operating procedures. It prepares candidates to maintain a secure environment, respond to risks, and ensure the safety of people, equipment, and facilities across various industries.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F738618a94e3d4606beca966eba53076c?format=webp&width=800"
  },
  {
    title: "MARITIME CYBER IT SECURITY (1 Year)",
    description: "Maritime Cyber IT Security focuses on protecting ships, ports, and marine operations from cyber threats. The course covers cyber risks in navigation systems, communication networks, engine control systems, and port management software. It trains candidates to detect vulnerabilities, prevent cyber-attacks, follow IMO cyber guidelines, and maintain safe and secure digital maritime operations.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F2a5714e6062f42748a0bc964c00d10d1?format=webp&width=800"
  },
  {
    title: "MARITIME MBA PROGRAMMES (2 Years)",
    description: "Maritime MBA programmes focus on management skills specifically for the shipping and logistics industry. They cover port management, ship operations, maritime law, logistics, supply chain, international trade, finance, and leadership. The course prepares candidates for managerial roles in shipping companies, ports, marine logistics, offshore operations, and global maritime businesses.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F6137085656354314bc2afaa2a966b31e?format=webp&width=800"
  },
  {
    title: "MARITIME LAW & COMMERCE (2 Years)",
    description: "Focuses on the legal and commercial aspects of shipping and international trade. The course covers ship ownership, contracts, marine insurance, cargo claims, chartering, port regulations, and dispute handling. It prepares candidates to understand legal responsibilities and commercial operations within the global maritime industry.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Fa71cddcd8adc442f9fb57330aa5f8c26?format=webp&width=800"
  },
  {
    title: "MECHANICAL ENGINEER – ENGINE OPERATION (2 Years)",
    description: "Mechanical Engineer–Engine Operation teaches the fundamentals of operating, monitoring, and maintaining engines used in industrial, automotive, and marine sectors. The course covers engine systems, lubrication, cooling, troubleshooting, safety procedures, and performance checks. It prepares candidates to handle engine operations confidently and ensure smooth, efficient machinery performance.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F82b05f0b5a2643cba7403d48042fbedc?format=webp&width=800"
  },
  {
    title: "OIL FIELD FLOOR MANAGER (2 Years)",
    description: "An Oil Field Floor Manager oversees daily drilling-floor operations at oil and gas rigs. The role includes supervising crew activities, ensuring safe handling of drilling equipment, coordinating workflow, maintaining safety standards, and assisting in troubleshooting down hole or equipment issues. The course prepares candidates to manage rig-floor tasks efficiently, safely, and in compliance with industry procedures.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F21396b9e696042b28cf97a9b24bf2863?format=webp&width=800"
  },
  {
    title: "RIG PLATFORM SUPERVISOR (2 Years)",
    description: "A Rig Platform Supervisor manages overall operations on an offshore rig platform, including crew supervision, safety compliance, equipment monitoring, and coordination of drilling or production activities. The role ensures smooth workflow, addresses operational issues, and maintains strict safety and environmental standards on the platform.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F9675d520454e4b8080c2ae9197d843e0?format=webp&width=800"
  },
  {
    title: "OFFSHORE – YACHT CHIEF ENGINEER (3000 KW) (2 Years)",
    description: "This programme trains candidates to become competent chief engineers on offshore and private yachts up to 1500 kW power. It covers marine diesel engines, auxiliary machinery, electrical systems, fuel systems, hydraulics, cooling systems, and preventive maintenance. Students learn troubleshooting, engine overhauling, machinery operation, safety procedures, pollution control, and technical documentation. The course prepares trainees to manage the entire engine room, ensure safe yacht operations, and lead engineering teams on offshore and luxury yachts.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F7a0bba44ab784bc2a126128f2be49ebb?format=webp&width=800"
  },
  {
    title: "OFFSHORE – YACHT MASTER (3000 GRT) (2 Years)",
    description: "This programme trains candidates to become professional offshore yacht operators capable of handling private, commercial, and charter yachts. It covers navigation, seamanship, yacht handling, safety management, COLREGS, weather reading, coastal/offshore sailing, radio operations, and engine basics. Trainees learn watch keeping, anchoring, docking, trip planning, emergency procedures, and international yacht operations. The course prepares students for duties as a Yacht Master, enabling them to operate and manage yachts in coastal and offshore waters with strong safety and leadership skills.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Fd7510a0513ca4fdc916290fc1635cce5?format=webp&width=800"
  }
]

export default function ValueAddedCoursesPage() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogData, setDialogData] = useState<DetailDialogData | null>(null)

  const openDetails = (course: { title: string; description: string; image: string }) => {
    const contactMessage = `Inquiry about ${course.title}: Please share syllabus, next batch dates, fees, and prerequisites.`
    setDialogData({ title: course.title, description: course.description, image: course.image, contactMessage })
    setDialogOpen(true)
  }

  return (
    <div className="bg-page-white">
      <div className="relative w-full overflow-hidden bg-center bg-cover" style={{ backgroundImage: "url('https://images.pexels.com/photos/33689/ship-boat-lake-garda-italy.jpg')", minHeight: "420px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center" }}>
        <div className="h-[260px] w-full md:h-[360px] grid place-items-center relative z-10">
          <h1 className="text-center text-5xl font-black md:text-6xl leading-tight heading-premium text-white">
            Value Added Courses
          </h1>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 bg-page-white">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-black md:text-4xl mb-4 leading-tight heading-premium text-primary-cyan">
            Professional Maritime Training Programs
          </h2>
          <p className="text-base leading-relaxed md:text-lg body-premium">
            Comprehensive skill development courses covering deck operations, engine room management, hospitality services, offshore operations, and advanced maritime specializations.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <Card key={i} className="overflow-hidden border-0 shadow-md transition hover:-translate-y-1 hover:shadow-lg group" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
              <div className="h-40 w-full overflow-hidden">
                <ParallaxImage src={course.image} alt={course.title} className="h-full w-full" intensity={0.12} zoom={0.06} />
              </div>
              <CardContent className="p-5 flex flex-col flex-grow min-h-[140px]">
                <h3 className="mb-2 text-base font-bold uppercase heading-premium text-primary-cyan break-words">
                  {course.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-dark-secondary flex-grow overflow-hidden line-clamp-2">
                  {course.description}
                </p>
                <div className="mt-2">
                  <button className="w-full font-semibold py-2 rounded transition-all uppercase btn-primary" onClick={() => openDetails(course)}>
                    View Detail
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center text-base body-premium">
          <p>Each course includes competency-based assessment, practical training, and industry-recognized certification. For detailed syllabus, batch schedules, and enrollment information, please contact our training team.</p>
        </div>
      </section>
      <DetailDialog open={dialogOpen} onOpenChange={setDialogOpen} data={dialogData} />
    </div>
  )
}
