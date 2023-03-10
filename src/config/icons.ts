import { ForwardRefExoticComponent, RefAttributes } from 'react';
import {
  AlaskaMooseIcon,
  AmericanBadgerIcon,
  AmericanBlackBearIcon,
  AnimalAgeIcon,
  AnimalSexFemaleIcon,
  AnimalSexGeneralIcon,
  AnimalSexMaleIcon,
  AnimalSpeciesIcon,
  AnimalTrophyIcon,
  BarrenGroundCaribouIcon,
  BighornSheepIcon,
  BrownBearIcon,
  CabinIcon,
  CampIcon,
  ChamoisIcon,
  DrinkZoneIcon,
  EatZoneIcon,
  EchoIcon,
  ElkIcon,
  EurasianBadgerIcon,
  EuropeanHareIcon,
  FallowDeerIcon,
  FlowerIcon,
  GoldenJackalIcon,
  GrayWolfIcon,
  GreylagGooseIcon,
  HuntingStandIcon,
  IconProps,
  KodiakBearIcon,
  LesserScaupIcon,
  LodgeIcon,
  MarkerExplorationIcon,
  MarkerLevelAreaIcon,
  MarkerTrackingIcon,
  MooseIcon,
  MouflonIcon,
  MountainGoatIcon,
  MuleDeerIcon,
  ParkingIcon,
  PheasantIcon,
  PhotoIcon,
  RacingIcon,
  RatingIcon,
  RedDeerIcon,
  RedFoxIcon,
  RoeDeerIcon,
  RoosveltElkIcon,
  RossGooseIcon,
  ShootingRangeIcon,
  ShowshoeHareIcon,
  SitkaDeerIcon,
  SleepZoneIcon,
  SurfScoterIcon,
  ViewIcon,
  WhiteTailedDeerIcon,
  WildBoarIcon,
  WildDuckIcon,
  WoodBisonIcon,
} from 'components/Icon';
import { MarkerType } from 'types/markers';

// Map of icon types and their respective icon components
export const iconComponentMap = new Map<
  MarkerType,
  ForwardRefExoticComponent<IconProps & RefAttributes<HTMLDivElement>>
>([
  ['age', AnimalAgeIcon],
  ['animal:alaska moose', AlaskaMooseIcon],
  ['animal:american badger', AmericanBadgerIcon],
  ['animal:american black bear', AmericanBlackBearIcon],
  ['animal:barren-ground caribou', BarrenGroundCaribouIcon],
  ['animal:bighorn sheep', BighornSheepIcon],
  ['animal:brown bear', BrownBearIcon],
  ['animal:chamois', ChamoisIcon],
  ['animal:elk', ElkIcon],
  ['animal:eurasian badger', EurasianBadgerIcon],
  ['animal:european hare', EuropeanHareIcon],
  ['animal:fallow deer', FallowDeerIcon],
  ['animal:golden jackal', GoldenJackalIcon],
  ['animal:gray wolf', GrayWolfIcon],
  ['animal:greylag goose', GreylagGooseIcon],
  ['animal:kodiak bear', KodiakBearIcon],
  ['animal:lesser scaup', LesserScaupIcon],
  ['animal:moose', MooseIcon],
  ['animal:mouflon', MouflonIcon],
  ['animal:mountain goat', MountainGoatIcon],
  ['animal:mule deer', MuleDeerIcon],
  ['animal:pheasant', PheasantIcon],
  ['animal:red deer', RedDeerIcon],
  ['animal:red fox', RedFoxIcon],
  ['animal:roe deer', RoeDeerIcon],
  ['animal:roosevelt elk', RoosveltElkIcon],
  ['animal:ross goose', RossGooseIcon],
  ['animal:snowshoe hare', ShowshoeHareIcon],
  ['animal:sitka deer', SitkaDeerIcon],
  ['animal:surf scoter', SurfScoterIcon],
  ['animal:white-tailed deer', WhiteTailedDeerIcon],
  ['animal:wild boar', WildBoarIcon],
  ['animal:wild duck', WildDuckIcon],
  ['animal:wood bison', WoodBisonIcon],
  ['cabin', CabinIcon],
  ['camp', CampIcon],
  ['echo', EchoIcon],
  ['flower', FlowerIcon],
  ['hunting stand', HuntingStandIcon],
  ['lodge', LodgeIcon],
  ['marker:exploration', MarkerExplorationIcon],
  ['marker:level area', MarkerLevelAreaIcon],
  ['marker:tracking', MarkerTrackingIcon],
  ['parking', ParkingIcon],
  ['photo', PhotoIcon],
  ['racing', RacingIcon],
  ['rating', RatingIcon],
  ['sex:female', AnimalSexFemaleIcon],
  ['sex:generic', AnimalSexGeneralIcon],
  ['sex:male', AnimalSexMaleIcon],
  ['shooting range', ShootingRangeIcon],
  ['species', AnimalSpeciesIcon],
  ['trophy', AnimalTrophyIcon],
  ['view', ViewIcon],
  ['zone:drink', DrinkZoneIcon],
  ['zone:eat', EatZoneIcon],
  ['zone:sleep', SleepZoneIcon],
]);
