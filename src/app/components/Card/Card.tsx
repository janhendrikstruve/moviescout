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
      <ImageContainer display={display}>
        <Image src={imageUrl} />
        <BookmarkButton>
          <ButtonBookmark />
        </BookmarkButton>
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
  gap: 10px;
  max-width: ${({ display }) => (display === 'compactWide' ? '300px' : '100%')};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageContainer = styled.div<Partial<CardProps>>`
  position: relative;
  width: 100%;
  height: ${({ display }) => (display !== 'compactWide' ? '273px' : '200px')};
  border-radius: 15px;
  overflow: hidden;
`;

const InfoContainer = styled.div``;

const Genres = styled.p``;

const Description = styled.p``;

const Rating = styled.div`
  background-color: magenta;
  height: 30px;
`;

const BookmarkButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  color: inherit;
  border: none;
`;
