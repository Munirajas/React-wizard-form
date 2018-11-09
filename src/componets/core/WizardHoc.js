import React from 'react';

export const WizardHOC = (WrappedComponent, props ) => {
	return ( 
		<WrappedComponent {...props} />
	);
};
