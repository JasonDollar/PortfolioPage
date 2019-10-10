import React from 'react'
import styled from 'styled-components'

const ProjectContainer = styled.article`
  margin-bottom: 5rem;
  display: grid;
  gap: 4rem;
  grid-template-columns: 1fr;
  /* background-color: #fafafa; */
  /* border-radius: 8px; */

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;

    }

  & .projectImage {
    display: none;

    @media (min-width: 576px) {
      display: block;
      width: 100%;
      grid-column: 1 / 2;
    }
  }

`

const ProjectDetail = styled.section`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (min-width: 576px) {
    grid-column: 2 / 3;
  }

  .title {
    font-size: 3.2rem;
    margin: 0 0 2rem 0;
    line-height: 1;
    flex: 0;
  }

  .paragraph {
    font-size: 2rem;
    margin: 1rem 0;
    flex: 0;
  }

  .buttons {
    flex: 1;
    /* justify-self: flex-end; */
    display: flex;
    align-items: flex-end;
  }
`

const Link = styled.a`
  background-color: #f04b3c;
  color: white;
  border: 1px solid #f04b3c;
  border-radius: 50px;
  padding: .8rem 1.8rem;
  font-size: 2rem;
  margin: 2rem 1rem 1rem 0;
  text-decoration: none;
  box-shadow: 0 2px 10px -5px transparent;
  &:hover,
  &:visited {
    box-shadow: 0 2px 10px -5px #333;
  }
`

const Project = ({project}) => {

  return (
    <ProjectContainer>
      <picture>
        <source type="image/webp"
              srcSet={`/images/${project.img}.webp`}  
              />
        <source srcSet={`/images/${project.img}.png`}/>
        <img className="projectImage" src={`/images/${project.img}.png`} alt={project.alt}/>
      </picture>
      
      <ProjectDetail>
        <h3 className="title">{project.title}</h3>
        <p className="paragraph">{project.desc}</p>
        <p className="paragraph">Built with: {project.tech}</p>
        <div className="buttons">
          <Link href={project.prevLink} target="_blank" rel="noreferer noopener">Live</Link>
          <Link href={project.github} target="_blank" rel="noreferer noopener">Code</Link>
        </div>

      </ProjectDetail>
    </ProjectContainer>
  )
}

export default Project
