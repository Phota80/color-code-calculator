import React from 'react';
import {
  shape,
  string,
  func,
} from 'prop-types';
import { capitalize } from 'lodash';

import {
  significantFiguresMap,significantFiguresMap1,
  multiplierMap,
  toleranceMap,
} from '../utilities';
import Select from '../Select';
import './style.css';

const getOptions = colorMap => Object.keys(colorMap)
  .map(color => ({ value: color, primaryText: capitalize(color) }));

const baseBandColorConfig = [
  {
    key: 'bandAColor',
    label: '1st Band',
    colorMap: significantFiguresMap1,
  },
  {
    key: 'bandBColor',
    label: '2nd Band',
    colorMap: significantFiguresMap,
  },
  {
    key: 'bandCColor',
    label: 'Multiplier',
    colorMap: multiplierMap,
  },
  {
    key: 'bandDColor',
    label: 'Tolerance',
    colorMap: toleranceMap,
  },
];

const BandColorSelects = ({
  bandColorValues,
  setColorBand,
}) => {
  const getBandColorConfig = () => baseBandColorConfig
    .map(({ key, colorMap, ...rest }) => ({
      key,
      value: bandColorValues[key],
      onChange: (evt, index, value) => setColorBand(key, value),
      options: getOptions(colorMap),
      ...rest,
    }));

  const renderBandColorSelects = () => getBandColorConfig()
    .map(configItem => <Select {...configItem} />);

  return <div className="band-color-selects">{renderBandColorSelects()}</div>;
};

BandColorSelects.propTypes = {
  bandColorValues: shape({
    bandAColor: string,
    bandBColor: string,
    bandCColor: string,
    bandDColor: string,
  }).isRequired,
  setColorBand: func.isRequired,
};

export default BandColorSelects;
