import React from 'react'
import PropTypes from 'prop-types'
import { Box, Card } from '@dhis2/ui'
import './ContentCard.css'
import { SingleSelectFieldFF, SingleSelectOption, SingleSelectField, SingleSelect } from '@dhis2/ui'
import i18n from '@dhis2/d2-i18n'
import { InputLabel } from '@material-ui/core'

const ContentCard = ({ borderRadius, className, width, height, }) => {
  
  return (   
      <div className="contentCardInnerContainer">   
      <Box>
      <Card
      height=""
      >        
          <h2>Program</h2>
        <SingleSelect className="select" onChange={1} selected="">
          <SingleSelectOption label="option one" value="1" />
          <SingleSelectOption label="option two" value="2" />
          <SingleSelectOption label="option three" value="3" />
        </SingleSelect>
        
         <h2>Period</h2>
        <SingleSelect className="select" onChange={1} selected="">
          <SingleSelectOption label="option one" value="1" />
          <SingleSelectOption label="option two" value="2" />
          <SingleSelectOption label="option three" value="3" />
        </SingleSelect><div></div>
        <SingleSelect className="select" onChange={1} selected="">
        <SingleSelectOption label="option one" value="1" />
        <SingleSelectOption label="option two" value="2" />
        <SingleSelectOption label="option three" value="3" />
        </SingleSelect><br></br>
         <h2>Country</h2>
         <SingleSelect className="select" onChange={1} selected="">
        <SingleSelectOption label="option one" value="1" />
        <SingleSelectOption label="option two" value="2" />
        <SingleSelectOption label="option three" value="3" />
        </SingleSelect>   
        </Card>   
        </Box>
      </div>
    
    
  )
}

export default ContentCard

ContentCard.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}