import React from 'react'
import { Button } from 'react-scroll'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Colum2, ImgWrap, Img } from './ProjectsElements'


const ProjectsSection = () => {
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