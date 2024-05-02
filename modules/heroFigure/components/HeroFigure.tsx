import Container from '@/common/components/elements/Container'
import PageHeading from '@/common/components/elements/Heading'
import React from 'react'
import HeroFigureList from './HeroFigureList'

const HeroFigure = () => {
  return (
    <Container id="tokoh" data-aos="fade-up" className="mb-16">
      <PageHeading title="Tokoh Pahlawan" />
      <HeroFigureList />
    </Container>
  )
}

export default HeroFigure