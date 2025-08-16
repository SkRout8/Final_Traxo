import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Contact from "./components/pages/Contact";
import NavbarTraxo from "./components/NavbarTraxo";
import CustomerCare from "./components/pages/CustomerCare";
import DealerCenter from "./components/pages/DealerCenter";
import Manufacture from "./components/pages/Manufacture";
import SimNetworks from "./components/pages/SimNetworks";
import VLTDBackends from "./components/pages/VLTDBackends";
import Downloads from "./components/pages/Downloads";
import Logins from "./components/pages/Logins";
import OurStory from "./components/pages/OurStory";
import OurStrengths from "./components/pages/OurStrengths";
import OurInfrastructure from "./components/pages/OurInfrastructure";
import MarketPresence from "./components/pages/MarketPresence";
import OurMission from "./components/pages/OurMission";
import OurVision from "./components/pages/OurVision";
import CircuitDesign from "./components/pages/CircuitDesign";
import PCBLayout from "./components/pages/PCBLayout";
import Prototyping from "./components/pages/Prototyping";
import SmallBatchManufacturing from "./components/pages/SmallBatchManufacturing";
import ConcepttoProduction from "./components/pages/ConcepttoProduction";
import TestingValidation from "./components/pages/TestingValidation";
import CustomSolution from "./components/pages/CustomSolution";
import InnovationProjects from "./components/pages/InnovationProjects";
import VehicleTrackingDevices from "./components/pages/VehicleTrackingDevices";
import OBDIITelematics from "./components/pages/OBDIITelematics";
import DashCameras from "./components/pages/DashCameras";
import SmartParkingSystems from "./components/pages/SmartParkingSystems";
import IndustrialIoTDevices from "./components/pages/IndustrialIoTDevices";
import RoboticsAGVs from "./components/pages/RoboticsAGVs";
import AutonomousVehicleSystems from "./components/pages/AutonomousVehicleSystems";
import RoboticDeliveryVehicles from "./components/pages/RoboticDeliveryVehicles";
import InVehicleRobotics from "./components/pages/InVehicleRobotics";
import AGVsandAMRs from "./components/pages/AGVsandAMRs";
import TeleoperationDevices from "./components/pages/TeleoperationDevices";
import SurveillanceDefenseRobotics from "./components/pages/SurveillanceDefenseRobotics";
import CertificateDocuments from "./components/pages/CertificateDocuments";
import ConceptRequirmentDefination from "./components/pages/ConceptRequirmentDefination";
import HardwareDesign from "./components/pages/HardwareDesign";
import FirmwareDevelopment from "./components/pages/FirmwareDevelopment";
import ConnectivityNetworking from "./components/pages/ConnectivityNetworking";
import CloudBackendApi from "./components/pages/CloudBackendApi";
import FrontendMobileApp from "./components/pages/FrontendMobileApp";
import SecurityEnginnering from "./components/pages/SecurityEnginnering";
import CertificationCompliance from "./components/pages/CertificationCompliance";
import Cameras from "./components/pages/Cameras";
import RaderLidar from "./components/pages/RaderLidar";
import UltrasonicSensors from "./components/pages/UltrasonicSensors";
import GpsImu from "./components/pages/GpsImu";
import EmbeddedSystem from "./components/pages/EmbeddedSystem";
import AiComputerVision from "./components/pages/AiComputerVision";
import AsiVltd from "./components/pages/AsiVltd";
import VechileCamereSystem from "./components/pages/VechileCamereSystem";
import AIS140 from "./components/pages/AIS140";
import VehicleCameraSystem from "./components/pages/VehicleCameraSystem";
import OBDII from "./components/pages/OBDII";
import AutoFireMeter from "./components/pages/AutoFireMeter";
import RadarLidar from "./components/pages/RadarLidar";
import GPSIMUU from "./components/pages/GPSIMUU";
import UltrasonicSensorss from "./components/pages/UltrasonicSensorss";
import M2MeSIM from "./components/pages/M2MeSIM";
import V2XCommunication from "./components/pages/V2XCommunication";


