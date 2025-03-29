import React from 'react';
import GamingMice from './GamingMice';
import GamingHeadsets from './GamingHeadsets';
import GamingChairs from './GamingChairs';
import AudioHeadphones from './AudioHeadphones';
import NoiseCancel from './NoiseCancel';
import CameraMics from './CameraMics';
import UsbMics from './UsbMics';
import VlogCameras from './VlogCameras';
import VibrationPlatforms from './sport/VibrationPlatforms';
import SmartWatches from './sport/SmartWatches';
import DumbbellSets from './sport/DumbbellSets';
import InflatableSpas from './sport/InflatableSpas';
import HandBlenders from './cuisine/HandBlenders';
import IceCreamMakers from './cuisine/IceCreamMakers';
import StandMixers from './cuisine/StandMixers';
import CookingRobots from './cuisine/CookingRobots';
import CoffeeMachines from './cuisine/CoffeeMachines';
import Blenders from './cuisine/Blenders';
import StickVacuums from './maison/StickVacuums';
import RobotVacuums from './maison/RobotVacuums';
import WindowCleaningRobots from './maison/WindowCleaningRobots';
import AirConditioners from './maison/AirConditioners';
import Refrigerators from './maison/Refrigerators';

function Comparatif() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Comparatifs Détaillés et Meilleurs-notes</h1>
        <p className="text-xl text-gray-600">Trouvez le meilleur produit adapté à vos besoins</p>
      </div>

      <div className="mb-12">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Gaming</h2>
          <GamingMice />
          <GamingHeadsets />
          <GamingChairs />
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Audio</h2>
          <AudioHeadphones />
          <NoiseCancel />
          <CameraMics />
          <UsbMics />
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Vidéo</h2>
          <VlogCameras />
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Sport & Bien-être</h2>
          <VibrationPlatforms />
          <SmartWatches />
          <DumbbellSets />
          <InflatableSpas />
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Cuisine</h2>
          <HandBlenders />
          <IceCreamMakers />
          <StandMixers />
          <CookingRobots />
          <CoffeeMachines />
          <Blenders />
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Maison</h2>
          <StickVacuums />
          <RobotVacuums />
          <WindowCleaningRobots />
          <AirConditioners />
          <Refrigerators />
        </div>
      </div>
    </div>
  );
}

export default Comparatif;