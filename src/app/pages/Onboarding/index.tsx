import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Header, Welcome, Footer } from './../../shared/components';
import { Container } from './styles';
import { SIGN_IN, SIGN_UP, ONBOARDING } from './../../navigation/routes';

export const Onboarding = () => {
	const { push } = useHistory();

	return (
		<>
			<Header onLoginClick={() => push(SIGN_IN)} />
			<Container>
				<Switch>
					<Route exact path={ONBOARDING}>
						<Welcome />
					</Route>
				</Switch>
			</Container>
			<Footer />
		</>
	);
};