function App() {
  return (
    <div>

      <NavbarTraxo />
      <Routes>
        {/* ===== Main Nav ===== */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/manufacture" element={<Manufacture />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/dealer" element={<DealerCenter />} />
        <Route path="/customercare" element={<CustomerCare />} />

        {/* ===== Top Nav ===== */}
        <Route path="/CertificateDocuments" element={<CertificateDocuments />} />
        <Route path="/sim-networks" element={<SimNetworks />} />
        <Route path="/vltd-backends" element={<VLTDBackends />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/login" element={<Logins />} />

        {/* ===== About Subpages ===== */}
        <Route path="/about/our-story" element={<OurStory />} />
        <Route path="/about/our-strengths" element={<OurStrengths />} />
        <Route path="/about/our-infrastructure" element={<OurInfrastructure />} />
        <Route path="/about/market-presence" element={<MarketPresence />} />
        <Route path="/about/our-mission" element={<OurMission />} />
        <Route path="/about/our-vision" element={<OurVision />} />

        {/* ===== Manufacture Subpages ===== */}
        <Route path="/manufacture/circuit-design" element={<CircuitDesign />} />
        <Route path="/manufacture/pcb-layout" element={<PCBLayout />} />
        <Route path="/manufacture/prototyping" element={<Prototyping />} />
        <Route path="/manufacture/small-batch-manufacturing" element={<SmallBatchManufacturing />} />
        <Route path="/manufacture/concept-to-production" element={<ConcepttoProduction />} />
        <Route path="/manufacture/testing-validation" element={<TestingValidation />} />
        <Route path="/manufacture/custom-solution" element={<CustomSolution />} />
        <Route path="/manufacture/innovation-projects" element={<InnovationProjects />} />

        {/* ===== Services: IoT Device Manufacturing ===== */}
        <Route path="/services/iot-device-manufacturing/vehicle-tracking-devices" element={<VehicleTrackingDevices />} />
        <Route path="/services/iot-device-manufacturing/obd-ii-telematics" element={<OBDIITelematics />} />
        <Route path="/services/iot-device-manufacturing/dash-cameras" element={<DashCameras />} />
        <Route path="/services/iot-device-manufacturing/smart-parking-systems" element={<SmartParkingSystems />} />
        <Route path="/services/iot-device-manufacturing/industrial-iot-devices" element={<IndustrialIoTDevices />} />
        <Route path="/services/iot-device-manufacturing/robotics-agvs" element={<RoboticsAGVs />} />

        {/* ===== Services: Vehicle Robotics Device Manufacturer ===== */}
        <Route path="/services/vehicle-robotics-device-manufacturer/autonomous-vehicle-systems" element={<AutonomousVehicleSystems />} />
        <Route path="/services/vehicle-robotics-device-manufacturer/robotic-delivery-vehicles" element={<RoboticDeliveryVehicles />} />
        <Route path="/services/vehicle-robotics-device-manufacturer/in-vehicle-robotics" element={<InVehicleRobotics />} />
        <Route path="/services/vehicle-robotics-device-manufacturer/agvs-amrs" element={<AGVsandAMRs />} />
        <Route path="/services/vehicle-robotics-device-manufacturer/teleoperation-devices" element={<TeleoperationDevices />} />
        <Route path="/services/vehicle-robotics-device-manufacturer/surveillance-defense-robotics" element={<SurveillanceDefenseRobotics />} />


        {/* ===== Services: Vehicle Robotics Device Manufacturer ===== */}
        <Route path="/services/IoT-Product-Design-&-Engineering/Concept-&-Requirement-Definition" element={<ConceptRequirmentDefination />} />
        <Route path="/services/IoT-Product-Design-&-Engineering/Hardware-Design" element={<HardwareDesign />} />
        <Route path="/services/IoT-Product-Design-&-Engineering/Firmware-Development" element={<FirmwareDevelopment />} />
        <Route path="/services/IoT-Product-Design-&-Engineering/Connectivity-&-Networking" element={<ConnectivityNetworking />} />
        <Route path="/services/IoT-Product-Design-&-Engineering/Cloud-Backend-&-API" element={<CloudBackendApi />} />
        <Route path="/services/IoT-Product-Design-&-Engineering/Frontend-&-Mobile-App" element={<FrontendMobileApp />} />
        <Route path="/services/IoT-Product-Design-&-Engineering/Testing-&-Validation" element={<TestingValidation />} />
        <Route path="/services/IoT-Product-Design-&-Engineering/Security-Engineering" element={<SecurityEnginnering />} />
        <Route path="/services/IoT-Product-Design-&-Engineering/Certification-&-Compliance" element={<CertificationCompliance />} />

        {/* ===== Services: Advanced-Driver-Assistance-System ===== */}
        <Route path="/services/Advanced-Driver-Assistance-System/Cameras" element={<Cameras />} />
        <Route path="/services/Advanced-Driver-Assistance-System/Radar-&-LIDAR" element={<RaderLidar />} />
        <Route path="/services/Advanced-Driver-Assistance-System/Ultrasonic-Sensors" element={<UltrasonicSensors />} />
        <Route path="/services/Advanced-Driver-Assistance-System/GPS-IMU" element={<GpsImu />} />
        <Route path="/services/Advanced-Driver-Assistance-System/Embedded-Systems" element={<EmbeddedSystem />} />
        <Route path="/services/Advanced-Driver-Assistance-System/AI-&-Computer-Vision" element={<AiComputerVision />} />

        <Route path="/products/hardware/ais-140-vltd" element={<AIS140/>} />
        <Route path="/products/hardware/vehicle-camera-system" element={<VehicleCameraSystem/>} />
        <Route path="/products/hardware/obd-ii-telematics" element={<OBDII/>} />
        <Route path="/products/hardware/auto-fire-meter" element={<AutoFireMeter />} />
        <Route path="/products/hardware/smart-parking-systems" element={<SmartParkingSystems />} />
        <Route path="/products/hardware/radar-lidar" element={<RadarLidar />} />
        <Route path="/products/hardware/gps-imu" element={<GPSIMUU/>} />
        <Route path="/products/hardware/ultrasonic-sensors" element={<UltrasonicSensorss />} />
        <Route path="/products/hardware/m2m-esim-manufacturing" element={<M2MeSIM />} />
        <Route path="/products/hardware/v2x-communication" element={<V2XCommunication />} />

        {/* ===== Products :Hardware===== */}
        <Route path="/products/hardware/ais-140-vltd" element={<AsiVltd />} />
        <Route path="/products/hardware/vehicle-camera-system" element={<VechileCamereSystem />} />

        {/* ===== Products :Software===== */}


      </Routes>



    </div>
  );
}

export default App;
