import React from 'react';
import styled from 'styled-components';
import ButtonBookmark from '../ButtonBookmark/ButtonBookmark';
import Typography from '../Typography/Typography';

type Card = {
  title: string;
  genres: string[];
  description: string;
  rating: number;
  imageUrl: string;
};

type CardProps = {
  content: Card;
  display: 'regular' | 'compact' | 'compactWide';
};

export default function Card({ content, display }: CardProps): JSX.Element {
  const { title, genres, description, rating, imageUrl } = content;

  return (
    <CardContainer display={display}>
      <ImageContainer>
        <Image src={imageUrl}></Image>
        <ButtonBookmark />
      </ImageContainer>
      <InfoContainer>
        <Typography type="h2">{title}</Typography>
        <Rating>{rating}</Rating>
        <Genres>{genres.join(', ')}</Genres>
        <Description>{description}</Description>
      </InfoContainer>
    </CardContainer>
  );
}

const CardContainer = styled.article<Partial<CardProps>>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.display === 'regular' ? '1fr 1fr' : '1fr'};
`;

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 15px;
`;

const ImageContainer = styled.div`
  display: relative;
`;

const InfoContainer = styled.div``;

const Genres = styled.p``;

const Description = styled.p``;

const Rating = styled.div`
  background-color: magenta;
  height: 4px;
`;

const BookmarkButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  color: white;
  border: none;
`;
