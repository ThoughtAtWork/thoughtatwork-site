import React from 'react'
import Link from 'gatsby-link'
import CardKeynoteSpeaker from '../components/CardKeynoteSpeaker'
import CardGridSpeaker from '../components/CardGridSpeaker'

const SpeakerPage = () => (
  <div className="container">
    <CardKeynoteSpeaker />
    <CardGridSpeaker />
  </div>
)

export default SpeakerPage
