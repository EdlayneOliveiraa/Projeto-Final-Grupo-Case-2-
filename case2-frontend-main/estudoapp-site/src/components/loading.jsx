import React from 'react';
import ReactLoading from 'react-loading';

const Carregando = ({ type, color }) => (
	<ReactLoading type={type} color={color} height={15} width={15} />
);

export default Carregando;