import React from 'react'
import { Button } from 'react-scroll'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Colum2, ImgWrap, Img } from './ProjectsElements'


const ProjectsSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
            <InfoRow>
                <Column1>
                    <TextWrapper>
                        <TopLine>TopLine</TopLine>
                        <Heading>Heading</Heading>
                        <Subtitle>Subtitle</Subtitle>
                        <BtnWrap>
                            <Button />
                        </BtnWrap>
                    </TextWrapper>
                </Column1>
                <Colum2>
                    <ImgWrap>
                        <Img />
                    </ImgWrap>
                </Colum2>
            </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default ProjectsSection