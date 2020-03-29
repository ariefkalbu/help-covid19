import React from 'react';
import Card from '@bit/react-bootstrap.react-bootstrap.card';
import emotDie from '../../assets/die.png';
import emotPositif from '../../assets/positif.png';
import emotSembuh from '../../assets/sembuh.png';

const selectedIcon = (e) => {
	if(e.emoticonType === "1"){
		return emotPositif;
	}
	else if(e.emoticonType === "2"){
		return emotSembuh;
	}
	else if(e.emoticonType === "3"){
		return emotDie;
	}
}

const CardPrimary = (props) => {
	return (
		<>
<div >
				<Card className="Card shadow" bg={props.bg} text="white">
					<Card.Header>
						<div className="row cardHeader">
							<div>
								<b>{props.title}</b> 
							</div>
							<div className="pull-right">
							<img src={selectedIcon(props)} className="icon pull-right"></img> 
							</div>
						</div>
					</Card.Header>
					<Card.Body>
						<div>
							<h3 className="mb-0"> {props.value} </h3>
							<p  className=""> {props.subtitle} </p>
						</div>
					</Card.Body>
				</Card>
			</div>
		</>
	)
}

export default CardPrimary;