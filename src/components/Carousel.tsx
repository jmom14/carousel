import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { next, previous, togglePlay } from '../features/control/controlSlice';
import styled from 'styled-components';
import nextIcon from '../static/icon/next.png';
import previousIcon from '../static/icon/previous.png';
import stopIcon from '../static/icon/stop.png';
import playIcon from '../static/icon/play.png';
import { Photo } from '../types';

interface CarouselProps {
  data: Photo[],
  delay?: number,
}

const Button = styled.button`
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  background-color: #fff;
  border: 1px solid #d4d8db;
  cursor: pointer;
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
`;

const ImageContainer = styled.img`
  width: 1000px;
  height: 700px;
  margin: 20px auto;
`;

const Icon = styled.img`
  width: 15px;
  height: 15px;
  margin: 0 5px;
`;

const Panel = styled.div`
  display: flex;
`;

const Carousel: React.FC<CarouselProps> = (props: CarouselProps) => {
  const isPlaying = useSelector((state: any) => state.control.isPlaying);
  const currentIndex = useSelector((state: any) => state.control.currentIndex);
  const dispatch = useDispatch();
  const { data, delay } = props;
  
  const dataLength = data.length;
  const time = (delay && delay * 1000) || 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      if(isPlaying){
       dispatch(next(data.length));
      }
    }, time);
    return () => clearInterval(interval);
  }, [isPlaying, data.length, time, data, dispatch]);

  if(!data.length) {
    return null;
  }

  return (
    <Wrapper>
      <ImageContainer src={data[currentIndex].url} className="carousel__container" />
      <Panel>
        <Button onClick={() => dispatch(previous(dataLength))}><Icon src={previousIcon}/>Prev</Button>
        <Button onClick={() => dispatch(togglePlay())}>{isPlaying ? "Stop" : "Play" }<Icon src={isPlaying ? stopIcon : playIcon} /></Button>
        <Button onClick={() => dispatch(next(dataLength))}>Next<Icon src={nextIcon} /></Button>
      </Panel>
    </Wrapper>
  );
};

export default Carousel;