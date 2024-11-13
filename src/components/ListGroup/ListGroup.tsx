import React from 'react';
import styles from  './ListGroup.module.css';
//npm i styled-components
import styled from 'styled-components';


interface ListItemsProps {
	color: string;
}

const Paragraph = styled.p<ListItemsProps>`
	color: ${props => props.color};
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`

const ListGroup = () => {
  return (
	<>
		<div className={[styles.container, styles.text].join(' ')}>This is a List Group container for CSS</div>

		<Paragraph color='pink'>This is a paragraph for CSS in JS</Paragraph>
	</>
  )
}

export default ListGroup
