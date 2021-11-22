import React from "react";
import { Box } from "@dhis2/ui";
import { SingleSelectOption } from '@dhis2/ui'
import { SingleSelectField } from '@dhis2/ui'
import { Card } from '@dhis2/ui'
import PropTypes from 'prop-types'

const DataModelSelect = () => {
    return ( 

<div className={DataModelSelect}>
<Box
height="337px"
width="269px"
border="2px solid #E8EDF1" 
background-colour="#FFFFFF"
paddingTop="200px" 
paddingLeft="20px"
paddingBottom="455px"
paddingY="20px"
marginLeft="30px"
marginRight="60px"
marginTop="50px"
>
<SingleSelectField label="Program" >
    <SingleSelectOption label="one" value="1" />
    <SingleSelectOption label="two" value="2" />
    <SingleSelectOption label="three" value="3" />
    <SingleSelectOption label="four" value="4" />
    <SingleSelectOption label="five" value="5" />
    <SingleSelectOption label="six" value="6" />
    <SingleSelectOption label="seven" value="7" />
    <SingleSelectOption label="eight" value="8" />
    <SingleSelectOption label="nine" value="9" />
    <SingleSelectOption label="ten" value="10" />
</SingleSelectField><br></br>
<SingleSelectField label="Period" >
    <SingleSelectOption label="one" value="1" />
    <SingleSelectOption label="two" value="2" />
    <SingleSelectOption label="three" value="3" />
    <SingleSelectOption label="four" value="4" />
</SingleSelectField><br></br>
<SingleSelectField label="" >
    <SingleSelectOption label="one" value="1" />
    <SingleSelectOption label="two" value="2" />
    <SingleSelectOption label="three" value="3" />
    <SingleSelectOption label="four" value="4" />
</SingleSelectField><br></br>
<SingleSelectField label="Country" >
    <SingleSelectOption label="one" value="1" />
    <SingleSelectOption label="two" value="2" />
    <SingleSelectOption label="three" value="3" />
    <SingleSelectOption label="four" value="4" />
</SingleSelectField><br></br>
</Box>
 
 </div>
    )
    }

export default DataModelSelect
DataModelSelect.propTypes = {
    width:PropTypes.oneOfType,
    className: PropTypes.string,
    height:PropTypes.oneOfType,
    DataModelSelect:PropTypes.string,
    }