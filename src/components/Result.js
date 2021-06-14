import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import device from '../responsive/Responsive';
import ForecastHour from './Forecast';
import ResultFadeIn from './FadeResult';

import { SmallLabel, MediumLabel, BigLabel } from './style';

const Results = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px 0;
  opacity: 0;
  visibility: hidden;
  position: relative;
  top: 20px;
  animation: ${ResultFadeIn} 0.5s 1.4s forwards;
`;

const LocationMain = styled.div`
  display: flex;
  align-items: center;
`;

const TemperatureMain = styled.div`
  display: flex;
  align-items: center;
`;

const ArrowBlinker = styled.div`
  font-size: 60px;
  font-weight: 600;
  animation: blinker 1s linear infinite;
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
  @media (max-width: 2560px) {
    font-size: 70px;
  }
  @media (max-width: 1440px) {
    font-size: 60px;
  }

  @media (max-width: 768px) {
    font-size: 25px;
  }

  @media (max-width: 375px) {
    font-size: 20px;
  }
`;

const Temperature = styled.h3`
  display: block;
  font-size: 50px;
  font-weight: 400;
  color: #ffffff;
  @media ${device.tablet} {
    font-size: 70px;
  }
  @media ${device.laptop} {
    font-size: 90px;
  }
  @media ${device.laptopL} {
    font-size: 110px;
  }
`;

const ForecastWrapper = styled.div`
  flex-basis: 100%;
  margin: 20px 0;
  overflow: hidden;
`;

const Forecast = styled.div`
  position: relative;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-color: lightgray #ffffff;
  scrollbar-width: thin;
  margin-top: 20px;
  padding-bottom: 20px;
  @media ${device.laptop} {
    order: 4;
  }
`;

const Result = ({ weather }) => {
  const { city, country, date, description, main, temp, forecast } = weather;

  const forecasts = forecast.map(item => (
    <ForecastHour
      key={item.dt}
      temp={Math.floor(item.main.temp * 1) / 1}
      icon={item.weather[0].icon}
      month={item.dt_txt.slice(5, 7)}
      day={item.dt_txt.slice(8, 10)}
      hour={item.dt_txt.slice(11, 13) * 1}
    />
  ));

  return (
    <Results>
      <LocationMain>
        <BigLabel style={{ color: 'black' }}>
          {city}, {country}
          <SmallLabel style={{ color: 'black' }} weight="600">
            {date}
          </SmallLabel>
        </BigLabel>
        <ArrowBlinker>&nbsp;&#8594;&nbsp;</ArrowBlinker>
        <TemperatureMain>
          <Temperature style={{ color: 'black' }}>{Math.floor(temp)}&#176;</Temperature>
          <SmallLabel style={{ color: 'black' }} weight="400" firstToUpperCase>
            {description}
          </SmallLabel>
        </TemperatureMain>
      </LocationMain>

      <ForecastWrapper>
        <MediumLabel style={{ color: 'black' }} weight="600">
          Next 5 days forecast
        </MediumLabel>
        <Forecast>{forecasts}</Forecast>
      </ForecastWrapper>
    </Results>
  );
};

Result.propTypes = {
  weather: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    main: PropTypes.string,
    temp: PropTypes.number,
    sunrise: PropTypes.string,
    sunset: PropTypes.string,
    humidity: PropTypes.number,
    wind: PropTypes.number,
    highestTemp: PropTypes.number,
    lowestTemp: PropTypes.number,
    forecast: PropTypes.array,
  }).isRequired,
};

export default Result;
