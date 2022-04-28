import React from 'react'
import { Button } from '../ButtonElemens'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Colum2, ImgWrap, Img } from './ProjectsElements'


const ProjectsSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt  }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <BtnWrap>
                            <Button to='home'>
                              {buttonLabel}
                            </Button>
                        </BtnWrap>
                    </TextWrapper>
                </Column1>
                <Colum2>
                    <ImgWrap>
                        <Img src={img} alt={alt} />
                    </ImgWrap>
                </Colum2>
            </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default ProjectsSection