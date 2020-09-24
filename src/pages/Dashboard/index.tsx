import React from "react";

import { FiClock, FiPower } from "react-icons/fi";
import {
	Container,
	Header,
	HeaderContent,
	Profile,
	Content,
	Schedule,
	NextAppointment,
	Calendar,
} from "./styles";

import logoImg from "../../assets/logo.svg";
import { useAuth } from "../../hooks/auth";

const Dashboard: React.FC = () => {
	const { signOut, user } = useAuth();

	return (
		<Container>
			<Header>
				<HeaderContent>
					<img src={logoImg} alt="GoBarber" />

					<Profile>
						<img src={user.avatar_url} alt={user.name} />
						<div>
							<span>Bem-vindo,</span>
							<strong>{user.name}</strong>
						</div>
					</Profile>

					<button type="button" onClick={signOut}>
						<FiPower />
					</button>
				</HeaderContent>
			</Header>

			<Content>
				<Schedule>
					<h1>Horários agendados</h1>
					<p>
						<span>Hoje</span>
						<span>Dia 06</span>
						<span>Segunda-feira</span>
					</p>

					<NextAppointment>
						<strong>Atendimento a seguir</strong>
						<div>
							<img
								src="https://xesque.rocketseat.dev/users/avatar/profile-ae8dee25-12ab-4a55-b1b0-57e21e604ccd-1597033743541.jpg"
								alt="Tiago Soriano"
							/>

							<strong>Tiago Soriano</strong>
							<span>
								<FiClock />
								08:00
							</span>
						</div>
					</NextAppointment>
				</Schedule>
				<Calendar />
			</Content>
		</Container>
	);
};

export default Dashboard;
